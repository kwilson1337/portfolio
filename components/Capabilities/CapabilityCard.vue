<template>
    <div class="kw-capability-card">
        <div class="kw-capability-card__inner">
            <div class="kw-capability-card__icon">                                 
                <Icon :name="cardDetails.icon" />
            </div>
            <div class="kw-capability-card__title">
                <h3>{{ cardDetails.title }}</h3>
            </div>
            <div class="kw-capability-card__copy">
                {{ cardDetails.desc }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    cardDetails: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="scss" scoped>
.kw-capability-card {
    background-color: $color1;
    border-radius: rem(8);

    &__inner {
        padding: rem(20); 
        color: $color4;       
    }

    &__icon {
        font-size: rem(32);
        color: $color5;
    }
}
</style>