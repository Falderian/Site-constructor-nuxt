<template>
  <div class="anim-fade-in content">
    <ContentCardOne v-for="card in content" :card="card" :key="card.title" />
  </div>
</template>

<script setup lang="ts">
import ContentCardOne from './ContentCardOne.vue';

const { content } = defineProps({ content: { type: Array as PropType<ICard[]>, required: true } })
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  gap: 2rem;
}
</style>
