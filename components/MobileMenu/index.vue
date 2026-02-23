<template>
    <div class="mobile-menu">
        <Container>
            <div class="mobile-menu__inner">
                <div class="mobile-menu__logo">
                    <Logo />
                </div>

                <div
                    :class="{'--disabled': isAnimating}"
                    class="mobile-menu__menu-container"
                    @click="toggleMenu"
                >
                    <div ref="barTop" class="mobile-menu__bar" />
                    <div ref="barBottom" class="mobile-menu__bar" />
                </div>
            </div>
        </Container>
    </div>

    <div
        ref="menuContainer"
        class="mobile-menu-menu"
    >
        <div class="mobile-menu-menu__inner">
            <div class="mobile-menu-menu__links">
                <MenuLinks @menu-links:click="resetMenu" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMenuAnimations } from '@/composables/useMenuAnimations'
import { useMobileMenu } from '@/store/mobileMenu'
import MenuLinks from './MenuLinks.vue'
import { usePageTransitionStore } from '@/store/pageTransition'
import { storeToRefs } from 'pinia'
import Container from '@/components/Container'
import Logo from '@/components/Logo/index.vue'

const {
	menuToggleActiveState,
	resetMenuToggle,
} = useMenuAnimations()

const barTop = ref(null)
const barBottom = ref(null)
const menuContainer = ref(null)

const resetMenu = () => {
	resetMenuToggle([
		barTop.value,
		barBottom.value,
		menuContainer.value
	])
}

const { isAnimating } = storeToRefs(usePageTransitionStore())
const { isActive } = storeToRefs(useMobileMenu())
const toggleMenu = () => {
	if(isAnimating.value) {
		return
	}

	if(!isActive.value) {
		menuToggleActiveState([
			barTop.value,
			barBottom.value,
			menuContainer.value
		])
	} else {
		resetMenu()
	}
}
</script>

<style scoped lang="scss">
.mobile-menu {
    position: relative;
    z-index: 3;

    &__inner {
        padding: rem(5) 0px;
        padding-left: rem(15);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__menu-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 16px;
        width: 3.5rem;
        height: 3.5rem;
        cursor: pointer;

        &.--disabled {
            cursor: unset;
        }
    }

    &__bar {
        background-color: $white;
        width: 3.5rem;
        height: 3px;
        transform-origin: center;
    }
}

.mobile-menu-menu {
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0px;
    top: 0px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
}
</style>