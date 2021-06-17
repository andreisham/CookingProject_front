<template>
  <div class="v-empty-layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "v-empty-layout",
}
</script>

<style lang="scss">
  .v-empty-layout {
    margin: 0 auto;
    max-width: $mobile-max-width;
  }
</style>