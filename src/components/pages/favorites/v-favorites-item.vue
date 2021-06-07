<template>
  <div
      class="v-favorites-item"
      :class="{'v-favorites-item_move-out': removed}"
  >

    <div class="v-favorites-item__left">
      <img
          :src="favoritesItemData.api_img"
          alt="img"
          class="v-favorites-item__img"
          @click="goToMealPage"
      >
    </div>

    <div class="v-favorites-item__center">
      <h3
          class="v-favorites-item__name"
          @click="goToMealPage"
      >{{ favoritesItemData.name }}</h3>
    </div>

    <div class="v-favorites-item__right">
      <v-favorite-icon
          class="v-favorites-item__icon"
          :isSelected="!removed"
          @clickFavoriteIcon="clickFavoriteIcon"
      />
    </div>
  </div>
</template>

<script>
import vFavoriteIcon from '../../elements/v-favorite-icon';

export default {
  name: "v-favorites-item",

  components: {
    vFavoriteIcon,
  },

  props: {
    favoritesItemData: {
      type: Object,
      default() {
        return {};
      },
    }
  },

  data() {
    return {
      removed: false,
    }
  },

  methods: {
    clickFavoriteIcon() {
      this.removed = true;
      setTimeout(() => {
        this.$emit('removeFavoriteItem');
      }, 500)
    },

    goToMealPage() {
      this.$router.push({ name: 'meal', params: { id: this.favoritesItemData.id } });
    },
  },
}
</script>

<style lang="scss">
.v-favorites-item {
  display: flex;
  padding: 20px 15px;
  transition: all .5s;

  &_move-out {
    transform: translateX(-500px);
  }

  &:hover {
    background-color: #e7e7e7;
    border-radius: 8px;
  }

  &__left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img {
    width: 100px;
    border-radius: 50px;
    cursor: pointer;
  }

  &__center {
    flex: 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__name {
    margin-left: 25px;
    font-size: 24px;
    font-weight: normal;
    cursor: pointer;
  }

  &__right {
    flex: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;

    .v-favorites-item__icon {
      font-size: 35px;
    }
  }
}
</style>