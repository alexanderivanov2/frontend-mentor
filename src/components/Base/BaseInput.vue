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
import { BaseInputType } from '../../types/inputTypes';
interface Props {
    id: string,
    type: string,
    modelValue: string | BaseInputType,
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