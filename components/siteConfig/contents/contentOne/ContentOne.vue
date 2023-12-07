<template>
  <div class="anim-fade-in content">
    <ContentCardOne v-for="post in posts" :card="post" :key="post" />
  </div>
</template>

<script setup lang="ts">
import ContentCardOne from './ContentCardOne.vue';

const { data: posts } = await useAsyncData('posts', () => $fetch('https://fakestoreapi.com/products?limit=10'))
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  gap: 1rem;
}
</style>
