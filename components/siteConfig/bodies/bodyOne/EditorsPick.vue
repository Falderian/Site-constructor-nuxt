<template>
  <div class="editors">
    <h2>{{ config.heading }}</h2>
    <h4>{{ config.subheading }}</h4>
    <div class="editors__items">
      <div class="editors_columns">
        <div v-for="item in config.columns" :key="item" class="editor__item"
          :style="{ backgroundImage: backgroundImage(item) }">
          <span class="category">{{ item }}</span>
        </div>
      </div>
      <div class="editors_rows">
        <div v-for="(item, index) in config.rows" :key="item" class="editor__item"
          :style="{ backgroundImage: backgroundImage(item) }">
          <span class="category">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const config = {
  heading: "EDITOR’S PICK",
  subheading: 'Problems trying to resolve the conflict between',
  columns: ['men', 'women',],
  rows: ['accessories', 'kids']
}

const backgroundImage = (img: string) => `url(/images/editors/${img}.jpeg)`

</script>


<style lang="scss" scoped>
.editors {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  gap: 2rem;

  &__items {
    display: flex;
    justify-content: center;

    gap: 1rem;
    width: 100%;

    div {
      justify-content: center;
    }
  }

  &_columns {
    display: flex;
    gap: 1rem;
    width: 50%;

    div {
      max-width: 360px;
    }

    div:first-child {
      width: 60%;
    }

    div:last-child {
      width: 35%;
    }
  }

  &_rows {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 360px;

    gap: 10%;

    div {
      height: 45%;
      max-width: 360px;
    }
  }
}

.editor__item {
  position: relative;
  height: 400px;

  background-position: top;

  span {
    transition: 1s all;
  }

  &:hover span {
    scale: 1.2;
  }
}

.category {
  position: absolute;
  bottom: 0%;
  left: 1rem;
  bottom: 1rem;
  padding: 0.5rem 1rem;

  text-transform: uppercase;
  background-color: $color-bg-primary;
}
</style>
