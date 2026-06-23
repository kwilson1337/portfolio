<template>
    <section class="kw-work-loop">        
        <Container>
            <div class="kw-work-loop__inner">            
                <div class="kw-work-loop__grid">
                    <WorkCard 
                        v-for="item in workLoop"
                        :key="item.title"
                        :work-data="item"
                    />             
                </div>

                <div class="kw-work-loop__view-more">
                    <a href="#" class="kw-button --button3">View all</a>
                </div>
            </div>
        </Container>        
    </section>
</template>

<script setup>
import Container from '@/components/Container'
import WorkCard from './WorkCard.vue';

const workLoop = [
    {
        title: 'Therapy With Andy',
        desc: 'Andy is a local therapist in Orlando Fl',
        link: '/'
    },
    {
        title: 'Therapy With Andy',
        desc: 'Andy is a local therapist in Orlando Fl',
        link: '/'
    },
    {
        title: 'Therapy With Andy',
        desc: 'Andy is a local therapist in Orlando Fl',
        link: '/'
    },
    {
        title: 'Therapy With Andy',
        desc: 'Andy is a local therapist in Orlando Fl',
        link: '/'
    }
]
</script>

<style lang="scss" scoped>
.kw-work-loop {
    background-color: $color1;  
    padding-top: rem(20);
    position: relative;

    &::after {
        content: "";
        position: absolute;
        background: linear-gradient(to top, rgb(23.2151162791, 37.2848837209, 28.1395348837), transparent);
        filter: blur(8px);
        bottom: rem(-20);
        width: 100%;
        height: 2.5rem;
    }
    
    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));        
        gap: rem(15);
    }

    &__view-more {
        text-align: center;
        margin-top: rem(20);
    }
}
</style>