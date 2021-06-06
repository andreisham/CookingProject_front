<template>
  <div class="v-favorites-item">
    <div class="v-favorites-item__left">
      <img src="https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg" alt="img" class="v-favorites-item__img">
    </div>

    <div class="v-favorites-item__center">
      <h3 class="v-favorites-item__name">Сахарный пирог</h3>
    </div>

    <div class="v-favorites-item__right">
      <v-favorite-icon
          class="v-favorites-item__icon"
          :isSelected="isItemInFavorites"
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

  data() {
    return {
      isItemInFavorites: false,
    };
  },

  methods: {
    clickFavoriteIcon(value) {
      this.isItemInFavorites = value;
    },
  },
}
</script>

<style lang="scss">
.v-favorites-item {
  display: flex;
  padding: 20px 15px;
  transition: all .3s;

  &:hover {
    background-color: #e7e7e7;
    border-radius: 8px;
    cursor: pointer;
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