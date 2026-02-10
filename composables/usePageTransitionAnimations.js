import { gsap } from 'gsap'

export const usePageTransitionAnimations = () => {
    const activeScrimState = (refs = []) => {
		const [first, second] = refs
		const firstTimeline = gsap.timeline({ delay: .3 })
		const secondTimeline = gsap.timeline({ delay: .8 })

		firstTimeline.to(first, {
			width: '100%',
			right: 0,
			ease: 'power1.in',
			visibility: 'visible'
		})
		secondTimeline.to(second, {
			width: '100%',
			right: 0,
			ease: 'power1.in',
			visibility: 'visible'
		})

        return {
            firstTimeline, 
            secondTimeline
        }
	}

	const resetScrimState = (refs = []) => {
		const [first, second] = refs
		const firstTimeline = gsap.timeline({ delay: 1 })
		const secondTimeline = gsap.timeline({ delay: .5 })

		firstTimeline.to(first, {
			width: '0%',
			right: 0,
			ease: 'power1.out',            
		})
		firstTimeline.to(first, { visibility: 'hidden' })

		secondTimeline.to(second, {
			width: '0%',
			right: 0,
			ease: 'power1.out',            
		})
		secondTimeline.to(second, { visibility: 'hidden' })   
        
        return {
            firstTimeline, 
            secondTimeline
        }
	}

    return {
        activeScrimState,
        resetScrimState
    }
}