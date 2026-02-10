<template>
  <div class="name-animation">
    <div class="name-animation__inner">
      <h1>Kyle</h1>
    </div>
  </div>
</template>

<script setup>
import { useNameAnimations } from '@/composables/useNameAnimations.js'

const { nameStuff } = useNameAnimations()
onMounted(() => {
	nameStuff()
})
</script>

<style lang="scss" scoped>
.name-animation {
    &__inner {
        color: #fff;
        text-align: center;
    }
}
</style>
