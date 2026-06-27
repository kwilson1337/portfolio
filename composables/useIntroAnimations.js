import { gsap } from 'gsap'

export const useIntroAnimations = () => {
	let gsapContext = gsap.context(() => {})
	const masterTimeline = gsap.timeline()
	const animationRefs = ref(null)
	const setAnimatonRefs = (refs = {}) => {
		animationRefs.value = {
			...refs
		}
	}

	const startAnimation = () => {
		const {
			startTransitionFirst,
			startCopyFirst,
			startCopySecond,
		} = animationRefs.value
		const timeline = gsap.timeline({ delay: .8, ease: 'power1.in', })

		if(startTransitionFirst) {
			timeline.set(startTransitionFirst, { transformOrigin: 'bottom', scaleX: 1, scaleY: 0 })
			timeline.to(startTransitionFirst, { scaleY: 1 })
			timeline.set(startTransitionFirst, { transformOrigin: 'top' }, '+=.2')
			timeline.to(startTransitionFirst, { scaleY: 0 })

			timeline.to([startCopyFirst, startCopySecond], { opacity: 0 }, '-=.8')

			return timeline
		}
	}

	const endAnimation = () => {
		const { endTransitionFirst, endCopy } = animationRefs.value
		const timeline = gsap.timeline({ delay: .3 })
		timeline.set(endTransitionFirst, { transformOrigin: 'right', scaleX: 0, scaleY: 1 })
		timeline.to(endTransitionFirst, { scaleX: 1 })
		timeline.set(endTransitionFirst, { transformOrigin: 'left' })
		timeline.set(endCopy, { opacity: 1 })
		timeline.to(endTransitionFirst, { scaleX: 0 })


		return timeline
	}

	const playIntroAnimation = () => {
		gsapContext.add(() => {
			masterTimeline.
				add(startAnimation, 0)
				.add(endAnimation(), 1)
		})
	}

	return {
		setAnimatonRefs,
		playIntroAnimation
	}
}