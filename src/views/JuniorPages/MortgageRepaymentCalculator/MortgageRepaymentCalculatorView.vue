<template>
    <div id="mortgageRepaymentCalculator">
        <div class="mortgage-repayment-calculator">
            <div class="mortgage-repayment-calculator-form">
                <div class="mortgage-repayment-calculator-form-head">
                    <h1 class="mortgage-repayment-calculator-form-heading">
                        Mortgage Calculator
                    </h1>
                    <button class="mortgage-repayment-calculator-form-clear-all-btn" @click="clearAll">
                        Clear All
                    </button>
                </div>
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
                        }" :input="inputMortgageTerm" :handleInput="handleMortgageTermBaseInput"
                            :handleBlur="handleBlurMortgageTermBaseInput" />
                    </fieldset>
                    <fieldset class="mortgage-interest-rate-fieldset">
                        <BaseFormInput :inputField="{
                            label: 'Interest Rate',
                            id: 'interestRate'
                        }" :input="inputMortgageInterestRate" :handleInput="handleMortgageInterestRateBaseInput" 
                            :handleBlur="handleBlurMortgageInterestRateBaseInput"
                        />
                    </fieldset>
                    <fieldset class="mortgage-type-fieldset">

                        <BaseRadioInput :id="'mortgageType'" :label="'Mortgage Type'" :radioInputs="mortgageRadioInputs"
                            :input="mortgageTypeInput" :handleInput="handleMortgageTypeInput" />
                    </fieldset>
                    <button class="mortgage-repayment-calculator-form-main-submit" :class="{
                        'invalid': !isFormInputsValid
                    }" @click="calculateRepayments">
                        <img :src="calculatorIcon" alt="icon of calculator">
                        Calculate Repayments
                    </button>
                </form>
            </div>
            <MortgageRepaymentResult :mortgage-result="mortgageResult" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import calculatorIcon from '/assets/images/juniorChallenges/mortgage-repayment-calculator/icon-calculator.svg'
import MortgageRepaymentResult from './MortgageRepaymentResult.vue';
import BaseFormInput from '../../../components/Base/BaseFormInput.vue';
import BaseRadioInput from '../../../components/Base/BaseRadioInput.vue';
import useValidator from '../../../composables/useValidator';
import { useInputHandlers } from '../../../composables/useInputHandlers';
import { useDeviceTypeHandler } from '../../../composables/useDeviceTypeHandler';
import { mortgageResultType } from '../../../types/mortgageTypes';

const { isDesktop } = useDeviceTypeHandler()
const { handleInput, handleRadioInput, handleFocusInputIntlDeformat, handleBlurInputIntlFormat, handleBlurValidation, createBaseInput, formatNumberCommaSeparated } = useInputHandlers()
const { numberValidator } = useValidator();

const inputMortgageAmount = createBaseInput()
const validatorConfigMortgageAmount = {
    min: 1,
    max: 10000000,
}
const handleMortgageAmountBaseInput = handleInput(inputMortgageAmount,
    {
        strict: true,
        validator: numberValidator,
        validatorConfig: validatorConfigMortgageAmount,
        formatter: formatNumberCommaSeparated,
        errorHandling: {
            'errorMessage': 'Must be a number from 1 and 10000000'
        }
    })
const handleMortgageAmountBaseFocusInput = handleFocusInputIntlDeformat(inputMortgageAmount)
const handleMortgageAmountBlurBaseInput = handleBlurInputIntlFormat(inputMortgageAmount, {
    validator: numberValidator,
    validatorConfig: validatorConfigMortgageAmount,
}
)

const inputMortgageTerm = createBaseInput()
const validatorConfigMortgageTerm = {
    min: 1,
    max: 100,
    maxLength: 5,
}
const handleMortgageTermBaseInput = handleInput(inputMortgageTerm,
    {
        strict: true,
        validator: numberValidator,
        validatorConfig: validatorConfigMortgageTerm,
        errorHandling: {
            'errorMessage': 'Must be a number from 1 to 100'
        }
    })

const handleBlurMortgageTermBaseInput = handleBlurValidation(inputMortgageTerm, {
    validator: numberValidator,
    validatorConfig: validatorConfigMortgageTerm,
})

const inputMortgageInterestRate = createBaseInput()
const validatorConfigMortgageInterest = {
    min: 1,
    max: 100,
    maxLength: 5,
}
const handleMortgageInterestRateBaseInput = handleInput(inputMortgageInterestRate,
    {
        strict: true,
        validator: numberValidator,
        validatorConfig: validatorConfigMortgageInterest,
        errorHandling: {
            'errorMessage': 'Must be a number from 1 to 100'
        }
    })
const handleBlurMortgageInterestRateBaseInput = handleBlurValidation(inputMortgageInterestRate, {
    validator: numberValidator,
    validatorConfig: validatorConfigMortgageInterest,
})


const mortgageTypeInput = createBaseInput();
const handleMortgageTypeInput = handleRadioInput(mortgageTypeInput)
const mortgageRadioInputs = ['repayment', 'interest only'];

const inputs = [inputMortgageAmount, inputMortgageInterestRate, inputMortgageTerm, mortgageTypeInput];

const principal = ref<number>(0)
const monthlyInterestRate = ref<number>(0)
const numOfPayments = ref<number>(0)
const mortgageResult = ref<mortgageResultType>({
    monthly: 0,
    total: 0,
    type: '',
})

const clearAll = () => {
    inputs.forEach(input => {
        input.value.value = ''
        input.value.isValid = true
        input.value.errorMessage = ''
    })

    mortgageResult.value.monthly = 0
    mortgageResult.value.total = 0
    mortgageResult.value.type = ''
}

const isFormInputsValid = computed<boolean>(() => {
    return inputs.every(input => input.value.isValid)
})

const calculateRepayments = (e: Event) => {
    e.preventDefault()
    const isFormValid = validateForm()

    if (isFormValid) {
        principal.value = Number(inputMortgageAmount.value.value)
        monthlyInterestRate.value = (Number(inputMortgageInterestRate.value.value) / 100) / 12
        numOfPayments.value = Number(inputMortgageTerm.value.value) * 12

        mortgageResult.value.monthly = mortgageTypeInput.value.value === 'repayment' ? repaymentCalculation() : interestOnlyCalculation()
        mortgageResult.value.total = mortgageResult.value.monthly * numOfPayments.value
        mortgageResult.value.type = mortgageTypeInput.value.value

        if (!isDesktop.value) {
            const element = document.querySelector('.mortgage-repayment-calculator-result');
            element && element.scrollIntoView({ behavior: 'smooth' })
        }
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
        } else if (input.value.errorMessage) {
            input.value.errorMessage = ''
            input.value.isValid = true
        }
    })

    return isValid
}
</script>