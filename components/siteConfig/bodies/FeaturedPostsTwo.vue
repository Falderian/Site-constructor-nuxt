<template>
  <section class="posts-section">
    <h4>{{ config.subheading }}</h4>
    <h2>{{ config.heading }}</h2>
    <span>{{ config.desc }}</span>
    <div class="posts">
      <div v-for="post in config.posts" :key="post" class="post">
        <div class="img" :style="{ backgroundImage: backgroundImage(post.img) }"></div>
        <div class="post__content">
          <div class="post__tags">
            <span v-for="tag in post.content.tags" :key="tag" class="post__tag">{{ tag }}</span>
          </div>
          <span class="bold">{{ post.content.title }}</span>
          <span class="post__desc">{{ post.content.desc }}</span>
          <div class="post__info">
            <span>&#9200; {{ post.content.date }}</span>
            <span>{{ post.content.comments }} comments</span>
          </div>
          <BaseButton :text="post.content.btn.text" class-name="transparent" class="btn-transparent" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';

const { config } = defineProps({
  config: {
    type: Object, required: true
  }
})

const backgroundImage = (img: string) => `url(/images/posts/${img}-0.jpeg)`
</script>

<style scoped lang="scss">
.posts-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 100%;

  h4 {
    text-transform: capitalize;
    color: $color-text-secondary;
  }

  span {
    margin: 0;
    color: $color-text-gray;
  }

  .posts {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .post {
      display: flex;
      flex-direction: column;

      gap: 1rem;
      min-width: 15rem;
      width: 30%;

      .img {
        background-position: center;
        min-height: 15rem;
      }

      &__tags {
        display: flex;
        gap: 0.5rem;

        font-size: 12px;
        opacity: 0.6;

        span:first-child {
          color: $color-text-secondary;
        }
      }

      &__content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      &__desc {
        font-size: 0.9rem;
      }

      &__info {
        display: flex;
        justify-content: space-between;

        font-size: 0.8rem;
      }
    }
  }
}

.btn-transparent {
  color: $color-text-secondary;
}
</style>
