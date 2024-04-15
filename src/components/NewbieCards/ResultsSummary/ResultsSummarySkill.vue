<template>
    <div class="summary-skill-wrapper" :class="props.colorClass">

        <h6 class="summary-skill-category"><img :src="icons[iconType]" alt="category logo"><span class="summary-skill-category-name">{{ category }}</span></h6>
        <p class="summary-skill-score">
            <span class="summary-skill-score-current">{{ score }} </span>
            <span class="summary-skill-score-total">&nbsp; / 100</span>
        </p>
    </div>
</template>

<script setup>
import { toRefs } from 'vue'
import IconReaction from '../../../assets/images/resultsSummary/icon-reaction.svg'
import IconMemory from '../../../assets/images/resultsSummary/icon-memory.svg'
import IconVerbal from '../../../assets/images/resultsSummary/icon-verbal.svg'
import IconVisual from '../../../assets/images/resultsSummary/icon-visual.svg'

const props = defineProps({
    category: String,
    score: Number,
    iconType: String,
    colorClass: String,
})

const { category, score, iconType } = toRefs(props)

const icons = {
    reaction: IconReaction,
    memory: IconMemory,
    verbal: IconVerbal,
    visual: IconVisual,
}
</script>