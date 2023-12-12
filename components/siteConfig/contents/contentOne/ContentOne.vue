<template>
  <div class="content">
    <div class="limit">
      <span>Producs per page</span>
      <input type="number" :min="limit.min" :max="limit.max" v-model="contentPerPage" @change="hanldeLimitChange" />
    </div>
    <div class="content__cards" ref="contentRef">
      <ContentCard v-for="card in currContent" :card="card" :key="card.id" />
    </div>
    <div class="pagination">
      <span v-for="page in pagesNums" :class="[page === currPage && 'active', 'page-num']" @click="changePageNum(page)">
        {{ page }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentCard from '../ContentCard.vue';

const { content } = defineProps({ content: { type: Array as PropType<ICard[]>, required: true } })

const contentRef = ref(null);
const contentPerPage = ref(3);
const currPage = ref(1);

const pagesAmount = computed(() => {
  return Math.ceil(content.length / contentPerPage.value);
});

const limit = computed(() => {
  return { min: 3, max: content.length - 1 };
});

const pagesNums = computed(() => {
  return Array.from({ length: pagesAmount.value }, (_, i) => i + 1);
});

const currContent = computed(() => {
  return content.slice(
    (currPage.value - 1) * contentPerPage.value,
    currPage.value * contentPerPage.value
  );
});

const toogleAnimation = () => {
  const toggle = () =>
    (contentRef.value! as HTMLDivElement).classList.toggle("anim-fade-in");
  toggle();
  setTimeout(toggle, 500);
};

const changePageNum = (num: number) => {
  toogleAnimation();
  currPage.value = num;
};

const hanldeLimitChange = () => {
  toogleAnimation();
  currPage.value = 1;
};

</script>

<style scoped lang="scss">
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
    transition: all 0.5s;

    &:hover {
      color: $color-text-secondary;
      scale: 1.5;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  gap: 2rem;

  .limit {
    display: flex;
    justify-content: center;
    gap: 1rem;

    input {
      outline: none;
      text-align: center;
      border: 1px solid $color-text-secondary;
    }
  }

  &__cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    min-height: 200px;
    height: 100%;
  }
}

@media (max-width: 1024px) {
  .content__cards {
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 2rem;

    .card {
      width: 80%;
    }
  }
}

@media (max-width: 600px) {
  .content__cards {
    padding: 1rem 0rem;

    .card {
      width: 100%;
    }
  }
}
</style>
