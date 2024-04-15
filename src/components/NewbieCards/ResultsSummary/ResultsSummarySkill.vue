<template>
    <div class="summary-skill-wrapper" :class="props.colorClass">

        <h6 class="summary-skill-category"><img :src="`/src/assets/images/resultsSummary/${iconPath}`" alt="category logo"><span class="summary-skill-category-name">{{ category }}</span></h6>
        <p class="summary-skill-score">
            <span class="summary-skill-score-current">{{ score }} </span>
            <span class="summary-skill-score-total">&nbsp; / 100</span>
        </p>
    </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    category: String,
    score: Number,
    iconPath: String,
    colorClass: String,
})

const { category, score, iconPath } = toRefs(props)
</script>