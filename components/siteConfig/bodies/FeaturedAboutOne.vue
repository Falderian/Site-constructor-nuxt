<template>
  <div class="grid-about">
    <div v-for="index in [0, 1]" :style="{ backgroundImage: backgroundImage(index) }" class="img"></div>
    <div class="about">
      <h4>{{ config.suheading }}</h4>
      <h2>{{ config.heading }}</h2>
      <p v-for="item in config.desc">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  suheading: 'Featured Products',
  heading: 'We love what we do',
  desc: ['Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.', 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics']
}


const backgroundImage = (img: number) => `url(/images/featuredProds/about/about-${img}.jpg)`;
</script>

<style scoped lang="scss">
.grid-about {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  justify-items: center;
  gap: 1rem;

  .img {
    padding-bottom: 100%;
    width: 80%;

    background-size: cover;
    background-position: center;
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    h4 {
      color: $color-text-secondary;
      font-size: 0.8rem;
    }

    p {
      font-size: 14px;
      margin: 0;
    }
  }
}
</style>
