<template>
    <form class="request-access-form" @submit.prevent="requestAccess">
        <input :value="email" @input="onInput" @blur="onBlur" placeholder="Email address"
        />
        <button
            type="submit"
        >
            Request Access
        </button>
        <p 
            v-if="requestMessage"
            class="request-access-response-message"
            :class="{
                'error-message': !isValid,
            }"
        >{{ requestMessage }}</p>
    </form>
</template> 


<script setup>
import { ref } from 'vue'

const isValid = ref(null)
const requestMessage = ref('')
const email = ref('')

const onInput = (e) => {
    email.value = e.target.value
}
const onBlur = (e) => {
    console.log('onBlur')
}

const requestAccess = () => {
    emailValidation()
}

const emailValidation = () => {
    const invalidMsg = 'Oops! Please check your Email.'
    const successMsg = 'Request sent! Please check your email.'
    
    if(typeof email.value !== 'string') {
        requestMessage.value = invalidMsg
        isValid.value = false;
        return
    }
    
    const emailRegex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const isValidEmail = email.value.match(emailRegex)
 
    isValid.value = !!isValidEmail
    requestMessage.value = isValidEmail ? successMsg : invalidMsg
}
</script>