<template>
    <div class="kw-work-card">
        <div class="kw-work-card__inner">
            <div class="kw-work-card__image" :style="{ 'background-color': props.workData.accentColor }">
                <img :src="props.workData.image" :alt="props.workData.title">
            </div>
            <div class="kw-work-card__card-content">
                <div class="kw-work-card__title">
                    <h4>{{ props.workData.title }}</h4>
                </div>

                <div class="kw-work-card__desc">
                    <p>{{ props.workData.desc }}</p>
                </div>

                <div class="kw-work-card__link">
                    <a href="#" class="kw-button --button1">Explore project</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
        border-radius: rem(20);
        transition: $transition;

         &:hover {
            transform: translateY(-2px);
            box-shadow: 2px 2px 15px -2px rgba($color2, .4);
        }
    }

    &__image {
        position: relative;
        height: rem(100);
        padding: rem(15);
        border-top-left-radius: rem(20);
        border-top-right-radius: rem(20);

        img {
            width: 85%;
            object-fit: contain;
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    &__card-content {
        display: flex;
        flex-direction: column;
        gap: rem(15);
         padding: rem(20);
    }

    &__title,
    &__desc {
        p,
        h4 {
            margin: 0px;
            color: $color4;
        }
    }
}
</style>