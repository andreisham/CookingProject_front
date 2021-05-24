<template>
  <div class="v-main-wrapper">
    <div class="container">

      <v-header></v-header>

    </div>
  </div>
</template>

<script>
import vHeader from './layout/header/v-header';

export default {
  name: "v-main-wrapper",
  components: {
    vHeader,
  }
}
</script>

<style lang="scss">

.container {
  padding: 0 calc(50% - 270px);
  width: 500px;
}

</style>