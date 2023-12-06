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
    <Grid :items="tableItems" />
    <FeaturedProducts :config="productsConfig" />
    <FeaturedAbout />
    <FeaturedPosts :config="postsConfig" />
  </div>
</template>

<script setup lang="ts">
import IconsRow from '@/components/IconsRow.vue';
import Grid from '@/components/grids/tableOneTwo.vue';
import FeaturedProducts from '../FeaturedProducts.vue';
import FeaturedAbout from '../FeaturedAboutOne.vue';
import FeaturedPosts from '../FeaturedPosts.vue';



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

const productDesign = {
  title: 'Graphic Design',
  desc: 'English Department',
  price: '16.48$',
  discount: '6.48$',
  colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
}

const productsConfig = {
  title: 'Featured Products',
  heading: 'BESTSELLER PRODUCTS',
  subheading: 'Problems trying to resolve the conflict between',
  items: Array(8).fill(productDesign)
}

const post = {
  design: {
    tag: 'sale',
    img: 'post',

  },
  content: {
    subheading: 'English Departament',
    title: 'Graphic design',
    desc: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
    rank: '4.9',
    sales: 15,
    prices: ['16.4$', '6.4$'],
    colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    btn: {
      text: 'Learn more',
      className: 'Teal'
    }
  }
}

const posts = Array(2).fill(post)

const postsConfig = {
  heading: 'Featured Posts',
  subheading: 'Practice Advice', posts
}

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
