<template>
  <div class="body-wrapper anim-fade-in">
    <div class="body-two">
      <div class=" body-two__content">
        <h4>{{ content.subheading }}</h4>
        <h2>{{ content.heading }}</h2>
        <span>{{ content.description }}</span>
        <BaseButton text="Shop now" class-name="green" />
      </div>
      <img src="/images/bodyTwo.svg" class="body-two__img" />
    </div>
    <IconsRow :icons="icons" />
    <Table :items="tableItems" />
  </div>
</template>

<script setup lang="ts">
import IconsRow from '@/components/IconsRow.vue';
import { default as Table } from '@/components/grids/tableOneTwo.vue';
const content = {
  subheading: 'Summer 2023',
  heading: "New collection",
  description: 'We know how large objects will act, but things on a small scale.',
  btnText: 'Shop now'
}

const icons = ['hooli', 'lya', 'piedPiper', 'stripe', 'aws', 'reddit']

const btnText = 'Explore items'

const tableItems = [{
  title: 'Top Product Of the Week', img: 'topOne.jpeg', btnText
}, {
  title: 'Top Product Of the Month', img: 'topTwo.jpeg',
  btnText
}, { title: 'Top Product Of the Year', img: 'topThree.jpeg', btnText }]


</script>

<style lang="scss" scoped>
.body-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.body-two {
  display: flex;
  justify-content: space-around;

  background-position: right;
  background-repeat: no-repeat;

  gap: 1rem;
  width: 100%;
  height: 100%;

  border-radius: 20px;
  background: linear-gradient(90deg, #96E9FB 0%, #ABECD6 100%);

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 40%;

    padding: 6rem 0rem 6rem 6rem;
    gap: 2rem;


    font-size: 1.3rem;

    h4 {
      color: $color-text-secondary;
    }

    h2 {
      font-weight: 900;
    }

    span {
      color: $color-text-gray;
    }
  }

  &__img {
    width: 49%;
  }
}
</style>
