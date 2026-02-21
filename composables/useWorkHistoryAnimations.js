import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useWorkHistoryAnimations = () => {        
	const workHistoryRefs = ref(null)  
	const setWorkHistoryRefs = (refs = {}) => {
		workHistoryRefs.value = {
			...refs
		}
	}

	const animateTitleInOnScroll = () => {
		const { workHistoryTitle } = workHistoryRefs.value		
		if(workHistoryTitle) {		
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: workHistoryTitle,
					toggleActions: 'restart none none none',
					scrub: .5,												
					markers: true,																			
				},
			})				
			tl.fromTo(workHistoryTitle, {
				rotateX: '90deg'
			},
			{					
				rotateX: '0'
			}
			)
		}		
	}

	const animateHistory = () => {
		const { history } = workHistoryRefs.value
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: history,				
				scrub: .5,												
				markers: true,																			
			},			
		})
		tl.to(history, { background: 'pink' })
	}

	return {
		setWorkHistoryRefs,	
		animateTitleInOnScroll,
		animateHistory
	}
}