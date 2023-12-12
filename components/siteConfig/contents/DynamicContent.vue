<template>
  <div class="dynamic-content">
    <div class="controls">
      <!-- ToDo -->
      <!-- <div>
        <label>Search</label>
        <input type="search" v-model="searchQuery" />
      </div> -->
    </div>
    <div class="anim-fade-in">
      <component :is="variant" :content="products" />
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

  // .controls {
  //   display: flex;
  //   gap: 1rem;

  //   div {
  //     display: flex;
  //     align-items: center;
  //     gap: 0.5rem;

  //     input {
  //       background-color: #e6e6e6;
  //       border: none;
  //       outline: 1px solid transparent;
  //       border-radius: 20px;
  //       transition: 0.5s linear;
  //       padding: 0.3rem 0.5rem;

  //       &:focus,
  //       &:hover {
  //         outline: 1px solid $color-text-secondary;
  //       }
  //     }
  //   }
  // }


}
</style>
