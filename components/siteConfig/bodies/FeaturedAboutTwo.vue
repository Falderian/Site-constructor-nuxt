<template>
  <div class="grid-about">
    <div :style="{ backgroundImage }" class="img"></div>
    <div class="info">
      <h4>{{ info.subheading }}</h4>
      <h2>{{ info.heading }}</h2>
      <p>{{ info.desc }}</p>
      <div>
        <BaseButton v-for="btn in info.btns" :key="btn.text" :text="btn.text" :className="btn.class"
          :class="btn.class.substring('transparent') ? 'green-btn' : 'white-btn'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';

const { config } = defineProps({ config: { type: Object, required: true } })
const { info } = config
const backgroundImage = `url(/images/featuredProds/about/${config.img})`;

</script>

<style scoped lang="scss">
.grid-about {
  display: flex;
  gap: 1rem;

  .img {
    padding-bottom: 40%;
    width: 65%;

    background-size: cover;
    background-position: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    h4 {
      color: $color-text-gray;
      font-size: 0.8rem;
    }

    p {
      font-size: 14px;
      margin: 0;
    }

    div {
      display: flex;
      gap: 1rem;

      button:last-child {
        color: $color-green;
        border: 1px solid;

        &:hover {
          scale: 1.1;
        }
      }
    }

  }
}
</style>
