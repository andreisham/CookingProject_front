<template>
  <div class="v-meals">
    <v-header/>

    <main class="ingredients">
      <v-meals-item
          v-for="meal in MEALS"
          :key="meal.id"
          :mealData=meal
      />
    </main>

    <v-footer />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

import vHeader from '../../layout/header/v-header';
import vFooter from '../../layout/footer/v-footer';
import vMealsItem from './v-meals-item';

export default {
  name: "v-meals",

  components: {
    vHeader,
    vFooter,
    vMealsItem,
  },

  computed: {
    ...mapGetters([
      'MEALS',
    ]),
  },

  watch: {
    $route: function() {
      this.loadMeals(this.$route.params.id);
    }
  },

  mounted() {
    this.loadMeals(this.$route.params.id);
  },

  methods: {
    ...mapActions([
      'GET_MEALS_FROM_API_BY_INGREDIENT_ID',
        'GET_RANDOM_MEAL_FROM_API',
    ]),

    loadMeals(ingredientId = null) {
      if (ingredientId) {
        this.GET_MEALS_FROM_API_BY_INGREDIENT_ID(ingredientId);
      } else {
        this.GET_RANDOM_MEAL_FROM_API();
      }
    },
  },

}
</script>

<style lang="scss">
.ingredients {
  margin: 14px 40px;
  color: #434343;
}
</style>