
<template>
  <div class="grid">
    <div v-for="(item, index) in  items " :key="item.title" :style="{ backgroundImage: backgroundImage(item.img) }"
      :class="`grid__item-${index} grid__item`">
      <div class="info">
        <span>{{ item.title }}</span>
        <BaseButton :text="item.btnText" className="transparent" />
      </div>
    </div>
  </div>
</template >

<script setup lang ="ts">
const { items } = defineProps({
  items: { type: Array, required: true }
})


const backgroundImage = (img: string) => `url(/images/tops/${img})`
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  justify-items: center;
  gap: 1rem 3rem;
  grid-template-areas:
    "a b"
    "a b"
    "a c";

  height: 30rem;

  &__item {
    position: relative;

    width: 100%;
    max-width: 540px;
    height: 100%;
    max-height: 500px;

    background-position: center;

    &:hover .info button {
      scale: 1.1;
    }

    &-0 {
      grid-area: a;
    }

    &-1 {
      grid-area: b;
    }

    &-2 {
      grid-area: c;
    }
  }

}

.info {
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 1rem;

  color: white;
  background-color: $color-bg-semi-blue;

  span {
    font-style: normal;
    font-weight: 700 !important;
  }
}
</style>
