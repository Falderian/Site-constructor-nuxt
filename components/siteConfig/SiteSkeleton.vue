<template>
  <section class="skeleton border-1-r pad-1">
    <DynamicHeader :variant="currentOptions.header" />
  </section>
</template>

<script setup lang="ts">
import { useSiteOptions } from "@/stores/siteOptions";
import DynamicHeader from "@/components/siteConfig/headers/DynamicHeader.vue";

const siteOptions = useSiteOptions();
const { header, body, footer } = siteOptions.currentSiteOptions;

const currentOptions = ref({
  header: ref(header),
  body: ref(body),
  footer: ref(footer),
});

siteOptions.$onAction(({ name, after }) => {
  if (name === "setSiteOption")
    after(() => (currentOptions.value = siteOptions.currentSiteOptions));
});
</script>

<style lang="scss" scoped>
.skeleton {
  display: flex;
  flex-direction: column;

  background-color: $color-bg-primary;
}
</style>
