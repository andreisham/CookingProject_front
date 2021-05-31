<template>
  <div class="v-meals-item">
    <h2 class="heading">{{ mealData.name | ucfirst }}</h2>

    <img
        class="v-meals-item__img"
        :src="mealData.api_img"
        alt="img"
    >

    <h3>Ингредиенты:</h3>
    <ul class="recipe">
      <li class="recipe__list"
          v-for="(item, index) in mealData.components_measure"
          :key="index"
      >
        <img src="../../../assets/img/list-style.png" class="recipe__img" alt="img">
        {{ showComponentMeasure(index, item) }}
      </li>
    </ul>

    <h3>Рецепт приготовления:</h3>
    <p>{{ mealData.instruction }}</p>

  </div>
</template>

<script>

import ucfirst from "../../../filters/ucfirst";

export default {
  name: "v-meals-item",

  props: {
    mealData: {
      type: Object,
      default() {
        return {};
      },
    }
  },

  methods: {
    parseJson(value) {
      if (typeof value === 'string') {
        return JSON.parse(value);
      }
      return value;
    },

    showComponentMeasure(component, measure) {
      return component + (measure.length > 0 ? (' - ' + measure) : '');
    }
  },

  mounted() {
    this.$set(this.mealData, 'components_measure', this.parseJson(this.mealData.components_measure));
  },

  filters: {
    ucfirst,
  },
}
</script>

<style lang="scss">
.v-meals-item {
  margin-bottom: 30px;

  &__img {
    width: 300px;
  }
}

.recipe {
  padding-left: 0;

  .recipe__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    color: #434343;
    font-size: 20px;
    font-weight: 400;
    border-bottom: .5px solid lightgray;
  }

  &__img {
    margin-right: 10px;
  }

}
</style>