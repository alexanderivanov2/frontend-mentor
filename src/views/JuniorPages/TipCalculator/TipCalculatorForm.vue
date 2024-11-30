<template>
    <div class="tip-calculator-form-wrapper">
        <form class="tip-calculator-form">
            <BaseFormInput 
                :input="billInput"
                :input-field="{
                    id: 'billInput',
                    label: 'Bill',
                    placeholder: '0',
                }"
                :handle-input="billInputHandleInput"
                :handle-focus="billInputHandleFocus"
                :handle-blur="billInputHandleBlur"
            />
            <div v-if="false">
                <p>SIZE {{ selectTipSizeInput  }}</p>
                <p>Custom size: {{ selectTipCustomSizeInput }}</p>
            </div>
            <div id="radioInputWrapper">
                    <BaseRadioInput 
                        :id="'selectTip'"
                        :label="'Select Tip %'"
                        :input="selectTipSizeInput"
                        :radio-inputs="selectTipSizes"
                        :handle-input="selectTipSizeInputHandleInput"
                    />
                    <BaseInput 
                        id="customSelectTip"
                        type="string"
                        placeholder="Custom"
                        v-model="selectTipCustomSizeInput.value"
                        @input="selectTipCustomSizeInputHandler"
                    />
            </div>
            <BaseFormInput 
                :input="peopleInput"
                :input-field="{
                    id: 'peopleInput',
                    label: 'Number of People',
                    placeholder: '0',
                }"
                :handle-input="peopleInputHandleInput"
                :handle-focus="peopleInputHandleFocus"
                :handle-blur="peopleInputHandleBlur"
            />
        </form>
    </div>
</template>

<script setup lang="ts">
import BaseFormInput from '../../../components/Base/BaseFormInput.vue';
import BaseRadioInput from '../../../components/Base/BaseRadioInput.vue';
import BaseInput from '../../../components/Base/BaseInput.vue';
import { watch, computed } from 'vue'
import { useInputHandlers } from '../../../composables/useInputHandlers';
import useValidator from '../../../composables/useValidator';
import { BaseInputConfig } from '../../../types/inputTypes';


const { createBaseInput, handleInput, handleFocusInputIntlDeformat, handleBlurInputIntlFormat, handleRadioInput } = useInputHandlers()
const { numberValidator } = useValidator()

interface Props {
    resetForm: boolean;
}
const props = defineProps<Props>()

const emit = defineEmits(['handleForm', 'handleResetForm'])

const configBillInput: BaseInputConfig = {
    strict: true,
    validator: numberValidator,
    validatorConfig: { min: 1, max: 100000000, maxLength: 16},
    errorHandling: {
        'errorMessage': 'Should be valid positive number'
    }
}
const billInput = createBaseInput()
const billInputHandleInput = handleInput(billInput, configBillInput)
const billInputHandleFocus = handleFocusInputIntlDeformat(billInput)
const billInputHandleBlur = handleBlurInputIntlFormat(billInput, {
    validator: numberValidator,
    validatorConfig: { min: 1, max: 100000000},
})

const selectTipSizeInput = createBaseInput()
const selectTipSizeInputHandleInput = handleRadioInput(selectTipSizeInput)
const selectTipSizes = ['5', '10', '15', '25', '50'];
const selectTipCustomSizeInput = createBaseInput()
const selectTipCustomSizeInputHandler = handleInput(selectTipCustomSizeInput, {
    strict: true,
    validator: numberValidator,
    validatorConfig: {
        min: 1,
        max: 100,
        maxLength: 5,
    }
})

const configPeopleInput: BaseInputConfig = {
    strict: true,
    validator: numberValidator,
    validatorConfig: { min: 1, max: 100000000, isInteger: true},
    errorHandling: {
        'errorMessage': 'Should be valid positive number'
    }
}

const peopleInput = createBaseInput()
const peopleInputHandleInput = handleInput(peopleInput, configPeopleInput)
const peopleInputHandleFocus = handleFocusInputIntlDeformat(peopleInput)
const peopleInputHandleBlur = handleBlurInputIntlFormat(peopleInput, {
    validator: numberValidator,
    validatorConfig: { min: 1, max: 100000000},
})

const tipSize = computed(() => selectTipCustomSizeInput.value.value || selectTipSizeInput.value.value)

const isAllInputsFilled = computed(() => {
    return Boolean(peopleInput.value.value && billInput.value.value && tipSize.value)
})

const isAllInputsValid = computed(() => {
    return Boolean(peopleInput.value.isValid && billInput.value.isValid && selectTipCustomSizeInput.value.isValid && selectTipSizeInput.value.isValid)
})

const resetCalculatorForm = () => {
    const inputs = [billInput, selectTipCustomSizeInput, selectTipSizeInput, peopleInput]

    inputs.forEach((input) => {
        input.value.value = ''
        input.value.isValid = true
        input.value.errorMessage = ''
    })
}

watch(() => [
    billInput.value.value,
    tipSize.value,
    peopleInput.value.value
], () => {
    if (isAllInputsFilled.value && isAllInputsValid.value) {
        emit('handleForm', {
            bill: billInput.value.value,
            tip: tipSize.value,
            people: peopleInput.value.value
        })
    }
})

watch(selectTipCustomSizeInput.value, () => {
    if (selectTipSizeInput.value.value) {
        selectTipSizeInput.value.value = ''
    }
})

watch(selectTipSizeInput.value, (newValue) => {
    if (newValue.value && selectTipCustomSizeInput.value.value) {
        selectTipCustomSizeInput.value.value = ''
    }
})

watch(props, (newValue, oldValue) => {
    resetCalculatorForm()
    emit('handleResetForm')
})
</script>