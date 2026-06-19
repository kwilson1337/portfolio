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
    
    &__grid {
        display: grid;
        // grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-template-columns: repeat(3, 1fr);
        gap: rem(15)
    }
}
</style>