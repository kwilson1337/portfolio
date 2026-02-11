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
	
	return {
		transitionElements,
		setTransitionElements,
		isAnimating,
		setIsAnimating
	}
})