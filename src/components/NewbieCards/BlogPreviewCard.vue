<template>
    <div class="blog-preview-card">
        <div class="blog-preview-card-image"></div>
        <div class="blog-preview-card-body">
            <div class="card-body-tags">
                <span class="card-body-tag">Learing</span>
            </div>
            <p class="card-body-date">Published 21 Dec 2023</p>
            <h3 class="card-body-title">HTML & CSS foundations</h3>
            <p class="card-body-description">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <div class="blog-preview-card-footer">
            <img :src="PublisherImage" alt="publisher avatar" class="publisher-avatar">
            <p class="publisher-name">Greg Hooper</p>
        </div>
    </div>
</template>

<script setup>
import PublisherImage from '../../assets/images/blogPreviewCard/image-avatar.webp';
</script>