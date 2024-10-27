<template>
    <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeHolder"
        @input="useVModel ? handleInput($event) : null"
    >
</template>

<script setup lang="ts">
import { Ref } from 'vue'
interface Props {
    id: string,
    type: string,
    modelValue: string | Ref<string>,
    placeHolder?: string,
    useVModel?: boolean,
}

withDefaults(defineProps<Props>(), {
    modelValue: '',
    placeHolder: '',
    useVModel: false,
})
const emit = defineEmits(['update:modelValue'])

const handleInput = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>


<!-- 
const validateInput = (value: string, data?: string | null) => {
    if (value.length > props.max && data) return false  

    if (props.validate && value) {
        return props.validate.test(value)
    }

    return true
}

const handleInput = (e: InputEvent | Event ) => {
    const value = (e?.currentTarget as HTMLInputElement)?.value

    if (props.type === 'radio') {
        emit('update:modelValue', value)
        return 
    }

    const data = e instanceof InputEvent ? e?.data : '' 

    const isValidInput = validateInput(value, data)
    
    if (props.strict) {
        if(isValidInput) {
            emit('update:modelValue', value)
        } else if(input.value) {
            input.value.value = props.modelValue ? props.modelValue : null
        }
    } else {
        emit('update:modelValue', value)
    }
    emit('isValid', isValidInput)
}

const handleBlur = (e: Event) => {
    if (props.formater && typeof props.formater == 'function') {
        const value = props.modelValue && props.formater(props.modelValue) 
        emit('update:modelValue', value)
        if (input.value && value) {
            input.value.value = value
        }
    }
    const value = (input.value && input.value.value) || ''
    const isValidInput = validateInput(value)
    emit('blurInput', props.id, props.modelValue)
    emit('isValid', isValidInput)
} 

const handleFocus = (e: Event) => {
    emit('focusInput', props.id, props.modelValue)
}
</script> -->