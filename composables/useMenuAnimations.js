import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { usePageTransitionAnimations } from './usePageTransitionAnimations'

gsap.registerPlugin(SplitText);
const { activeScrimState, resetScrimState } = usePageTransitionAnimations()

export const useMenuAnimations = () => {
	const isActive = ref(false)

	const menuToggleActiveState = (refs = []) => {
		const [top, bottom, firstScrim, secondScrim, menuLinks] = refs
		isActive.value = true		

		const topTimeline = gsap.timeline()
		const bottomTimeline = gsap.timeline()      
        
		topTimeline.to(top, { y: 10, duration: .3 })
		topTimeline.to(top, { rotation: 45, yPercent: -50, duration: .3 })

		bottomTimeline.to(bottom, { y: -8, duration: .3 })
		bottomTimeline.to(bottom, { rotation: -45, yPercent: -50, duration: .3 })

		const { secondTimeline } = activeScrimState([firstScrim, secondScrim])		
		secondTimeline.fromTo(menuLinks, 
			{ y: 20, opacity: 0 }, 
			{ opacity: 1, y: 0, stagger: 0.25, duration: .3 }			
		)
	}

	const resetMenuToggle = (refs = []) => {
		const [top, bottom, firstScrim, secondScrim, menuLinks] = refs
		isActive.value = false   		

		const timeline = gsap.timeline()    
		timeline.to([top, bottom], { rotation: 0, duration: .3 })
		timeline.to([top, bottom], { y: 0, duration: .3 })   
		const { secondTimeline } = resetScrimState([firstScrim, secondScrim])
		secondTimeline.fromTo(menuLinks, 
			{ opacity: 1, y: 0 },
			{ opacity: 0, y: 20, stagger: 0.25, duration: .3 },
			'-=1.7'
		)
	}
			
	return {
		isActive,
		menuToggleActiveState,
		resetMenuToggle	
	}
}