<template>
    <section class="kw-contact-page">
        <div class="kw-contact-page__bg"></div>
        <Container>
             <div class="kw-contact-page__inner">
                <div class="kw-contact-page__grid">
                    <div class="kw-contact-page__col --left">
                        <FlowerAnimation :is-small="false" />
                    </div>
                    <div class="kw-contact-page__col --right">
                        <h1>Let's grow Together</h1>
                        <p>We bridge the gap between architectural precision and organic vitality. Reach out to start your sustainable design journey.</p>
                        <ContactForm />
                    </div>
                </div>            
            </div>   
        </Container>            
    </section>
    
</template>

<script setup>
import ContactForm from '@/components/ContactForm'
import FlowerAnimation from '@/components/FlowerAnimation'
import Container from '@/components/Container'
</script>

<style lang="scss" scoped>
.kw-contact-page {
    padding: 0px;
    padding-bottom: rem(80);    
    position: relative;

    &__bg {
        background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: .2;
        z-index: -1;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);        
        height: 100vh;

        @include mq('sm') {
            display: flex;
            flex-direction: column-reverse;
            height: auto;
        }
    }

    &__col {

        &.--left {
            @include mq('sm') {
                // display: none;
            }
        }

        &.--right {
            padding: rem(60);
            background-color: $color1;
            border-radius: 8px;

            @include mq('sm') {
                margin-top: rem(40);
            }

            h1,
            p {
                color: $color2;
            }
        }
    }
}
</style>