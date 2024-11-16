<template>
    <div id="ageCalculator">
        <div class="age-calculator-wrapper">
            <form id="ageCalculatorForm" class="age-calculator-form">
                <div class="age-calculator-form-inputs-wrapper">
                    <BaseFormInput class="base-form-input" :input-field="{
                        label: 'day',
                        id: 'dayInput'
                    }" :input="dayInput" :handle-input="handleInputDays" :handle-blur="validateDayLeapYear" />
                    <BaseFormInput class="base-form-input" :input-field="{
                        label: 'month',
                        id: 'monthInput'
                    }" :input="monthInput" :handle-input="handleInputMonths" :handle-blur="handleBlur" />
                    <BaseFormInput class="base-form-input" :input-field="{
                        label: 'year',
                        id: 'yearInput'
                    }" :input="yearInput" :handle-input="handleInputYear" :handle-blur="handleBlur" />
                </div>
                <div class="age-calculator-form-submit">
                    <button @click="calculateAge">
                        <img :src="arrowIcon" alt="">
                    </button>
                </div>
            </form>
            <div class="age-calculator-result">
                <p class="age-calculator-result-line"><span>{{ resultAge?.calculated ? resultAge?.years : '--' }}</span>
                    years</p>
                <p class="age-calculator-result-line"><span>{{ resultAge?.calculated ? resultAge?.months : '--'
                        }}</span> months</p>
                <p class="age-calculator-result-line"><span>{{ resultAge?.calculated ? resultAge?.days : '--' }}</span>
                    days</p>
            </div>
        </div>
    </div>

</template>

<script setup lang=ts>
import { ref, computed, nextTick } from 'vue'
import BaseFormInput from '../../../components/Base/BaseFormInput.vue'
import arrowIcon from '/assets/images/juniorChallenges/age-calculator/icon-arrow.svg'
import { useInputHandlers } from '../../../composables/useInputHandlers'
import useValidator from '../../../composables/useValidator';

const { createBaseInput, handleInput } = useInputHandlers()
const { numberValidator } = useValidator()

const dayInput = createBaseInput()
const monthInput = createBaseInput()
const yearInput = createBaseInput()
const resultAge = ref<{ calculated?: boolean, years?: number, months?: number, days?: number }>({})
const currentDate = new Date()

const validatorConfigDay = {
    min: 1, max: 31,
}

const validatorConfigMonth = {
    min: 1, max: 12,
}

const validatorConfigYear = {
    min: 0, max: currentDate.getFullYear(),
}

const handleInputDays = handleInput(dayInput, {
    validator: numberValidator,
    validatorConfig: validatorConfigDay,
    errorHandling: {
        errorMessage: 'Must be a valid day'
    }
})

const handleInputMonths = handleInput(monthInput, {
    validator: numberValidator,
    validatorConfig: validatorConfigMonth,
    errorHandling: {
        errorMessage: 'Must be a valid month'
    }
})

const handleInputYear = handleInput(yearInput, {
    validator: numberValidator,
    validatorConfig: validatorConfigYear,
    errorHandling: {
        errorMessage: 'Must be a valid year'
    }
})

const handleBlur = () => {
    validateDayLeapYear()
}

const isInputsValid = computed(() => {
    const isFilled = yearInput.value.value && monthInput.value.value && dayInput.value.value
    const isValid = isFilled && yearInput.value.isValid && monthInput.value.isValid && dayInput.value.isValid

    return isFilled && isValid
})


const validateDayLeapYear = () => {
    let isValid = true;

    if (isInputsValid.value && Number(monthInput.value.value) === 2 && Number(dayInput.value.value) > 28) {
        const februaryDays = new Date(Number(yearInput.value.value), 2, 0)

        isValid = februaryDays.getDate() >= Number(dayInput.value.value)

        dayInput.value.isValid = isValid,
            dayInput.value.errorMessage = isValid ? '' : 'Must be a valid day'
    }

}

const calculateAge = (e: Event) => {
    e.preventDefault()

    validateDayLeapYear()

    if (!isInputsValid.value) return

    const birthYear = Number(yearInput.value.value)
    const birthMonth = Number(monthInput.value.value) - 1
    const birthDay = Number(dayInput.value.value)
    const birthDate = new Date(birthYear, birthMonth, birthDay)

    if (birthDate.getTime() > currentDate.getTime()) return

    let years = currentDate.getFullYear() - birthDate.getFullYear()
    let months = currentDate.getMonth() - birthDate.getMonth()
    let days = currentDate.getDate() - birthDate.getDate()


    if (days < 0) {
        months -= 1;

        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate()
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    resultAge.value.calculated = true
    resultAge.value.years = years
    resultAge.value.months = months
    resultAge.value.days = days

}

</script>