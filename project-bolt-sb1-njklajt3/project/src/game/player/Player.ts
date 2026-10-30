import * as THREE from "three";

export class Player {
  group: THREE.Group;
  pos = new THREE.Vector3();
  rot = 0;
  speed = 0;
  walkCycle = 0;

  private body: THREE.Mesh;
  private head: THREE.Mesh;
  private legs: THREE.Group;
  private legL: THREE.Mesh;
  private legR: THREE.Mesh;
  private armL: THREE.Mesh;
  private armR: THREE.Mesh;
  private maxSpeed = 7;
  private sprintMul = 1.7;

  constructor() {
    this.group = new THREE.Group();
    const skin = new THREE.MeshStandardMaterial({ color: 0xc98e6a, roughness: 0.7 });
    const cloth = new THREE.MeshStandardMaterial({ color: 0x202430, roughness: 0.8 });
    const pants = new THREE.MeshStandardMaterial({ color: 0x2a2f3a, roughness: 0.8 });

    // Torso
    this.body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.9, 0.4), cloth);
    this.body.position.y = 1.15;
    this.body.castShadow = true;
    this.group.add(this.body);

    // Head
    this.head = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), skin);
    this.head.position.y = 1.85;
    this.head.castShadow = true;
    this.group.add(this.head);

    // Arms
    this.armL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), cloth);
    this.armL.position.set(0.45, 1.15, 0);
    this.armL.castShadow = true;
    this.group.add(this.armL);
    this.armR = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), cloth);
    this.armR.position.set(-0.45, 1.15, 0);
    this.armR.castShadow = true;
    this.group.add(this.armR);

    // Legs group (for animation pivot)
    this.legs = new THREE.Group();
    this.legL = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.8, 0.25), pants);
    this.legL.position.set(0.18, -0.4, 0);
    this.legL.castShadow = true;
    this.legR = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.8, 0.25), pants);
    this.legR.position.set(-0.18, -0.4, 0);
    this.legR.castShadow = true;
    this.legs.position.y = 0.8;
    this.legs.add(this.legL);
    this.legs.add(this.legR);
    this.group.add(this.legs);
  }

  setPosition(p: THREE.Vector3) {
    this.pos.copy(p);
    this.group.position.copy(this.pos);
  }

  update(
    dt: number,
    input: {
      forward: boolean;
      backward: boolean;
      left: boolean;
      right: boolean;
      sprint: boolean;
    },
    camYaw: number
  ) {
    // Movement is camera-relative.
    const moveX = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    const moveZ = (input.backward ? 1 : 0) - (input.forward ? 1 : 0);
    const moving = moveX !== 0 || moveZ !== 0;
    const speed = this.maxSpeed * (input.sprint ? this.sprintMul : 1);

    if (moving) {
      // Direction relative to camera yaw
      const ang = camYaw + Math.atan2(moveX, moveZ);
      this.pos.x += -Math.sin(ang) * speed * dt;
      this.pos.z += -Math.cos(ang) * speed * dt;
      // Rotate to face movement
      const targetRot = ang + Math.PI;
      let diff = targetRot - this.rot;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.rot += diff * Math.min(1, dt * 10);
      this.walkCycle += dt * (input.sprint ? 14 : 9);
    } else {
      this.walkCycle *= Math.max(0, 1 - dt * 8);
    }

    this.group.position.copy(this.pos);
    this.group.rotation.y = this.rot;

    // Animate legs/arms swing
    const swing = Math.sin(this.walkCycle) * (moving ? 0.6 : 0);
    this.legL.rotation.x = swing;
    this.legR.rotation.x = -swing;
    this.armL.rotation.x = -swing;
    this.armR.rotation.x = swing;
  }
}
