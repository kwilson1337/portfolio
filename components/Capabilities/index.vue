<template>
    <section class="kw-capabilities">
         <BackgroundTexture />

        <div class="kw-capabilities__inner">
            <Container>
                <div class="kw-capabilities__title">
                    <h2 class="h1">{{ props.sectionTitle }}</h2>
                </div>

                <div class="kw-capabilities__grid">
                    <CapabilityCard
                        v-for="card in capabilities"
                        :key="card.title"
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
import BackgroundTexture from '@/components/BackgroundTexture'
import { capabilities } from '@/constants'

const props = defineProps({
	sectionTitle: {
		type: String,
		default: 'Capabilities'
	}
})


</script>

<style lang="scss" scoped>
.kw-capabilities {
    background-color: $color2;
    position: relative;
    z-index: 0;

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