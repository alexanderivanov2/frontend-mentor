<template>
    <section class="interactive-rating-card-page">
        <div class="interactive-rating-card-wrapper">
            <InteractiveRatingCardVote 
                :isRated="!!rating"
                :rating="rating"
                @vote="vote"
            />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

import InteractiveRatingCardVote from './InteractiveRatingCardVote.vue'

const rating = ref(null)

function vote(voteValue) {
    rating.value = voteValue
}

</script>

<style lang="scss" scoped>
$body-bg: #131518;
$card-bg: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);

* {
    box-sizing: border-box;
}

.interactive-rating-card-page {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background-color: $body-bg;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;

    .interactive-rating-card-wrapper {
        width: 327px;
        height: 360px;
        background: $card-bg;
        border-radius: 15px;

        padding: 24px 24px 32px;
    }
}

@media screen and (min-width: 1440px) {
    .interactive-rating-card-page .interactive-rating-card-wrapper {
        width: 412px;
        height: 416px;
        padding: 32px;
    }
}

</style>