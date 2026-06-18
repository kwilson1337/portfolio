<template>
<div class="roots-animation" id="root-growth-trigger">
    <svg class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 800 300">
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
</template>

<script setup>
import { onMounted } from 'vue';
import { useAnimateRoots } from '../../composables/useAnimateRoots';

const animateRoots = useAnimateRoots()
onMounted(() => {
    const rootPaths = document.querySelectorAll('.root-path');
    const rootTrigger = document.getElementById('root-growth-trigger');

    animateRoots.animateRoots(rootPaths, rootTrigger)
}) 
</script>

<style lang="scss" scoped>
.roots-animation {
    position: relative;
    overflow: hidden;
    background-color: $white;   
    text-align: center; 

    svg {
        height: 300px;
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
}
</style>