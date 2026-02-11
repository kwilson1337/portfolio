<template>
    <div class="mobile-menu">        
        <div         
            :class="{'--disabled': isAnimating}"
            class="mobile-menu__inner" 
            @click="toggleMenu"
        >            
            <div ref="barTop" class="mobile-menu__bar" />
            <div ref="barBottom" class="mobile-menu__bar" />
        </div>        
    </div>    

    <div 
        ref="menuContainer"
        class="mobile-menu-menu"        
    >        
        <div class="mobile-menu-menu__inner">
            <div class="mobile-menu-menu__links">
                <MenuLinks @menu-links:click="routeToLink" />               
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

const router = useRouter()
const routeToLink = (url) => {
	resetMenu()
	router.push(url)    
}
</script>

<style scoped lang="scss">
.mobile-menu {    
    position: relative;  
    z-index: 3; 

    &__inner {
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
    position: absolute;
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