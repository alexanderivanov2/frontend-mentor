<template>
    <div class="embla" ref="emblaRef">
        <div class="embla__container">
            <div class="embla__slide" v-for="card in newbieCardsList">
                <ChallangeCard 
                  :title="card.cardName"
                  :imgUrl="card.cardImgURL"
                  :difficulty="card.difficulty"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import ChallangeCard from './ChallangeCard.vue';
import { newbieCardsList } from '../../assets/constants/homePageConstants/newbieCardsConstants' 

const [emblaRef] = emblaCarouselVue()
</script>

<style scoped>
  .embla {
    overflow: hidden;
    max-width: 1920px;
    margin: 0 auto;
    /* background-color: wheat; */
  }
  .embla__container {
    display: flex;
    /* flex-direction: column; */
    height: 200px;
  }
  .embla__slide {
    flex: 0 0 80%;
    min-width: 0;
    margin-right: 15px;
    
    @media screen and (min-width: 550px) {
        flex: 0 0 40%;
    }

    @media screen and (min-width: 900px) {
        flex: 0 0 33%;
    }

    
    @media screen and (min-width: 1200px) {
        flex: 0 0 15%;
    }
    /* max-width: 200px; */
  }
</style>