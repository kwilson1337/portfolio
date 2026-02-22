<template>
    <header>
        <MobileMenu />     
    </header>    
     <main>    
        <slot />

        <PageTransition />
    </main>
</template>

<script setup>
import MobileMenu from '@/components/MobileMenu/index.vue'
import PageTransition from '@/components/PageTransition'
</script>

<style scoped lang="scss">
main {
    color: $color1;
}

header {
    position: sticky;
    top: 0px;
    z-index: 2;
}

// header nav {
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     padding: 15px;       
// }
</style>