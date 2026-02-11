import { defineStore } from 'pinia'

export const useMobileMenu = defineStore('mobileMenu', () => {
	const isActive = ref(false)
	const setIsActive = (state) => {		
		isActive.value = state
	}

	const menuLinkRefs = ref()
	const setMenuLinkRefs = (state) => {
		menuLinkRefs.value = state
	}

	return {
		isActive,
		setIsActive,
		menuLinkRefs,
		setMenuLinkRefs
	}
})