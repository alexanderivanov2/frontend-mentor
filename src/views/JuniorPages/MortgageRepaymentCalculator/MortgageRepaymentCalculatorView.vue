<template>
    <div id="mortgageRepaymentCalculator">
        <h1>
            Mortgage repayment calculator
        </h1>
        <br/>
        <form action="">
            <fieldset class="mortage-amount-fieldset">
                <p>{{ mortgageAmountInput }}</p>
                <BaseLabel for="mortgageAmount">Mortgage Amount</BaseLabel>
                <BaseInput id="mortgageAmount" type="text"
                :validate="/^\d+(\.\d*)?$/" 
                :model-value="mortgageAmountInput"
                :max="15"
                :formater="formaterFloatFn"
                @is-valid="validateMortgageAmount"
                @update:model-value="updateMortgageAmount" 
                />
                <BaseErrorMessage v-if="!mortgageAmountInputValid.isValid">
                    <p>{{ mortgageAmountInputValid.message }}</p>
                </BaseErrorMessage>
            </fieldset>
            <fieldset class="mortage-term-fieldset">
                <p>{{ mortgageTermInput }}</p>
                <BaseLabel for="mortgageTerm">Mortgage Term</BaseLabel>
                <BaseInput id="mortgageTerm" type="text"
                :validate="/^\d*\.?\d+$/" 
                :model-value="mortgageTermInput"
                :max="2"
                @update:model-value="updateMortgageTerm" 
                @is-valid="validateMortgageTerm"
                />
                <BaseErrorMessage v-if="!mortgageTermInputValid.isValid">
                    <p>{{ mortgageTermInputValid.message }}</p>
                </BaseErrorMessage>
            </fieldset>
            <fieldset class="mortgage-interest-rate-fieldset">
                <p>{{ mortgageInterestRateInput }}</p>
                <BaseLabel for="mortgageInterestRate">Mortgage Interest Rate</BaseLabel>
                <BaseInput id="mortgageInterestRate" type="text"
                :validate="/^\d+(\.\d*)?$/"
                :model-value="mortgageInterestRateInput"
                :formater="formaterFloatFn"
                :max="5"
                @update:model-value="updateMortgageInterestRate"
                @is-valid="validateMortgageInterestRate"
                >
                </BaseInput>
                <BaseErrorMessage v-if="!mortgageInterestRateInputValid.isValid">
                    <p>{{ mortgageInterestRateInputValid.message }}</p>
                </BaseErrorMessage>
            </fieldset>

            <button
                :class="{
                    'invalid': !isFormValid
                }"
            >Calculate Repayments</button>
        </form>
        <br>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseInput from '../../../components/Base/BaseInput.vue';
import BaseLabel from '../../../components/Base/BaseLabel.vue';
import BaseErrorMessage from '../../../components/Base/BaseErrorMessage.vue';
import { useInputs } from '../../../composables/useInputs'

const { baseUpdateInput, baseGetErrorMessage } = useInputs()

interface InputValid {
    message: string,
    isValid: boolean
}

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

const formaterFloatFn = (value:string) => {
    if (value === '') return value

    const isFormated = regexCases.formaterFloat.test(value)
    if(isFormated) return value

    const num = parseFloat(value)

    return num.toFixed(2)
}
</script>