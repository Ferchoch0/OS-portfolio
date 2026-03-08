import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Scroll-pin reveal hook.
 * Reveals items one-by-one based on scroll progress (bidirectional).
 * Scrolling down reveals, scrolling up hides.
 *
 * @param {number} itemCount - Number of items to reveal sequentially
 * @returns {{ wrapperRef: React.RefObject, visibleCount: number, progress: number }}
 */
export function useScrollPinReveal(itemCount) {
    const wrapperRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(0);
    const [progress, setProgress] = useState(0);
    const ticking = useRef(false);

    const handleScroll = useCallback(() => {
        if (ticking.current) return;
        ticking.current = true;

        requestAnimationFrame(() => {
            const wrapper = wrapperRef.current;
            if (!wrapper) {
                ticking.current = false;
                return;
            }

            const rect = wrapper.getBoundingClientRect();
            const wrapperHeight = wrapper.offsetHeight;
            const viewportHeight = window.innerHeight;
            const scrolled = -rect.top;
            const totalScrollRoom = wrapperHeight - viewportHeight;

            if (totalScrollRoom <= 0) {
                ticking.current = false;
                return;
            }

            const rawProgress = Math.max(0, Math.min(1, scrolled / totalScrollRoom));
            setProgress(rawProgress);

            const count = Math.min(
                itemCount,
                Math.floor(rawProgress * (itemCount + 0.5))
            );
            setVisibleCount(count);

            ticking.current = false;
        });
    }, [itemCount]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return { wrapperRef, visibleCount, progress };
}
