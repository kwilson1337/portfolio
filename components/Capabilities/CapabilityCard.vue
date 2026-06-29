<template>
    <div
        :id="cardId"
        class="kw-capability-card"
        :class="{ '--active' : props.cardDetails.isActive }"
        @click.prevent="emits('capabilityCard:cardClick', cardId)"
    >
        <div class="kw-capability-card__inner">
            <div class="kw-capability-card__icon">
                <Icon :name="props.cardDetails.icon" />
            </div>
            <div class="kw-capability-card__title">
                <h3>{{ props.cardDetails.title }}</h3>
            </div>
            <div class="kw-capability-card__copy">
                {{ props.cardDetails.desc }}
            </div>
            <div v-if="props.cardDetails.showLink" class="kw-capability-card__link">
                <NuxtLink :to="props.cardDetails.link" class="kw-button --button3">
                    Learn more
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const emits = defineEmits(['capabilityCard:cardClick'])
const props = defineProps({
	cardDetails: {
		type: Object,
		default: () => ({})
	}
})

const cardId = computed(() => props.cardDetails.title.replace(/\s/g, ''))
</script>

<style lang="scss" scoped>
.kw-capability-card {
    background-color: $color1;
    border-radius: rem(8);
    transition: $transition;

    &.--active {
        transform: translateY(-25px);
    }

    &__inner {
        padding: rem(20);
        color: $color4;
    }

    &__icon {
        font-size: rem(32);
        color: $color5;
    }

    &__link {
        margin-top: rem(15);
    }
}
</style>