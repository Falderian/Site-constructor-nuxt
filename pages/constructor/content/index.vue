<template>
  <DynamicContent :variant="currentOption!" />
</template>

<script setup lang="ts">
import DynamicContent from '@/components/siteConfig/contents/DynamicContent.vue';

const siteOptions = useSiteOptions();
const { content } = siteOptions.currentSiteOptions;

const currentOption = ref(content);

siteOptions.$onAction(({ name, after }) => {
  if (name === "setSiteOption")
    after(() => (currentOption.value = siteOptions.currentSiteOptions.content));
});
</script>

<style scoped>
</style>
