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
                        <BaseLabel for="mortgageAmount">Mortgage Amount</BaseLabel>
                        <div class="input-wrapper">
                            <BaseInput id="mortgageAmount" type="text" :validate="/^\d+(\.\d*)?$/"
                                :model-value="mortgageAmountInput" :max="15" :formater="formaterFloatFn"
                                @is-valid="validateMortgageAmount" @update:model-value="updateMortgageAmount" />
                        </div>
                        <BaseErrorMessage v-if="!mortgageAmountInputValid.isValid">
                            <p class="error-message">{{ mortgageAmountInputValid.message }}</p>
                        </BaseErrorMessage>
                    </fieldset>
                    <fieldset class="mortgage-term-fieldset">
                        <BaseLabel for="mortgageTerm">Mortgage Term</BaseLabel>
                        <div class="input-wrapper">
                            <BaseInput id="mortgageTerm" type="text" :validate="/^\d*\.?\d+$/"
                                :model-value="mortgageTermInput" :max="2" @update:model-value="updateMortgageTerm"
                                @is-valid="validateMortgageTerm" />
                        </div>
                        <BaseErrorMessage v-if="!mortgageTermInputValid.isValid">
                            <p class="error-message">{{ mortgageTermInputValid.message }}</p>
                        </BaseErrorMessage>
                    </fieldset>
                    <fieldset class="mortgage-interest-rate-fieldset">
                        <BaseLabel for="mortgageInterestRate">Mortgage Interest Rate</BaseLabel>
                        <div class="input-wrapper">
                            <BaseInput id="mortgageInterestRate" type="text" :validate="/^\d+(\.\d*)?$/"
                                :model-value="mortgageInterestRateInput" :formater="formaterFloatFn" :max="5"
                                @update:model-value="updateMortgageInterestRate"
                                @is-valid="validateMortgageInterestRate" />
                        </div>
                        <BaseErrorMessage v-if="!mortgageInterestRateInputValid.isValid">
                            <p class="error-message">{{ mortgageInterestRateInputValid.message }}</p>
                        </BaseErrorMessage>
                    </fieldset>
                    <fieldset class="mortgage-type-fieldset">
                        <BaseLabel for="mortgageInterestRate">Mortgage Type</BaseLabel>
                        <div class="input-radio-wrapper">
                            <BaseInput id="mortgage-type-repayment" type="radio" value="repayment" name="mortgage-type"
                                v-model:model-value="mortgageType" />
                            <BaseLabel for="mortgage-type-repayment">
                                <p>Repayment</p>
                            </BaseLabel>
                        </div>
                        <div class="input-radio-wrapper">
                            <BaseInput id="mortgage-type-interest" type="radio" name="mortgage-type" value="interest"
                                v-model:model-value="mortgageType" />
                            <BaseLabel for="mortgage-type-interest">Interest</BaseLabel>
                        </div>
                        <BaseErrorMessage v-if="!mortgageTypeValid.isValid">
                            <p class="error-message">{{ mortgageTypeValid.message }}</p>
                        </BaseErrorMessage>
                    </fieldset>
                    <button class="mortgage-repayment-calculator-form-main-submit" :class="{
                        'invalid': !isFormValid
                    }" @click="calculateRepayments">
                        <img :src="calculatorIcon" alt="icon of calculator">
                        Calculate Repayments
                    </button>
                </form>
            </div>
            <MortgageRepaymentResult
                :mortgage-result="mortgageResult"
                :mortgage-type="mortgageType"
                :mortgage-term="mortgageTermInput"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import MortgageRepaymentResult from './MortgageRepaymentResult.vue';
import BaseInput from '../../../components/Base/BaseInput.vue';
import BaseLabel from '../../../components/Base/BaseLabel.vue';
import BaseErrorMessage from '../../../components/Base/BaseErrorMessage.vue';
import { useInputs } from '../../../composables/useInputs'
import calculatorIcon from '/assets/images/juniorChallenges/mortgage-repayment-calculator/icon-calculator.svg'

const { baseUpdateInput, baseGetErrorMessage } = useInputs()

interface InputValid {
    message: string,
    isValid: boolean
}
type MortgageType = 'repayment' | 'interest' | null

const mortgageAmountInput = ref('')
const mortgageAmountInputValid = ref<InputValid>({
    message: '',
    isValid: true,
})
const mortgageTermInput = ref('')
const mortgageTermInputValid = ref<InputValid>({
    message: '',
    isValid: true,
})
const mortgageInterestRateInput = ref('')
const mortgageInterestRateInputValid = ref<InputValid>({
    message: '',
    isValid: true,
})
const mortgageType = ref<MortgageType>(null)
const mortgageTypeValid = ref<InputValid>({
    message: '',
    isValid: true,
})

const mortgageResult = ref<string | number>('');

const regexCases = {
    formaterFloat: /^\d+(\.\d{1, 2})?$/,
}

const emptyMessage = 'This field is required'

const updateMortgageAmount = baseUpdateInput(mortgageAmountInput)
const validateMortgageAmount = baseGetErrorMessage(mortgageAmountInput, mortgageAmountInputValid, emptyMessage)
const updateMortgageTerm = baseUpdateInput(mortgageTermInput)
const validateMortgageTerm = baseGetErrorMessage(mortgageTermInput, mortgageTermInputValid, emptyMessage)
const updateMortgageInterestRate = baseUpdateInput(mortgageInterestRateInput)
const validateMortgageInterestRate = baseGetErrorMessage(mortgageInterestRateInput, mortgageInterestRateInputValid, emptyMessage)

const isFormValid = computed<boolean>(() => {
    return mortgageAmountInputValid.value.isValid && mortgageTermInputValid.value.isValid && mortgageInterestRateInputValid.value.isValid
})

const formaterFloatFn = (value: string) => {
    if (value === '') return value

    const isFormated = regexCases.formaterFloat.test(value)
    if (isFormated) return value

    const num = parseFloat(value)

    return num.toFixed(2)
}

const validateCalculations = () => {
    validateMortgageAmount(true)
    validateMortgageTerm(true)
    validateMortgageInterestRate(true)

    if (!mortgageType.value) {
        mortgageTypeValid.value.isValid = false
        mortgageTypeValid.value.message = emptyMessage
    }

    return isFormValid.value && mortgageTypeValid.value.isValid
}

const calculateRepayments = (e: Event) => {
    e.preventDefault()

    const isValid = validateCalculations()

    if (isValid) {
        console.log('calculating')
        mortgageResult.value = mortgageType?.value === 'repayment' ? repaymentCalculation() : interestOnlyCalculation()
    }
}

const repaymentCalculation = () => {
    const principal = parseFloat(mortgageAmountInput.value)
    const monthlyInterestRate = (parseFloat(mortgageInterestRateInput.value) / 100) / 12
    const numOfPayments = Number(mortgageTermInput.value) * 12

    const result = principal * ((monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numOfPayments)) / (Math.pow((1 + monthlyInterestRate), numOfPayments) - 1))

    return result
}

const interestOnlyCalculation = () => {
    const principal = parseFloat(mortgageAmountInput.value)
    const monthlyInterestRate = (parseFloat(mortgageInterestRateInput.value) / 100) / 12
    const interestOnlyPayment = principal * monthlyInterestRate
    return interestOnlyPayment
}

const clearAll = () => {
    mortgageAmountInput.value = ''
    mortgageTermInput.value = ''
    mortgageInterestRateInput.value = ''
    mortgageType.value = null

    mortgageAmountInputValid.value.message = ''
    mortgageTermInputValid.value.message = ''
    mortgageInterestRateInputValid.value.message = ''
    mortgageTypeValid.value.message = ''
    mortgageAmountInputValid.value.isValid = true
    mortgageTermInputValid.value.isValid = true
    mortgageInterestRateInputValid.value.isValid = true
    mortgageTypeValid.value.isValid = true
}

watch((mortgageType), () => {
    mortgageTypeValid.value.isValid = true
    mortgageTypeValid.value.message = ''
})
</script>