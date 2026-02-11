<template>
  <NuxtLayout>
    <NuxtPage
      :transition="{ 
        name: 'gsap', 
        mode: 'out-in', 
        css: false, 
        onBeforeEnter,
        onEnter        
      }"
    />
  </NuxtLayout>
</template>

<script setup>
import { usePageTransitionStore } from '@/store/pageTransition'
import { usePageTransitionAnimations } from '@/composables/usePageTransitionAnimations'
import { gsap } from 'gsap'

const pageTransitionStore = usePageTransitionStore()
const { resetScrimState } = usePageTransitionAnimations()

const onBeforeEnter = (el) => {
	// 1. Kill any active animations on the page AND the global scrims
	gsap.killTweensOf([el, ...pageTransitionStore.transitionElements])
  
	// 2. Force a clean starting state (resetting visibility/opacity/etc)
	gsap.set(pageTransitionStore.transitionElements, { 
		autoAlpha: 0, 
		clearProps: 'all' 
	})
}

const onEnter = (_, done) => {
	resetScrimState(pageTransitionStore.transitionElements, done)  
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
