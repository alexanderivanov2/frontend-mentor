<template>
    <div :id="`${inputField.id}` + 'InputField'" :class="{
        'error-input-field': !input.isValid,
    }">
        <BaseLabel :for="inputField.id" v-if="inputField.label">
            {{ inputField.label }}
        </BaseLabel>
        <div class="input-wrapper">
            <BaseInput :id="inputField.id" :type="type" v-model="input.value" @input="handleInput" @focus="handleFocus"
                @blur="handleBlur"  :placeholder="inputField.placeholder"/>
        </div>
        <BaseErrorMessage v-if="!input.isValid">
            <p class="error-message">{{ input.errorMessage }}</p>
        </BaseErrorMessage>
    </div>
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue';
import BaseLabel from './BaseLabel.vue';
import BaseErrorMessage from './BaseErrorMessage.vue';
import { BaseInputType } from '../../types/inputTypes';

interface Props {
    inputField: {
        id: string;
        label: string;
        placeholder?: string;
    },
    type?: string;
    input: BaseInputType;
    handleInput?: (e: Event) => void;
    handleFocus?: (e: Event) => void;
    handleBlur?: (e: Event) => void;
}

const props = withDefaults(defineProps<Props>(), {
    inputField: () => {
        return { id: '', label: '', type: 'text', placeholder: '' }
    },
    type: 'text',
    inputHandlers: () => {
        return {

        }
    },
    handleInput: (e: Event) => {},
    handleFocus: (e: Event) => {},
    handleBlur: (e: Event) => {},
});
</script>