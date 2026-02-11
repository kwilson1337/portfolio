import { gsap } from 'gsap'
import { usePageTransitionStore } from '@/store/pageTransition'

export const usePageTransitionAnimations = () => {
	const { setIsAnimating } = usePageTransitionStore()

	const activeScrimState = (refs = [], onComplete) => {
		const [first, second] = refs
		const firstTimeline = gsap.timeline({ delay: .3, onComplete })
		const secondTimeline = gsap.timeline({ delay: .8, onComplete })

		firstTimeline.fromTo(first, {
			width: '0%',
			right: 0,			
		}, {
			width: '100%',
			right: 0,
			ease: 'power1.in',
			visibility: 'visible',		
		})
		secondTimeline.fromTo(second, {
			width: '0%',
			right: '0'
		}, {
			width: '100%',
			right: 0,
			ease: 'power1.in',
			visibility: 'visible',			
		})

		return {
			firstTimeline, 
			secondTimeline
		}
	}

	const resetScrimState = (refs = [], onComplete) => {
		const [first, second] = refs
		const firstTimeline = gsap.timeline({ delay: .5, onComplete })
		const secondTimeline = gsap.timeline({ 
			delay: .1,
			onComplete, 
			onStart: () => setIsAnimating(true)
		})

		firstTimeline.fromTo(first, {
			width: '100%',
			right: 0,			
			visibility: 'visible',					
		}, {
			width: '0%',
			right: 0,
			ease: 'power1.out',			    
		})
		firstTimeline.to(first, { visibility: 'hidden' })

		secondTimeline.fromTo(second, {
			width: '100%',
			right: 0,
			ease: 'power1.out',
			visibility: 'visible',
		}, {
			width: '0%',
			right: 0,
			ease: 'power1.out', 			       
		})	
		secondTimeline.to(second, 
			{ 
				visibility: 'hidden',
				onComplete: () => {
					setIsAnimating(false)
				}
			})   
        
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