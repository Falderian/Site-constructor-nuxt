<template>
  <component :is="variant" />
</template>

<script setup lang="ts">

const { variant } = defineProps({
  variant: { type: String, required: true },
});
</script>

<script lang="ts">
import ContentOne from "./contentOne/ContentOne.vue";
import ContentTwo from "./contentTwo/ContentTwo.vue";

export default {
  components: { ContentOne, ContentTwo },
};
</script>
