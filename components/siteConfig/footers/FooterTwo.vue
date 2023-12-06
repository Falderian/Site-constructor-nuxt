<template>
  <div class="anim-fade-in footer-container">
    <div class="contacts">
      <span class="bold">Contacts</span>
      <a v-for="contact in config.contacts" :key="contacts" :href="contact.href"> {{ contact.text }}</a>
    </div>
    <div class="quick-links">
      <span class="bold">Quick Links</span>
      <div class="links"><span v-for="link in config.links" :key="link">{{ link }}</span></div>
    </div>
    <div class="form">
      <span class="bold">Subcribe</span>
      <div>
        <input type="email" placeholred="Your email" />
        <button>&#8594</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  contacts: [{
    text: '+1 (2345) 678-91-23',
    href: 'tel:123456789123'
  },
  {
    text: 'hello@cyfrania.com',
    href: 'mailto:hello@cyfrania.com'
  }],
  links: ['Company Info', 'Legal', 'Features', 'Resources'],
}
</script>

<style scoped lang="scss">
.footer-container {
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 0;
  border-top: 1px solid $color-text-gray;


  .contacts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    text-decoration: none;
  }

  .quick-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0rem 1rem;

    .links {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 2rem 5rem;

      color: $color-text-gray;
      font-size: 0.8rem;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;

      input {
        background-color: #E6E6E6;
        border: none;
        outline: 1px solid transparent;
        border-radius: 20px 0 0 20px;
        transition: 0.5s linear;

        width: 100%;
        padding: 0.5rem;

        &:focus,
        &:hover {
          outline: 1px solid $color-text-secondary;
        }
      }
    }

    button {
      background-color: $color-text-secondary;
      border: none;
      color: white;
      border-radius: 0 20px 20px 0;
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 800px) {
  .footer-container {
    display: grid;
    grid-template-areas:
      "a b b"
      "a b b"
      "c c c";

    .contacts {
      grid-area: a;
    }

    .quick-links {
      grid-area: b;
    }

    .form {
      grid-area: c;
    }

    .quick-links .links {
      gap: 1rem;
    }
  }
}

@media (max-width: 600px) {
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    div {
      width: 100%;
    }
  }
}
</style>
