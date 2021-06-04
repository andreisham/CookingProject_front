<template>
  <div id="app">
    <v-main-wrapper></v-main-wrapper>
  </div>
</template>

<script>

import vMainWrapper from './components/v-main-wrapper';

export default {
  name: 'App',
  components: {
    vMainWrapper,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: $white;
}

ul {
  list-style-type: none;
}

li {
  text-decoration: none;
}

a {
  text-decoration: none;
}
</style>
