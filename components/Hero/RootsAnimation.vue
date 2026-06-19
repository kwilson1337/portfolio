<template>
    <div class="roots-animation" id="root-growth-trigger">
        <Container>
            <div class="roots-animation__inner">
                <div class="roots-animation__col --left h1">
                    <h2>Our</h2>
                </div>

                <div class="roots-animation__roots">
                    <svg preserveaspectratio="none" viewbox="0 0 800 300">
                    <!-- Root 1 (Main) -->
                    <path class="root-path" d="M400,0 C400,50 380,80 370,120 C360,160 390,200 400,250 C410,300 420,350 420,400" stroke-linecap="round" stroke-width="4"></path>
                    <!-- Root 2 (Branch Left) -->
                    <path class="root-path --stroke-2 --opacity-60" d="M370,120 C340,140 310,130 290,160 C270,190 280,220 260,260" stroke-linecap="round" stroke-width="2"></path>
                    <!-- Root 3 (Branch Right) -->
                    <path class="root-path --stroke-2 --opacity-60" d="M400,180 C430,200 460,190 480,220 C500,250 490,280 510,320" stroke-linecap="round" stroke-width="2"></path>
                    <!-- Root 4 (Small side root) -->
                    <path class="root-path --opacity-40" d="M380,80 C360,90 350,85 340,105" stroke-linecap="round" stroke-width="1.5"></path>
                    <!-- Root 5 (Deeper reaching) -->
                    <path class="root-path" d="M410,50 C430,80 440,110 435,150 C430,190 415,220 425,280" stroke-linecap="round" stroke-width="3"></path>
                </svg>
                </div>                

                <div class="roots-animation__col --right h1">
                    <h2>Work</h2>
                </div>
            </div>    
            
            <div class="roots-animation__mobile-title">
                <h2>Our Work</h2>
            </div>
        </Container>    
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useAnimateRoots } from '../../composables/useAnimateRoots';
import Container from '@/components/Container'

const animateRoots = useAnimateRoots()
let cleanupRoots 
onMounted(async () => {       
    nextTick(() => {        
        setTimeout(() => {            
            const rootPaths = document.querySelectorAll('.root-path');
            const rootTrigger = document.getElementById('root-growth-trigger');

            if (rootTrigger && rootPaths.length > 0) {                
                cleanupRoots = animateRoots.animateRoots(rootPaths, rootTrigger)
            }
        }, 50)
    })
}) 

onBeforeUnmount(() => {
  if (cleanupRoots) {
    cleanupRoots()
  }
})
</script>

<style lang="scss" scoped>
.roots-animation {
    position: relative;
    overflow: hidden;
    background-color: $color1;      
    
    &::before {
        content: '';
        position: absolute;        
        background: linear-gradient(to bottom, $color2, transparent);       
        filter: blur(8px);
        top: -8px;
        width: 100%;
        height: rem(40);
    }

    svg {
        height: 250px;
        width: rem(650);        
    }

    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;   
        
        @include mq('md') {
            justify-content: center;
        }       
    }

    &__col {
        flex: 1;
        display: flex;        
        height: 100%;
        min-height: 200px;
        position: relative;

        @include mq('sm') {
            display: none;
        }
       
        &.--left {
            text-align: right;     

            h2 {
                right: -148px;
            }       
        }

        &.--right {
            h2 {
                left: -200px;
            }
        }
      
        h2 {
            color: $color2;
            @include rfs(42, 124);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin: 0px;            
        }
    }

    &__roots {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .root-path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        transition: stroke-dashoffset 0.1s linear;
        stroke: #1B3022;
        fill: none;

        &.--stroke-2 {
            stroke: #4F6D58;
        }

        &.--opacity-40 {
            opacity: 40%;
        }

        &.--opacity-60 {
            opacity: 60%;
        }
    }

    &__mobile-title {
        display: none;

        @include mq('sm') {
            display: block;
            text-align: center;
            margin-bottom: rem(20);
            margin-top: rem(20);
        }

        h2 {
            color: $color2;
            font-size: rem(42);  
            margin: 0px;          
        }
    }
}
</style>