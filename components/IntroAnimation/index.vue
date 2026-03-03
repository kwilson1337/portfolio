<template>
    <section class="intro-animation">
        <Container>
            <div class="intro-animation__inner">
                <div class="intro-animation__end">
                    <div>
                        <h1 ref="endCopy">
                            <span>Kyle</span>
                            <span>Wilson</span>
                        </h1>

                        <div ref="endTransitionFirst" class="intro-animation__transition --first"/>
                    </div>
                </div>
                <div class="intro-animation__start">
                    <h2 ref="startCopyFirst">K</h2>
                    <h2 ref="startCopySecond">W</h2>

                    <div ref="startTransitionFirst" class="intro-animation__transition --first"/>
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup>
import Container from '@/components/Container'
import { useIntroAnimations } from '../../composables/useIntroAnimations';

const startTransitionFirst = ref(null)
const endTransitionFirst = ref(null)
const startCopyFirst = ref(null)
const startCopySecond = ref(null)
const endCopy = ref(null)

const { setAnimatonRefs, playIntroAnimation } = useIntroAnimations()
onMounted(() => {
	setAnimatonRefs({
		startTransitionFirst: startTransitionFirst.value,
		startCopyFirst: startCopyFirst.value,
		startCopySecond: startCopySecond.value,
		endTransitionFirst: endTransitionFirst.value,
		endCopy: endCopy.value
	})

	playIntroAnimation()
})
</script>

<style lang="scss">
.intro-animation {
    height: 100vh;
    padding: rem(60) 0px;
    padding-top: 0px;
    display: flex;

    .container {
        display: flex;
        flex: 1;
    }

    h1,
    h2 {
        @include rfs(48, 120);
        margin: 0px;
    }

    h1 span {
        & + span {
            padding-left: 10px;
        }
    }

    &__inner {
        display: flex;
        flex: 1;
    }

    &__start,
    &__end {
        position: relative;
    }

    &__end {
        flex: 1;

        > div {
            padding-top: rem(60);
            position: relative;
        }

        h1 {
            opacity: 0;
        }
    }

    &__start {
        @include responsive-styles('padding-right',60, 100);
        height: calc(100% - rem(80));
        display: flex;
        justify-content:  flex-end;
        flex-direction: column;
        text-align: center;
    }

    &__transition {
        background-color: $color1;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        transform: scale(0);

        &.--second {
            background-color: $color2;
        }
   }
}
</style>