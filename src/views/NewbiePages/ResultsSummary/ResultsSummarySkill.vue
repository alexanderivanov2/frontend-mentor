<template>
    <div class="summary-skill-wrapper" :class="props.colorClass">

        <h6 class="summary-skill-category"><img :src="iconPath" alt="category logo"><span class="summary-skill-category-name">{{ category }}</span></h6>
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

<style lang="scss" scoped>
$dark-navy-color: #303B59;
$colors: (
    red: #F55555,
    orange: #FFB21E,
    green: #00BB8F,
    blue: #1125D6,
);

@each $color-name, $color-value in $colors {
    $bg-color: rgba($color-value, 0.05);

    .bg-#{$color-name} {
        background: $bg-color;
        color: $color-value
    }
}

.summary-skill-wrapper {
    margin-bottom: 16px;
    border-radius: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 16px;
    .summary-skill-category {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;

        .summary-skill-category-name {
            font-size: 16px;
            font-weight: 500;
            line-height: normal;
        }

    }
    .summary-skill-score-current,
    .summary-skill-score-total {
        color: $dark-navy-color;
        font-size: 16px;
        font-weight: 700;
        line-height: normal;
    }

    .summary-skill-score-total {
        opacity: 0.5;
    }
    
}


</style>