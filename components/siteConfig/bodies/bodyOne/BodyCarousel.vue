<template>
  <div class="carousel" :style="{ backgroundImage }">
    <span></span>
    <div class="carousel__content">
      <h4>{{ content.subheading }}</h4>
      <h2>{{ content.heading }}</h2>
      <span>{{ content.description }}</span>
      <BaseButton text="Shop now" class-name="green" />
    </div>
    <span></span>
  </div>
</template>

<script setup lang="ts">
import type { TCarouselConfig } from '@/utils/types';


const { config } = defineProps({
  config: { type: Object as PropType<TCarouselConfig>, required: true }
})

const { content } = config

const backgroundImage = `url(/images/${config.bkgImage})`;
</script>

<style lang="scss" scoped>
.carousel {
  display: grid;
  grid-template-columns: 10rem 1fr 2fr;

  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  color: white;

  &__content {
    display: flex;
    flex-direction: column;

    padding: 14rem 0rem 6rem 0;
    gap: 2rem;


    font-size: 1.3rem;
  }
}
</style>
