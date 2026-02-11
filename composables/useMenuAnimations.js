import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useMobileMenu } from '@/store/mobileMenu';

gsap.registerPlugin(SplitText);
const { setIsActive } = useMobileMenu()

export const useMenuAnimations = () => {
	const isActive = ref(false)

	const menuToggleActiveState = (refs = []) => {
		const [ top, bottom, menu ] = refs				

		const topTimeline = gsap.timeline()
		const bottomTimeline = gsap.timeline({ onStart: () => setIsActive(true) })      
        
		topTimeline.to(top, { y: 10, duration: .3 })
		topTimeline.to(top, { rotation: 45, yPercent: -50, duration: .3 })

		bottomTimeline.to(bottom, { y: -8, duration: .3 })
		bottomTimeline.to(bottom, { rotation: -45, yPercent: -50, duration: .3 })	
		bottomTimeline.to(menu, { opacity: 1, visibility: 'visible' })
	}

	const resetMenuToggle = (refs = []) => {
		setIsActive(false)
		const [ top, bottom, menu ] = refs		   		

		const timeline = gsap.timeline()    
		timeline.to([top, bottom], { rotation: 0, duration: .3 })
		timeline.to([top, bottom], { y: 0, duration: .3 })
		timeline.to(menu, { opacity: 0, visibility: 'hidden' })
	}

	const fadeLinksIn = (refs = []) => {		
		const timeline = gsap.timeline()
		return timeline.fromTo(refs, { y: 20, opacity: 0 }, { opacity: 1, y: 0, stagger: 0.25, duration: .3 })
	}

	const fadeLinksOut = (refs = []) => {
		const timeline = gsap.timeline()
		return timeline.fromTo(refs, { opacity: 1, y: 0 }, { opacity: 0, y: 20, stagger: 0.25, duration: .3 })
	}
			
	return {
		isActive,
		menuToggleActiveState,
		resetMenuToggle,
		fadeLinksIn,
		fadeLinksOut
	}
}