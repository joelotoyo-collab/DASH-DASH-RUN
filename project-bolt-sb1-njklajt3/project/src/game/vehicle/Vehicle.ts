import * as THREE from "three";
import type { BuildingBox } from "../world/City";

export class Vehicle {
  group: THREE.Group;
  pos = new THREE.Vector3();
  rot = 0; // yaw around Y
  speed = 0;
  steer = 0;

  // tuning
  maxSpeed = 42; // units/sec forward
  maxReverse = 16;
  accel = 22;
  brake = 30;
  engineDrag = 4; // coast decel
  handbrakeDrag = 26;
  grip = 0.9;
  turnSpeed = 1.6; // rad baseline at low speed

  wheels: THREE.Mesh[] = [];
  wheelRot = 0;
  headlights: THREE.SpotLight[];
  taillights: THREE.Mesh[];
  private brakeOn = false;
  private revOn = false;
  private occupied = false;

  w = 2.0;
  l = 4.2;
  h = 1.2;

  constructor() {
    this.group = new THREE.Group();
    this.group.add(this.buildBody());
    this.wheels = this.buildWheels();
    this.wheels.forEach((w) => this.group.add(w));
    const { headlights, taillights } = this.buildLights();
    this.headlights = headlights;
    this.taillights = taillights;
    headlights.forEach((l) => this.group.add(l));
    taillights.forEach((l) => this.group.add(l));
  }

  private buildBody(): THREE.Group {
    const body = new THREE.Group();
    const paint = new THREE.MeshStandardMaterial({
      color: 0xd23030,
      metalness: 0.6,
      roughness: 0.3,
    });
    const dark = new THREE.MeshStandardMaterial({
      color: 0x1a1a1f,
      metalness: 0.4,
      roughness: 0.5,
    });
    const glass = new THREE.MeshStandardMaterial({
      color: 0x0a1420,
      metalness: 0.8,
      roughness: 0.15,
      transparent: true,
      opacity: 0.7,
    });

    // lower chassis
    const ch = new THREE.Mesh(new THREE.BoxGeometry(this.w, 0.5, this.l), dark);
    ch.position.y = 0.45;
    ch.castShadow = true;
    body.add(ch);

    // hood + trunk slope using a tapered box (use a second box)
    const upper = new THREE.Mesh(
      new THREE.BoxGeometry(this.w * 0.92, 0.5, this.l * 0.55),
      paint
    );
    upper.position.set(0, 0.95, -this.l * 0.05);
    upper.castShadow = true;
    body.add(upper);

    // cabin glass
    const cabin = new THREE.Mesh(
      new THREE.BoxGeometry(this.w * 0.82, 0.5, this.l * 0.42),
      glass
    );
    cabin.position.set(0, 1.0, this.l * 0.05);
    body.add(cabin);

    // roof
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(this.w * 0.78, 0.18, this.l * 0.4),
      paint
    );
    roof.position.set(0, 1.28, this.l * 0.05);
    roof.castShadow = true;
    body.add(roof);

    // front bumper splitter
    const bumper = new THREE.Mesh(
      new THREE.BoxGeometry(this.w * 0.95, 0.25, 0.4),
      dark
    );
    bumper.position.set(0, 0.35, -this.l / 2);
    body.add(bumper);

    // tail
    const tail = new THREE.Mesh(
      new THREE.BoxGeometry(this.w * 0.9, 0.3, 0.3),
      dark
    );
    tail.position.set(0, 0.5, this.l / 2);
    body.add(tail);

    return body;
  }

  private buildWheels(): THREE.Mesh[] {
    const mat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.7,
    });
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.8,
      roughness: 0.2,
    });
    const wheels: THREE.Mesh[] = [];
    const wheelGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.3, 14);
    const rimGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.32, 8);
    const positions: [number, number, number][] = [
      [this.w / 2 - 0.1, 0.45, -this.l / 2 + 0.6],
      [-(this.w / 2 - 0.1), 0.45, -this.l / 2 + 0.6],
      [this.w / 2 - 0.1, 0.45, this.l / 2 - 0.7],
      [-(this.w / 2 - 0.1), 0.45, this.l / 2 - 0.7],
    ];
    for (const [x, y, z] of positions) {
      const w = new THREE.Mesh(wheelGeo, mat);
      w.position.set(x, y, z);
      w.rotation.z = Math.PI / 2;
      w.castShadow = true;
      const rim = new THREE.Mesh(rimGeo, rimMat);
      rim.rotation.z = Math.PI / 2;
      w.add(rim);
      wheels.push(w);
    }
    return wheels;
  }

  private buildLights(): { headlights: THREE.SpotLight[]; taillights: THREE.Mesh[] } {
    const headlights: THREE.SpotLight[] = [];
    const taillights: THREE.Mesh[] = [];
    const tailMat = new THREE.MeshStandardMaterial({
      color: 0x300000,
      emissive: 0xff2222,
      emissiveIntensity: 0.5,
    });
    for (const side of [-1, 1]) {
      const sl = new THREE.SpotLight(0xfff0d0, 0, 40, Math.PI / 6, 0.4, 1.5);
      sl.position.set(side * 0.6, 0.8, -this.l / 2);
      sl.target.position.set(side * 0.6, 0.2, -this.l / 2 - 10);
      this.group.add(sl.target);
      headlights.push(sl);
      const tl = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.15, 0.08),
        tailMat.clone() as THREE.MeshStandardMaterial
      );
      tl.position.set(side * 0.55, 0.5, this.l / 2 - 0.02);
      taillights.push(tl);
    }
    return { headlights, taillights };
  }

  setOccupied(on: boolean) {
    this.occupied = on;
    if (on) {
      this.headlights.forEach((l) => (l.intensity = 2.2));
      this.taillights.forEach((l) => {
        (l.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.4;
      });
    } else {
      this.headlights.forEach((l) => (l.intensity = 0));
      this.taillights.forEach((l) => {
        (l.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.15;
      });
    }
  }

  // Returns speed in km/h-ish for HUD (scaled).
  getSpeedKmh(): number {
    return Math.abs(this.speed) * 3.6 * 1.0;
  }

  private setBrakeLights(on: boolean) {
    this.taillights.forEach((l) => {
      const m = l.material as THREE.MeshStandardMaterial;
      m.emissiveIntensity = on ? 1.6 : this.occupied ? 0.4 : 0.15;
    });
  }

  update(
    dt: number,
    input: {
      forward: boolean;
      backward: boolean;
      left: boolean;
      right: boolean;
      handbrake: boolean;
    },
    colliders: BuildingBox[]
  ) {
    if (!this.occupied) {
      // Idle deceleration when parked
      this.speed = THREE.MathUtils.lerp(this.speed, 0, Math.min(1, dt * 2));
      this.setBrakeLights(false);
      this.applyWheelVisual(dt);
      return;
    }

    const throttle = input.forward ? 1 : input.backward ? -1 : 0;
    const braking = input.backward && this.speed > 0.5;

    if (throttle > 0) {
      this.speed += this.accel * dt;
      this.revOn = false;
    } else if (throttle < 0) {
      if (this.speed > 0.5) {
        this.speed -= this.brake * dt;
      } else {
        this.speed -= this.accel * 0.7 * dt; // reverse
      }
      this.revOn = true;
    } else {
      // coast / engine drag
      if (this.speed > 0) this.speed = Math.max(0, this.speed - this.engineDrag * dt);
      else if (this.speed < 0) this.speed = Math.min(0, this.speed + this.engineDrag * dt);
    }

    // Handbrake
    if (input.handbrake) {
      const decel = this.handbrakeDrag * dt;
      if (this.speed > 0) this.speed = Math.max(0, this.speed - decel);
      else if (this.speed < 0) this.speed = Math.min(0, this.speed + decel);
      this.setBrakeLights(true);
    } else if (braking) {
      this.setBrakeLights(true);
    } else {
      this.setBrakeLights(false);
    }

    // Clamp
    this.speed = Math.max(-this.maxReverse, Math.min(this.maxSpeed, this.speed));

    // Steering — speed-dependent; reduced when nearly stopped.
    const speedFactor = Math.min(1, Math.abs(this.speed) / 8);
    const dir = Math.sign(this.speed);
    let targetSteer = 0;
    if (input.left) targetSteer = 1;
    if (input.right) targetSteer = -1;
    // smooth steer input
    this.steer = THREE.MathUtils.lerp(this.steer, targetSteer, Math.min(1, dt * 6));

    const turn = this.steer * this.turnSpeed * speedFactor * dir;
    this.rot += turn * dt;

    // Move
    const cos = Math.cos(this.rot);
    const sin = Math.sin(this.rot);
    const nextX = this.pos.x + (-sin) * this.speed * dt;
    const nextZ = this.pos.z + (-cos) * this.speed * dt;

    // Collision: AABB vs building boxes (simple slide)
    const { x: cx, z: cz } = this.resolveCollision(nextX, nextZ, colliders);
    this.pos.x = cx;
    this.pos.z = cz;
    this.pos.y = 0.0;

    this.group.position.copy(this.pos);
    this.group.rotation.y = this.rot;

    this.applyWheelVisual(dt, Math.abs(this.speed));
  }

  private applyWheelVisual(dt: number, speedAbs = 0) {
    this.wheelRot += (speedAbs * dt) / 0.45;
    const steerAngle = this.steer * 0.5;
    for (let i = 0; i < this.wheels.length; i++) {
      const w = this.wheels[i];
      // front wheels (0,1) steer
      if (i < 2) w.rotation.y = steerAngle;
      else w.rotation.y = 0;
      w.children[0].rotation.x = this.wheelRot;
    }
  }

  // Simple circle-vs-AABB collision with sliding response.
  private resolveCollision(
    nx: number,
    nz: number,
    colliders: BuildingBox[]
  ): { x: number; z: number } {
    const radius = Math.max(this.w, this.l) / 2 * 0.8;
    let x = nx;
    let z = nz;
    let collided = false;
    for (const b of colliders) {
      const minX = b.x - b.w / 2 - radius;
      const maxX = b.x + b.w / 2 + radius;
      const minZ = b.z - b.d / 2 - radius;
      const maxZ = b.z + b.d / 2 + radius;
      if (x > minX && x < maxX && z > minZ && z < maxZ) {
        // Push out along axis of least penetration
        const dl = Math.abs(x - minX);
        const dr = Math.abs(x - maxX);
        const dt2 = Math.abs(z - minZ);
        const db = Math.abs(z - maxZ);
        const m = Math.min(dl, dr, dt2, db);
        if (m === dl) x = minX;
        else if (m === dr) x = maxX;
        else if (m === dt2) z = minZ;
        else z = maxZ;
        collided = true;
        // kill speed
        this.speed *= 0.35;
      }
    }
    if (collided) (this as unknown as { _hit?: boolean })._hit = true;
    return { x, z };
  }

  hitThisFrame(): boolean {
    const hit = (this as unknown as { _hit?: boolean })._hit;
    (this as unknown as { _hit?: boolean })._hit = false;
    return !!hit;
  }
}
