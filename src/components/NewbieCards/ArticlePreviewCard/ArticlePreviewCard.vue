<template>
    <div class="article-preview-card">
        <div class="article-preview-card-image-wrapper">
            <img :src="drawersImg" alt="drawersImg">
        </div>
        <div class="article-preview-card-body">
            <h2 class="article-preview-card-body-heading">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
            <p class="article-preview-card-body-description">
                Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
            </p>
            <div class="article-preview-card-footer">
                <UserShareInfo
                    :avatar="avatarImg"
                    :user-info="userInfo"
                    :share-links="shareLinks"
                >
                </UserShareInfo>
            </div>
        </div>
    </div>
</template>

<script setup>
    import UserShareInfo from './UserShareInfo.vue'
    import drawersImg from '/assets/images/newbieChallenges/articlePreview/drawers.jpg'
    import avatarImg from '/assets/images/newbieChallenges/articlePreview/avatar-michelle.jpg'

    const userInfo = {
        names: 'Michelle Appleton',
        date: '28 Jun 2020',
    }

    const shareLinks =  {
        facebook: 'www.facebook.com',
        twitter: 'twitter.com',
        pinterest: 'pinterest.com',
    }
</script>