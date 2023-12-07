<template>
  <DynamicBody :variant="currentOption!" />
</template>

<script setup lang="ts">
import DynamicBody from "@/components/siteConfig/bodies/DynamicBody.vue";

const siteOptions = useSiteOptions();
const { body } = siteOptions.currentSiteOptions;

const currentOption = ref(body);

siteOptions.$onAction(({ name, after }) => {
  if (name === "setSiteOption")
    after(() => (currentOption.value = siteOptions.currentSiteOptions.body));
});
</script>

<style scoped>
</style>
