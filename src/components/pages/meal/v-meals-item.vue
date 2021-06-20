<template>
  <div class="v-meals-item">
    <div
        class="v-meals-item__header"
        :class="{'v-meals-item__header_center': !isArrowsActive}"
    >
      <div
          class="v-meals-item__arrow"
          @click="clickLeftArrow"
          v-if="isArrowsActive"
      >
        <i class="material-icons v-meals-item__previous">keyboard_arrow_left</i>
      </div>

      <div class="v-meals-item__heading">
        <h3 class="v-meals-item__h3">{{ mealData.name | ucfirst }}</h3>
      </div>

      <div
          class="v-meals-item__arrow"
          @click="clickRightArrow"
          v-if="isArrowsActive"
      >
        <i class="material-icons v-meals-item__next">keyboard_arrow_right</i>
      </div>
    </div>

    <div class="v-meals-item__box">

      <div class="v-meals-item__left">
        <img
            class="v-meals-item__img"
            :src="mealData.api_img"
            alt="img"
        >
      </div>

      <div class="v-meals-item__right">
        <div class="v-meals-item__box-item">
          <v-favorite-icon
              class="v-favorites-item__icon"
              :isSelected="isFavorite"
              @clickFavoriteIcon="clickFavoriteIcon"
          />
        </div>
        <div class="v-meals-item__box-item">
          <i class="material-icons v-favorites-item__icon">comment</i>
        </div>
        <div class="v-meals-item__box-item">
          <i class="material-icons v-favorites-item__icon">edit</i>
        </div>
      </div>

    </div>

    <h3 class="v-meals-item__ingredients-title">Ингредиенты:</h3>
    <ul class="v-meals-item__ingredients">
      <li class="v-meals-item__ingredient"
          v-for="(item, index) in JSON.parse(mealData.components_measure)"
          :key="index"
      >
        <img
            class="v-meals-item__ingredient-img"
            src="../../../assets/img/list-style.png"
            alt="img"
        >
        {{ showComponentMeasure(index, item) }}
      </li>
    </ul>

    <h3 class="v-meals-item__recipe-title">Рецепт приготовления:</h3>
    <p class="v-meals-item__recipe-desc">{{ mealData.instruction }}</p>

  </div>
</template>

<script>
import ucfirst from "../../../filters/ucfirst";
import vFavoriteIcon from '../../elements/v-favorite-icon';

export default {
  name: "v-meals-item",

  components: {
    vFavoriteIcon,
  },

  props: {
    isArrowsActive: {
      type: Boolean,
      default() {
        return false;
      }
    },

    isFavorite: {
      type: Boolean,
      default() {
        return false;
      }
    },

    mealData: {
      type: Object,
      default() {
        return {};
      },
    }
  },

  filters: {
    ucfirst,
  },

  methods: {
    showComponentMeasure(component, measure) {
      return component + (measure.length > 0 ? ` - ${measure}` : '');
    },

    clickFavoriteIcon() {
      this.$emit('clickFavoriteIcon', this.mealData);
    },

    clickLeftArrow() {
      this.$emit('clickLeftArrow', this.mealData.id);
    },

    clickRightArrow() {
      this.$emit('clickRightArrow', this.mealData.id);
    },
  },
}
</script>

<style lang="scss">
.v-meals-item {
  margin-bottom: 30px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
    margin-bottom: 35px;

    &_center {
      justify-content: center;
    }
  }

  &__heading {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &__arrow {
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    & i {
      font-size: 45px;
      color: $grey-lighten-1;
      transition: all 0.3s;
    }

    &:active i {
      transform: scale(0.8);
      color: $grey-darken-2;
    }
  }

  &__previous {

  }

  &__next {

  }

  &__box {
    display: flex;
    justify-content: space-between;
    transition: all .5s;
    margin-bottom: 35px;
  }

  &__img {
    width: 295px;
    margin-bottom: 30px;
    border-radius: 10px;
  }

  &__right {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 5px 20px;
    height: 300px;
  }

  &__box-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: $grey-lighten-5;
    transition: all .3s;

    &:hover {
      background-color: $grey-lighten-3;
    }

    .v-favorites-item__icon {
      font-size: 40px;
      cursor: pointer;
    }
  }

  &__ingredients {
    padding-left: 0;
    margin-bottom: 35px;
  }

  &__ingredients-title {
    margin-bottom: 15px;
  }

  &__ingredient {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
    color: #434343;
    font-size: 20px;
    font-weight: 400;
    border-bottom: .5px solid lightgray;
  }

  &__ingredient-img {
    margin-right: 10px;
  }

  &__recipe-title {
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 450px) {
  .v-meals-item {
    &__box {
      flex-direction: column;
    }

    &__right {
      flex-direction: row;
      padding: 0;
      width: 300px;
      height: 50px;
    }
  }
}

</style>