<template>
  <div class="loading-animation">
    <div class="loading-animation__inner">
        <!-- Changed viewbox to viewBox -->
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(50, 50)">
                <!-- Central Bud -->
                <circle cx="0" cy="0" fill="#E2725B" r="4">
                <!-- Changed animate and attributename to camelCase -->
                <animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="3.5;4.5;3.5" />
                </circle>

                <!-- Rotating Flower Wheel -->
                <g>
                <!-- Changed animatetransform, attributename, and repeatcount to camelCase -->
                <animateTransform
                    attributeName="transform"
                    dur="4s"
                    from="0"
                    repeatCount="indefinite"
                    to="360"
                    type="rotate"
                />
                <!-- 6 Petals -->
                <path d="M 0,-6 Q 10,-20 0,-30 Q -10,-20 0,-6" fill="#E2725B" opacity="0.9" transform="rotate(0)"/>
                <path d="M 0,-6 Q 10,-20 0,-30 Q -10,-20 0,-6" fill="#E2725B" opacity="0.9" transform="rotate(60)"/>
                <path d="M 0,-6 Q 10,-20 0,-30 Q -10,-20 0,-6" fill="#E2725B" opacity="0.9" transform="rotate(120)"/>
                <path d="M 0,-6 Q 10,-20 0,-30 Q -10,-20 0,-6" fill="#E2725B" opacity="0.9" transform="rotate(180)"/>
                <path d="M 0,-6 Q 10,-20 0,-30 Q -10,-20 0,-6" fill="#E2725B" opacity="0.9" transform="rotate(240)"/>
                <path d="M 0,-6 Q 10,-20 0,-30 Q -10,-20 0,-6" fill="#E2725B" opacity="0.9" transform="rotate(300)"/>
                </g>

                <!-- Outer Loading Ring -->
                <circle cx="0" cy="0" fill="none" opacity="0.3" r="40" stroke="#E2725B" stroke-dasharray="251.2" stroke-dashoffset="251.2" stroke-width="1.5">
                <!-- Changed animate and attributename to camelCase -->
                <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="251.2;0" />
                </circle>
            </g>
        </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading-animation {

    &__inner {
        max-width: 100%;
        min-width: rem(80);
        width: 100%;
        height: auto;
    }
}
</style>