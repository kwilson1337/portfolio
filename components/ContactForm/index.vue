<template>
    <div class="kw-contact-form">
        <div class="kw-contact-form__inner">
            <form>
                <div class="kw-contact-form__form-content">
                    <div class="kw-contact-form__row">
                        <input type="text" placeholder="First name">
                        <input type="text" placeholder="Last name">
                    </div>
                    
                    <div class="kw-contact-form__row">
                        <input type="email" placeholder="Email">
                    </div>

                    <div class="kw-contact-form__row">
                        <textarea placeholder="Tell us about your project"></textarea>
                    </div>

                    <div class="kw-contact-form__row">
                        <button class="kw-button --button4">Submit</button>
                    </div>
                </div>            
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.kw-contact-form {

    &__row {
        display: flex;
        gap: rem(20);

        & + .kw-contact-form__row {
            margin-top: rem(20);
        }

        textarea {
            min-height: rem(150);
        }

        button {
            width: 100%;
            cursor: pointer;
        }
    }
}
</style>