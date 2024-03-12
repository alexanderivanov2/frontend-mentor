<template>
    <NewbieCardPage class="results-summary-page">
        <ResultsSummary 
            :data="data"
        />
    </NewbieCardPage>
</template>

<script setup>
import NewbieCardPage from '../NewbieCardPage.vue';
import ResultsSummary from '../../../../components/NewbieCards/ResultsSummary/ResultsSummary.vue';
import data from './data.json'

</script>