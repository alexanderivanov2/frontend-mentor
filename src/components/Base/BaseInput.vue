<template>
    <input
        :id="id"
        ref="input"
        :type="type"
        :min-length="min"
        :max-length="max"
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
    >
</template>

<script setup lang="ts">
import { InputHTMLAttributes, ref } from 'vue';
const input = ref<HTMLInputElement | InputHTMLAttributes | null>(null);

const emit = defineEmits(['update:modelValue', 'focusInput', 'blurInput', 'isValid'])

interface Props {
    id: string,
    modelValue?: string | null,
    type: string,
    placeholder?: string,
    min?: number,
    max?: number,
    required?: boolean,
    validate?: RegExp,
    strict?: boolean
    formater?: (value:string) => string
}


const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    placeholder: '',
    min: 0,
    max: 30,
    required: false,
    strict: true,
})

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
</script>