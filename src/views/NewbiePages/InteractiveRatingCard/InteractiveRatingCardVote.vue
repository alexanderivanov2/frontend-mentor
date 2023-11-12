<template>
    <div class="interactive-rating-card-content-wrpaper">
        <template v-if="!rating">
            {{ isRated }}
            <button @click="vote">Submit</button>
        </template>
    </div>
</template>

<script setup> 
import { toRefs } from 'vue'

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