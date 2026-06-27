<template>
    <section class="kw-hero-section">
        <BackgroundTexture />        
       <Container>
            <div class="kw-hero-section__inner">
                <div class="kw-hero-section__col --left">   
                    <h1 class="text-glow">
                        Helping small business grow
                        <span>deeply.</span>
                    </h1>     
                    <h2>We bridge the gap between structured precision and natural elegance to create identities that breathe and evolve.</h2>       

                    <div class="kw-hero-section__actions">
                        <NuxtLink class="kw-button --button1" to="/contact">
                            Start Project
                        </NuxtLink>
                        <NuxtLink class="kw-button --button2">
                            Our Work
                        </NuxtLink>                       
                    </div>
                </div>
                <div class="kw-hero-section__col --right">
                    <FlowerAnimation />                  
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
import RootsAnimation from '@/components/Hero/RootsAnimation.vue'
import FlowerAnimation from '@/components/FlowerAnimation'
import BackgroundTexture from '@/components/BackgroundTexture'

const headerText = 'Design your brand,'
const headerAccent = 'deeply'
</script>

<style lang="scss" scoped>
.kw-hero-section {
    position: relative;    
    height: calc(75vh + 60px);
    padding-top: rem(0);

    @include mq('md') {
        height: 100%;
        padding-top: rem(40);
        padding-bottom: rem(100);
    }
      
    &__inner {
        display: flex;      
        align-items: center;  

        @include mq('sm') {
            display: block;
        }
    }

    &__col {
        flex-basis: 40%;
        position: relative;
               
        &.--left {
            flex-basis: 60%;      

            @include mq('sm') {
                text-align: center
            }      
        }

        &.--right {
            @include mq('sm') {
                display: flex;
                justify-content: center;                
            }
        }

        h1 {
            @include rfs(36, 64);
            font-weight: 500;
            line-height: 1.2;
            color: $color1;

            span {
                font-style: italic;
                color: $color3;
                @include title-decorator($color3);                
            }
        }

        h2 {
            color: $color3;
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
        gap: rem(20);
       
        @include mq('sm') {
            flex-direction: column;
            gap: rem(15);
        }
        
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
        
        @include mq('md') {
            width: rem(300);
            height: rem(300);
        }
    }

    &__scroll {
        color: rgb(129 153 134 / 0.4);
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 0.1em;
        font-size: rem(10);

        @include mq('md') {
            bottom: 5%;
        }

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