<template>
  <div class="v-main-layout">
    <div class="v-main-layout__container">
      <v-header></v-header>
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './header/v-header';
import vFooter from './footer/v-footer';

export default {
  name: "v-main-layout",
  components: {
    vHeader,
    vFooter,
  },
}
</script>

<style lang="scss">
  .v-main-layout {
    margin: 0 auto;
    max-width: $mobile-max-width;
    height: 100vh;
    display: flex;
    flex-direction: column;
    &__container {
      flex: 1 0 auto;
    }
  }
</style>
