<template>
    <form class="request-access-form">
        <input :value="email" @input="onInput" placeholder="Email address"
        />
        <button
            type="submit"
            @click.prevent.stop="requestAccess"
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
    <div>
        <button
            type="submit"
            @click.prevent.stop="requestAccess"
        >TEST</button>
    </div>
</template> 


<script setup>
import { ref } from 'vue'

const isValid = ref(null)
const requestMessage = ref('')
const email = ref('')

const onInput = (e) => {
    email.value = e.target.value
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