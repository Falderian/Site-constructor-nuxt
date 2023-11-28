<template>
  <div ref="wrapper">
    <component :is="iconName + 'Icon'" />
  </div>
</template>

<script>
import LoginIcon from '@/components/icons/LoginIcon.vue'
import CartIcon from '@/components/icons/CartIcon.vue'
import LikedIcon from '@/components/icons/LikedIcon.vue'

export default {
  name: "DynamicIcon",
  props: {
    iconName: { type: String, required: true }
  },
  components: {
    LoginIcon, CartIcon, LikedIcon
  },

}
</script>

<style lang="scss" scoped>
</style>
