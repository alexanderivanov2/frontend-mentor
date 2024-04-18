<template>
    <div class="embla" ref="emblaRef">
        <div class="embla__container">
            <div class="embla__slide">Slide 1</div>
            <div class="embla__slide">Slide 2</div>
            <div class="embla__slide">Slide 3</div>
        </div>
    </div>
</template>

<script>
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef] = emblaCarouselVue()
</script>

<style scoped>
  .embla {
    overflow: hidden;
    background-color: wheat;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>