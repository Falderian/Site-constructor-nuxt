
<template>
  <button :class="[className, 'btn']" :click="action">{{ text }}</button>
</template>

<script setup lang="ts">
const { action, className, text } = defineProps({
  action: { type: Function },
  className: { type: String, default: 'green' },
  text: { type: String, default: 'Submit' }
});

</script>

<style scoped lang="scss">
.btn {
  padding: 1rem;
  width: fit-content;

  border: none;

  text-transform: uppercase;
  font-weight: 700;
  color: white;
  border: 1px solid transparent;

  transition: all 0.5s linear;

  &:hover {
    border: 1px solid white;
    scale: 1.1;
  }
}

.green {
  background-color: $color-green;
}

.transparent {
  background-color: transparent;
  border: 1px solid white;

  &:hover {
    scale: 1;
  }
}
</style>
