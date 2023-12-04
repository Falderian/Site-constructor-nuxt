<template>
  <div class="heading">
    <h4>{{ config.title }}</h4>
    <h2>{{ config.heading }}</h2>
    <h4>{{ config.subheading }}</h4>
  </div>
  <div class="prods">

    <div v-for="(item, index) in config.items" :key="item + index" class="prod">
      <img :src="`/images/featuredProds/product-${index}.jpeg`" :class="[config.size ? 'xs' : 'sm']" />
      <span class="prod__title bold">{{ item.title }}</span>
      <span class="prod__desc">{{ item.desc }}</span>
      <div class="prod__price">
        <span>{{ item.price }}</span>
        <span>{{ item.discount }}</span>
      </div>
      <div v-if="!config.size" class="colors">
        <span v-for="color in item.colors" class="dot" :style="{ backgroundColor: color }"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { config } = defineProps({
  config: { type: Object, required: true }
})
</script>

<style scoped lang="scss">
.prods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  gap: 1rem;


  .prod {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;


    transition: 0.2s linear;
    border: 1px solid white;

    &__title {
      color: black;
    }

    &__desc {
      color: $color-text-gray;
    }

    &__price {
      display: flex;
      gap: 1rem;

      span:first-child {
        opacity: 0.4;
      }

      span:last-child {
        color: #23856D;
        font-weight: 700;
      }
    }

    &:hover {
      border: 1px solid $color-bg-semi-blue;
    }
  }

  .xs {
    max-height: 18rem;
  }

  .sm {
    max-height: 20rem;
  }
}

.colors {
  display: flex;
  gap: 0.5rem;
  padding-bottom: 1rem;

  .dot {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;

  }
}

.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h4 {
    color: $color-text-gray;
  }
}
</style>
