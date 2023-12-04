<template>
  <div class="container border-1-r pad-1">
    <details open="true">
      <summary>Site pages:</summary>
      <li v-for="page in pages" :key="page">
        {{ page }}
      </li>
    </details>
  </div>
</template>

<script setup lang="ts">
const pages = ["Home page"];
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
</style>
