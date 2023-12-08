<template>
  <div class="dynamic-content">
    <div class="controls">
      <!-- ToDo -->
      <!-- <div>
        <label>Search</label>
        <input type="search" v-model="searchQuery" />
      </div> -->
      <div class="limit">
        <span>Producs per page</span>
        <input type="number" :min="limit.min" :max="limit.max" v-model="contentPerPage" @change="hanldeLimitChange" />
      </div>
    </div>
    <div ref="contentRef">
      <component :is="variant" :content="currContent" />
    </div>
    <div class="pagination">
      <span v-for="page in pagesNums" :class="[page === currPage && 'active', 'page-num']" @click="changePageNum(page)">
        {{ page }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { variant } = defineProps({
  variant: { type: String, required: true },
});


const { data: products } = await useAsyncData('posts', () => $fetch('https://api.escuelajs.co/api/v1/products'))

const contentRef = ref(null)
const contentPerPage = ref(9)
const currPage = ref(1)

const limit = {
  min: 5, max: 25
}

const pagesAmount = computed(() => {
  return Math.round((products!.value as []).length / contentPerPage.value)
})

const pagesNums = computed(() => {
  return Array.from({ length: pagesAmount.value - 1 }, (_, i) => i + 1)
})

const currContent = computed(() => {
  return (products as Ref<[]>).value.slice(currPage.value * contentPerPage.value, (currPage.value + 1) * contentPerPage.value)
})

const toogleAnimation = () => {
  const toggle = () => (contentRef.value! as HTMLDivElement).classList.toggle('anim-fade-in');
  toggle();
  setTimeout(toggle, 500);
}

const changePageNum = (num: number) => {
  toogleAnimation()
  currPage.value = num;
}

const hanldeLimitChange = () => {
  toogleAnimation()
  currPage.value = 1
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
.dynamic-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  .controls {
    display: flex;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      input {
        background-color: #E6E6E6;
        border: none;
        outline: 1px solid transparent;
        border-radius: 20px;
        transition: 0.5s linear;
        padding: 0.3rem 0.5rem;

        &:focus,
        &:hover {
          outline: 1px solid $color-text-secondary;
        }
      }
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;

    cursor: pointer;

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
}
</style>
