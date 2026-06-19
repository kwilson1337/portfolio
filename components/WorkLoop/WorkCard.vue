<template>
    <div class="kw-work-card">
        <div class="kw-work-card__inner">            
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
        padding: rem(20);
        border-radius: rem(8);
        transition: $transition;

         &:hover {        
            transform: translateY(-2px);
            box-shadow: 2px 2px 15px -2px rgba($color2, .4);
        }
    }

    &__card-content {
        display: flex;
        flex-direction: column;
        gap: rem(15);
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