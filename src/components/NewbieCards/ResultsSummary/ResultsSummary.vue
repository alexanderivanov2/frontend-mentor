<template>
        <div class="results-summary-card">
            <div class="results-summary-card-score">
                <p class="results-summary-card-score-label">Your Result</p>
                <div class="results-summary-card-score-wrapper">
                    <p class="score">76</p>
                    <p class="score-max">of 100</p>
                </div>
                <h3 class="results-summary-card-score-text">Great</h3>
                <p class="results-summary-card-score-info">Your performance exceed 65% of the people conducting the test here!</p>
            </div>
            <div class="results-summary-card-summary">
                <div class="results-summary-card-content">
                    <h3 class="results-summary-card-content-title">Summary</h3>
                    <ResultsSummarySkill
                        v-for="skill in data"
                        :key="skill.category"
                        :category="skill.category"
                        :score="skill.score"
                        :iconType="skill.icon"
                        :colorClass="skill.colorClass"
                    />

                    <button class="results-summary-card-content-btn">Continue</button>
                </div>
            </div>
        </div>
</template>

<script setup>
import ResultsSummarySkill from './ResultsSummarySkill.vue';


const props = defineProps({
    data: {
        type: Object
    }
})

</script>