<template>
  <main class="v-home">
    <div class="v-home__heading">
      <h1 class="v-home__h1">What Should I Cook?</h1>
    </div>

    <v-selector class="v-home__selector"/>

  </main>
</template>

<script>
import vSelector from './v-selector';

export default {
  name: "v-home",

  components: {
    vSelector,
  },
}
</script>

<style lang="scss">
.v-home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 14px;

  &__heading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 30px;
    padding: 0 10px;
  }

  &__h1 {
    color: $black;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
  }

  &__selector {
    margin-top: 30px;
  }
}
</style>