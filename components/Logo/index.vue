<template>
    <div class="header-logo">
        <div class="header-logo__inner">
            <h2>
                <NuxtLink to="/">
                    <span>K</span>
                    <span>W</span>
                </NuxtLink>                
            </h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@mixin dotStyles {
    width: 8px;
    height: 8px;
    background-color: $color1;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.header-logo {
    position: relative;    
        
    h2 {
        font-size: rem(32);
        margin: 0px;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    span {
        position: relative;

        &::before {
            content: '';
            @include dotStyles;
            left: -15px;
        }

        & + span {
            margin-left: rem(20);   
            
            &::before {
                content: '';
                @include dotStyles;
                left: -15px;
            }
            
            &::after {
                content: '';
                @include dotStyles;
                right: -15px;
            }
        }
    }
}
</style>