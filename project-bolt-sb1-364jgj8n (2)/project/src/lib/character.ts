// Draws a customizable runner character to any canvas context.

export type CharacterConfig = {
  character_type: string; // 'blob' | 'robot' | 'ninja'
  body_color: string;
  hat: string; // 'none' | 'cap' | 'crown' | 'space'
};

export function drawCharacter(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  cfg: CharacterConfig,
  frame: number,
  jumping: boolean
) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  const color = cfg.body_color;

  ctx.save();

  // shadow
  ctx.fillStyle = 'rgba(0,0,0,0.18)';
  ctx.beginPath();
  ctx.ellipse(cx, y + h + 2, w * 0.4, 4, 0, 0, Math.PI * 2);
  ctx.fill();

  if (cfg.character_type === 'robot') {
    // body
    ctx.fillStyle = color;
    roundRect(ctx, x + w * 0.15, y + h * 0.3, w * 0.7, h * 0.55, 6);
    ctx.fill();
    // head
    roundRect(ctx, x + w * 0.2, y, w * 0.6, h * 0.32, 6);
    ctx.fill();
    // eyes
    ctx.fillStyle = '#fff';
    ctx.fillRect(x + w * 0.28, y + h * 0.1, w * 0.14, h * 0.1);
    ctx.fillRect(x + w * 0.58, y + h * 0.1, w * 0.14, h * 0.1);
    ctx.fillStyle = '#111';
    ctx.fillRect(x + w * 0.32, y + h * 0.12, w * 0.06, h * 0.06);
    ctx.fillRect(x + w * 0.62, y + h * 0.12, w * 0.06, h * 0.06);
    // antenna
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, y);
    ctx.lineTo(cx, y - 6);
    ctx.stroke();
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(cx, y - 8, 3, 0, Math.PI * 2);
    ctx.fill();
  } else if (cfg.character_type === 'ninja') {
    ctx.fillStyle = color;
    // body (rounded)
    ctx.beginPath();
    ctx.ellipse(cx, cy + h * 0.1, w * 0.38, h * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    // head
    ctx.beginPath();
    ctx.arc(cx, y + h * 0.28, w * 0.32, 0, Math.PI * 2);
    ctx.fill();
    // headband
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x + w * 0.1, y + h * 0.22, w * 0.8, h * 0.1);
    // headband tails
    ctx.beginPath();
    ctx.moveTo(x + w * 0.12, y + h * 0.27);
    ctx.lineTo(x - 4, y + h * 0.2 + (frame % 2 === 0 ? 0 : 4));
    ctx.lineTo(x + w * 0.12, y + h * 0.34);
    ctx.fill();
    // eyes (white slit)
    ctx.fillStyle = '#fff';
    ctx.fillRect(x + w * 0.3, y + h * 0.26, w * 0.4, h * 0.04);
  } else {
    // blob
    ctx.fillStyle = color;
    ctx.beginPath();
    const squish = jumping ? 1.1 : 1 + Math.sin(frame * 0.3) * 0.04;
    ctx.ellipse(cx, cy, w * 0.4, h * 0.45 * squish, 0, 0, Math.PI * 2);
    ctx.fill();
    // eyes
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(cx - w * 0.12, cy - h * 0.08, w * 0.1, 0, Math.PI * 2);
    ctx.arc(cx + w * 0.12, cy - h * 0.08, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.arc(cx - w * 0.1, cy - h * 0.08, w * 0.05, 0, Math.PI * 2);
    ctx.arc(cx + w * 0.14, cy - h * 0.08, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    // smile
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.05, w * 0.1, 0.1, Math.PI - 0.1);
    ctx.stroke();
  }

  // legs animation when running
  if (!jumping) {
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(3, w * 0.1);
    ctx.lineCap = 'round';
    const legSwing = Math.sin(frame * 0.4) * w * 0.15;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.12, y + h * 0.82);
    ctx.lineTo(cx - w * 0.12 + legSwing, y + h);
    ctx.moveTo(cx + w * 0.12, y + h * 0.82);
    ctx.lineTo(cx + w * 0.12 - legSwing, y + h);
    ctx.stroke();
  }

  // hats
  if (cfg.hat === 'cap') {
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(x + w * 0.1, y + h * 0.08);
    ctx.lineTo(x + w * 0.9, y + h * 0.08);
    ctx.lineTo(x + w * 0.9, y + h * 0.02);
    ctx.lineTo(x + w * 0.1, y + h * 0.02);
    ctx.fill();
    ctx.fillRect(x + w * 0.9, y + h * 0.05, w * 0.3, h * 0.05);
  } else if (cfg.hat === 'crown') {
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.moveTo(x + w * 0.15, y + h * 0.1);
    ctx.lineTo(x + w * 0.3, y - h * 0.12);
    ctx.lineTo(x + w * 0.45, y + h * 0.04);
    ctx.lineTo(x + w * 0.55, y - h * 0.15);
    ctx.lineTo(x + w * 0.7, y + h * 0.04);
    ctx.lineTo(x + w * 0.85, y - h * 0.12);
    ctx.lineTo(x + w * 0.85, y + h * 0.1);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(x + w * 0.55, y - h * 0.1, 2.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (cfg.hat === 'space') {
    ctx.fillStyle = '#e5e7eb';
    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, y + h * 0.05, w * 0.42, Math.PI, 0);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(cx, y + h * 0.05, w * 0.3, Math.PI, 0);
    ctx.fill();
  }

  ctx.restore();
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
