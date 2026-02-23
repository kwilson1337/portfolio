<template>
    <div class="header-logo">
        <div class="header-logo__inner" @mouseenter="onEnter">
            <h2>
                <NuxtLink to="/" @click="emits('logo:click')">
                    <span>K</span>
                    <span>W</span>

                    <div class="header-logo__transition --first"/>
                    <div class="header-logo__transition --second"/>
                </NuxtLink>
            </h2>
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
@mixin dotStyles {
    width: 8px;
    height: 8px;
    background-color: $color1;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.header-logo {
    position: relative;

    h2 {
        font-size: rem(32);
        margin: 0px;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    span {
        position: relative;

        &::before {
            content: '';
            @include dotStyles;
            left: -15px;
        }

        & + span {
            margin-left: rem(20);

            &::before {
                content: '';
                @include dotStyles;
                left: -15px;
            }

            &::after {
                content: '';
                @include dotStyles;
                right: -15px;
            }
        }
    }

    &__transition {
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: $color1;
        height: 100%;

        &.--second {
            background-color: $color2;
        }
    }
}
</style>