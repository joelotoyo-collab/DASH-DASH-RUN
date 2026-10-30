import * as THREE from "three";

// Smooth third-person follow camera. Mode switches between
// "drive" (behind car, farther) and "foot" (closer, mouse-look optional).
export class FollowCamera {
  cam: THREE.PerspectiveCamera;
  target = new THREE.Vector3();
  pos = new THREE.Vector3();
  yaw = 0;
  mode: "drive" | "foot" = "drive";

  private tmp = new THREE.Vector3();
  private ideal = new THREE.Vector3();

  constructor(aspect: number) {
    this.cam = new THREE.PerspectiveCamera(62, aspect, 0.1, 600);
  }

  setAspect(a: number) {
    this.cam.aspect = a;
    this.cam.updateProjectionMatrix();
  }

  follow(targetPos: THREE.Vector3, targetRot: number, dt: number) {
    const dist = this.mode === "drive" ? 10 : 6;
    const height = this.mode === "drive" ? 5 : 3.2;

    // desired yaw follows target rot for drive mode; for foot, we keep last yaw
    if (this.mode === "drive") {
      this.yaw = THREE.MathUtils.lerp(this.yaw, targetRot, Math.min(1, dt * 4));
    }

    const cos = Math.cos(this.yaw);
    const sin = Math.sin(this.yaw);
    // camera sits behind target: behind = +forward of yaw? We'll position behind along yaw.
    this.ideal.set(
      targetPos.x + sin * dist,
      targetPos.y + height,
      targetPos.z + cos * dist
    );

    // Smoothly move
    this.pos.lerp(this.ideal, Math.min(1, dt * 5));
    this.cam.position.copy(this.pos);

    // look slightly ahead of target
    this.tmp.copy(targetPos).add(new THREE.Vector3(-sin * 4, 1.2, -cos * 4));
    this.cam.lookAt(this.tmp);
  }
}
