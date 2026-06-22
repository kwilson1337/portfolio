<template>
    <footer class="kw-footer">
        <Container>
            <div class="kw-footer__inner">
                <div class="kw-footer__logo">
                    <Logo />
                </div>
                <div class="kw-footer__links">
                    <NuxtLink
                        v-for="link in siteLinks"
                        :href="link.url"
                    >
                        {{ link.title }}
                    </NuxtLink>
                </div>
            </div>            
        </Container>

        <div class="kw-footer__bottom-bar">
            <Container>
                <div class="kw-footer__bottom-bar-flex">
                    ©{{ currentYear }} Deeply Designs

                    <NuxtLink to="/">
                        Deeply Designs
                    </NuxtLink>                    
                </div>                
            </Container>           
        </div>
    </footer>
</template>

<script setup>
import Container from '@/components/Container'
import Logo from '@/components/Logo'
import { siteLinks } from '@/constants'

const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.kw-footer {
    border-top: 1px solid $color3;
    padding: rem(20) 0;
    padding-bottom: 0;

     a {
        text-decoration: none;
    }

    &__inner {
        display: flex;
        align-items: center;   
        flex-direction: column;     
        justify-content: center;           
    }

    &__logo {
        max-width: rem(200);
    }

    &__links {
        flex: 1;
        display: flex;
        justify-content: center;
        gap: rem(20);     
        margin-top: rem(15);  
    }

    &__bottom-bar {       
        margin-top: rem(15);
        background-color: darken($color2, 5%);
        padding: rem(10) 0;
        font-size: rem(14);
    }

    &__bottom-bar-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>