<template>
    <div class="mobile-menu">
        <div class="mobile-menu__inner" @click="toggleMenu">
            <div ref="barTop" class="mobile-menu__bar" />
            <div ref="barBottom" class="mobile-menu__bar" />
        </div>        
    </div>    

    <div 
        ref="menuContainer"
        class="mobile-menu-menu"
        :class="{'--active' : mobileMenuStore.isActive}"
    >        
        <div class="mobile-menu-menu__inner">
            <div class="mobile-menu-menu__links">
                <ul>                    
                    <li 
                        v-for="link in siteLinks"
                        :key="link.title"
                        ref="menuLinks"
                        class="h1"
                        @click="routeToLink(link.url)"
                    >
                        {{ link.title }}                     
                    </li>              
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMenuAnimations } from '@/composables/useMenuAnimations'
import { useMobileMenu } from '@/store/mobileMenu'
import { siteLinks } from '@/constants'

const { 
	menuToggleActiveState, 
	resetMenuToggle,	
} = useMenuAnimations()

const barTop = ref(null)
const barBottom = ref(null)
const menuLinks = ref(null)
const menuContainer = ref(null)

const resetMenu = () => {
	resetMenuToggle([
		barTop.value,
		barBottom.value,			
		menuContainer.value
	])	
}

const mobileMenuStore = useMobileMenu()
const toggleMenu = () => {    
	if(!mobileMenuStore.isActive) {
		menuToggleActiveState([
			barTop.value, 
			barBottom.value,						
			menuContainer.value
		])		
	} else {
		resetMenu()
	}
}

watch(menuLinks, () => {
	mobileMenuStore.setMenuLinkRefs(menuLinks.value)
})

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

    &__links {     
        color: $color1;  

         ul {
            padding-left: 0px;
            list-style-type: none;
            text-align: center;

            li {
                cursor: pointer;

                & + li {
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>