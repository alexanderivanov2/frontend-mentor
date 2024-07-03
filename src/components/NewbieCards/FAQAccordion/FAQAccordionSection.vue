<template>
     <div class="faq-card-section">
                <div class="faq-head" @click="handleFaqToggle">
                    <h3 class="faq-head-title">{{ faq.title }}</h3>
                    <img 
                    :src="isOpen ? minusIcon : plusIcon" alt="open close icon" class="faq-head-icon">
                </div>
                <div 
                    class="faq-content-wrapper"
                    ref="faqContent"
                    >
                    <p
                        class="faq-content"  
                    >
                        {{ faq.content }}
                    </p>
                </div>
            </div>
</template>

<script setup>
import { ref,computed, watch, nextTick, onMounted } from 'vue'
import plusIcon from '/assets/images/newbieChallenges/faqAccordion/icon-plus.svg'
import minusIcon from '/assets/images/newbieChallenges/faqAccordion/icon-minus.svg'

const props = defineProps({
    faq: Object,
    id: Number,
    openId: Number,
})

const isOpen = computed(() => props.id === props.openId)
const emit = defineEmits(['handleFaqToggle'])
const faqContent = ref(null)

const handleFaqToggle = () => {
    emit('handleFaqToggle', props.id)
}

const setFaqHeight = () => {
    nextTick(() => {
        if(isOpen.value) {
                faqContent.value.style.maxHeight = faqContent.value.scrollHeight + 'px'
        } else {
                faqContent.value.style.maxHeight = 0 + 'px'
        }
    })
}

watch(isOpen, () => {
    if (!faqContent.value) {
        return 
    }
    setFaqHeight()
})

onMounted(() => {
    setFaqHeight()
})
</script>