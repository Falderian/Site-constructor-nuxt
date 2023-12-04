<template>
  <section class="config border-1-r pad-1">
    <section v-for="(values, optionName) in availableOptions" :key="optionName">
      <select @change="setSiteOption(optionName, options[optionName])" v-model="options[optionName]"
        class="config__option">
        <option v-for="option in values" :key="option">
          {{ option }}
        </option>
      </select>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useSiteOptions } from "@/stores/siteOptions";
import type { TSiteOptions } from "@/utils/types";
const { availableOptions, setSiteOption, currentSiteOptions } =
  useSiteOptions();

const options: TSiteOptions = {
  header: currentSiteOptions.header,
  body: currentSiteOptions.body,
  footer: currentSiteOptions.footer,
};
</script>

<style lang="scss" scoped>
.config {
  display: flex;
  flex-direction: column;

  gap: 1rem;

}
</style>
