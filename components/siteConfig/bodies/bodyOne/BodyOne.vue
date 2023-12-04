
<template >
  <div class="anim-fade-in">
    <BodyCarousel :config="carouselConfig" />
    <div class="body-layout">
      <EditorsPick />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TCarouselConfig } from '@/utils/types';
import BodyCarousel from './BodyCarousel.vue';
import EditorsPick from './EditorsPick.vue';


const carouselConfig: TCarouselConfig = {
  bkgImage: 'bodyOne.svg',
  content: {
    subheading: 'Summer 2023',
    heading: "New collection",
    description: 'We know how large objects will act, but things on a small scale.',
    btnText: 'Shop now'
  }
}

</script>

<style lang="scss" scoped>
.body-layout {
  padding: 2rem 0;
}
</style>
