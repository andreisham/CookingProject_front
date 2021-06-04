<template>
  <main class="v-meals">
      <v-meals-item
          v-for="meal in MEALS"
          :key="meal.id"
          :mealData=meal
      />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
    ]),

    loadMeals() {
      this.CLEAR_MEALS();
      if (this.ingredients.length > 0) {
        return this.GET_MEALS_FROM_API_BY_INGREDIENTS(this.ingredients);
      }
      return this.GET_RANDOM_MEAL_FROM_API();
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