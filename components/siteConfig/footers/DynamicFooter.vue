<template>
  <component :is="variant" />
</template>

<script setup lang="ts">

const { variant } = defineProps({
  variant: { type: String, required: true },
});


</script>

<script lang="ts">
import FooterOne from "./FooterOne.vue";
import FooterTwo from "./FooterTwo.vue";

export default {
  components: { FooterOne, FooterTwo },
};
</script>
