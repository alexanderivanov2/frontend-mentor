<template>
    <div id="ageCalculator">
        <div class="age-calculator-wrapper">
            <form id="ageCalculatorForm" class="age-calculator-form">
                <div class="age-calculator-form-inputs-wrapper">
                    <BaseFormInput class="base-form-input" :input-field="{
                        label: 'day',
                        id: 'dayInput'
                    }" :input="dayInput" :handle-input="handleInputDays" :handle-blur="handleBlur" />
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
    validateInputs()
}

const validateInputs = () => {
    validateDay()
    validateMonth()
    validateYear()
}

const validateDay = () => {
    const day = Number(dayInput.value.value)
    let maxDay = 31
    const month = Number(monthInput.value.value)
    const year = Number(yearInput.value.value)

    if (!day) return

    if (month && month !== 2) {
        maxDay = new Date(year || 2024, month, 0).getDate()
    } else if (month === 2 && year) {
        maxDay = new Date(year, 2, 0).getDate()
    } else {
        return
    }

    const isDayInRange = day >= 0 && day <= maxDay

    if (month) {
        dayInput.value.isValid = isDayInRange ? true : false
        dayInput.value.errorMessage = isDayInRange ? '' : 'Must be a valid day'
    }
}

const validateMonth = () => {
    const month = Number(monthInput.value.value)
    if (!month) return
    const isValidMonth = month >= 1 && month <= 12

    monthInput.value.isValid = isValidMonth ? true : false
    monthInput.value.errorMessage = isValidMonth ? '' : 'Must be a valid month'
}

const validateYear = () => {
    const year = Number(yearInput.value.value)

    if (!year) return
    const isValidYear = year <= currentDate.getFullYear()
    yearInput.value.isValid = isValidYear ? true : false
    yearInput.value.errorMessage = isValidYear ? '' : 'Must be a valid year'
}

const isInputsValid = () => {
    const isFilled = yearInput.value.value && monthInput.value.value && dayInput.value.value
    const isValid = isFilled && yearInput.value.isValid && monthInput.value.isValid && dayInput.value.isValid

    return Boolean(isFilled && isValid)
}


const validateDayLeapYear = () => {
    let isValid = true;
    const isInputsAreValid = isInputsValid()
    if (isInputsAreValid && Number(monthInput.value.value) === 2 && Number(dayInput.value.value) > 28) {
        const februaryDays = new Date(Number(yearInput.value.value), 2, 0)

        isValid = februaryDays.getDate() >= Number(dayInput.value.value)

        dayInput.value.isValid = isValid,
            dayInput.value.errorMessage = isValid ? '' : 'Must be a valid day'
    }
}

const makeInputsInvalid = () => {
    dayInput.value.isValid = false;
    monthInput.value.isValid = false;
    yearInput.value.isValid = false;

    if (!dayInput.value.value) {
        dayInput.value.errorMessage = 'Must be a valid day'
    }

    if (!monthInput.value.value) {
        monthInput.value.errorMessage = 'Must be a valid month'
    }

    if (!yearInput.value.value) {
        yearInput.value.errorMessage = 'Must be a valid year'
    }
}

const calculateAge = (e: Event) => {
    e.preventDefault()

    validateInputs()

    const isInputsAreValid = isInputsValid()
    if (!isInputsAreValid) {
        makeInputsInvalid()

        return
    }

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