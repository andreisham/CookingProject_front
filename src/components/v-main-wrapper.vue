<template>
  <div class="v-main-wrapper">
    <div class="container">
      <v-header></v-header>
      <router-view></router-view>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import vHeader from './layout/header/v-header';
import vFooter from './layout/footer/v-footer';

export default {
  name: "v-main-wrapper",
  components: {
    vHeader,
    vFooter,
  }
}
</script>

<style lang="scss">

.container {
  padding: 0 calc(50% - 270px);
  width: 500px;
}

</style>