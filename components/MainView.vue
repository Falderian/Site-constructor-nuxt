<template>
  <div class="main_view">
    <SitePages class="border-1-r" />
    <SiteSkeleton />
    <SiteConfig />
  </div>
</template>

<script setup lang="ts">
import SitePages from "@/components/SitePages.vue";
import SiteSkeleton from "@/components/siteConfig/SiteSkeleton.vue";
import SiteConfig from "@/components/siteConfig/SiteConfig.vue";
</script>

<style lang="scss" scoped>
.main_view {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
}
</style>
