<template>
    <section class="kw-hero-section">
        <div class="kw-hero-section__bg"></div>
       <Container>
            <div class="kw-hero-section__inner">
                <div class="kw-hero-section__col --left">   
                    <h1 class="text-glow">
                        Helping small business grow
                        <span>deeply.</span>
                    </h1>     
                    <h2>We bridge the gap between structured precision and natural elegance to create identities that breathe and evolve.</h2>       

                    <div class="kw-hero-section__actions">
                        <a href="" class="kw-button --button1">Start Project</a>
                        <a href="" class="kw-button --button2">Our Work</a>
                    </div>
                </div>
                <div class="kw-hero-section__col --right">
                    <div class="kw-hero-section__highlight"></div>
                    <div id="threejs-container-ANIMATION_15" class="kw-hero-section__flower"></div>
                </div>            
            </div>
            <div class="kw-hero-section__scroll">SCROLL</div>
       </Container>            
    </section>

    <RootsAnimation />
</template>

<script setup>
import { onMounted } from 'vue'
import Container from '@/components/Container'
import { useAnimateFlower } from '../../composables/useAnimateFlower'
import RootsAnimation from '@/components/Hero/RootsAnimation.vue'

const headerText = 'Design your brand,'
const headerAccent = 'deeply'
const animateFlower = useAnimateFlower()
onMounted(() => {  
    animateFlower.animateFlower('threejs-container-ANIMATION_15')                                 
})
    
</script>

<style lang="scss" scoped>
.kw-hero-section {
    position: relative;    
    height: 75vh;
    
    &__bg {
        background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: .2;
    }

    &__inner {
        display: flex;      
        align-items: center;  
    }

    &__col {
        flex-basis: 50%;
        position: relative;

        h1 {
            @include rfs(36, 64);
            font-weight: 500;
            line-height: 1.2;

            span {
                font-style: italic;
                color: rgb(180, 205, 184, 1);
            }
        }

        h2 {
            color: rgb(129, 153, 134, 1);
            font-size: 18px;
            line-height: 28px;
            font-weight: 400;            
        }

        #threejs-container-ANIMATION_15 canvas {
            display: block;
            width: 100% !important;
            height: 100% !important;
        }    
    }

    &__actions {
        margin-top: rem(40);
        display: flex;
        gap: rem(20)
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
        // width: calc(100% - 500px);
        // height: calc(100% - 500px);
        position: relative;        
    }

    &__scroll {
        color: rgb(129 153 134 / 0.4);
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 0.1em;
        font-size: rem(10);

        &::after {
            content: '';
            width: 1px;
            background-image: linear-gradient(to bottom, rgb(129 153 134 / 0.4) , transparent);
            height: rem(60);
            position: absolute;
            bottom: -65px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}            
</style>