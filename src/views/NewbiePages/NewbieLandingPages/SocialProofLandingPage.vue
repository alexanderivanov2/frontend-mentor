<template>
    <div class="social-proof-page">
        <div class="social-proof-page-wrapper">
            <section class="social-proof-raiting-content">
                <section class="social-proof-raiting-introduction">
                    <h2 class="social-proof-raiting-introduction-heading">10,000+ of our users love our products.</h2>
                    <p class="social-proof-raiting-introduction-description">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
                </section>
                <section class="social-proof-raiting-rate-examples">
                    <div class="social-proof-rate-example"
                        v-for="(rate, index) in rateData"
                        :key="index"
                    >
                        <div class="social-proof-rate-example-stars-wrapper">
                            <img :src="IconStar" alt=""
                                v-for="starNum in rate.stars"
                                :key="starNum"
                            >
                        </div>
                        <p class="social-proof-rate-example-rated-info">{{ rate.rated }}</p>
                    </div>
                </section>
            </section>
            <section class="social-proof-testimonials">
                <div class="social-proof-testimonial"
                    v-for="(testimonial, index) in testimonialsData"
                    :key="index"
                >
                    <div class="social-proof-testimonial-header">
                        <img :src="testimonial.img" alt="testimonial avatar">
                        <div class="social-proof-testimonial-header-user">
                            <p class="social-proof-testimonial-header-user-names">{{ testimonial.names }}</p>
                            <p class="social-proof-testimonial-header-user-subtitle"> {{ testimonial.subtitle }}</p>
                        </div>
                    </div>
                    <p class="social-proof-testimonial-text">
                        {{ testimonial.testimonial }}
                    </p>
                </div>
            </section>
        </div>
    </div>

</template>

<script setup>
import IconStar from '/assets/images/LandingPages/socialProofSectionPage/icon-star.svg'
import AnneImage from '/assets/images/LandingPages/socialProofSectionPage/image-anne.jpg'
import ColtonImage from '/assets/images/LandingPages/socialProofSectionPage/image-colton.jpg'
import IreneImage from '/assets/images/LandingPages/socialProofSectionPage/image-irene.jpg'

const rateData = [
    {
        stars: 5,
        rated: 'Rated 5 Stars in Reviews'
    },
    {
        stars: 5,
        rated: 'Rated 5 Stars in Report Guru'
    },
    {
        stars: 5,
        rated: 'Rated 5 Stars in BestTech'
    },
]

const testimonialsData = [
    {
        img: ColtonImage,
        names: 'Colton Smith',
        subtitle: 'Verified Buyer',
        testimonial: '“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”',
    },
    {
        img: IreneImage,
        names: 'Irene Roberts',
        subtitle: 'Verified Buyer',
        testimonial: '“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”',
    },
    {
        img: AnneImage,
        names: 'Anne Wallace',
        subtitle: 'Verified Buyer',
        testimonial: '“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”',
    },
]

</script>