<template>
    <div class="column-preview-card" :class="cardData.cardClasses">
        <img :src="cardData.carIcon" alt="car type icon" class="column-preview-card-icon">
        <h2 class="column-preview-card-title">{{ cardData.carType }}</h2>
        <p class="column-preview-card-description">{{ cardData.description }}</p>
        <button class="column-preview-card-btn">Learn More</button>
    </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    cardData: {
        typ: Object
    }
})
const { cardData } = toRefs(props)
</script>

<style scoped lang="scss">
$sedan-color: #E28625;
$suvs-color: #006971;
$luxury-color: #004140;
$white-color: #F2F2F2;

.sedan-card {
    background-color: $sedan-color;
    .column-preview-card-btn {
        color: $sedan-color;
    }
}
.suvs-card {
    background-color: $suvs-color;
    .column-preview-card-btn {
        color: $suvs-color;
    }
}
.luxury-card {
    background-color: $luxury-color;
    .column-preview-card-btn {
        color: $luxury-color;
    }
}

.column-preview-card {
    color: $white-color;
    padding: 48px 49px;

    &:first-child {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    &:last-child {
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    &-icon {
        width: 64px;
        height: 40px;
        margin-bottom: 35px;
    }

    &-title {
        font-family: 'Big Shoulders Display', sans-serif;
        font-size: 40px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 25px;
        text-transform: uppercase;
    }

    &-description {
        line-height: 25px;
        opacity: 0.75;
        margin-bottom: 25px;
    }

    &-btn {
        line-height: 25px;
        padding: 12px 32px;
        border: 1px solid transparent;
        border-radius: 25px;
        font-weight: 700;

        &:hover {
            cursor: pointer;
            background-color: transparent;
            color: $white-color;
            border-color: $white-color;
        }
    }
}
</style>