// stores/useViewportStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const Store = defineStore('viewport', () => {
  const isMobile = ref(false);
  const isTablet = ref(false);
  const isDesktop = ref(false);
  const isDay = ref(true);
  const StatusSlidbar = ref(false);

  const checkViewport = () => {
    isMobile.value = window.innerWidth <= 768;
    isTablet.value = window.innerWidth > 768 && window.innerWidth <= 1024;
    isDesktop.value = window.innerWidth > 1024;
  };

  const changeMode = () => {
    isDay.value = !isDay.value;
  };

  const TurnOnSlideBar = () => {
    StatusSlidbar.value = !StatusSlidbar.value;
  };

  window.addEventListener('resize', checkViewport);
  checkViewport();

  return { isMobile, isTablet, isDesktop, isDay, changeMode, StatusSlidbar, TurnOnSlideBar };
});
