import * as THREE from "three";
import type { BuildingBox } from "../world/City";

// Lightweight 2D minimap drawn to a canvas, updated each frame.
export class Minimap {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  size = 160;
  private span: number;
  private colliders: BuildingBox[];
  private garage: THREE.Vector3;

  constructor(colliders: BuildingBox[], span: number, garage: THREE.Vector3) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.style.display = "block";
    this.ctx = this.canvas.getContext("2d")!;
    this.colliders = colliders;
    this.span = span;
    this.garage = garage;
  }

  private worldToMap(x: number, z: number): [number, number] {
    const s = this.size / this.span;
    return [
      this.size / 2 + x * s,
      this.size / 2 + z * s,
    ];
  }

  draw(
    playerPos: THREE.Vector3,
    playerRot: number,
    markerPos: THREE.Vector3 | null,
    checkpoints: THREE.Vector3[] | null,
    currentCp: number
  ) {
    const ctx = this.ctx;
    const { size } = this;
    ctx.clearRect(0, 0, size, size);
    // Background
    ctx.fillStyle = "rgba(10,12,20,0.85)";
    ctx.fillRect(0, 0, size, size);
    // Roads grid
    ctx.strokeStyle = "rgba(80,90,120,0.5)";
    ctx.lineWidth = 2;
    const BLOCK = 48;
    const offset = ((5 - 1) / 2) * BLOCK;
    for (let i = 0; i <= 5; i++) {
      const [x1, z1] = this.worldToMap(i * BLOCK - offset - BLOCK / 2, -this.span / 2);
      const [x2, z2] = this.worldToMap(i * BLOCK - offset - BLOCK / 2, this.span / 2);
      ctx.beginPath();
      ctx.moveTo(x1, z1);
      ctx.lineTo(x2, z2);
      ctx.stroke();
      const [x3, z3] = this.worldToMap(-this.span / 2, i * BLOCK - offset - BLOCK / 2);
      const [x4, z4] = this.worldToMap(this.span / 2, i * BLOCK - offset - BLOCK / 2);
      ctx.beginPath();
      ctx.moveTo(x3, z3);
      ctx.lineTo(x4, z4);
      ctx.stroke();
    }
    // Buildings
    ctx.fillStyle = "rgba(60,70,100,0.7)";
    for (const b of this.colliders) {
      const [bx, bz] = this.worldToMap(b.x, b.z);
      const s = this.size / this.span;
      ctx.fillRect(bx - (b.w * s) / 2, bz - (b.d * s) / 2, b.w * s, b.d * s);
    }
    // Garage
    const [gx, gz] = this.worldToMap(this.garage.x, this.garage.z);
    ctx.fillStyle = "#ffaa44";
    ctx.fillRect(gx - 3, gz - 3, 6, 6);
    // Checkpoints
    if (checkpoints && checkpoints.length > 0) {
      for (let i = 0; i < checkpoints.length; i++) {
        const [cx, cz] = this.worldToMap(checkpoints[i].x, checkpoints[i].z);
        ctx.beginPath();
        ctx.arc(cx, cz, i === currentCp ? 5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = i < currentCp ? "rgba(120,140,160,0.6)" : "#33ddff";
        ctx.fill();
      }
    }
    if (markerPos) {
      const [mx, mz] = this.worldToMap(markerPos.x, markerPos.z);
      ctx.fillStyle = "#33ddff";
      ctx.beginPath();
      ctx.arc(mx, mz, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    // Player arrow
    const [px, pz] = this.worldToMap(playerPos.x, playerPos.z);
    ctx.save();
    ctx.translate(px, pz);
    ctx.rotate(-playerRot);
    ctx.fillStyle = "#ff4466";
    ctx.beginPath();
    ctx.moveTo(0, -6);
    ctx.lineTo(4, 5);
    ctx.lineTo(-4, 5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    // Border
    ctx.strokeStyle = "rgba(120,140,180,0.5)";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, size - 2, size - 2);
  }
}
