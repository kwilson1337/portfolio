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
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &__title {
        position: relative;

        h1 {
            @include rfs(60, 180);
            text-align: center;
            transform-style: preserve-3d;
            margin: 0px;
            position: relative;
        }
    }
}
</style>