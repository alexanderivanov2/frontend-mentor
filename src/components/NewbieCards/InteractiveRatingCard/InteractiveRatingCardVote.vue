<template>
    <div class="interactive-rating-card-content-wrapper">
        <div class="interactive-rating-card-voting" v-if="!isRated">
            <div class="star-wrapper">
                <img :src="starIcon" alt="star icon">
            </div>
            
            <h3 class="interactive-rating-card-label">How did we do?</h3>
            <p class="interactive-rating-card-description">
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>

            <div class="interactive-rating-card-voting-options">
                <div 
                    v-for="voteValue in 5"
                    :key="voteValue"
                    @click="selectVoteValue(voteValue)"
                    class="interactive-rating-card-voting-option"
                    :class="{'selected': voteValue === selectedVoteValue }"
                >
                    <span class="vote-value">{{ voteValue }}</span>
                </div>
            </div>

            <button
                class="interactive-rating-card-submit-btn"    
                @click="vote"
            >
                Submit
            </button>
        </div>
        <div v-else class="interactive-rating-card-voting-result">
            <div class="thank-you-image-wrapper">
                <img :src="illustrationThankYouSvg"
                alt="illustration of thank you vote">
            </div>
            <p class="interactive-rating-card-vote-result">You selected {{ rating }} out of 5</p>
            <h3 class="interactive-rating-card-label">Thank you!</h3>
            <p class="interactive-rating-card-description">
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>
    </div>
</template>

<script setup> 
import { ref, toRefs } from 'vue'

import starIcon from '../../../assets/images/interactiveRatignCard/icon-star.svg'
import illustrationThankYouSvg from '../../../assets/images/interactiveRatignCard/illustration-thank-you.svg'

const emit = defineEmits(['vote'])

const props = defineProps({
    isRated: {
        type: Boolean,
    },
    rating: {
        type: [Number, undefined],
        default: 0,
    }
})
const { rating } = toRefs(props)

const selectedVoteValue = ref(null);

function selectVoteValue(voteValue) {
    selectedVoteValue.value = voteValue;
}

function vote() {
    if (selectedVoteValue.value) {
        emit('vote', selectedVoteValue.value);
    }
}
</script>