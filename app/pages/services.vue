<template>
    <div class="kw-service-page">
        <Banner
            title="Our Expertise"
            sub-title="Services in Orlando"
            :banner-classes="['--color-color2', '--background-color1']"
        />

        <ServicePageLoop :capabilities="formatedCapabilities" />
        <ThinCTA />
    </div>
</template>

<script setup>
import Banner from '@/components/Banner'
import { capabilities } from '@/constants'
import ServicePageLoop from '@/components/Capabilities/ServicePageLoop.vue'
import ThinCTA from '@/components/ThinCta'

const formatedCapabilities = computed(() => capabilities.flatMap(item => [{...item, showLink: false}]))
</script>