<template>
    <div class="interactive-rating-card-wrapper">
        <InteractiveRatingCardVote :isRated="!!rating" :rating="rating" @vote="vote" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

import InteractiveRatingCardVote from './InteractiveRatingCardVote.vue'

const rating = ref(null)

function vote(voteValue) {
    rating.value = voteValue
}

</script>

<style lang="scss" scoped></style>