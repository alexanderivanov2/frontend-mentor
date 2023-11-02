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
                <div class="results-summary-card-content">
                    <h3 class="results-summary-card-conten-title">Summary</h3>
                    <ResultsSummarySkill
                        v-for="skill in data"
                        :key="skill.category"
                        :category="skill.category"
                        :score="skill.score"
                        :iconPath="skill.icon"
                        :colorClass="skill.colorClass"
                    />

                    <button class="results-summary-card-content-btn">Continue</button>
                </div>
            </div>
        </div>


    </section>
</template>

<script setup>
import ResultsSummarySkill from './ResultsSummarySkill.vue';
import data from './data.json'


</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;700;800&display=swap');
$bg-color: #ECF2FF;
$dark-navy-color: #303B59;
$purple-light: #CAC9FF;
$gradient-score-card: linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%);
$gradient-score: linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100%);
.results-summary-page {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background-color: white;
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

    
    .results-summary-card-summary {
        background-color: white;
        // padding: 0px 30px;

        .results-summary-card-content {
            width: 315px;
            margin: auto;

            .results-summary-card-conten-title {
                color: $dark-navy-color;
                font-size: 18px;
                font-weight: 700;
                line-height: normal;
                margin: 24px 0 24px;
            }

            .results-summary-card-content-btn {
                width: 100%;
                margin: 24px 0 30px;
                padding: 16px;
                background-color: $dark-navy-color;
                color: white;
                border: none;
                border-radius: 128px;
                font-size: 18px;
                font-weight: 700;
                line-height: normal;

                &:hover {
                    cursor: pointer;
                    background: $gradient-score-card;
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .results-summary-page {
        background-color: $bg-color;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .results-summary-card {
        display: flex;
        border-radius: 32px;

        &-score {
            width: 368px;
            border-top-right-radius: 32px;
            border-top-left-radius: 32px;
            z-index: 5;
        }

        &-summary {
            margin-left: -30px;
            width: 398px;
        }
    }
}



</style>