<template>
    <div class="embla" ref="emblaRef">
        <div class="embla__container">
            <div class="embla__slide" v-for="card in newbieCardsList">
                <ChallangeCard 
                  :title="card.cardName"
                  :imgUrl="card.cardImgURL"
                  :routeName="card.routeName"
                  :difficulty="card.difficulty"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { EmblaOptionsType } from 'embla-carousel'
import emblaCarouselVue from 'embla-carousel-vue'
import ChallangeCard from './ChallangeCard.vue';
import { newbieCardsList } from '../../assets/constants/homePageConstants/newbieCardsConstants' 

const options: EmblaOptionsType = {
  dragFree: false,
  slidesToScroll: 1,
  breakpoints: {
    '(min-width: 540px)': { slidesToScroll: 2 },
    '(min-width: 1140px)': { slidesToScroll: 3 },
  }
}
const [emblaRef] = emblaCarouselVue(options)
</script>

<style scoped>
  .embla {
    overflow: hidden;
    max-width: 1920px;
    margin: 0 auto;
    padding: 2rem 0;
  }
  .embla__container {
    display: flex;
    height: 200px;
  }
  .embla__slide {
    flex: 0 0 90%;
    max-width: 350px;
    width: 100%;
    margin-right: 10px;
    
    @media screen and (min-width: 540px) {
        flex: 0 0 100%;
        max-width: 250px;
    }
    
    @media screen and (min-width: 640px) {
        max-width: 300px;
    }

    @media screen and (min-width: 760px) {
        max-width: 350px;
        margin-right: 15px;
    }

    @media screen and (min-width: 930px) {
      max-width: 350px;
    }
  }
</style>