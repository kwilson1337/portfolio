<template>
    <div ref="historyContainer" class="history">
        <Container>
			<div ref="workHistoryDate" class="history__date">
				<h3>{{ historyData.date }}</h3>
			</div>
			<div class="history__timeline"/>

            <h1>{{ historyData.name }}</h1>
        </Container>        
    </div>
</template>

<script setup>
import { useWorkHistoryAnimations } from '@/composables/useWorkHistoryAnimations'
import Container from '@/components/Container'
import { onUnmounted } from 'vue'

const props = defineProps({
	historyData: {
		type: Object,
		default: () => ({})
	}
})
const { 
	setWorkHistoryRefs,     
	animateHistory,
	cleanUpAllAnimations
} = useWorkHistoryAnimations()

const historyContainer = ref(null)
const workHistoryDate = ref(null)
watch(historyContainer, () => {
	setWorkHistoryRefs({		
		historyContainer: historyContainer.value,
		workHistoryDate: workHistoryDate.value
	})

	animateHistory({
		containerBackgroundColor: props.historyData.containerBackground,		
		dateBackgroundColorStart: props.historyData.historyDateBackgroundStart,
		dateBackgroundColorEnd: props.historyData.historyDateBackgroundEnd
	})
})

onUnmounted(cleanUpAllAnimations)
</script>

<style lang="scss" scoped>
.history {
    height: 200vh;   
	position: relative;
	padding: rem(45) 0px;

	h1 {
		margin: 0px;
	}

	&__date {
		max-width: rem(250);
		max-height: rem(250);
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: transparent;
        border: 5px solid $color1;
        position: absolute;
        top: -20px;
        text-align: center;
        display: flex;        
        align-items: center;
        justify-content: center;  
		left: 50%;   
		right: 50%;
		transform: translate(-50%, -50%);
		        
        h3 {
            @include rfs(36, 48);			
        }
	}

	&__timeline {
		width: 5px;
		background-color: $color1;
		position: absolute;		
		left: 50%;
		transform: translateX(-50%);
		height: calc(100% - 230px);
		top: 105px;	
	}
}
</style>