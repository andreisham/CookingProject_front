<template>
  <div class="v-main-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "v-main-wrapper",
}
</script>

<style lang="scss">

.v-main-wrapper {
  margin: 0 auto;
  max-width: $mobile-max-width;
}

</style>