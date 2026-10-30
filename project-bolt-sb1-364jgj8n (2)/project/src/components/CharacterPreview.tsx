import { useEffect, useRef } from 'react';
import { drawCharacter, type CharacterConfig } from '@/lib/character';

export function CharacterPreview({
  cfg,
  size = 120,
  animate = true,
}: {
  cfg: CharacterConfig;
  size?: number;
  animate?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const cfgRef = useRef(cfg);
  cfgRef.current = cfg;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    let raf = 0;
    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, size, size);
      drawCharacter(ctx, size * 0.2, size * 0.15, size * 0.6, size * 0.7, cfgRef.current, frame, false);
      raf = requestAnimationFrame(render);
    };
    if (animate) render();
    else {
      ctx.clearRect(0, 0, size, size);
      drawCharacter(ctx, size * 0.2, size * 0.15, size * 0.6, size * 0.7, cfgRef.current, 0, false);
    }
    return () => cancelAnimationFrame(raf);
  }, [size, animate]);

  return <canvas ref={ref} style={{ width: size, height: size }} className="block" />;
}
