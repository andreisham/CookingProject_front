<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script>

import vMainLayout from './components/layout/main/v-main-layout';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    vMainLayout,
  },

  computed: {
    layout() {
      return this.$route.meta.layout ?? vMainLayout;
    }
  },

  mounted() {
    this.getFavoritesFromApi();
  },

  methods: {
    ...mapActions([
       'LOAD_FAVORITE_MEALS',
    ]),

    async getFavoritesFromApi() {
      const favorites = (await this.$api.favorites.get()).data;
      this.LOAD_FAVORITE_MEALS(favorites);
    }
  },
}
</script>

<style lang="scss">
@import './assets/styles/styles';

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
