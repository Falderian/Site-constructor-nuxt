<template>
  <div class="main_view">
    <SitePages class="border-1-r" />
    <section class="skeleton border-1-r pad-1">
      <DynamicHeader :variant="currentOptions.header" />
      <slot></slot>
      <DynamicFooter :variant="currentOptions.footer" />
    </section>
    <SiteConfig v-if="currOptions.header" :curr-options="currOptions" />
  </div>
</template>

<script setup lang="ts">
import SitePages from "@/components/SitePages.vue";
import SiteConfig from "@/components/siteConfig/SiteConfig.vue";
import { useSiteOptions } from "@/stores/siteOptions";
import DynamicHeader from "@/components/siteConfig/headers/DynamicHeader.vue";
import DynamicFooter from "@/components/siteConfig/footers/DynamicFooter.vue";

const siteOptions = useSiteOptions();
const route = useRoute();
const { header, footer } = siteOptions.currentSiteOptions;
const { availableOptions } = siteOptions;

const currOptions: Ref<{ header: string[], body?: string[], content?: string[], footer: string[] }> = ref(availableOptions)

const currentOptions = ref({
  header: ref(header),
  footer: ref(footer),
});


watch(
  () => route.path,
  (route) => {
    switchOptions()
  },
);

const switchOptions = () => {
  const { path } = route;
  const curr = path.substring(path.lastIndexOf('/') + 1, path.length)
  switch (curr) {
    case 'home':
      currOptions.value = { header: availableOptions.header, body: availableOptions.body, footer: availableOptions.footer }
      break;
    case 'content': {
      currOptions.value = { header: availableOptions.header, content: availableOptions.content, footer: availableOptions.footer }
      break;
    }
  }
}

switchOptions()

siteOptions.$onAction(({ name, after }) => {
  if (name === "setSiteOption")
    after(() => (currentOptions.value = siteOptions.currentSiteOptions));
});
</script>

<style lang="scss" scoped>
.main_view {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: 100dvh;
}

.skeleton {
  display: flex;
  flex-direction: column;

  background-color: $color-bg-primary;
  overflow: auto;
  gap: 2rem;
}
</style>
