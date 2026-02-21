<template>
    <section ref="mainContainer" class="work-history">
        <Container>
            <div class="work-history__inner">               
                <WorkHistoryIntro />                               
            </div>
        </Container>        
        <History 
            v-for="item in historyData" 
            :key="item.title"
            :history-data="item"
        />
    </section>
</template>

<script setup>
import Container from '@/components/Container'
import WorkHistoryIntro from './WorkHistoryIntro.vue'
import History from './History.vue';

const historyData = [
	{
		name: 'Nurocor'
	},
	{
		name: 'Stova'
	},
	{
		name: 'Brandcoders'
	}
]
</script>

<style lang="scss" scoped>
.work-history {            
    max-width: 100%;
    overflow: hidden;
    border-top: 1px solid $color1;    
}
</style>