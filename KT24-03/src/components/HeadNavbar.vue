<script setup lang="ts">
    import { watch } from 'vue';
    import { Store } from '../stores/useViewportStore';
    const store = Store();
</script>

<template>
  <div class="container">
    <div class="div-webname">
      <span class="webname">Kamtob</span>
    </div>
    <div class="div-listitem">
      <nav v-if="!store.isMobile">
        <div>
            <RouterLink to="/"><span class="span-list">Home</span></RouterLink>
            <RouterLink to="/blog"><span class="span-list">Blog</span></RouterLink>
            <RouterLink to="/about"><span class="span-list">About</span></RouterLink>
        </div>
      </nav>
      <nav v-else-if="store.isMobile">
        <div v-if="store.StatusSlidbar" :class="{ 'day-mode-slidebar': store.isDay, 'night-mode-slidebar' :!store.isDay }">
            <div v-if="store.isDay">
              <img src="../assets/HeaderNavbarImage/icon-hamberger-black.png" width="30" alt="" @click="store.TurnOnSlideBar" class="bt-exit">
            </div>
            <div v-else-if="!store.isDay">
                <img src="../assets/HeaderNavbarImage/icon-hamberger-white.png" width="30" alt="" @click="store.TurnOnSlideBar" class="bt-exit">
            </div>
            <RouterLink to="/"><span class="span-list-mobile" @click="store.TurnOnSlideBar">Home</span></RouterLink>
            <RouterLink to="/blog"><span class="span-list-mobile" @click="store.TurnOnSlideBar">Blog</span></RouterLink>
            <RouterLink to="/about"><span class="span-list-mobile" @click="store.TurnOnSlideBar">About</span></RouterLink>
            <div v-if="store.isDay">
                <button style="margin-top: 40px; display: flex; justify-content: center;" :class="{ 'day-mode': store.isDay, 'night-mode': !store.isDay }" @click="store.changeMode">
                    <img src="../assets/HeaderNavbarImage/icon-sun.png" alt="" width="25">
                    <img src="../assets/HeaderNavbarImage/icon-whitedot.png" alt="" width="22">
                </button>

            </div>
            <div v-else-if="!store.isDay">
                <button style="margin-top: 40px; display: flex; justify-content: center;" :class="{ 'day-mode': store.isDay, 'night-mode': !store.isDay }" @click="store.changeMode">
                    <img src="../assets/HeaderNavbarImage/icon-blackdot.png" alt="" width="25">
                    <img src="../assets/HeaderNavbarImage/icon-moon.png" alt="" width="22">
                </button>
            </div>
        </div>
      </nav>
    </div>
    <div class="div-iconmode">
      <div v-if="store.isDay">
        <button v-if="store.isMobile" :class="{ 'day-mode-mobile': store.isDay, 'night-mode-mobile': !store.isDay }" @click="store.TurnOnSlideBar">
            <img src="../assets/HeaderNavbarImage/icon-hamberger-black.png" alt="" width="30">
        </button>
        <button v-else-if="!store.isMobile" :class="{ 'day-mode': store.isDay, 'night-mode': !store.isDay }" @click="store.changeMode">
            <img src="../assets/HeaderNavbarImage/icon-sun.png" alt="" width="25">
            <img src="../assets/HeaderNavbarImage/icon-whitedot.png" alt="" width="20">
        </button>
      </div>
      <div v-else-if="!store.isDay">
        <button v-if="store.isMobile" :class="{ 'day-mode-mobile': store.isDay, 'night-mode-mobile': !store.isDay }" @click="store.TurnOnSlideBar">
            <img src="../assets/HeaderNavbarImage/icon-hamberger-white.png" alt="" width="30">
        </button>
        <button v-else-if="!store.isMobile" :class="{ 'day-mode': store.isDay, 'night-mode': !store.isDay }" @click="store.changeMode">
            <img src="../assets/HeaderNavbarImage/icon-blackdot.png" alt="" width="25">
            <img src="../assets/HeaderNavbarImage/icon-moon.png" alt="" width="20">
        </button>
      </div>


    </div>
  </div>
</template>

<style scoped lang="scss">
    $main-bg-color-mode-night: #090D1F;
    $main-bg-color-mode-sun: #E5E5E5;
  .container {
    display: flex;
    height: 80px;
    align-items: center;
    padding: 0;
  }
  .div-webname {
    flex-grow: 2;
    text-align: start;
  }
  .div-listitem {
    flex-grow: 30;
    text-align: end;
  }
  .div-iconmode {
    display: flex;
    flex-grow: 1;
    text-align: end;
    justify-content: end;
    padding: 0;
    margin: 0;
  }
  .webname {
    font-weight: 600;
    font-size: 20px;
  }
  .span-list {
    padding-left: 30px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 300;
    &:hover {
      font-weight: 600;
      text-decoration: underline;
    }
  }
  button {
    border: none;
    &:hover {
        cursor: pointer;
    }
  }
  a {
    text-decoration: none;
  }
  .div-iconmode {
    div {
        button {
            display: flex;
            align-items: center;
        }
    }

  }
    .day-mode {
        background-color: $main-bg-color-mode-night;
        padding-inline: 10px;
        border-radius: 10px;
        img {
            background-color: $main-bg-color-mode-night;
            padding: 5px;
        }
    }
    .night-mode {
        background-color: $main-bg-color-mode-sun;
        padding-inline: 10px;
        border-radius: 10px;
        img {
            background-color: $main-bg-color-mode-sun;
            padding: 5px;
        }
    }
    .day-mode-mobile {
        background-color: $main-bg-color-mode-sun;
    }
    .night-mode-mobile {
        background-color: $main-bg-color-mode-night;
    }
    .day-mode-slidebar {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 150px;
      max-width: 100%;
      background-color: #ffffff;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 10px rgba(38, 38, 38, 0.751);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      a {
          width: 100%;
          text-align: center;
          padding: 10px;
      }
      div {
          padding: 10px;
      }
    }
    .night-mode-slidebar {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 150px;
      max-width: 100%;
      background-color: #000000;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 10px rgb(27, 27, 27);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      // transition: background-color 0.5s ease;
      // transform: translateX(10px);
      a {
          width: 100%;
          text-align: center;
          padding: 10px;
      }
      div {
          padding: 10px;
      }
    }
    .bt-exit {
        padding: 30px;
    }
    .span-list-mobile {
      font-weight: 500;
    }
</style>
