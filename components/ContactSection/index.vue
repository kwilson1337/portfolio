<template>
    <div class="kw-contact-section">
        <Container>
            <div class="kw-contact-section__inner">
                <div class="kw-contact-section__grid">
                    <div class="kw-contact-section__col --left">                                                
                        <FlowerAnimation :is-small="true" />                        
                    </div>
                    <div class="kw-contact-section__col --right">
                        <h2 class="h1">{{ props.title }}</h2>
                        <p>{{ props.desc }}</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm'
import Container from '@/components/Container'
import FlowerAnimation from '@/components/FlowerAnimation'

const props = defineProps({
    title: {
        type: String,
        default: `Let's Grow Together`
    },
    desc: {
        type: String,
        default: `We bridge the gap between architectural precision and organic vitality. Reach out to start your sustainable design journey.`
    }
})
</script>

<style lang="scss" scoped>
.kw-contact-section {

    &__grid {
        display: flex;
        align-items: center;
    }

    &__col {
        flex-basis: 30%;

        &.--right {
            flex-basis: 70%;
        }
    }
}
</style>