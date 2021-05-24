<template>
  <div class="v-meal">
    <main class="ingredients">
      <v-meal-recipe
          v-for="meal in meals"
          :key="meal.idMeal"
          :meal_data = meal
      />
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import vMealRecipe from './v-meal-recipe';

export default {
  name: "v-meal",

  components: {
    vMealRecipe,
  },

  data() {
    return {
      meals: [],
    }
  },

  computed: {
    ...mapGetters([
      'RECIPES',
    ]),
  },

  mounted() {
    this.loadMeals(this.$route.params.name);
  },

  watch: {
    RECIPES: function (data) {
      this.prepareMeals(data);
    }
  },

  methods: {
    ...mapActions([
        'GET_RECIPES_BY_INGREDIENT',
    ]),

    loadMeals(ingredient = null) {
      if (ingredient) {
        this.GET_RECIPES_BY_INGREDIENT(ingredient);
      } else {
        this.getRandomRecipe();
      }
    },

    getRandomRecipe() {
      axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => this.meals.push(this.prepareMeal(response.data)))
        .catch(error => console.log(error));
    },

    getRecipeById(id) {
      axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
          .then(response => this.meals.push(this.prepareMeal(response.data)))
          .catch(error => console.log(error));
    },

    prepareMeals(meals) {
      for (let meal of meals.meals) {
        this.getRecipeById(meal.idMeal);
      }
    },

    prepareMeal(meal) {
      let [ mealObj ] = meal.meals;
      mealObj.ingredients = [];
      for (let prop in mealObj) {
        if (prop.startsWith('strIngredient') && mealObj[prop].trim() !== '') {
          mealObj.ingredients.push({ id: prop.slice(13), name: mealObj[prop]})
        }

        if (prop.startsWith('strMeasure') && mealObj[prop].trim() !== '') {
          mealObj.ingredients.map(i => {
            if (i.id === prop.slice(10)) {
              i.measure = mealObj[prop];
            }
          });
        }
      }
      return mealObj;
    }

  },

}
</script>

<style lang="scss">
.ingredients {
  margin: 14px 40px;
  color: #434343;
}
</style>