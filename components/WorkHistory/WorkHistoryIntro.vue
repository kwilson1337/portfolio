<template>
    <div class="work-history-intro">
        <div class="work-history-intro__title">
            <h1 ref="workHistoryTitle">Work History</h1>
        </div>
    </div>
</template>

<script setup>
import { useWorkHistoryAnimations } from '@/composables/useWorkHistoryAnimations'

const { 
	setWorkHistoryRefs,     
	animateTitleInOnScroll
} = useWorkHistoryAnimations()

const workHistoryTitle = ref(null)
watch(workHistoryTitle, () => {    
	setWorkHistoryRefs({
		workHistoryTitle: workHistoryTitle.value        
	})

	animateTitleInOnScroll()
}, { deep: true })
</script>

<style lang="scss" scoped>
.work-history-intro {

    &__title {
        position: relative;        
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: rem(180);                   
            text-align: center;
            transform-style: preserve-3d;   
            margin: 0px;    
            position: relative;                          
        }
    }
}
</style>