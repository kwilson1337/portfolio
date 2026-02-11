<template>
    <header>
        <nav>
            <MobileMenu />                
        </nav>       
    </header>    
     <main>
        <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink class="mx-4" to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
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
header nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px;    
}
</style>