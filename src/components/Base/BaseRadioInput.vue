<template>
    <div id="RadioInputField">
        RESULT: {{  modelValue }}
        <label :for="id+'Lable'"> {{ label }}</label>
        <div v-for="(value, key) in radioInputs" :key="value">
            <label :for="value">{{ value }}</label>
            <BaseInput
                :id="value"
                type="radio"
                :name="value"
                :value="value"
                :checked="value === modelValue"
                :model-value="modelValue"
                @input="updateValue"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue';

interface Props {
    id: string;
    label: string;
    modelValue?: string;
    radioInputs: string[];
}

defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits('update:modelValue', target.value);
}
</script> 