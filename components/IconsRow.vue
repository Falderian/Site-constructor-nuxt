
<template>
  <div class="icons-row">
    <DynamicIcon v-for="icon in icons" :key="icon" :icon-name="icon" />
  </div>
</template>

<script setup lang="ts">
import DynamicIcon from '@/components/icons/DynamicIcon.vue';

const { icons } = defineProps({ icons: { type: Array, required: true } })
</script>

<style scoped lang="scss">
.icons-row {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;

  flex-wrap: wrap;
}
</style>
