<template>
  <div class="anim-fade-in footer-container">
    <div class="footer__links">
      <div v-for="item in config" :key="item.heading" class="item">
        <span class="bold">{{ item.heading }}</span>
        <span v-for="url in item.urls" :key="url">{{ url }}</span>
      </div>
    </div>
    <div class="form">
      <span class="bold">{{ form.heading }}</span>
      <div>
        <input type="email" placeholder="Your Email" class="pad-1" />
        <BaseButton :text="form.btn.text" :class="form.btn.className" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = [
  { heading: 'Company Info', urls: ['About us', 'Carrier', 'We are hiring', 'Blog'] },
  { heading: 'Legal', urls: ['About us', 'Carrier', 'We are hiring', 'Blog'] },
  { heading: 'Features', urls: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'] },
  { heading: 'Resources', urls: ['IOS & Android', 'Watch a demo', 'Customers', 'API'] }
]

const form = {
  heading: 'Get In Touch',
  btn: {
    text: 'Subscribe',
    className: 'blue'
  },
  text: 'Lore imp sum dolor Amit'
}
</script>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  justify-content: center;

  padding: 1rem 0;
  gap: 3rem;
  width: 100%;

  border-top: 1px solid $color-text-gray;

  .footer__links {
    display: flex;
    gap: 2rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span:not(:first-child) {
      font-size: 14px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    height: 100%;

    span,
    div {
      display: flex;
    }
  }
}

input {
  background-color: #E6E6E6;
  border: none;
  outline: 1px solid transparent;
  border-radius: 20px 0 0 20px;
  transition: 0.5s linear;

  width: 100%;

  &:focus,
  &:hover {
    outline: 1px solid $color-text-secondary;
  }
}


.blue {
  background-color: $color-text-secondary;
  border-radius: 0 20px 20px 0;

  &:hover {
    scale: none;
  }
}

@media (max-width: 1100px) {

  .form div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  input {
    max-width: 80%;
    border-radius: 1rem;
  }

  .blue {
    border-radius: 1rem;
  }
}

@media (max-width: 900px) {
  .footer-container .footer__links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 2rem;
    width: 100%;
  }
}

@media (max-width: 650px) {
  .footer-container .footer__links {
    display: flex;
    flex-direction: column;
  }

  .footer-container .item span:not(:first-child) {
    display: none;
  }
}
</style>
