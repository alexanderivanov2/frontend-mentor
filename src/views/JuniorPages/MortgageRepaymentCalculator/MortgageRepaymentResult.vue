<template>
    <div class="mortgage-repayment-calculator-result">

        <div class="mortgage-repayment-calculator-result-no-result" v-if="!mortgageResult">
            <img :src="emptyResultImg" alt="img for empty result">
            <h3 class="mortgage-repayment-calculator-result-no-result-heading">Results show here</h3>
            <p class="mortgage-repayment-calculator-result-no-result-description">Complete the form and click “calculate
                repayments” to see what your monthly repayments would be.</p>
        </div>
        <div class="mortgage-repayment-calculator-result-calculations" v-else>
            <h3 class="mortgage-repayment-calculator-result-calculations-heading">Your results</h3>
            <p class="mortgage-repayment-calculator-result-calculations-description">Your results are shown below based
                on the information you provided. To adjust the results, edit the form and click “calculate repayments”
                again.</p>
            <div class="mortgage-repayment-calculator-result-calculations-repays">
                <div class="monthly">
                    <p class="monthly-heading">Your monthly repayments</p>
                    <p class="monthly-repayment"> ${{ monthlyRepay }}</p>
                </div>
                <div class="break-line"></div>
                <div class="total">
                    <p class="total-heading">Your monthly repayments</p>
                    <p class="total-repayment"> ${{ totalRepay }}</p>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import { computed } from 'vue';
import emptyResultImg from '/assets/images/juniorChallenges/mortgage-repayment-calculator/illustration-empty.svg'

interface Props {
    mortgageResult: string;
    mortgageType: string;
    mortgageTerm: string;
}

const props = withDefaults(defineProps<Props>(), {
    mortgageResult: '',
    mortgageType: '',
    mortgageTerm: '',
})

const monthlyRepay = computed(() => Number(props.mortgageResult).toFixed(2))
const totalRepay = computed(() => (Number(props.mortgageResult) * (Number(props.mortgageTerm) * 12)).toFixed(2))

</script>