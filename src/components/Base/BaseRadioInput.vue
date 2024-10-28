<template>
    <div id="RadioInputField">
        <label :for="id+'Lable'"> {{ label }}</label>
        <div v-for="(value, key) in radioInputs" :key="value"
            class="radio-input-wrapper"
            :class="{
                'checked': value === input.value
            }"
        >
            <label :for="value">{{ value }}</label>
            <BaseInput
                :id="value"
                type="radio"
                :name="value"
                :value="value"
                :checked="value === input.value"
                :model-value="input"
                @input="updateValue"
            />
        </div>
        <BaseErrorMessage v-if="!input.isValid">
            <p class="error-message">{{ input.errorMessage }}</p>
        </BaseErrorMessage>
    </div>
</template>

<script setup lang="ts">
import { BaseInputType } from '../../types/inputTypes';
import BaseInput from './BaseInput.vue';
import BaseErrorMessage from './BaseErrorMessage.vue';

interface Props {
    id: string;
    label: string;
    input: BaseInputType;
    radioInputs: string[];
}

const props = defineProps<Props>()

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  props.input.value = target.value

  if (props.input?.isValid === false) {
    props.input.isValid = true
    props.input.errorMessage = ''
  }
}
</script> 