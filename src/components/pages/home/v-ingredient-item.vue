<template>
  <router-link class="v-ingredient-item"
    :to="{name: 'meals', params: { name: ingredient_data.strIngredient }}"
  >
    <p class="v-ingredient-item__name">
      {{ ingredient_data.strIngredient }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: "v-ingredient-item",

  props: {
    ingredient_data: {
      type: Object,
      default() {
        return {};
      },
    }
  }

}
</script>

<style lang="scss">
  .v-ingredient-item {
    display: flex;
    align-items: center;
    height: 50px;

    &__name {
      font-size: 24px;
      margin-left: 30px;
      color: #000000;
      cursor: pointer;
    }
  }
</style>