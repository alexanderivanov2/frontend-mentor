<template>
    <div class="interactive-rating-card-content-wrpaper">
        <template v-if="!rating">
            <div class="star-wrapper">
                <img :src="starIcon" alt="star icon">
            </div>
            
            {{ isRated }}

            <button @click="vote">Submit</button>
        </template>
    </div>
</template>

<script setup> 
import { toRefs } from 'vue'

import starIcon from '../../../../public/assets/images/interactiveRatignCard/icon-star.svg'

const emit = defineEmits(['vote'])

const props = defineProps({
    isRated: {
        type: Boolean,
    }
})
const { rating } = toRefs(props)

function vote() {
}

</script>