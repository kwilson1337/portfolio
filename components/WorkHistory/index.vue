<template>
    <section ref="mainContainer" class="work-history">
        <Container>
            <div class="work-history__inner">                                               
                <WorkHistoryIntro />                               
            </div>
        </Container>        
        <div class="work-history__items">
             <History 
                v-for="item in historyData" 
                :key="item.title"
                :history-data="item"
            />
        </div>       
    </section>
</template>

<script setup>
import Container from '@/components/Container'
import WorkHistoryIntro from './WorkHistoryIntro.vue'
import History from './History.vue';
import { 
	nurocor_historyDateGradStart,
	nurocor_historyDateGradEnd,
	nurocor_backgroundGrad,
	stova_backgroundGrad,
	stova_historyDateGradEnd, 
	stova_historyDateGradStart,
	brandCoders_backgroundGrad,
	brandCoders_historyDateGradStart,
	brandCoders_historyDateGradEnd
} from '@assets/styles/_color-exports.module.scss'

const historyData = [
	{
		name: 'Nurocor',
		date: '2023 - Present',
		historyDateBackgroundStart: nurocor_historyDateGradStart,
		historyDateBackgroundEnd: nurocor_historyDateGradEnd,
		containerBackground: nurocor_backgroundGrad

	},
	{
		name: 'Stova',
		date: '2021',
		historyDateBackgroundStart: stova_historyDateGradStart,
		historyDateBackgroundEnd: stova_historyDateGradEnd,
		containerBackground: stova_backgroundGrad
	},
	{
		name: 'Brandcoders',
		date: '2018',
		historyDateBackgroundStart: brandCoders_historyDateGradStart,
		historyDateBackgroundEnd: brandCoders_historyDateGradEnd,
		containerBackground: brandCoders_backgroundGrad
	}
]
</script>

<style lang="scss" scoped>
.work-history {            
    max-width: 100%;
    overflow: hidden;
    border-top: 1px solid $color1;    

    &__items {
        position: relative;
    }
}
</style>