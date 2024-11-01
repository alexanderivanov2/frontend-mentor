<template>
    <div class="mortgage-repayment-calculator-result">

        <div class="mortgage-repayment-calculator-result-no-result" v-if="!showResult">
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
                    <p class="monthly-heading">Your monthly {{ mortgageResult.type }}</p>
                    <p class="monthly-repayment"> ${{ monthlyValue }}</p>
                </div>
                <div class="break-line"></div>
                <div class="total">
                    <p class="total-heading">Total you'll {{ mortgageResult.type }} over the term</p>
                    <p class="total-repayment"> ${{ totalValue }}</p>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import emptyResultImg from '/assets/images/juniorChallenges/mortgage-repayment-calculator/illustration-empty.svg'
import { mortgageResultType } from '../../../types/mortgageTypes';
import { computed } from 'vue';

interface Props {
    mortgageResult: mortgageResultType;
}

const props = defineProps<Props>()
const showResult = computed<Boolean>(() => !!props.mortgageResult.monthly)
const monthlyValue = computed<string>(() => Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2}).format(props.mortgageResult.monthly))
const totalValue = computed<string>(() => Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2}).format(props.mortgageResult.total))
</script>