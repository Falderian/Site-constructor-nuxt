<template>
  <div class="container border-1-r pad-1">
    <details open="true">
      <summary>Site pages:</summary>
      <li v-for="page in pages" :key="page.text">
        <NuxtLink :to="page.link">
          {{ page.text }}</NuxtLink>
      </li>
    </details>
  </div>
</template>

<script setup lang="ts">
const pages = [{ text: "Home page", link: '/constructor/home' }, { text: 'Content page', link: '/constructor/content' }];
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;

  details li {
    list-style: inside;
    list-style-type: circle;
  }
}

details {
  user-select: none;

  li {
    cursor: pointer;
    font-weight: 400;

    a {
      color: black;
      transition: 0.2s color linear;
      text-decoration: none;

      &:hover {
        color: $color-text-secondary;
      }
    }
  }
}
</style>
