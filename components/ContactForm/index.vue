<template>
    <div class="kw-contact-form">
        <div class="kw-contact-form__inner">            
            <form ref="contactForm">
                <div class="kw-contact-form__form-content">
                    <div class="kw-contact-form__row">
                        <div class="kw-contact-form__input-container">                            
                            <input 
                                v-model="formFields.firstName" 
                                required 
                                type="text"      
                                id="firstName"      
                                placeholder
                                :disabled="isLoading"
                            >
                            <label for="firstName">First name <span>*</span></label>
                        </div>
                        <div class="kw-contact-form__input-container">                            
                            <input 
                                v-model="formFields.lastName" 
                                required 
                                id="lastName"
                                type="text"     
                                placeholder                        
                                :disabled="isLoading"
                            >
                            <label for="lastName">Last name <span>*</span></label>
                        </div>
                    </div>
                    
                    <div class="kw-contact-form__row">
                        <div class="kw-contact-form__input-container">                            
                            <input 
                                v-model="formFields.email" 
                                required 
                                type="email" 
                                id="emailAddy"
                                placeholder
                                :disabled="isLoading"
                            >
                            <label for="emailAddy">Email <span>*</span></label>
                        </div>
                    </div>

                    <div class="kw-contact-form__row">
                        <div class="kw-contact-form__input-container --details">                            
                            <textarea 
                                v-model="formFields.details" 
                                required 
                                id="details"
                                placeholder
                                :disabled="isLoading"
                            ></textarea>
                            <label for="details">Tell us about your project <span>*</span></label>
                        </div>
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

                    <div class="kw-contact-form__row --message">
                        <div v-if="isLoading" class="kw-contact-form__animation">
                            <LoadingAnimation />
                        </div>
                        
                        <p v-if="responseMessage">{{ responseMessage }}</p>
                    </div>
                </div>            
            </form>
        </div>
    </div>
</template>

<script setup>
import LoadingAnimation from '@/components/LoadingAnimation'

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
    return isLoading.value ||
            !formFields.value.firstName ||
            !formFields.value.lastName ||
            !formFields.value.email ||
            !formFields.value.details            
})

const sendMail = async () => {    
    if(!contactForm?.value.checkValidity()) return 

    try {
        responseMessage.value = ''
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

    } catch (error) {    
        responseMessage.value = error.statusMessage    
    } finally {
        isLoading.value = false
        formFields.value.firstName = ''
        formFields.value.lastName = ''
        formFields.value.email = ''
        formFields.value.details = ''
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

    &__input-container {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: rem(10);

        label {
            color: $color4;
            display: block;
            position: absolute;
            top: 50%;
            font-weight: 500;
            transform: translateY(-50%);
            left: rem(10);
            z-index: 0;         
            transition: .2s ease-in-out all;   
        }

        span {
            color: red;
        }

        &.--details {
            label {
                top: rem(15);
                transform: translateY(0);                
            }

            textarea:focus,
            textarea:not(:placeholder-shown) {
                & + label {
                    top: rem(-20);
                }
            }
        }

        input:focus,
        input:not(:placeholder-shown) {
            & + label {
                top: -10px;                
            }
        }
    }

    &__animation {
        max-width: rem(100);
        margin: auto;
    }
}
</style>