<template>
    <section class="nft-preview-card-page">
        <div class="nft-preview-card">
            <div class="equilibrium-img-wrapper">
                <img :src="equilibriumIMG" alt="equilibirium image">
            </div>

            <h1 class="nft-card-title">Equilibrium #3429</h1>
            <p class="nft-card-description">Our Equilibrium collection promotes balance and calm.</p>

            <div class="nft-card-info-wrapper">
                <div class="nft-card-info-data">
                    <img :src="equilibriumLogo" alt="equilibrium icon logo">
                    <span class="nft-card-info-quantity">0.041 ETH</span>
                </div>
                <div class="nft-card-info-data">
                    <img :src="clockIMG" alt="clock icon">
                    <span class="nft-card-info-time">3 days left</span>
                </div>
            </div>

            <div class="nft-card-line"></div>
            <div class="nft-card-owner-wrapper">
                <div class="nft-card-owner-avatar-wrapper">
                    <img :src="avatarIMG" alt="owner avatar">
                </div>
                <p class="nft-card-owner-info">Creation of <span class="nft-card-owner-name">Jules Wyvern</span></p>
            </div>
        </div>
    </section>
</template>

<script setup>
import equilibriumIMG from '../../../../public/assets/images/nftPreviewCard/image-equilibrium.jpg'
import equilibriumLogo from '../../../../public/assets/images/nftPreviewCard/icon-ethereum.svg'
import clockIMG from '../../../../public/assets/images/nftPreviewCard/icon-clock.svg'
import avatarIMG from '../../../../public/assets/images/nftPreviewCard/image-avatar.png'

</script>

<styles lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');

$soft-blue-color: #8BACD9;
$white-color: #FFFFFF;
$cyan-color: #00FFF8; 
$very-dark-blue-main-bg: #0D192C;
$very-dark-blue-card-bg: #15263F;
$very-dark-blue-color: #2E405A;

* {
    box-sizing: border-box;
}

body {
    font-size: 18px;
    font-family: 'Outfit', sans-serif;
}

.nft-preview-card-page {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    background-color: $very-dark-blue-main-bg;

    .nft-preview-card {
        width: 327px;
        height: 543px;
        padding: 24px;
        margin: 0 auto;
        border-radius: 15px;
        background-color: $very-dark-blue-card-bg;
        box-shadow: 0px 25px 50px 0px rgba(0, 0, 0, 0.10);

        .equilibrium-img-wrapper {
            cursor: pointer;
            position: relative;
            
            &:hover {
                &::after {
                    content: '';
                    background-color: #00FFF8;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    opacity: 0.5;
                    border-radius: 8px;
                }

                &::before {
                    content: '';
                    background-image: url('../../../../public/assets/images/nftPreviewCard/icon-view.svg');
                    content: "";
                    display: block;
                    width: 47px;
                    height: 47px;
                    position: absolute;
                    z-index: 100;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-image: url(/public/assets/images/nftPreviewCard/icon-view.svg);
                }
            }

            img {
                width: 100%;
                border-radius: 8px;
            }


        }

        .nft-card-title {
            color: $white-color;
            font-size: 22px;
            font-weight: 600;
            line-height: normal;
            margin-top: 24px;
            transition: all ease-in-out 250ms;

            &:hover {
                color: $cyan-color;
                cursor: pointer;
            }
        }

        .nft-card-description {
            color: $soft-blue-color;
            margin-top: 12px;
            font-size: 18px;
            font-weight: 300;
            line-height: 26px; 
        }

        .nft-card-info-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .nft-card-info-data {
                display: flex;
                align-items: center;
                gap: 7px;
                margin: 16px 0;

                .nft-card-info-quantity {
                    color: $cyan-color;
                    font-size: 15px;
                    font-weight: 600;
                }

                .nft-card-info-time {
                    color: $soft-blue-color;
                    font-size: 15px;
                    font-weight: 400;
                }

            }
        }

        .nft-card-line {
            height: 1px;
            background-color: $very-dark-blue-color;
        }

        .nft-card-owner-wrapper {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-top: 16px;

            .nft-card-owner-avatar-wrapper {
                width: 32px;
                
                img {
                    width: 100%;
                    border-radius: 50%;
                    border: 1px solid $white-color;
                }
            }

            .nft-card-owner-info {
                color: $soft-blue-color;
                font-size: 15px;
                font-weight: 400;

                .nft-card-owner-name {
                    color: $white-color;
                    transition: all ease-in-out 250ms;

                    &:hover {
                        color: $cyan-color;
                        cursor: pointer;
                    }
                }

            }
        }
    }
}

@media screen and (min-width: 1440px) {
    .nft-preview-card-page {
        .nft-preview-card {
            width: 350px;
            height: 596px;

            .nft-card-info-wrapper .nft-card-info-data {
                margin: 24px 0 ;
            }
        }

        
    }

    .nft-preview-card-page .nft-preview-card .nft-card-info-wrapper .nft-card-info-data .nft-card-info-quantity,
    .nft-preview-card-page .nft-preview-card .nft-card-info-wrapper .nft-card-info-data .nft-card-info-time,
    .nft-preview-card-page .nft-preview-card .nft-card-owner-wrapper .nft-card-owner-info {
            font-size: 16px;
    }
}

</styles>