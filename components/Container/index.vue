<template>
    <div class="container">
        <div class="container__inner">
            <slot />
        </div>
    </div>    
</template>

<style lang="scss" scope>
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    &__inner {
        max-width: 1400px;
    }
}
</style>