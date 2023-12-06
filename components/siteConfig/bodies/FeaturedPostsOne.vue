<template>
  <section class="container-posts">
    <h4>{{ config.subheading }}</h4>
    <h2>{{ config.heading }}</h2>
    <div class="posts">
      <div v-for="post in config.posts" :key="post.title" class="post">
        <div class="post__img">
          <div class="post__tag bold">{{ post.design.tag }}</div>
          <img :src="`/images/posts/${post.design.img}-0.jpeg`" />
        </div>
        <div class="post__content">
          <div class="post__header">
            <span>{{ post.content.subheading }}</span>
            <div>&#11088; {{ post.content.rank }}</div>
          </div>
          <span class="bold">{{ post.content.title }}</span>
          <p>{{ post.content.desc }}</p>
          <span class="post__sales bold">{{ post.content.sales }} sales</span>
          <div class="post__prices">
            <span v-for="price in post.content.prices" :key="post.content" class="bold">{{ price }}</span>
          </div>
          <div class="colors">
            <span v-for="color in post.content.colors" class="dot" :style="{ backgroundColor: color }"></span>
          </div>
          <BaseButton :text="post.content.btn.text" class-name="teal" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { config } = defineProps({ config: { type: Object, required: true } })
</script>

<style scoped lang="scss">
.container-posts {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  h4 {
    color: $color-text-secondary;
  }

  .posts {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    gap: 1rem;

    .post {
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 45%;
      gap: 1rem;

      &__tag {
        position: absolute;
        margin-left: 1rem;
        padding: 0.3rem 1rem;

        text-transform: capitalize;
        color: white;
        background-color: $color-red;
      }

      &__icons {
        display: flex;

        width: 100%;

        justify-content: center;

        gap: 1rem;
        margin: 1rem;

        .icon {
          transition: all 0.5s;

          &:hover {
            scale: 1.1;
          }
        }
      }

      &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          color: $color-text-secondary;
        }

        div {
          padding: 0.3rem 0.5rem;
          font-size: 12px;
          color: white;
          background-color: #252B42;
          border-radius: 20px;
        }
      }

      &__img {
        width: 40%;

        img {
          width: 100%;
        }
      }

      &__content {
        display: flex;
        flex-direction: column;

        gap: 1rem;
        width: 40%;
      }

      &__sales {
        color: $color-text-gray;
      }

      &__prices {
        display: flex;
        gap: 0.5rem;

        span:first-child {
          color: $color-text-gray;
          opacity: 0.5;
        }

        span:last-child {
          color: $color-green;
        }
      }

      &__footer {
        display: flex;
      }
    }
  }
}

.colors {
  display: flex;
  gap: 0.5rem;
  padding-bottom: 1rem;

  .dot {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;
  }
}

@media (max-width: 768px) {
  .posts {
    flex-wrap: wrap;
    gap: 2rem;

  }
}

.container-posts .posts {
  flex-wrap: wrap;
  gap: 2rem;

  .post {
    width: 100%;
    flex-wrap: wrap;

    &__img {
      height: 50%;
    }

    &__content {
      width: 80%;
    }
  }
}
</style>
