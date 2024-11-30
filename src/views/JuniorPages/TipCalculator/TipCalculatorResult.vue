<template>
    <div class="tip-calculator-result">
        <div class="tip-calculator-result-presentation" v-for="(value, key) in tipCalculatorResultPresentation"
            :key="key">
            <div class="tip-calculator-result-presentation-label">
                <p class="tip-calculator-result-presentation-label-main">{{ value.labelMain }}</p>
                <p class="tip-calculator-result-presentation-label-sub">{{ value.labelSub }}</p>
            </div>
            <p class="tip-calculator-result-presentation-value">${{ value.value }}</p>
        </div>
        <button class="tip-calculator-result-button-reset" :disabled="!isBtnResetActive" @click="resetCalculator">Reset</button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface Props {
    resultPerPerson: number
    resultTotalAmountPerPerson: number
}
const props = defineProps<Props>()
const emit = defineEmits(['resetCalculator'])

const isBtnResetActive = computed(() => Boolean(props.resultPerPerson && props.resultTotalAmountPerPerson))

const tipCalculatorResultPresentation = computed(() => {
    return [
        {
            labelMain: 'Tip Amount',
            labelSub: '/ person',
            value: props.resultPerPerson.toFixed(2)
        },
        {
            labelMain: 'Total',
            labelSub: '/ person',
            value: props.resultTotalAmountPerPerson.toFixed(2)
        },
    ]
})

const resetCalculator = (e:Event) => {
    e.preventDefault();
    emit('resetCalculator')
}
</script>