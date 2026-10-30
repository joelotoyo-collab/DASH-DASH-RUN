import { drawCharacter, type CharacterConfig } from './character';
import { audio } from './audio';

export type GameResult = {
  score: number;
  distance: number;
};

type Obstacle = {
  x: number;
  y: number;
  w: number;
  h: number;
  kind: 'spike' | 'block' | 'flying';
  passed: boolean;
};

type Coin = { x: number; y: number; r: number; taken: boolean };

const GROUND_H = 60;

export class RunnerGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: CharacterConfig;
  private onGameOver: (r: GameResult) => void;
  private onScore: (s: number) => void;

  private W = 0;
  private H = 0;
  private raf = 0;
  private running = false;
  private last = 0;

  private playerY = 0;
  private vy = 0;
  private jumps = 0;
  private onGround = true;
  private frame = 0;

  private obstacles: Obstacle[] = [];
  private coins: Coin[] = [];
  private spawnTimer = 0;
  private coinTimer = 0;
  private scrollX = 0;
  private speed = 6;
  private baseSpeed = 6;
  private score = 0;
  private distance = 0;
  private level = 1;
  private particles: { x: number; y: number; vx: number; vy: number; life: number; color: string }[] = [];
  private clouds: { x: number; y: number; s: number }[] = [];
  private hills: { x: number; h: number }[] = [];

  constructor(
    canvas: HTMLCanvasElement,
    cfg: CharacterConfig,
    onGameOver: (r: GameResult) => void,
    onScore: (s: number) => void
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.cfg = cfg;
    this.onGameOver = onGameOver;
    this.onScore = onScore;
    this.resize();
    for (let i = 0; i < 5; i++) {
      this.clouds.push({ x: Math.random() * 1200, y: 40 + Math.random() * 80, s: 0.5 + Math.random() });
      this.hills.push({ x: i * 300, h: 40 + Math.random() * 60 });
    }
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.W = rect.width;
    this.H = rect.height;
    if (this.onGround) this.playerY = this.groundY();
  }

  private groundY() {
    return this.H - GROUND_H;
  }

  private playerH() {
    return Math.min(56, this.H * 0.12);
  }

  start() {
    this.running = true;
    this.playerY = this.groundY() - this.playerH();
    this.vy = 0;
    this.jumps = 0;
    this.onGround = true;
    this.obstacles = [];
    this.coins = [];
    this.spawnTimer = 0;
    this.coinTimer = 0;
    this.speed = this.baseSpeed;
    this.score = 0;
    this.distance = 0;
    this.level = 1;
    this.particles = [];
    this.last = performance.now();
    audio.setTempo(130);
    audio.startMusic();
    this.loop(this.last);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    audio.stopMusic();
  }

  jump() {
    if (!this.running) return;
    if (this.jumps < 2) {
      this.vy = this.jumps === 0 ? -14 : -11;
      this.jumps++;
      this.onGround = false;
      if (this.jumps === 1) audio.jump();
      else audio.doubleJump();
    }
  }

  private spawnObstacle() {
    const gy = this.groundY();
    const kinds: Obstacle['kind'][] = this.level >= 3 ? ['spike', 'block', 'flying'] : ['spike', 'block'];
    const kind = kinds[Math.floor(Math.random() * kinds.length)];
    if (kind === 'spike') {
      const w = 20 + Math.random() * 24;
      this.obstacles.push({ x: this.W + 20, y: gy - 26, w, h: 26, kind, passed: false });
    } else if (kind === 'block') {
      const h = 28 + Math.random() * 30;
      this.obstacles.push({ x: this.W + 20, y: gy - h, w: 30, h, kind, passed: false });
    } else {
      // flying at head height — must duck under by NOT jumping, or jump over
      this.obstacles.push({ x: this.W + 20, y: gy - this.playerH() - 20, w: 40, h: 22, kind, passed: false });
    }
  }

  private spawnCoin() {
    const gy = this.groundY();
    const y = gy - 50 - Math.random() * 80;
    this.coins.push({ x: this.W + 20, y, r: 9, taken: false });
  }

  private burst(x: number, y: number, color: string, n = 14) {
    for (let i = 0; i < n; i++) {
      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6 - 2,
        life: 1,
        color,
      });
    }
  }

  private levelForDistance() {
    // medium start, ramps up
    return Math.min(8, 1 + Math.floor(this.distance / 700));
  }

  private loop = (now: number) => {
    if (!this.running) return;
    const dt = Math.min(32, now - this.last) / 16.6667;
    this.last = now;
    this.frame++;

    // difficulty curve
    const newLevel = this.levelForDistance();
    if (newLevel !== this.level) {
      this.level = newLevel;
      audio.setTempo(130 + this.level * 8);
      audio.levelUp();
    }
    this.speed = this.baseSpeed + (this.level - 1) * 0.9 + this.distance * 0.0008;

    // physics
    this.vy += 0.8 * dt;
    this.playerY += this.vy * dt;
    const ground = this.groundY() - this.playerH();
    if (this.playerY >= ground) {
      this.playerY = ground;
      this.vy = 0;
      this.jumps = 0;
      this.onGround = true;
    } else {
      this.onGround = false;
    }

    this.scrollX += this.speed * dt;
    this.distance += this.speed * dt * 0.1;
    this.score += Math.floor(this.speed * dt * 0.2);

    // spawn
    this.spawnTimer -= dt;
    const spawnGap = Math.max(38, 95 - this.level * 7);
    if (this.spawnTimer <= 0) {
      this.spawnObstacle();
      this.spawnTimer = spawnGap + Math.random() * 40;
    }
    this.coinTimer -= dt;
    if (this.coinTimer <= 0) {
      this.spawnCoin();
      this.coinTimer = 60 + Math.random() * 80;
    }

    // move obstacles
    const ph = this.playerH();
    const pw = ph * 0.8;
    const px = 80;
    const py = this.playerY;
    for (const o of this.obstacles) {
      o.x -= this.speed * dt;
      // collision (AABB with slight tolerance)
      if (
        px < o.x + o.w - 4 &&
        px + pw > o.x + 4 &&
        py < o.y + o.h - 4 &&
        py + ph > o.y + 4
      ) {
        this.die();
        return;
      }
      if (!o.passed && o.x + o.w < px) {
        o.passed = true;
        this.score += 10;
      }
    }
    this.obstacles = this.obstacles.filter((o) => o.x + o.w > -20);

    // coins
    for (const c of this.coins) {
      c.x -= this.speed * dt;
      if (!c.taken) {
        const dx = c.x - (px + pw / 2);
        const dy = c.y - (py + ph / 2);
        if (dx * dx + dy * dy < (c.r + pw / 2) * (c.r + pw / 2)) {
          c.taken = true;
          this.score += 25;
          audio.coin();
          this.burst(c.x, c.y, '#fbbf24', 8);
        }
      }
    }
    this.coins = this.coins.filter((c) => c.x > -20 && !c.taken);

    // particles
    for (const p of this.particles) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 0.3 * dt;
      p.life -= 0.03 * dt;
    }
    this.particles = this.particles.filter((p) => p.life > 0);

    // clouds & hills
    for (const c of this.clouds) c.x -= this.speed * 0.15 * dt * c.s;
    for (const c of this.clouds) if (c.x < -80) c.x = this.W + 40;
    for (const h of this.hills) h.x -= this.speed * 0.4 * dt;
    for (const h of this.hills) if (h.x < -200) h.x = this.W + 100 + Math.random() * 200;

    this.draw();
    this.onScore(this.score);
    this.raf = requestAnimationFrame(this.loop);
  };

  private die() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    audio.hit();
    audio.gameOver();
    audio.stopMusic();
    this.burst(80 + this.playerH() * 0.4, this.playerY + this.playerH() / 2, this.cfg.body_color, 24);
    // draw a final death frame with particles
    this.draw();
    this.onGameOver({ score: this.score, distance: Math.floor(this.distance) });
  }

  private draw() {
    const ctx = this.ctx;
    const { W, H } = this;

    // sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#60a5fa');
    sky.addColorStop(0.6, '#93c5fd');
    sky.addColorStop(1, '#dbeafe');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // sun
    ctx.fillStyle = '#fef9c3';
    ctx.beginPath();
    ctx.arc(W - 70, 70, 30, 0, Math.PI * 2);
    ctx.fill();

    // clouds
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    for (const c of this.clouds) {
      ctx.beginPath();
      ctx.arc(c.x, c.y, 14 * c.s, 0, Math.PI * 2);
      ctx.arc(c.x + 16 * c.s, c.y + 2, 18 * c.s, 0, Math.PI * 2);
      ctx.arc(c.x + 34 * c.s, c.y, 12 * c.s, 0, Math.PI * 2);
      ctx.fill();
    }

    // hills (parallax)
    ctx.fillStyle = '#86efac';
    for (const h of this.hills) {
      ctx.beginPath();
      ctx.moveTo(h.x, this.groundY());
      ctx.quadraticCurveTo(h.x + 100, this.groundY() - h.h, h.x + 200, this.groundY());
      ctx.fill();
    }

    // ground
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(0, this.groundY(), W, GROUND_H);
    ctx.fillStyle = '#16a34a';
    ctx.fillRect(0, this.groundY(), W, 6);
    // ground stripes for motion
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    const stripeW = 40;
    const offset = -(this.scrollX % stripeW);
    for (let i = 0; i < W / stripeW + 2; i++) {
      ctx.fillRect(offset + i * stripeW, this.groundY() + 20, 20, 4);
    }

    // coins
    for (const c of this.coins) {
      if (c.taken) continue;
      ctx.fillStyle = '#fbbf24';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#fde68a';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('$', c.x, c.y);
    }

    // obstacles
    for (const o of this.obstacles) {
      if (o.kind === 'spike') {
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.moveTo(o.x, o.y + o.h);
        ctx.lineTo(o.x + o.w / 2, o.y);
        ctx.lineTo(o.x + o.w, o.y + o.h);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#7f1d1d';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (o.kind === 'block') {
        ctx.fillStyle = '#7c3aed';
        ctx.fillRect(o.x, o.y, o.w, o.h);
        ctx.strokeStyle = '#4c1d95';
        ctx.lineWidth = 2;
        ctx.strokeRect(o.x, o.y, o.w, o.h);
        // face
        ctx.fillStyle = '#fff';
        ctx.fillRect(o.x + 6, o.y + 8, 6, 6);
        ctx.fillRect(o.x + o.w - 12, o.y + 8, 6, 6);
      } else {
        // flying drone
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.ellipse(o.x + o.w / 2, o.y + o.h / 2, o.w / 2, o.h / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(o.x + o.w / 2, o.y + o.h / 2, 4, 0, Math.PI * 2);
        ctx.fill();
        // little rotor
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(o.x, o.y + o.h / 2);
        ctx.lineTo(o.x - 6, o.y + o.h / 2 - (this.frame % 2 === 0 ? 3 : -3));
        ctx.stroke();
      }
    }

    // player
    drawCharacter(ctx, 80, this.playerY, this.playerH() * 0.8, this.playerH(), this.cfg, this.frame, !this.onGround);

    // particles
    for (const p of this.particles) {
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 4, 4);
    }
    ctx.globalAlpha = 1;

    // HUD level
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`LV ${this.level}`, 12, 22);
  }
}
