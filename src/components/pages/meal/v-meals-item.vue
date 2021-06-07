<template>
  <div class="v-meals-item">
    <h2 class="v-meals-item__header">{{ mealData.name | ucfirst }}</h2>

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
      </div>

    </div>


    <h3 class="v-meals-item__ingredients-title">Ингредиенты:</h3>
    <ul class="v-meals-item__ingredients">
      <li class="v-meals-item__ingredient"
          v-for="(item, index) in mealData.components_measure"
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
import handleJsonResponseValue from '../../../helpers/handleJsonResponseValue';
import vFavoriteIcon from '../../elements/v-favorite-icon';

export default {
  name: "v-meals-item",

  components: {
    vFavoriteIcon,
  },

  props: {
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

  mounted() {
    this.$set(this.mealData, 'components_measure', handleJsonResponseValue(this.mealData.components_measure));
  },

  methods: {
    showComponentMeasure(component, measure) {
      return component + (measure.length > 0 ? (' - ' + measure) : '');
    },

    clickFavoriteIcon() {
      this.$emit('clickFavoriteIcon', this.mealData);
    },
  },
}
</script>

<style lang="scss">
.v-meals-item {
  margin-bottom: 30px;

  &__header {
    margin-top: 35px;
    margin-bottom: 35px;
  }

  &__box {
    display: flex;
    justify-content: space-between;
    transition: all .5s;
  }

  &__img {
    width: 300px;
    margin-bottom: 30px;
  }

  &__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 20px;
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
    height: 50px;
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
      margin-bottom: 20px;
    }

    &__right {
      flex-direction: row;
      padding: 0;
    }
  }
}

</style>