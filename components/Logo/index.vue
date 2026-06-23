<template>
    <div class="header-logo">
        <div class="header-logo__inner" @mouseenter="onEnter">
            <h1>
                <NuxtLink to="/" @click="emits('logo:click')" class="header-logo__link">                  
                    <img
                        src="/images/logo/dd-logo-white-v2.png"
                        alt="Discover Nuxt"
                    >

                    <div ref="transitionFirst" class="header-logo__transition --first"/>
                    <div ref="transitionSecond" class="header-logo__transition --second"/>
                </NuxtLink>
            </h1>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'

const emits = defineEmits(['logo:click'])

const transitionFirst = ref(null)
const transitionSecond = ref(null)
const onEnter = () => {    
	const firstTl = gsap.timeline({ delay: 0 })
	const secondTl = gsap.timeline({ delay: .3 })

	gsap.set(transitionFirst.value, { scaleX: 0, transformOrigin: 'left', width: '100%' })
	firstTl
		.to(transitionFirst.value, { scaleX: 1, duration: 0.2, delay: 0 })
		.set(transitionFirst.value, { transformOrigin: 'right' })
		.to(transitionFirst.value, { scaleX: 0, duration: 0.2, delay: 0.3 })

	gsap.set(transitionSecond.value, { scaleX: 0, transformOrigin: 'left', width: '100%' })
	secondTl
		.to(transitionSecond.value, { scaleX: 1, duration: 0.2, delay: 0 })
		.set(transitionSecond.value, { transformOrigin: 'right' })
		.to(transitionSecond.value, { scaleX: 0, duration: 0.2, delay: 0.3 })
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

    &__link {
        border: none;
    }
}
</style>