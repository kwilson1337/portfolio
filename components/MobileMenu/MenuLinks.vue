<template>
    <div class="menu-links">
        <div class="menu-links__links">
            <ul>
                <li 
                    v-for="link in siteLinks"
                    :key="link.title"
                    ref="menuLinks"
                    class="h1"
                    @click="emits('menuLinks:click',link.url)"
                >
                    {{ link.title }}                     
                </li>  
            </ul>
        </div>
    </div>
</template>

<script setup>
import { siteLinks } from '@/constants'
import { useMobileMenu } from '@/store/mobileMenu'

const emits = defineEmits(['menuLinks:click'])
const menuLinks = ref(null)

const { setMenuLinkRefs } = useMobileMenu()
watch(menuLinks, () => {
	setMenuLinkRefs(menuLinks.value)
})
</script>

<style lang="scss" scoped>
.menu-links {
    &__links {     
        color: $color1;  

         ul {
            padding-left: 0px;
            list-style-type: none;
            text-align: center;

            li {
                cursor: pointer;

                & + li {
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>