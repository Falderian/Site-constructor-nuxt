<template>
  <div class="card">
    <div class="img">
      <img :src="cardImage" @mouseenter="(e) => handleImageChange(e, 'enter')"
        @mouseleave="(e) => handleImageChange(e, 'leave')" />
    </div>
    <div class="card__content">
      <span class="card__title bold">{{ card.title }}</span>
      <span>Category: <span class="bold">{{ card.category.name }}</span></span>
      <p>{{ card.description }}</p>
      <div class="card__ranking">
        <span class="bold">{{ card.price }}$</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard } from '@/utils/types';
import type { PropType } from 'nuxt/dist/app/compat/capi';

const { card } = defineProps({
  card: { type: Object as PropType<ICard>, required: true }
})

const initialImage = card.images[0] === "https://placeimg.com/640/480/any" ? card.category.image : card.images[0]
const cardImage = ref(initialImage)

const handleImageChange = (e: Event, type: string) => {
  if (card.images[0] === "https://placeimg.com/640/480/any") return
  (e.target as HTMLDivElement).classList.toggle('anim-fade-in');

  switch (type) {
    case 'enter':
      cardImage.value = card.images[1] || card.category.image;
      break;
    case 'leave': {
      cardImage.value = initialImage;
    }
  }
}

</script>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 30%;
  height: 100%;

  justify-items: center;
  align-items: center;

  font-size: 14px;
  gap: 1rem;
  padding: 0.3rem;

  border-radius: 20px;
  transition: all 0.5s;

  &:hover {
    background-color: aliceblue;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 0.3rem;
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
      border-radius: 20px;
    }
  }
}
</style>


