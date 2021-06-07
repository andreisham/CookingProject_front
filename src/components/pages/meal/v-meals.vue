<template>
  <main class="v-meals">
    <v-meals-item
        v-for="meal in MEALS"
        :key="meal.id"
        :mealData="meal"
        :isFavorite="isMealInFavorites(meal.id)"
        @clickFavoriteIcon="clickFavoriteIcon"
    />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
      this.loadMeals();
    },
  },

  mounted() {
    this.loadMeals();
  },

  methods: {
    ...mapActions([
      'CLEAR_MEALS',
      'GET_RANDOM_MEAL_FROM_API',
      'GET_MEALS_FROM_API_BY_INGREDIENTS',
      'GET_MEALS_FROM_API_BY_ID',
      'ADD_FAVORITE_MEAL',
      'REMOVE_FAVORITE_MEAL',
    ]),

    loadMeals() {
      this.CLEAR_MEALS();

      if (this.$route.params.id) {
        return this.GET_MEALS_FROM_API_BY_ID(this.$route.params.id)
      }

      if (this.ingredients.length > 0) {
        return this.GET_MEALS_FROM_API_BY_INGREDIENTS(this.ingredients);
      }

      return this.GET_RANDOM_MEAL_FROM_API();
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
}
</style>