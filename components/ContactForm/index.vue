<template>
    <div class="kw-contact-form">
        <div class="kw-contact-form__inner">
            <form ref="contactForm">
                <div class="kw-contact-form__form-content">
                    <div class="kw-contact-form__row">
                        <input 
                            v-model="formFields.firstName" 
                            required 
                            type="text" 
                            placeholder="First name *"
                            :disabled="isLoading"
                        >
                        <input 
                            v-model="formFields.lastName" 
                            required 
                            type="text" 
                            placeholder="Last name *"
                            :disabled="isLoading"
                        >
                    </div>
                    
                    <div class="kw-contact-form__row">
                        <input 
                            v-model="formFields.email" 
                            required 
                            type="email" 
                            placeholder="Email *"
                            :disabled="isLoading"
                        >
                    </div>

                    <div class="kw-contact-form__row">
                        <textarea 
                            v-model="formFields.details" 
                            required 
                            placeholder="Tell us about your project *"
                            :disabled="isLoading"
                        ></textarea>
                    </div>

                    <div class="kw-contact-form__row">                        
                        <button 
                            @click.prevent="sendMail" 
                            class="kw-button --button4"
                            :disabled="disableSubmit"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>

                    <div v-if="responseMessage" class="kw-contact-form__row --message">
                        <p>{{ responseMessage }}</p>
                    </div>
                </div>            
            </form>
        </div>
    </div>
</template>

<script setup>
const formFields = ref({
    firstName: '',
    lastName: '',
    email: '',
    details: ''
})

const isLoading = ref(false)
const responseMessage = ref('')
const contactForm = ref()

const disableSubmit = computed(() => {        
    return !isLoading.value &&
            !formFields.value.firstName &&
            !formFields.value.lastName &&
            !formFields.value.email &&
            !formFields.value.details            
})

const sendMail = async () => {    
    if(!contactForm?.value.checkValidity()) return 

    try {
        isLoading.value = true

        const response = await $fetch('/api/send-email', {
            method: 'POST',
            body: {
                firstName: formFields.value.firstName,
                lastName: formFields.value.lastName,        
                details: formFields.value.details,
                email: formFields.value.email
            },
        })    

        responseMessage.value = response.statusMessage
        isLoading.value = false

    } catch (error) {    
        responseMessage.value = error.statusMessage    
    } finally {
        formFields.firstName = ''
        formFields.lastName = ''
        formFields.email = ''
        formFields.details = ''
    }
}
</script>

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

        &.--message {
            text-align: center;

            p {
                width: 100%;
                color: $color3;
                margin: 0px;
                padding: rem(8) rem(16);
                background-color: $color2;   
                border-radius: rem(20);             
            }
        }
    }
}
</style>