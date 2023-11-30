<template>
  <component :is="variant" :config="config" />
</template>

<script setup lang="ts">

const { variant } = defineProps({
  variant: { type: String, required: true },
});

const config = {
  logo: "Store",
  pages: ["Home", "Shop", "About", "Blog", "Contact", "Pages"],
  icons: {
    search: '',
    cart: 1,
    liked: 1,
  }
};

</script>

<script lang="ts">
import HeaderOne from "./HeaderOne.vue";
import HeaderTwo from "./HeaderTwo.vue";

export default {
  components: { HeaderOne, HeaderTwo },
};
</script>

