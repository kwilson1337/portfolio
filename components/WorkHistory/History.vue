<template>
    <div class="history">
        <Container>
            <h1 ref="history">{{ historyData.name }}</h1>
        </Container>        
    </div>
</template>

<script setup>
import { useWorkHistoryAnimations } from '@/composables/useWorkHistoryAnimations'
import Container from '@/components/Container'

defineProps({
	historyData: {
		type: Object,
		default: () => ({})
	}
})
const { 
	setWorkHistoryRefs,     
	animateHistory
} = useWorkHistoryAnimations()

const history = ref(null)
watch(history, () => {
	setWorkHistoryRefs({
		history: history.value
	})

	animateHistory()
})
</script>

<style lang="scss" scoped>
.history {
    height: 200vh;
    margin-top: -60px;
    background-color: rebeccapurple;
    border-top: 5px solid $color2;
}
</style>