<template>
  <div class="v-main-wrapper">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>


export default {
  name: "v-main-wrapper",

  data() {
    return {
      transitionName: 'slide-left',
    };
  },

  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },

  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
}
</script>

<style lang="scss">

.v-main-wrapper {
  margin: 0 auto;
  max-width: $mobile-max-width;
}

</style>