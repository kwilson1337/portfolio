<template>
    <div class="mobile-menu">
        <div class="mobile-menu__inner" @click="toggleMenu">
            <div ref="barTop" class="mobile-menu__bar" />
            <div ref="barBottom" class="mobile-menu__bar" />
        </div>
    </div>

    <div class="mobile-menu-scrim">
        <div ref="firstScrim" class="mobile-menu-scrim__block --first"/>
        <div ref="secondScrim" class="mobile-menu-scrim__block --second">           
            <ul>
                <li 
                    v-for="link in siteLinks"
                    :key="link.title"
                    class="h1"
                    ref="menuLinks"
                >
                    {{ link.title }}
                </li>              
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useMenuAnimations } from '@/composables/useMenuAnimations'
import { siteLinks } from '@/constants/index'

const { 
	menuToggleActiveState, 
	resetMenuToggle,
	isActive 
} = useMenuAnimations()

const barTop = ref(null)
const barBottom = ref(null)
const firstScrim = ref(null)
const secondScrim = ref(null)
const menuLinks = ref(null)

const toggleMenu = () => {
	if(!isActive.value) {
		menuToggleActiveState([
            barTop.value, 
            barBottom.value,
            firstScrim.value, 
            secondScrim.value,
            menuLinks.value
        ])		
	} else {
		resetMenuToggle([
            barTop.value,
            barBottom.value,             
            firstScrim.value, 
            secondScrim.value,
            menuLinks.value
        ])		
	}
}
</script>

<style scoped lang="scss">
.mobile-menu {      
    z-index: 2; 

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

.mobile-menu-scrim {
    z-index: 1;    

    &__block {
        position: absolute;
        top: 0px;
        width: 100%;
        background-color: #eeeeee;
        height: 100%;        
        right: -100%;

        &.--second {
            background-color: $color2;
            color: $color1;
            display: flex;
            align-items: center;
            justify-content: center;

            ul {
                padding-left: 0px;
                list-style-type: none;
                text-align: center;

                li + li {
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>