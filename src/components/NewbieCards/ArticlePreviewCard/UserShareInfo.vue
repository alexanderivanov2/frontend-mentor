<template>
    <div class="user-share-info-section">
        <div class="user-share-info-main">
            <img :src="avatar" alt="user avatar" class="user-share-info-avatar">
            <div class="user-share-info">
                <p class="user-share-info-names"> {{ userInfo.names }}</p>
                <p class="user-share-info-date"> {{ userInfo.date }}</p>
            </div>
            <div class="user-share-button-wrapper">
                
                <div class="user-share-info-share-section" :class="{
                    'open': isShareOpen
                }">
                    <p class="share-text-tag">SHARE</p>
                    <div class="user-share-info-links">
                        <a v-if="shareLinks.facebook" :href="shareLinks.facebook" class="user-share-info-link">
                            <img :src="iconFacebook" alt="facebook icon">
                        </a>
                        <a v-if="shareLinks.twitter" :href="shareLinks.twitter" class="user-share-info-link">
                            <img :src="iconTwitter" alt="twitter icon">
                        </a>
                        <a v-if="shareLinks.pinterest" :href="shareLinks.pinterest" class="user-share-info-link">
                            <img :src="iconPinterest" alt="pinterest icon">
                        </a>

                    </div>
                </div>
                <button class="user-share-info-share-btn" :class="{
                    'active': isShareOpen,
                }" @click="toggleIsOpen">
                    <img :src="iconShare" alt="share icon">
                </button>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import iconFacebook from '/assets/images/newbieChallenges/articlePreview/icon-facebook.svg'
import iconTwitter from '/assets/images/newbieChallenges/articlePreview/icon-twitter.svg'
import iconPinterest from '/assets/images/newbieChallenges/articlePreview/icon-pinterest.svg'
import iconShare from '/assets/images/newbieChallenges/articlePreview/icon-share.svg'


interface Props {
    avatar: string,
    userInfo: {
        names: string,
        date: string,
    },
    shareLinks: {
        facebook?: string,
        twitter?: string,
        pinterest?: string,
    }
}
const props = defineProps<Props>()

const isShareOpen = ref<boolean>(false)

const toggleIsOpen = () => {
    isShareOpen.value = !isShareOpen.value
}

</script>