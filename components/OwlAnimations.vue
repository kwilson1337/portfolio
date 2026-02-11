<template>
  <div class="owl-animations">
    <div class="owl-animations__inner">
      <div class="owl-animations__single">
        <Bird />
      </div>     
    </div>
  </div>
</template>

<script setup>
import Bird from '@assets/svg/hawk-profile.svg'
import { useHawkAnimations } from '@/composables/useHawkAnimations'

const { flapWings, hawkToK } = useHawkAnimations()
onMounted(() => {
	flapWings()
	hawkToK()
})
</script>

<style lang="scss" scoped>
.owl-animations {

    &__inner {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }  
}
</style>
