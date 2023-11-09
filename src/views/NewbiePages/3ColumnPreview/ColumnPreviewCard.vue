<template>
    <div class="column-preview-card" :class="cardData.cardClasses">
        <img :src="cardData.carIcon" alt="car type icon" class="column-preview-card-icon">
        <h2 class="column-preview-card-title">{{ cardData.carType }}</h2>
        <p class="column-preview-card-description">{{ cardData.description }}</p>
        <button class="column-preview-card-btn"><span>Learn More</span></button>
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
    padding: 48px 48px;

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
        margin-bottom: 83px;
        font-weight: 400;
    }

    &-btn {
        line-height: 25px;
        padding: 10px 32px;
        border: 2px solid transparent;
        border-radius: 25px;
        max-height: 48px;
        
        span {
            font-size: 15px;
            font-weight: 700;
            line-height: 25px;
        }

        &:hover {
            cursor: pointer;
            background-color: transparent;
            color: $white-color;
            border-color: $white-color;
        }
    }
}

@media screen and (min-width: 1440px) {
    .column-preview-card {
        &:first-child {
            border-bottom-left-radius: 8px;
            border-top-right-radius: 0px;
        }

        &:last-child {
            border-bottom-left-radius: 0px;
            border-top-right-radius: 8px;
        }
    }
}
</style>