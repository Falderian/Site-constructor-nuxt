<template>
  <div class="content">
    <div class="content__cards" ref="contentRef">
      <ContentCard v-for="card in currContent" :card="card" :key="card.id" />
    </div>
    <BaseButton @click="handleClick" class-name="teal" text="Load More" ref="buttonRef" />
  </div>
</template>

<script setup lang="ts">
import ContentCard from "../ContentCard.vue";
import { useInfiniteScroll } from '@vueuse/core'


const { content } = defineProps({
  content: { type: Array as PropType<ICard[]>, required: true },
});
const contentRef = ref(null);
const buttonRef = ref(null);
const currPage = ref(1);
const currContent = ref([] as ICard[]);

onMounted(() => appendContent());

const appendContent = () => {
  toogleAnimation();
  currPage.value += 1;
  currContent.value = content.slice(0, currPage.value * 3);
}

const toogleAnimation = () => {
  const toggle = () =>
    (contentRef.value! as HTMLDivElement).classList.toggle("anim-fade-in");
  toggle();
  setTimeout(toggle, 500);
};

const handleClick = () => appendContent();

// uncomment to make an infinite scroll
// useInfiniteScroll(buttonRef.value, appendContent, { distance: 10 })
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &__cards {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    overflow: auto;
    gap: 1rem 0;
  }
}
</style>
