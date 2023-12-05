
<template >
  <div class="anim-fade-in">
    <BodyCarousel :config="carouselConfig" />
    <div class="body-layout">
      <EditorsPick />
      <FeaturedProducts :config="productsConfig" />
      <FeaturedAboutTwo :config="aboutConfig" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TCarouselConfig } from '@/utils/types';
import BodyCarousel from './BodyCarousel.vue';
import EditorsPick from './EditorsPick.vue';
import FeaturedProducts from '../FeaturedProducts.vue';
import FeaturedAboutTwo from '../FeaturedAboutTwo.vue';


const carouselConfig: TCarouselConfig = {
  bkgImage: 'bodyOne.svg',
  content: {
    subheading: 'Summer 2023',
    heading: "New collection",
    description: 'We know how large objects will act, but things on a small scale.',
    btnText: 'Shop now'
  }
}


const productDesign = {
  title: 'Graphic Design',
  desc: 'English Department',
  price: '16.48$',
  discount: '6.48$',
  colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
}

const productsConfig = {
  size: 'xs',
  title: 'Featured Products',
  heading: 'BESTSELLER PRODUCTS',
  subheading: 'Problems trying to resolve the conflict between',
  items: Array(8).fill(productDesign)
}

const aboutConfig = {
  img: 'about-2.jpg',
  info: {
    subheading: 'Summer 2023',
    heading: 'Part of the Neural Universe',
    desc: 'We know how large objects will act, but things on a small scale.',
    btns: [{ text: 'Buy now', class: 'green' }, { text: 'Read more', class: 'transparent' }]
  }
}
</script>

<style lang="scss" scoped>
.body-layout {
  display: flex;
  flex-direction: column;

  padding: 2rem 0;
  gap: 5rem;
}
</style>
