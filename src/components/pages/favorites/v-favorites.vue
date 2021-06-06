<template>
  <div class="v-favorites">

    <div class="v-favorites__header">
      <h1 class="v-favorites__h1">Избранное</h1>
    </div>

    <div class="v-favorites__items">

      <v-favorites-item />

    </div>

  </div>
</template>

<script>
import vFavoritesItem from './v-favorites-item';

export default {
  name: "v-favorites",

  components: {
    vFavoritesItem,
  },

  mounted() {

  }
}
</script>

<style lang="scss">
.v-favorites {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    box-shadow: 0 8px 15px -10px rgba(34, 60, 80, 0.1);
  }

  &__h1 {
    margin-left: 20px;
  }

  .v-favorites__items {
    overflow: auto;
    max-height: 600px;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: $light-grey;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }
  }
}
</style>