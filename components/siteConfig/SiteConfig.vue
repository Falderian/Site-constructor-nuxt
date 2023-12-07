<template>
  <section class="config">
    <section v-for="(values, optionName) in currOptions" :key="optionName">
      <select v-if="optionName in options" @change="setSiteOption(optionName, options[optionName as keyof TSiteOptions]!)"
        v-model="options[optionName as keyof TSiteOptions]" class="config__option">
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
const { setSiteOption, currentSiteOptions } =
  useSiteOptions();

const { currOptions } = defineProps({ currOptions: { type: Object, required: true } })

const options: TSiteOptions = {
  header: currentSiteOptions.header,
  body: currentSiteOptions.body,
  content: currentSiteOptions.content,
  footer: currentSiteOptions.footer,
};
</script>

<style lang="scss" scoped>
.config {
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;
  height: fit-content;

}
</style>
