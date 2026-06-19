<template>
    <div class="kw-work-card">
        <div class="kw-work-card__inner">
            <Container>
                <div class="kw-work-card__title">
                    <h4>{{ props.workData.title }}</h4>
                </div>

                <div class="kw-work-card__desc">
                    <p>{{ props.workData.desc }}</p>
                </div>
            </Container>
        </div>
    </div>
</template>

<script setup>
import Container from '@/components/Container'

const props = defineProps({
    workData: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="scss" scoped>
.kw-work-card {
    color: $color2;

    &__inner {
        background-color: $white;
        padding: rem(20);
        border-radius: rem(8);
    }

    &__title,
    &__desc {
        p,
        h4 {
            margin: 0px;
            margin-bottom: rem(15);
        }
    }
}
</style>