<template>
    <section ref="mainContainer" class="work-history">
        <Container>
            <div class="work-history__inner">
                <div ref="companyLogo" class="work-history__col --left">
                    <NuxtImg src="images/work-history-images/bc-logo-2.jpg" />
                </div>
                <div class="work-history__col --right">
                    <h1>work history</h1>
                </div>
            </div>
        </Container>        
    </section>
</template>

<script setup>
import Container from '@/components/Container'
import { useWorkHistoryAnimations } from '@/composables/useWorkHistoryAnimations'

const mainContainer = ref(null)
const companyLogo = ref(null)
const computedRefs = computed(() => {

	return {
		mainContainer,
		companyLogo
	}
})

const { setWorkHistoryRefs, setScrollTrgger } = useWorkHistoryAnimations()
watch(() => computedRefs, () => {    
	const { mainContainer, companyLogo } = computedRefs.value    
	setWorkHistoryRefs({
		mainContainer: mainContainer.value,
		companyLogo: companyLogo.value
	})

	setScrollTrgger()
}, { immediate: true, deep: true })
</script>

<style lang="scss" scoped>
.work-history {
    margin-bottom: 300px;
    transition: background-image 0.1s ease-out;

    &__inner {
        display: flex;
        flex-wrap: nowrap;        
    }

    &__col {
        flex-basis: 70%;        

        &.--left {
            flex-basis: 70%;
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