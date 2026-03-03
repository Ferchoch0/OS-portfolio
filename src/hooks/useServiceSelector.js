import { useState, useCallback } from 'react';
import { services } from '../data/services';

/**
 * Service selector hook — manages active service state with panel transition.
 * @returns {{ activeIndex: number, activeService: Service, isHiding: boolean, setService: (i: number) => void, services: Service[] }}
 */
export function useServiceSelector() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHiding, setIsHiding] = useState(false);

    const setService = useCallback((index) => {
        if (index === activeIndex) return;
        setIsHiding(true);
        setTimeout(() => {
            setActiveIndex(index);
            setIsHiding(false);
        }, 220);
    }, [activeIndex]);

    return {
        activeIndex,
        activeService: services[activeIndex],
        isHiding,
        setService,
        services,
    };
}
