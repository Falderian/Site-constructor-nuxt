<template>
  <div class="header anim-fade-in">
    <span class="header__logo pad-1">{{ config.logo }}</span>
    <div class="header__menu">
      <span v-for="page in config.pages" :key="page" :class="['menu__item', page === 'Home' && 'bold']">{{ page }}</span>
    </div>
    <div class="header__menu">
      <div class="menu__login">
        <DynamicIcon iconName="Login" />
        <span>Login / Register</span>
      </div>
      <div v-for="( value, name ) in  config.icons" class="menu__login">
        <DynamicIcon :iconName="name" />
        <span v-if="value + 1">{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DynamicIcon from '@/components/icons/DynamicIcon.vue';
const { config } = defineProps({
  config: { type: Object, required: true }
})
</script>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;

  &__logo {
    font-size: 1.8rem;
    font-weight: bold;
  }

  &__menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    .menu__item {
      color: $color-text-gray;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        color: $color-text-secondary;
        text-decoration: overline;
      }
    }

    .menu__login {
      display: flex;
      gap: 0.5rem;

      color: $color-text-secondary;

      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

@media (max-width: 1200px) {
  .header {
    grid-template:
      "a b b"
      "a b b"
      "a c c"
    ;


    &__menu {
      width: 100%;
    }

    &__logo {
      grid-area: a;
    }

    &__menu:first-child {
      grid-area: b;
    }

    &__menu:last-child {
      grid-area: c;
      justify-content: center;
    }
  }
}

@media (max-width: 800px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;




    &__logo {
      padding: 0;
    }

    &__menu {
      justify-content: center;
    }
  }
}

@media (max-width: 650px) {
  .header {
    font-size: 14px;

    .menu__item {
      font-size: 14px;
    }
  }

}
</style>
