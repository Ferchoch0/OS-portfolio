import { useEffect, useRef, useCallback } from 'react';

/**
 * Scroll reveal hook using IntersectionObserver.
 * Returns a ref callback to attach to elements that should animate in.
 * @param {Object} [options]
 * @param {number} [options.threshold=0.08]
 * @param {string} [options.className='visible']
 * @returns {(node: HTMLElement|null) => void} ref callback
 */
export function useScrollReveal({ threshold = 0.08, className = 'visible' } = {}) {
    const observer = useRef(null);
    const elements = useRef(new Set());

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className);
                        observer.current?.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        // Observe any elements already registered
        elements.current.forEach((el) => {
            if (el) observer.current?.observe(el);
        });

        return () => {
            observer.current?.disconnect();
        };
    }, [threshold, className]);

    const ref = useCallback(
        (node) => {
            if (node) {
                elements.current.add(node);
                observer.current?.observe(node);
            }
        },
        []
    );

    return ref;
}
