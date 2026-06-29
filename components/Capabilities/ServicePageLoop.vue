<template>
    <section class="kw-service-page-loop">
        <Container>
            <div class="kw-service-page-loop__loop">
                <div class="kw-service-page-loop__grid">
                    <CapabilityCard
                        v-for="item in services"
                        :key="item.title"
                        :card-details="item"
                        @capability-card:card-click="updateHashOnClick"
                    />
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup>
import Container from '@/components/Container'
import CapabilityCard from './CapabilityCard.vue'
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
	capabilities: {
		type: Array,
		default: () => []
	}
})

const route = useRoute()
const router = useRouter()
const services = ref(props.capabilities)

const updateHash = (hash) => {
	if(hash && route.hash) {
		services.value.forEach(item => item.isActive = false)

		const active = services.value.find(item => `#${item.title.replace(/\s/g, '')}` === route.hash)
		active.isActive = true
	}
}

watch(() => route.hash, () => {
	updateHash(route.hash)
})

onMounted(() => {
	updateHash(route.hash)
})

const updateHashOnClick = (targetHash) => {
	router.replace({ hash: `#${targetHash}` })
}
</script>

<style lang="scss" scoped>
.kw-service-page-loop {
    background-color: $color1;

    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        gap: rem(15);

        .kw-capability-card {
            background-color: darken($color1, 3%);
            border: 1px solid darken($color1, 10%);
            padding: rem(80) 0;
            border-radius: rem(40);
            cursor: pointer;
        }
    }
}
</style>