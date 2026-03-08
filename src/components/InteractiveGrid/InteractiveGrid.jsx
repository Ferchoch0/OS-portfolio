import { useEffect, useRef, useCallback } from 'react';
import styles from './InteractiveGrid.module.css';

const GRID_SIZE = 40;       // px between grid lines
const GLOW_RADIUS = 180;    // px radius of mouse influence
const BASE_ALPHA = 0.04;    // grid opacity when idle
const PEAK_ALPHA = 0.25;    // grid opacity at mouse center
const LINE_WIDTH = 0.5;

export default function InteractiveGrid() {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const animId = useRef(null);

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const { width, height } = canvas;
        const mx = mouse.current.x;
        const my = mouse.current.y;

        ctx.clearRect(0, 0, width, height);

        // Draw vertical lines
        for (let x = 0; x <= width; x += GRID_SIZE) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);

            // Calculate brightness based on distance to mouse X
            const distX = Math.abs(x - mx);
            const influence = Math.max(0, 1 - distX / GLOW_RADIUS);
            // Also factor in Y proximity for a radial feel
            const alpha = BASE_ALPHA + (PEAK_ALPHA - BASE_ALPHA) * influence;

            ctx.strokeStyle = `rgba(126, 78, 248, ${alpha})`;
            ctx.lineWidth = LINE_WIDTH + influence * 0.5;
            ctx.stroke();
        }

        // Draw horizontal lines
        for (let y = 0; y <= height; y += GRID_SIZE) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);

            const distY = Math.abs(y - my);
            const influence = Math.max(0, 1 - distY / GLOW_RADIUS);
            const alpha = BASE_ALPHA + (PEAK_ALPHA - BASE_ALPHA) * influence;

            ctx.strokeStyle = `rgba(126, 78, 248, ${alpha})`;
            ctx.lineWidth = LINE_WIDTH + influence * 0.5;
            ctx.stroke();
        }

        // Draw bright dots at intersections near mouse
        for (let x = 0; x <= width; x += GRID_SIZE) {
            for (let y = 0; y <= height; y += GRID_SIZE) {
                const dist = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
                if (dist < GLOW_RADIUS) {
                    const influence = 1 - dist / GLOW_RADIUS;
                    const dotAlpha = influence * 0.6;
                    const dotSize = 1 + influence * 2;

                    ctx.beginPath();
                    ctx.arc(x, y, dotSize, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(126, 78, 248, ${dotAlpha})`;
                    ctx.fill();
                }
            }
        }

        animId.current = requestAnimationFrame(draw);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = parent.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);
        };

        const handleMouseMove = (e) => {
            const rect = parent.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.current.x = -9999;
            mouse.current.y = -9999;
        };

        resize();
        window.addEventListener('resize', resize);
        parent.addEventListener('mousemove', handleMouseMove);
        parent.addEventListener('mouseleave', handleMouseLeave);
        animId.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            parent.removeEventListener('mousemove', handleMouseMove);
            parent.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animId.current);
        };
    }, [draw]);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
