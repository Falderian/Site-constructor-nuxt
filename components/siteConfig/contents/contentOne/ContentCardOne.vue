<template>
  <div class="card pad-1">
    <div class="img">
      <img :src="card.image" />
    </div>
    <div class="card__content">
      <span class="card__title bold">{{ card.title }}</span>
      <span>Category: {{ card.category }}</span>
      <p>{{ card.description }}</p>
      <div class="card__ranking">
        <span> &#127775; {{ card.rating.rate }}</span>
        <span>Count: {{ card.rating.count }}</span>
        <span class="bold">{{ card.price }}$</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TCard } from '@/utils/types';
import type { PropType } from 'nuxt/dist/app/compat/capi';



const { card } = defineProps({
  card: { type: Object as PropType<TCard>, required: true }
})
</script>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 45%;

  justify-items: center;
  align-items: center;

  font-size: 14px;
  gap: 1rem;

  border: 1px solid rgba(0, 47, 255, 0.3);
  border-radius: 20px;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

  }

  &__ranking {
    display: flex;
    justify-content: space-around;
    gap: 1rem;

    span {
      background-color: black;
      padding: 0.3rem 0.5rem;
      color: white;
      border-radius: 20px;
    }

    span:last-child {
      background-color: transparent;
      scale: 1.4;
      color: $color-text-secondary;
    }
  }

  .img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 100%;
    }
  }
}
</style>


