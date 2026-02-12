<template>
    <div class="work-history">
        <Container>
            <div class="work-history__inner">
                <div class="work-history__col --left">
                    <NuxtImg src="images/work-history-images/bc-logo-2.jpg" />
                </div>
                <div class="work-history__col --right">
                    <h1>work history</h1>
                </div>
            </div>
        </Container>        
    </div>    
</template>

<script setup>
import Container from '@/components/Container'
</script>

<style lang="scss" scoped>
.work-history {

    &__inner {
        display: flex;
        flex-wrap: nowrap;        
    }

    &__col {
        flex-basis: 70%;        

        &.--left {
            flex-basis: 30%;
        }

        &.--right {
            text-align: center;
        }
    }

    img {
        max-width: 100%;
    }
}
</style>