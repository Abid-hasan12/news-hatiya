import { useLayoutEffect } from 'react';

export default function ScrollToTop({ dependencies = [] }) {
    useLayoutEffect(() => {
        if (typeof window === 'undefined') return undefined;

        const frameId = window.requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        return () => window.cancelAnimationFrame(frameId);
    }, dependencies);

    return null;
}