<template>
  <div>
    <div>
      <label>Search</label>
      <input type="search" />
    </div>
    <div class="limit">
      <span>Producs per page</span>
      <input type="number" min="1" :max="pagesAmount" v-model="contentPerPage" />
    </div>
  </div>
  <div ref="contentRef">
    <component :is="variant" :content="currContentCard" />
  </div>
  <div class="pagination">
    <span v-for="page in pagesNums" :class="[page === currPage && 'active', 'page-num']" @click="changePageNum(page)">
      {{ page }}
    </span>
  </div>
</template>

<script setup lang="ts">
const { variant } = defineProps({
  variant: { type: String, required: true },
});

const contentRef = ref(null)

const { data: products } = await useAsyncData('posts', () => $fetch('https://api.escuelajs.co/api/v1/products'))

const contentPerPage = ref(9)
const currPage = ref(1)

const pagesAmount = computed(() => {
  return Math.round(products!.value!.length / contentPerPage.value)
})

const pagesNums = computed(() => {
  return Array.from({ length: pagesAmount.value }, (_, i) => i + 1)
})

const currContentCard = computed(() => {
  return products.value.slice(currPage.value * contentPerPage.value, (currPage.value + 1) * contentPerPage.value)
})

const changePageNum = (num: number) => {
  const toogleAnimation = () => (contentRef.value! as HTMLDivElement).classList.toggle('anim-fade-in');

  toogleAnimation()
  currPage.value = num;
  setTimeout(toogleAnimation, 500)
}
</script>

<script lang="ts">
import ContentOne from "./contentOne/ContentOne.vue";
import ContentTwo from "./contentTwo/ContentTwo.vue";

export default {
  components: { ContentOne, ContentTwo },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

  cursor: pointer;

  overflow-x: auto;
  overflow-y: hidden;

  .active {
    border-bottom: 1px solid $color-text-secondary;
    color: $color-text-secondary;
    text-decoration: overline;
  }

  .page-num {
    transition: all .5s;

    &:hover {
      color: $color-text-secondary;
      scale: 1.5;
    }
  }
}
</style>
