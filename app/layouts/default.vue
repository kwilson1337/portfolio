<template>
    <header>
        <nav>
            <MobileMenu />                
        </nav>       
    </header>    
     <main>
        <slot />
    </main>
</template>

<script setup>
import MobileMenu from '@/components/MobileMenu/index.vue'
</script>

<style scoped lang="scss">
header nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px;
}
</style>