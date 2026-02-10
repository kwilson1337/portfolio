import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

export const useHawkAnimations = () => {
	const flapWings = () => {
		const config = {
			repeat: -1,
			repeatDelay: 2,
		}
		const wingLeftStart = {
			rotation: 0,
			x: 0,
			y: 0,
		}

		const wingLeftEnd = {
			x: 50,
			y: -20,
			rotation: 80,
		}
		gsap.to('.hawk-wing-left', {
			...config,
			keyframes: {
				'0%': wingLeftStart,
				'50%': wingLeftEnd,
				'100%': wingLeftStart,
			},
		})
		gsap.to('.hawk-wing-right', {
			...config,
			keyframes: {
				'0%': wingLeftStart,
				'50%': {
					rotation: -100,
					y: 90,
					x: 20,
				},
				'100%': wingLeftStart,
			},
		})
		gsap.to(['.hawk-leg-left', '.hawk-leg-right'], {
			...config,
			keyframes: {
				'0%': {
					height: 50,
				},
				'50%': {
					height: 75,
				},
				'100%': {
					height: 50,
				},
			},
		})
		gsap.to(['.hawk-foot-left', '.hawk-foot-right'], {
			...config,
			keyframes: {
				'0%': {
					y: 0,
				},
				'50%': {
					y: 30,
				},
				'100%': {
					y: 0,
				},
			},
		})
	}

	const hawkToK = () => {
		gsap.to('#leftWing', {
			morphSVG: '#leftWingK',
			duration: 1.1,
		}, 0)

		gsap.to('#rightWing', {
			morphSVG: '#rightWingK',
			duration: 0.9,
		}, 0)
	}

	return {
		flapWings,
		hawkToK,
	}
}
