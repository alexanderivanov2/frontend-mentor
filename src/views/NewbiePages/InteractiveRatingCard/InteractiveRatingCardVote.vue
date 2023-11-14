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

import starIcon from '../../../../public/assets/images/interactiveRatignCard/icon-star.svg'
import illustrationThankYouSvg from '../../../../public/assets/images/interactiveRatignCard/illustration-thank-you.svg'

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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');

$dark-blue: #262E38;
$light-gray: #969FAD;
$medium-gray: #7C8798;
$orange: #FC7614;
.interactive-rating-card-content-wrapper {
    font-family: 'Overpass', sans-serif;
    .star-wrapper {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $dark-blue;
        border-radius: 50px;
        margin-bottom: 19px;
    }

    .interactive-rating-card-label {
        color: white;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 10px;
    }

    .interactive-rating-card-description {
        color: $light-gray;
        font-size: 14px;
        line-height: 22px;
        padding-top: 4px;
        margin-bottom: 4px;
    }

    .interactive-rating-card-voting-options {
        padding: 24px 0 24px;
        display: flex;
        gap: 18px;

        .interactive-rating-card-voting-option {
            width: 42px;
            height: 42px;
            background-color: $dark-blue;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            transition: all ease-in-out 250ms;
            cursor: pointer;
            
            .vote-value {
                color: $medium-gray;
                padding-top: 2px;
                font-size: 14px;
                line-height: 24px;
                font-weight: 700;
                letter-spacing: 0.175px;
                text-align: center;
                vertical-align: middle;
            }

            &.selected {
                background-color: $medium-gray;
                
                .vote-value {
                    color: white;
                }
            }

            &:hover {
                background-color: $orange;
                .vote-value {
                    color: white;
                }
            }
        }
    }

    .interactive-rating-card-submit-btn {
        background-color: $orange;
        display: inline-block;
        width: 100%;
        padding: 12px;
        border-radius: 22.5px;
        border: none;
        color: white;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.867px;
        line-height: normal;
        transition: all ease-in-out 500ms;
        cursor: pointer;

        &:hover {
            background-color: white;
            color: $orange;
        }
    }

    .interactive-rating-card-voting-result {
        text-align: center;
        .thank-you-image-wrapper {
            margin: 10px auto 24px;
            text-align: center;
            height: 96px;
            width: 144px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    
        .interactive-rating-card-vote-result {
            display: inline-block;
            background-color: $dark-blue;
            color: $orange;
            padding: 5px 12px;
            border-radius: 22.5px;
            line-height: 22px;
            margin-bottom: 26px;
        }

        .interactive-rating-card-label {
            text-align: center;
        }
    }
}

@media screen and (min-width: 1440px) {
    .interactive-rating-card-content-wrapper {
        .star-wrapper {
            width: 48px;
            height: 48px;
            margin-bottom: 30px;
        }

        .interactive-rating-card-label {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10.5px;
        }

        .interactive-rating-card-description {
            font-size: 15px;
            line-height: 24px;
            padding-top: 4.5px;
            margin-bottom: 4.5px;
        }
        
        .interactive-rating-card-voting-options {
            padding: 24px 0 32px;
            justify-content: center;
            gap: 21px;

            .interactive-rating-card-voting-option {
                width: 51px;
                height: 51px;
                
                .vote-value {
                    padding-top: 3.5px;
                    font-size: 16px;
                    letter-spacing: 0.2px;
                }
            }
        }

        .interactive-rating-card-submit-btn {
            padding: 14px;
            font-size: 15px;
            font-weight: 700;
            letter-spacing: 2px;
        }

        .interactive-rating-card-voting-result {
            .thank-you-image-wrapper {
                margin: 13px auto 32px;
                height: 108px;
                width: 162px;
            }
        
            .interactive-rating-card-vote-result {
                padding: 6.5px 19px 1.5px;
                line-height: 24px;
                font-size: 15px;
                margin-bottom: 34.5px;
            }

            .interactive-rating-card-label {
                margin-bottom: 7px;
            }
        }
    }

   
}

</style>