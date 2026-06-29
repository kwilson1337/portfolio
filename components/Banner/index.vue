<template>
    <section class="kw-banner" :class="[...bannerClasses]">
        <div class="kw-banner__inner">
            <Container>
                 <div class="kw-banner__sub-title">
                    <h2>{{ subTitle }}</h2>
                </div>
                <div class="kw-banner__title">
                    <h1>{{ title }}</h1>
                </div>
            </Container>
        </div>
    </section>
</template>

<script setup>
import Container from '@/components/Container'
defineProps({
	title: {
		type: String,
		default: ''
	},
	subTitle: {
		type: String,
		default: ''
	},
	bannerClasses: {
		type: Array,
		default: () => []
	}
})
</script>

<style lang="scss" scoped>
.kw-banner {

     h1 {
            font-size: rem(60);
        }

    &__sub-title {

        h2 {
            font-size: rem(14);
            // font-weight: 400;
            color: $color5;
        }
    }
}
</style>