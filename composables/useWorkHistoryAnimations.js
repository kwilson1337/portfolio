import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useWorkHistoryAnimations = () => {   
	let gsapContext = gsap.context(() => {})
	const workHistoryRefs = ref(null)  
	const setWorkHistoryRefs = (refs = {}) => {
		workHistoryRefs.value = {
			...refs
		}
	}

	const animateTitleInOnScroll = () => {
		const { workHistoryTitle } = workHistoryRefs.value		
		if(workHistoryTitle) {	
			gsapContext.add(() => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: workHistoryTitle,
						toggleActions: 'restart none none none',
						scrub: .5,																	
					},
				})
				tl.fromTo(workHistoryTitle, 
					{
						rotateX: '90deg'
					},
					{					
						rotateX: '0'
					}
				)	
			})													
		}		
	}

	const animateHistory = ({ containerBackgroundColor, dateBackgroundColorStart, dateBackgroundColorEnd }) => {
		const { historyContainer, workHistoryDate } = workHistoryRefs.value	
		if(historyContainer && workHistoryDate)		 {
			gsapContext.add(() => {
				const backgroundTimeline = gsap.timeline({
					scrollTrigger: {
						trigger: workHistoryDate,				
						scrub: .5,				
						start: 'top, center',
						toggleActions: 'restart none none none',
					},			
				})

				backgroundTimeline.fromTo(workHistoryDate, { background: dateBackgroundColorStart }, { background: dateBackgroundColorEnd }, 0)
				backgroundTimeline.to(historyContainer, { background: containerBackgroundColor }, 0)
			})
		}					
	}

	const cleanUpAllAnimations = () => {		
		gsapContext.revert()		
		gsapContext = gsap.context(() => {}) 
	}

	return {
		setWorkHistoryRefs,	
		animateTitleInOnScroll,
		animateHistory,
		cleanUpAllAnimations
	}
}