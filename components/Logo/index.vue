<template>
    <div class="header-logo">
        <div class="header-logo__inner" @mouseenter="onEnter">
            <h1>
                <NuxtLink to="/" @click="emits('logo:click')">                  
                    <img
                        src="/images/dd-logo-white.png"
                        alt="Discover Nuxt"
                    >

                    <div class="header-logo__transition --first"/>
                    <div class="header-logo__transition --second"/>
                </NuxtLink>
            </h1>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'

const emits = defineEmits(['logo:click'])

const onEnter = () => {
	const firstTl = gsap.timeline({ delay: 0 })
	const secondTl = gsap.timeline({ delay: .3 })

	gsap.set('.header-logo__transition.--first', { scaleX: 0, transformOrigin: 'left', width: '100%' })
	firstTl
		.to('.header-logo__transition.--first', { scaleX: 1, duration: 0.2, delay: 0 })
		.set('.header-logo__transition.--first', { transformOrigin: 'right' })
		.to('.header-logo__transition.--first', { scaleX: 0, duration: 0.2, delay: 0.3 })

	gsap.set('.header-logo__transition.--second', { scaleX: 0, transformOrigin: 'left', width: '100%' })
	secondTl
		.to('.header-logo__transition.--second', { scaleX: 1, duration: 0.2, delay: 0 })
		.set('.header-logo__transition.--second', { transformOrigin: 'right' })
		.to('.header-logo__transition.--second', { scaleX: 0, duration: 0.2, delay: 0.3 })
}
</script>

<style lang="scss" scoped>
.header-logo {
    position: relative;

    h1 {        
        margin: 0px;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }
 
    &__transition {
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: $color3;
        height: 100%;

        &.--second {
            background-color: $color2;
        }
    }
}
</style>