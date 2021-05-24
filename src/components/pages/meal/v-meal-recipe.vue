<template>
  <div class="v-meal-recipe">
    <h1 class="heading">{{ meal_data.strMeal }}</h1>
    <h2>Ингредиенты</h2>
    <ul class="recipe">
      <li class="recipe__list"
          v-for="item in meal_data.ingredients"
          :key="item.id"
      >
        <img src="../../../assets/img/list-style.png" class="recipe__img" alt="img">
        {{ item.name }} - {{ item.measure }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "v-meal-recipe",

  props: {
    meal_data: {
      type: Object,
      default() {
        return {};
      },
    }
  },

}
</script>

<style lang="scss">
.v-meal-recipe {
  margin-bottom: 30px;
}

.recipe {
  padding-left: 0;
  .recipe__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    width: 400px;
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