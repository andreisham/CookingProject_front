<template>
  <div class="v-main-wrapper">
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: "v-main-wrapper",
  components: {}
}
</script>

<style lang="scss">

.container {
  padding: 0 calc(50% - 270px);
  width: 500px;
}

</style>