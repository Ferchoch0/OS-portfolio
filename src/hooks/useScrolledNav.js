import { useState, useEffect } from 'react';

/**
 * Detects scroll position to toggle nav background.
 * @param {number} [threshold=50]
 * @returns {boolean} scrolled
 */
export function useScrolledNav(threshold = 50) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return scrolled;
}
