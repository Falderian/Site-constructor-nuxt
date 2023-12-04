<template>
  <div ref="wrapper">
    <component :is="iconName + 'Icon'" />
  </div>
</template>

<script>
import LoginIcon from '@/components/icons/LoginIcon.vue'
import CartIcon from '@/components/icons/CartIcon.vue'
import LikedIcon from '@/components/icons/LikedIcon.vue'
import AwsIcon from './AwsIcon.vue'
import HooliIcon from './HooliIcon.vue'
import LyaIcon from './LyaIcon.vue'
import PiedPiperIcon from './PiedPiperIcon.vue'
import RedditIcon from './RedditIcon.vue'
import StripeIcon from './StripeIcon.vue'


export default {
  name: "DynamicIcon",
  props: {
    iconName: { type: String, required: true }
  },
  components: {
    LoginIcon, CartIcon, LikedIcon, AwsIcon, HooliIcon, LyaIcon, PiedPiperIcon, RedditIcon, StripeIcon
  },

}
</script>

<style lang="scss" scoped>
</style>
