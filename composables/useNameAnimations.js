import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

export const useNameAnimations = () => {
	gsap.registerPlugin(SplitText)

	const nameStuff = () => {
		let split = SplitText.create('.name-animation__inner', { type: 'words, chars' })

		gsap.from(split.chars, {
			duration: 1,
			y: 100,
			autoAlpha: 0,
			stagger: 0.05,
			repeat: -1,
			repeatDelay: 2,
		})
	}

	return {
		nameStuff,
	}
}
