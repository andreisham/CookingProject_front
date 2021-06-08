<template>
  <main class="v-meals">
    <div
        class="v-meals__items"
        v-if="MEALS.length > 0"
    >
      <v-meals-item
          v-for="meal in MEALS"
          :key="meal.id"
          :mealData="meal"
          :isFavorite="isMealInFavorites(meal.id)"
          @clickFavoriteIcon="clickFavoriteIcon"
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
    ingredients: {
      type: Array,
      default() {
        return [];
      }
    },
  },

  data() {
    return {
      loading: true,
    }
  },

  computed: {
    ...mapGetters([
      'MEALS',
      'FAVORITE_MEALS',
    ]),
  },

  watch: {
    $route: function () {
      this.getMealsFromApi();
    },
  },

  mounted() {
    this.getMealsFromApi();
  },

  methods: {
    ...mapActions([
      'LOAD_MEALS',
      'CLEAR_MEALS',
      'ADD_FAVORITE_MEAL',
      'REMOVE_FAVORITE_MEAL',
    ]),

    async getMealsFromApi() {
      let meals = [];
      this.CLEAR_MEALS();

      if (this.$route.params.id) {
        meals = (await this.$api.meals.getById(this.$route.params.id)).data;
      } else if (this.ingredients.length > 0) {
        meals = (await this.$api.meals.getByIngredients(this.ingredients)).data;
      } else {
        meals = (await this.$api.meals.getRandom()).data;
      }

      this.LOAD_MEALS(meals);
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