<template>
    <div id="tipCalculatorPage">

        <div class="tip-calculator-page-heading">
            <img :src="TipCalclulatorLogo" alt="tip calculator logo">
        </div>
        <div id="tipCalculator">
            <TipCalculatorForm  @handle-form="handleForm" @handle-reset-form="handleResetForm" :reset-form="resetForm"/>
            <TipCalculatorResult 
                :result-per-person="perPerson"
                :result-total-amount-per-person="totalAmountPerPerson"
                @reset-calculator="resetCalculator"
            />
        </div>
    </div>

</template>   

<script setup lang="ts">
import TipCalculatorForm from './TipCalculatorForm.vue'
import TipCalculatorResult from './TipCalculatorResult.vue'
import TipCalclulatorLogo from '/assets/images/juniorChallenges/tip-calculator/logo.svg'
import { ref } from 'vue'

interface FormValues  { bill:string, tip: string, people: string}

const totalAmount = ref(0)
const totalAmountPerPerson = ref(0)
const perPerson = ref(0)
const resetForm = ref(false)

const handleForm = (formValues: FormValues) => {
    const amount = Number(formValues.bill)
    const tipSize = Number(formValues.tip) / 100
    const people = Number(formValues.people)

    calculateTotalAmount(amount, tipSize)
    calculatePerPerson(people)
    calculateTotalAmountPerPerson(amount, people)
}

const calculateTotalAmount = (amount: number, tipSize: number) => {
    totalAmount.value = amount * tipSize    
}

const calculatePerPerson = (people: number) => {
    perPerson.value = totalAmount.value / people
}

const calculateTotalAmountPerPerson = (amount:number, people: number) => {
    totalAmountPerPerson.value = (amount + (perPerson.value * people)) / people
}

const resetCalculator = () => {
    resetForm.value = true
}

const handleResetForm = () => {
    resetForm.value = false
    totalAmountPerPerson.value = 0
    totalAmount.value = 0
    perPerson.value = 0
}
</script>