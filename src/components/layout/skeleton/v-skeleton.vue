<template>
  <div class="v-skeleton">
    <div class="v-skeleton__container">
      <v-header></v-header>
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from '../../layout/header/v-header';
import vFooter from '../../layout/footer/v-footer';

export default {
  name: "v-skeleton",
  components: {
    vHeader,
    vFooter,
  },
}
</script>

<style lang="scss">
  .v-skeleton {
    height: 100vh;
    display: flex;
    flex-direction: column;
    &__container {
      flex: 1 0 auto;
    }
  }
</style>
