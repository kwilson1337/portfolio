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
	
	const setScrollTrgger = () => {    
		const { mainContainer, companyLogo } = workHistoryRefs.value    

		if(mainContainer && companyLogo) {                
			gsap.fromTo(mainContainer, {                     
				background: 'transparent',
				duration: '.1',
				padding: '0px'                
			},
			{
				scrollTrigger: {
					trigger: mainContainer,
					toggleActions: 'restart none none none',
					scrub: 2,
					start: 'top 200',
					end: '+=200' 
				},   
				background: 'linear-gradient(to top, #00aeef 90%, #b226ae 95%)',
				padding: '100px 60px'
			}            
			)        
		}    
	}

	return {
		setWorkHistoryRefs,
		setScrollTrgger
	}
}