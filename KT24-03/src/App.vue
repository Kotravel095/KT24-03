<script setup>
  import { watch } from 'vue';
  import HeadNavbar from './components/HeadNavbar.vue';
  import FooterNavbar from './components/FooterNavbar.vue';
  import '../src/assets/main.scss';
  import { Store } from './stores/useViewportStore';

  const store = Store();

  const toggleDarkMode = (isDay) => {
    document.body.classList.toggle("dark-mode", !isDay);
  };

  toggleDarkMode(store.isDay);

  watch(() => store.isDay, (newValue) => {
    toggleDarkMode(newValue);
  });
</script>

<template>
  <div>
    <HeadNavbar />
    <RouterView />
    <FooterNavbar />
  </div>
</template>

<style lang="scss">
  $main-bg-color-mode-sun: #E5E5E5;
  $main-bg-color-mode-night: #090D1F;
  $main-font-color-mode-sun: #392d2d;
  $main-font-color-mode-night: #FFFFFF;

  body {
    background-color: $main-bg-color-mode-sun;
    color: $main-font-color-mode-sun;
    transition: background-color 0.5s ease, color 0.5s ease;

    a {
      color: $main-font-color-mode-sun;
      transition: color 0.5s ease;
    }
  }

  .dark-mode {
    background-color: $main-bg-color-mode-night;
    color: $main-font-color-mode-night;

    a {
      color: $main-font-color-mode-night;
    }
  }
</style>

