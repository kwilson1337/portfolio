import * as THREE from 'three'

export const useAnimateRoots = (rootPaths, rootTrigger) => {
    const animateRoots = (rootPaths, rootTrigger) => {
        if (!rootPaths || !rootTrigger) return;

        // Initialize root path lengths
        rootPaths.forEach(path => {
            const length = path.getTotalLength();

            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            path.dataset.length = length;
        });

        const updateRoots = () => {
            const rect = rootTrigger.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const start = windowHeight;
            const end = -rect.height;

            let progress = (rect.top - start) / (end - start);
            progress = Math.max(0, Math.min(1, progress));

            // Smaller SVGs animate faster
            const svgHeight = rootTrigger.offsetHeight;
            const speedFactor = Math.max(1.5, 500 / svgHeight);

            rootPaths.forEach(path => {
                const length = parseFloat(path.dataset.length);

                const pathProgress = Math.min(
                    1,
                    progress * speedFactor
                );

                path.style.strokeDashoffset =
                    length * (1 - pathProgress);
            });
        };

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateRoots();
                    ticking = false;
                });

                ticking = true;
            }
        });

        // Initial render
        updateRoots();
    }

    return {
        animateRoots
    }
}