<template>
  <div class="v-favorites">

    <div
        class="v-favorites__header"
        v-if="FAVORITE_MEALS.length"
    >
      <h1 class="v-favorites__h1">Избранное</h1>
    </div>

    <div
        class="v-favorites__items"
        v-if="FAVORITE_MEALS.length"
    >
      <v-favorites-item
          v-for="(item, index) in FAVORITE_MEALS"
          :key="item.id"
          :favoritesItemData="item"
          @removeFavoriteItem="removeFavoriteItem(item.id, index)"
      />
    </div>

    <div
        class="v-favorites__items v-favorites__items_empty"
        v-else
    >
      <h3 class="v-favorites__items__empty-alert">No recipes in favorites...</h3>
    </div>

  </div>
</template>

<script>
import vFavoritesItem from './v-favorites-item';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "v-favorites",

  components: {
    vFavoritesItem,
  },

  computed: {
    ...mapGetters([
      'FAVORITE_MEALS',
    ]),
  },

  methods: {
    ...mapActions([
      'REMOVE_FAVORITE_MEAL',
    ]),

    removeFavoriteItem(mealId, index) {
      this.$api.favorites.remove(mealId);
      this.REMOVE_FAVORITE_MEAL(index);
    },
  },
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
    box-shadow: 0 8px 7px -10px rgba(34, 60, 80, 0.1);
  }

  &__h1 {
    margin-left: 20px;
  }

  .v-favorites__items {
    overflow: auto;
    max-height: 600px;
    box-shadow: 0 -8px 7px -10px rgba(34, 60, 80, 0.1) inset;

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

    &_empty {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: none;
      height: 300px;
    }

    &__empty-alert {
      color: $light-grey;
    }
  }
}
</style>