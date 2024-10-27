<template>
    <div id="mortgageRepaymentCalculator">
        <div class="mortgage-repayment-calculator">
            <div class="mortgage-repayment-calculator-form">
                <h1 class="mortgage-repayment-calculator-form-heading">
                    Mortgage Calculator
                </h1>
                <button class="mortgage-repayment-calculator-form-clear-all-btn" @click="clearAll">
                    Clear All
                </button>
                <form class="mortgage-repayment-calculator-form-main" @submit="calculateRepayments">
                    <fieldset class="mortgage-amount-fieldset">
                        <BaseFormInput :inputField="{
                            label: 'Mortgage Amount',
                            id: 'mortgageAmount'
                        }" :input="inputMortgageAmount" :handleInput="handleMortgageAmountBaseInput"
                            :handleFocus="handleMortgageAmountBaseFocusInput"
                            :handleBlur="handleMortgageAmountBlurBaseInput" />
                    </fieldset>
                    <fieldset class="mortgage-term-fieldset">
                        <BaseFormInput :inputField="{
                            label: 'Mortgage Term',
                            id: 'mortgageTerm'
                        }" :input="inputMortgageTerm" :handleInput="handleMortgageTermBaseInput" />
                    </fieldset>
                    <fieldset class="mortgage-interest-rate-fieldset">
                        <BaseFormInput :inputField="{
                            label: 'Interest Rate',
                            id: 'interestRate'
                        }" :input="inputMortgageInterestRate" :handleInput="handleMortgageInterestRateBaseInput" />
                    </fieldset>
                    <fieldset class="mortgage-type-fieldset">

                        <BaseRadioInput :id="'mortgageType'" :label="'Mortgage Type'" :radioInputs="mortgageRadioInputs"
                            :input="mortgageTypeInput" />
                    </fieldset>
                    <button class="mortgage-repayment-calculator-form-main-submit" :class="{
                        'invalid': !isFormInputsValid
                    }" @click="calculateRepayments">
                        <img :src="calculatorIcon" alt="icon of calculator">
                        Calculate Repayments
                    </button>
                </form>
            </div>
            <MortgageRepaymentResult 
                :mortgage-result="mortgageResult" :mortgage-type="mortgageTypeInput.value" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import calculatorIcon from '/assets/images/juniorChallenges/mortgage-repayment-calculator/icon-calculator.svg'
import MortgageRepaymentResult from './MortgageRepaymentResult.vue';
import BaseFormInput from '../../../components/Base/BaseFormInput.vue';
import BaseRadioInput from '../../../components/Base/BaseRadioInput.vue';
import { useInputHandlers } from '../../../composables/useInputHandlers';
import useValidator from '../../../composables/useValidator';

const { handleInput, handleFocusInputIntlDeformat, handleBlurInputIntlFormat, createBaseInput } = useInputHandlers()
const { numberValidator } = useValidator();

const inputMortgageAmount = createBaseInput()
const handleMortgageAmountBaseInput = handleInput(inputMortgageAmount, { strict: true, validator: numberValidator })
const handleMortgageAmountBaseFocusInput = handleFocusInputIntlDeformat(inputMortgageAmount)
const handleMortgageAmountBlurBaseInput = handleBlurInputIntlFormat(inputMortgageAmount)

const inputMortgageTerm = createBaseInput()
const handleMortgageTermBaseInput = handleInput(inputMortgageTerm, { strict: true, validator: numberValidator })

const inputMortgageInterestRate = createBaseInput()
const handleMortgageInterestRateBaseInput = handleInput(inputMortgageInterestRate, { strict: true, validator: numberValidator })

const mortgageTypeInput = createBaseInput();
const mortgageRadioInputs = ['repayment', 'interst only'];

const inputs = [inputMortgageAmount, inputMortgageInterestRate, inputMortgageTerm, mortgageTypeInput];

const principal = ref<number>(0)
const monthlyInterestRate = ref<number>(0)
const numOfPayments = ref<number>(0)
const mortgageResult = ref({
    monthly: 0,
    total: 0,
})

const clearAll = () => {
    inputs.forEach(input => {
        input.value.value = ''
        input.value.isValid = true
        input.value.errorMessage = ''
    })

    mortgageResult.value.monthly = 0
    mortgageResult.value.total = 0
}

const isFormInputsValid = computed<boolean>(() => {
    return inputs.every(input => input.value.isValid)
})

const calculateRepayments = (e: Event) => {
    e.preventDefault()
    const isFormValid = validateForm()
    debugger
    if (isFormValid) {
        principal.value = Number(inputMortgageAmount.value.value)
        monthlyInterestRate.value = (Number(inputMortgageInterestRate.value.value) / 100) / 12
        numOfPayments.value = Number(inputMortgageTerm.value.value) * 12

        mortgageResult.value.monthly = mortgageTypeInput.value.value === 'repayment' ? repaymentCalculation() : interestOnlyCalculation()

        mortgageResult.value.total = mortgageResult.value.monthly * numOfPayments.value
    }
}

const repaymentCalculation = () => {
    return principal.value * ((monthlyInterestRate.value * Math.pow((1 + monthlyInterestRate.value), numOfPayments.value)) / (Math.pow((1 + monthlyInterestRate.value), numOfPayments.value) - 1))
}

const interestOnlyCalculation = () => {
    return principal.value * monthlyInterestRate.value
}

const validateForm = () => {
    const errorMessageMissingField = 'This field is required'
    let isValid = true
    inputs.forEach(input => {
        if (!input.value.value && input.value.isValid) {
            input.value.isValid = false
            input.value.errorMessage = errorMessageMissingField
            isValid = false
        }
    })

    return isValid
}
</script>