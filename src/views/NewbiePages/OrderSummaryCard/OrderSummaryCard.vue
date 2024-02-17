<template>
    <section id="orderSummaryCardPage">
        <div class="background-image">
            <img :src="isMobile ? mobileBackground : desktopBackground" alt="background-image">
        </div>
        <div class="order-summary-card">
            <div class="card-header-image-wrapper">
                <img src="../../../../public/assets/images/orderSummaryCard/illustration-hero.svg" alt="order hero illustation">
            </div>
            <div class="card-body-wrapper">
                <h1 class="card-heading">Order Summary</h1>
                <p class="card-description">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            </div>
            <div class="card-plan-wrapper">
                <div class="card-plan-info">
                    <img src="../../../../public/assets/images/orderSummaryCard/icon-music.svg" alt="music icon" />
                    <div class="card-plan">
                        <p class="card-plan-type">Annual Plan</p>
                        <p class="card-plan-price">$59.99/year</p>
                    </div>
                </div>
                <a href="#" class="card-plan-link">Change</a>
            </div>
            <div class="options-button-wrapper">
                <button class="payment-button">Proceed to Payment</button>
                <button class="cancel-button">Cancel Order</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import mobileBackground from '../../../../public/assets/images/orderSummaryCard/pattern-background-mobile.svg'
import desktopBackground from '../../../../public/assets/images/orderSummaryCard/pattern-background-desktop.svg'

import { ref, onBeforeMount, onBeforeUnmount } from 'vue'

const isMobile = ref(() => false)

const handleResize = () => {
    isMobile.value = document?.documentElement?.clientWidth < 1440;
}

onBeforeMount(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
#orderSummaryCardPage {
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
    $white: #FFFFFF;
    $blue: #382AE1;

    $body-bg: #E0E8FF;
    $card-bg: $white;
    $card-plan-bg: #F7F9FF;
    $card-heading-color: #1F2E55;
    $light-text-color: #717FA6;
    $link-color: $blue;

    $card-border-radius: 20px;
    
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $body-bg;
    min-height: 100vh;
    height: 100%;

    .background-image {
        position: absolute;
        top: 0;
        width: 100%;

        img {
            width: 100%;
        }
    }

    .order-summary-card {
        position: relative;
        max-width: 327px;
        width: 100%;
        min-height: 567px;
        border-radius: $card-border-radius;
        background-color: $card-bg;
        box-shadow: 0px 6px 20px -10px;
        
        font-family: "Red Hat Display", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        .card-header-image-wrapper {
            width: 100%;
            img {
                width: 100%;
                border-top-left-radius: $card-border-radius;
                border-top-right-radius: $card-border-radius;
                box-shadow: 0px 4px 5px 0px $light-text-color;
            }
        }

        .card-body-wrapper {
            margin-top: 30px;
            text-align: center;
            .card-heading {
                color: $card-heading-color;
                font-size: 22px;
                font-weight: 900;
            }

            .card-description {
                max-width: 263px;
                margin: 25px auto 0;
                color: $light-text-color;
                font-size: 15px;
                line-height: 25px;
            }
        }

        .card-plan-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            background-color: $card-plan-bg;
            
            max-width: 279px;
            margin: 25px auto;
            padding: 16px;
            border-radius: 10px;

            .card-plan-info {
                display: flex;
                align-items: center;
                gap: 20px;
            }

            .card-plan {
                
                text-align: start;
                font-size: 14px;

                &-type {
                    margin-bottom: 10px;
                    color: $card-heading-color;
                    font-weight: 900;
                }

                &-price {
                    color: $light-text-color;
                }
            }
            
            .card-plan-link {
                font-size: 14px;
                font-weight: bold;
                color: $link-color;
            }
        }

        .options-button-wrapper {
            display: flex;
            flex-direction: column;
            margin: auto;
            max-width: 280px;
            gap: 10px;

            .payment-button, .cancel-button {
                font-size: 15px;
                font-weight: 700;
                padding: 15px;
                border-radius: 10px;
                border: none;
            }

            .payment-button {
                color: $white;
                background-color: $blue;
                box-shadow: 0px 13px 20px -5px $light-text-color;
            }

            .cancel-button {
                background-color: transparent;
                color: $light-text-color;
            }
        }
    
        @media screen and (min-width: 1440px) {
            max-width: 450px;
            min-height: 697px;

            .card-header-image-wrapper img {
                box-shadow: unset;
            }

            .card-body-wrapper {
                margin-top: 45px;
                .card-heading {
                    font-size: 28px;
                }

                .card-description {
                    font-size: 16px;
                    font-weight: 500;
                    max-width: 354px;
                }
            }

            .card-plan-wrapper {
                max-width: 354px;
                padding: 25px;
                .card-plan {
                    font-size: 16px;
                }
            }

            .options-button-wrapper {
                max-width: 354px;
                gap: 15px;
            }
        }
    }
}

</style>