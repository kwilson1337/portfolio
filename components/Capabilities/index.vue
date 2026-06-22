<template>
    <section class="kw-capabilities">
        <div class="kw-capabilities__bg"></div>

        <div class="kw-capabilities__inner">
            <Container>
                <div class="kw-capabilities__title">
                    <h2 class="h1">{{ props.sectionTitle }}</h2>
                </div>

                <div class="kw-capabilities__grid">
                    <CapabilityCard 
                        v-for="card in capabilities"
                        :card-details="card"
                    />
                </div>
            </Container>
        </div>
    </section>
</template>

<script setup>
import Container from '@/components/Container'
import CapabilityCard from './CapabilityCard.vue';

const props = defineProps({
    sectionTitle: {
        type: String,
        default: 'Capabilities'
    }
})

const capabilities = [
    {
        icon: 'mdi:computer',
        title: 'Digital Ecosystems',
        desc: 'Creating fluid, scalable design frameworks that adapt to any environment, from mobile screens to complex enterprise platforms.'
    },
    {
        icon: 'mdi:computer',
        title: 'Organic Brand Strategy',
        desc: 'Creating fluid, scalable design frameworks that adapt to any environment, from mobile screens to complex enterprise platforms.'
    },
    {
        icon: 'mdi:computer',
        title: 'Adaptive Design Systems',
        desc: 'Creating fluid, scalable design frameworks that adapt to any environment, from mobile screens to complex enterprise platforms.'
    }
]
</script>

<style lang="scss" scoped>
.kw-capabilities {
    background-color: $color2;
    position: relative;

    &__bg {
        background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: .2;
        z-index: 0;
    }

    &__inner {
        position: relative;
        z-index: 1;
    }

    &__title {
        margin-bottom: rem(40);

        h2 {
            color: $color1;
            margin: 0px;
            @include title-decorator($color3);
        }
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        gap: rem(15);
    }
}
</style>