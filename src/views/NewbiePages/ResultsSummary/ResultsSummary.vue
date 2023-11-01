<template>
    <section class="results-summary-page">
        <div class="results-summary-card">
            <div class="results-summary-card-score">
                <p class="results-summary-card-score-label">Your Result</p>
                <div class="results-summary-card-score-wrapper">
                    <p class="score">76</p>
                    <p class="score-max">of 100</p>
                </div>
                <h3 class="results-summary-card-score-text">Great</h3>
                <p class="results-summary-card-score-info">Your performance exceed 65% of the people conducting the test here!</p>
            </div>
            <div class="results-summary-card-summary">

            </div>
        </div>


    </section>
</template>

<script setup>
import data from './data.json'


</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;700;800&display=swap');
$bg-color: #ECF2FF;
$purple-light: #CAC9FF;
$gradient-score-card: linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%);
$gradient-score: linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100%);
.results-summary-page {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background-color: $bg-color;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 18px;
}

.results-summary-card {
    &-score {
        padding: 24px 0 40px;
        background: $gradient-score-card;
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;
        color: white;
        text-align: center;

        &-label {
            color: $purple-light;
            font-weight: 500;
        }

        &-wrapper {
            margin: 24px auto;
            background: $gradient-score;
            width: 140px;
            height: 140px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .score {
                font-size: 56px;
                font-weight: 800;
                line-height: 72px;
            }

            .score-max {
                color: $purple-light;
                font-size: 16px;
                font-weight: 500;
            }
        }

        &-text {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
            line-height: normal;
        }

        &-info {
            width: 260px;
            margin: 0 auto 0px;
            color: $purple-light;
            font-size: 16px;
            font-weight: normal;
            text-align: center;
            line-height: normal;
        }

    }

    &-summary {
        border: 3px solid greenyellow;
    }
}



</style>