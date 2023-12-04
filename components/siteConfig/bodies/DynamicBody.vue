<template>
  <div class="dynamic-body">
    <component :is="variant" />
  </div>
</template>

<script setup lang="ts">

const { variant } = defineProps({
  variant: { type: String, required: true },
});


</script>

<script lang="ts">
import BodyOne from "./bodyOne/BodyOne.vue";
import BodyTwo from "./BodyTwo.vue";

export default {
  components: { BodyOne, BodyTwo },
};
</script>

<style lang="scss" scoped>
.dynamic-body {
  display: flex;
  max-height: 70%;

  overflow: hidden;

}
</style>
