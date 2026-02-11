import { defineStore } from 'pinia'

export const usePageTransitionStore = defineStore('pageTransitionStore', () => {
	const isAnimating = ref(false)
	const setIsAnimating = (state) => {
		isAnimating.value = state
	}

	const transitionElements = ref(null)
	const setTransitionElements = (state) => {
		transitionElements.value = state
	}

	watch(isAnimating, () => {
		console.log('isAnimating', isAnimating.value)
	})

	return {
		transitionElements,
		setTransitionElements,
		isAnimating,
		setIsAnimating
	}
})