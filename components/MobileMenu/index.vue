<template>
    <div
        ref="mobileMenu"
        class="mobile-menu"
        :class="{ '--active' : menuIsScrolled }"
    >
        <Container>
            <div class="mobile-menu__inner">
                <div class="mobile-menu__logo">
                    <Logo @logo:click="resetMenu" />
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

const mobileMenu = ref(null)
const menuIsScrolled = ref(false)
const addClassAfterScroll = (
	scrollPoint = 500
) => {
	const buffer = 30

	const update = () => {
		const currentScroll = Number.parseInt(window.scrollY);

		if (currentScroll >= scrollPoint) {
			menuIsScrolled.value = true
		} else if (currentScroll < (scrollPoint - buffer)) {
			menuIsScrolled.value = false
		}
	};

	window.addEventListener('scroll', update, { passive: true })
	update()
};

let cleanUp
onMounted(() => {
	cleanUp = addClassAfterScroll(mobileMenu.value.clientHeight)
})
onUnmounted(cleanUp)
</script>

<style scoped lang="scss">
.mobile-menu {
    position: relative;
    z-index: 3;
    transition: .2s ease-in-out all;
    border-bottom: 1px solid transparent;


    &.--active {
        border-bottom: 1px solid $color3;

        &::after {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background-color: $color2;
            opacity: .6;
            z-index: -1;
        }

        .mobile-menu__logo {
            max-width: rem(200);
        }
    }

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
        gap: 12px;
        height: rem(40);
        cursor: pointer;

        &.--disabled {
            cursor: unset;
        }
    }

    &__bar {
        background-color: $color1;
        width: 3.5rem;
        height: 3px;
        transform-origin: center;
    }

    &__logo {
        max-width: rem(300);
        transition: .2s ease-in-out all;

         @include mq('sm') {
            max-width: rem(200);
        }
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