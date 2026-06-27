export const useAnimateRoots = () => {
	const animateRoots = (rootPaths, rootTrigger) => {
		if (!rootPaths || !rootTrigger) return;

		// Cache to store lengths safely
		const pathData = [];

		// Helper to calculate or recalculate path lengths safely
		const initPathLengths = () => {
			rootPaths.forEach((path, index) => {
				const length = path.getTotalLength();
				// Fallback to a default if the browser reports 0 during layout calculation
				const validLength = length > 0 ? length : (pathData[index]?.length || 0);

				path.style.strokeDasharray = validLength;
				// Retain existing progress if recalculating
				if (!pathData[index]) {
					path.style.strokeDashoffset = validLength;
				}

				pathData[index] = { element: path, length: validLength };
			});
		};

		const updateRoots = () => {
			const scrollTop = window.scrollY || window.pageYOffset;

			// Calculate the element's position relative to the entire document.
			// This is immune to horizontal shifting layout bugs on page entry.
			const rect = rootTrigger.getBoundingClientRect();
			const elementPageTop = rect.top + scrollTop;
			const svgHeight = rect.height || rootTrigger.clientHeight;

			const windowHeight = window.innerHeight;

			// Define start and end triggers relative to document scroll
			const startTrigger = elementPageTop - windowHeight;
			const endTrigger = elementPageTop + svgHeight;

			// Calculate progress based on scroll height
			let progress = (scrollTop - startTrigger) / (endTrigger - startTrigger);
			progress = Math.max(0, Math.min(1, progress));

			const speedFactor = Math.max(1.5, 500 / svgHeight);

			pathData.forEach(pathObj => {
				const pathProgress = Math.min(1, progress * speedFactor);
				pathObj.element.style.strokeDashoffset = pathObj.length * (1 - pathProgress);
			});
		};

		// Initialize lengths immediately
		initPathLengths();

		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					updateRoots();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', updateRoots, { passive: true });

		// Safeguard 1: Recalculate dimensions when the element changes sizes or layout settles
		const resizeObserver = new ResizeObserver(() => {
			initPathLengths();
			updateRoots();
		});
		resizeObserver.observe(rootTrigger);

		// Safeguard 2: Recalculate the moment it visually arrives on the screen
		const intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					initPathLengths();
					updateRoots();
				}
			});
		}, { threshold: [0, 0.1] });
		intersectionObserver.observe(rootTrigger);

		// Initial render snapshot
		updateRoots();

		// Return cleanup function to call in onBeforeUnmount()
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', updateRoots);
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
		};
	};

	return {
		animateRoots
	}
}