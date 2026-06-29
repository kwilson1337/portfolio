<template>
    <section class="kw-thin-cta">
        <Container>
            <div class="kw-thin-cta__inner">
                <div class="kw-thin-cta__content"><p class="h1">{{ props.title }}</p></div>
                <div class="kw-thin-cta__link">
                    <a :href="props.buttonInfo.link" class="kw-button --button3">
                        {{ props.buttonInfo.title }}
                    </a>
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup>
import Container from '@/components/Container'

const props = defineProps({
	title: {
		type: String,
		default: 'Start your new project today'
	},
	buttonInfo: {
		type: Object,
		default: () => ({
			title: 'Start project',
			link: '#'
		})
	}
})
</script>

<style lang="scss" scoped>
.kw-thin-cta {
    padding: rem(20) 0px;
    background-color: $color3;

    &__inner {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: rem(20);
        color: $color4;

        @include mq('md') {
            display: block;
            text-align: center;
        }

        .h1 {
            margin: 0px;
            font-size: 2rem;

            @include mq('md') {
                margin-bottom: rem(15);
            }
        }
    }
}
</style>