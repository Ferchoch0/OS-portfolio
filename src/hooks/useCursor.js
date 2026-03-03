import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom cursor hook — tracks mouse position for dot (instant) and ring (eased).
 * Adds 'hovered' class to <body> when hovering interactive elements.
 * @returns {{ dotRef: React.RefObject, ringRef: React.RefObject }}
 */
export function useCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });
    const raf = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;
            }
        };

        const loop = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
            ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
            if (ringRef.current) {
                ringRef.current.style.left = `${ring.current.x}px`;
                ringRef.current.style.top = `${ring.current.y}px`;
            }
            raf.current = requestAnimationFrame(loop);
        };

        const handleEnter = () => document.body.classList.add('hovered');
        const handleLeave = () => document.body.classList.remove('hovered');

        document.addEventListener('mousemove', handleMouseMove);
        raf.current = requestAnimationFrame(loop);

        // Delegate hover detection for interactive elements
        const interactiveSelector = 'a, button, [role="button"], input, select, textarea';

        const handleMouseOver = (e) => {
            if (e.target.closest(interactiveSelector)) handleEnter();
        };
        const handleMouseOut = (e) => {
            if (e.target.closest(interactiveSelector)) handleLeave();
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);

    return { dotRef, ringRef };
}
