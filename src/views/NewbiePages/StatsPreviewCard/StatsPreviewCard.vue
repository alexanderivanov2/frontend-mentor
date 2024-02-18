<template>
    <section id="statsPreviewCardPage">
        <div id="statsPreviewCard">
            <div class="card-image-container"></div>
            <div class="card-information-container">
                <h2 class="card-information-header">Get <span class="header-acent">insights</span> that help your business grow.</h2>
                <p class="card-information-descripiton">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div class="card-information-statistics">
                    <div class="card-information-statistics-item ">
                        <p class="companies-stats"></p>
                        <p class="stats-label">Companies</p>
                    </div>
                    <div class="card-information-statistics-item">
                        <p class="templates-stats">314</p>
                        <p class="stats-label">Templates</p>
                    </div>
                    <div class="card-information-statistics-item">
                        <p class="queries-stats">12</p>
                        <p class="stats-label">Queries</p>
                    </div>
                </div>
                <p id="counter"></p>
            </div>
        </div>
    </section>
</template>


<script setup>
import { onMounted } from 'vue';

import { animateCounter } from '../../../composables/useRequestAnimationFrameAnimations.js'

onMounted(() => {
    animateCounter('.companies-stats', 0, 10, 500);
    animateCounter('.templates-stats', 0, 314, 500);
    animateCounter('.queries-stats', 0, 12, 500);
})

</script>

<style scoped lang="scss">

#statsPreviewCardPage {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    $mobile-background-img: '../../../../public/assets/images/statsPreviewCard/image-header-mobile.jpg';
    $desktop-background-img: '../../../../public/assets/images/statsPreviewCard/image-header-desktop.jpg';
    $bg-image-br: 10px;
    $dark-purple: #0A0C1C;
    $base-purple: #1B1937;
    $light-purple: #AB5CDB;
    $white: #FFFFFF;
    $light-gray: #c6c5ce;
    $gray: #979797;

    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;



    height: 100%;
    min-height: 100vh;
    background-color: $dark-purple;

    display: flex;
    justify-content: center;
    align-items: center;

    #statsPreviewCard {
        background-color: $base-purple;
        max-width: 327px;
        width: 100%;
        min-height: 780px;
        border-radius: $bg-image-br;

        .card-image-container {
            position: relative;
            background-image: url($mobile-background-img);
            background-size: contain;
            background-repeat: no-repeat;
            max-width: 327px;
            width: 100%;
            max-height: 240px;
            aspect-ratio: 1;
            border-top-right-radius: $bg-image-br;
            border-top-left-radius: $bg-image-br;

            &::after {
                content: '';
                background-color: rgba(94, 0, 144, 0.8);
                opacity: 0.5;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 10;
                border-top-right-radius: inherit;
                border-top-left-radius: inherit;
            }
        }

        .card-information-container {
            max-width: 264px;
            margin: 0 auto;
            
            .card-information-header {
                margin: 40px auto 20px;
                text-align: center;
                font-weight: bold;
                font-size: 28px;
                color: $white;

                .header-acent {
                    color: $light-purple;
                }
            }

            .card-information-descripiton {
                color: $light-gray;
                text-align: center;
                line-height: 25px;
                font-size: 15px;
            }

            .card-information-statistics {
                margin-top: 45px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 35px;

                .card-information-statistics-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .companies-stats, .templates-stats, .queries-stats {
                        position: relative;
                        font-size: 24px;
                        font-weight: bold;
                        color: $white;
                    }


                    .companies-stats, .queries-stats {
                        padding-right: 25px;
                    }
                    .companies-stats::after {
                        content: 'K+';
                        position: absolute;
                    }

                    .queries-stats::after {
                        content: 'M+';
                        position: absolute;
                    }

                    .stats-label {
                        font-size: 12px;
                        line-height: 25px;
                        color: $gray;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                }
            }
        }

        @media screen and (min-width: 1440px) {
            max-width: 1110px;
            height: 446px;
            min-height: 446px;
            display: flex;
            flex-direction: row;
            
            .card-image-container {
                background-image: url($desktop-background-img);
                background-size: cover;
                aspect-ratio: unset;
                max-height: 100%;
                max-width: 540px;
                order: 1;
                border-top-left-radius: unset;
                border-bottom-right-radius: $bg-image-br;
                
                &::after {
                    border-bottom-right-radius: inherit;
                }
            }

            .card-information-container {
                max-width: 403px;
                margin: 75px 110px 80px 75px;

                .card-information-header {
                    margin: 0 auto 30px;
                    font-size: 36px;
                }

                .card-information-descripiton {
                    max-width: 390px;
                    text-align: start;
                    font-size: 15px;
                    line-height: 25px;
                }

                .card-information-statistics {
                    max-width: 403px;
                    margin-top: 80px;
                    flex-direction: row;
                    justify-content: start;
                    gap: 65px;

                    .companies-stats, .templates-stats, .queries-stats {
                        align-self: flex-start;
                    }
                }
            }
        }
    }
}
</style>