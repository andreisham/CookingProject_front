<template>
  <main class="v-meals">
    <div
        class="v-meals__items"
        v-if="mealData"
    >
      <v-meals-item
          :meal-data="mealData"
          :is-favorite="isMealInFavorites(mealData.id)"
          :is-arrows-active="isMealItemArrowsActive"
          @clickFavoriteIcon="clickFavoriteIcon"
          @clickLeftArrow="showPreviousMeal"
          @clickRightArrow="showNextMeal"
      />
    </div>

    <div
        class="v-meals__items"
        v-else
    >
      <p class="v-meals__empty-alert">Recipe list is empty...</p>
    </div>

  </main>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import findArrayIndexByItemProperty from '../../../helpers/findArrayIndexByItemProperty';
import findArrayValueByItemProperty from '../../../helpers/findArrayValueByItemProperty';
import vMealsItem from './v-meals-item';

export default {
  name: "v-meals",

  components: {
    vMealsItem,
  },

  props: {
    mealsIdx: {
      type: Array,
      default() {
        return [];
      }
    },
  },

  data() {
    return {
      mealData: null,
      loading: true,
      currentIndex: 0,
    }
  },

  computed: {
    ...mapGetters([
      'MEALS',
      'FAVORITE_MEALS',
    ]),

    isMealItemArrowsActive() {
      return this.mealsIdx.length > 1;
    },
  },

  mounted() {
    this.getMealsFromApi();
  },

  methods: {
    ...mapActions([
      'LOAD_MEAL',
      'CLEAR_MEALS',
      'ADD_FAVORITE_MEAL',
      'REMOVE_FAVORITE_MEAL',
    ]),

    async getMealsFromApi() {
      this.CLEAR_MEALS();
      if (this.mealsIdx.length > 0) {
        this.mealData = await this.getMealByIdFromApi(this.mealsIdx[this.currentIndex]);
      } else {
        this.mealData = await this.getRandomMealFromApi();
      }

      this.LOAD_MEAL(this.mealData);
    },

    async getRandomMealFromApi() {
      return (await this.$api.meals.getRandom()).data[0];
    },

    async getMealByIdFromApi(id) {
      return (await this.$api.meals.getById(id)).data;
    },

    async showPreviousMeal() {
      if (this.currentIndex <= 0) {
        this.currentIndex = this.mealsIdx.length;
      }
      let id = this.mealsIdx[--this.currentIndex];
      await this.switchMeal(id);
    },

    async showNextMeal() {
      if (this.currentIndex >= this.mealsIdx.length - 1) {
        this.currentIndex = -1;
      }
      let id = this.mealsIdx[++this.currentIndex];
      await this.switchMeal(id);
    },

    async switchMeal(id) {
      let meal = this.MEALS.find(m => m.id === id);
      if (!meal) {
        meal = (await this.$api.meals.getById(id)).data;
        this.LOAD_MEAL(meal);
      }
      this.mealData = meal;
    },

    isMealInFavorites(id) {
      return undefined !== findArrayValueByItemProperty(this.FAVORITE_MEALS, id);
    },

    clickFavoriteIcon(meal) {
      if (this.isMealInFavorites(meal.id)) {
        this.removeFromFavorites(meal.id);
      } else {
        this.addToFavorites(meal);
      }
    },

    removeFromFavorites(id) {
      this.REMOVE_FAVORITE_MEAL(findArrayIndexByItemProperty(this.FAVORITE_MEALS, id));
      this.$api.favorites.remove(id);
    },

    addToFavorites(meal) {
      this.ADD_FAVORITE_MEAL(meal);
      this.$api.favorites.add(meal.id);
    },
  },
}
</script>

<style lang="scss">
.v-meals {
  margin: 14px 40px;
  color: #434343;

  &__items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 400px;
  }

  &__empty-alert {
    text-align: center;
    font-size: 24px;
    color: $light-grey;
  }
}
</style>
