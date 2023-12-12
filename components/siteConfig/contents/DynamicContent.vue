<template>
  <div class="dynamic-content">
    <div class="search">
      <label>Search</label>
      <input type="search" @input="debouncedInput" placeholder="Enter your query..." autofocus="true" />
    </div>
    <div class="anim-fade-in">
      <component v-if="(currProds as []).length" :is="variant" :content="currProds" :key="componentKey" />
      <div v-else>No producst are available.</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { variant } = defineProps({
  variant: { type: String, required: true },
});

const { data: products } = await useAsyncData("posts", () =>
  $fetch("https://api.escuelajs.co/api/v1/products")
);

const componentKey = ref(0);
const searchQuery = ref("");

const currProds = computed(() => {
  componentKey.value += 1;
  return (products.value as ICard[]).filter((product) =>
    JSON.stringify(product).toLowerCase().includes(searchQuery.value)
  );
});

const handleInput = (e: Event) => {
  searchQuery.value = (e.target as HTMLInputElement).value.toLowerCase();
};

const debouncedInput = debounce(handleInput, 1000);
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

  .search {
    display: flex;
    gap: 1rem;
    align-items: center;

    input {
      border: 1px solid $color-text-secondary;
      outline: none;
      border-radius: 20px;
      transition: 0.5s linear;
      padding: 0.3rem 1rem;

      &:focus,
      &:hover {
        box-shadow: 0 0 1rem 0.2rem rgba(34, 60, 80, 0.2);
      }
    }
  }
}
</style>
