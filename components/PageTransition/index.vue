<template>
     <div class="page-transition">        
        <div ref="firstScrim" class="page-transition__block --first"/>
        <div ref="secondScrim" class="page-transition__block --second" />                           
    </div>
</template>

<script setup>
import { useMobileMenu } from '@/store/mobileMenu';
import { usePageTransitionAnimations } from '@/composables/usePageTransitionAnimations'
import { useMenuAnimations } from '@/composables/useMenuAnimations'
import { storeToRefs } from 'pinia';
import { usePageTransitionStore } from '@/store/pageTransition'

const firstScrim = ref(null)
const secondScrim = ref(null)

const { isActive, menuLinkRefs } = storeToRefs(useMobileMenu())
const { activeScrimState, resetScrimState } = usePageTransitionAnimations()
const { fadeLinksIn, fadeLinksOut } = useMenuAnimations()

const { setTransitionElements } = usePageTransitionStore()
watch(() => [firstScrim.value, secondScrim.value], (newVal) => {    
	setTransitionElements(newVal)
}, { immediate: true })

watch(isActive, () => {       
	if(isActive.value) {        
		const { secondTimeline } = activeScrimState([firstScrim.value, secondScrim.value])
		secondTimeline.add(fadeLinksIn(menuLinkRefs.value ?? []))
	} else {
		const { secondTimeline } = resetScrimState([firstScrim.value, secondScrim.value])
		secondTimeline.add(fadeLinksOut(menuLinkRefs.value ?? []), '-=1.7')
	}
})
</script>

<style lang="scss" scoped>
.page-transition {
    z-index: 1;    

    &__block {
        position: absolute;
        top: 0px;
        width: 100%;
        background-color: $color1;
        height: 100%;        
        right: -100%;

        &.--second {
            background-color: $color2;        
        }
    }
}
</style>