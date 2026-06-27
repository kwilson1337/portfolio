<template>
    <div class="flower-animation" :class="{ '--small' : props.isSmall }">
        <div class="flower-animation__inner">
            <div class="flower-animation__highlight"></div>    
            <div id="animateFlower" class="flower-animation__flower"></div>
        </div>           
    </div>
</template>

<script setup>
import { useAnimateFlower } from '../../composables/useAnimateFlower'
const animateFlower = useAnimateFlower()

const props = defineProps({
    isSmall: {
        type: Boolean,
        default: false
    }
})

onMounted(() => {  
    animateFlower.animateFlower('animateFlower')                                 
})
</script>

<style lang="scss" scoped>
.flower-animation {
    position: relative;

    &__inner {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__highlight {
        opacity: .4;
        filter: blur(64px);
        background-color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: rem(200);
        height: rem(200);
    }

    &__flower {
        width: rem(600);
        height: rem(600);     
        position: relative;   

        .--small & {
            width: rem(300);
            height: rem(300);
        }
        
        @include mq('md') {
            width: rem(300);
            height: rem(300);
        }

        canvas {
            display: block;
            width: 100% !important;
            height: 100% !important;
        }
    }
}
</style>