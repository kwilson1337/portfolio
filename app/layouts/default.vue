<template>
    <header>
        <MobileMenu />
    </header>
     <main>
        <slot />

        <Footer />
        <PageTransition />
    </main>
</template>

<script setup>
import MobileMenu from '@/components/MobileMenu/index.vue'
import PageTransition from '@/components/PageTransition'
import Footer from '@/components/Footer'
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
</style>