<template>
  <div
      class="v-ingredients-item"
      @click="gotToMealsPage"
  >
    <p class="v-ingredients-item__name">
      {{ ingredientData.name | ucfirst }}
    </p>
  </div>
</template>

<script>
import ucfirst from '../../../filters/ucfirst';

export default {
  name: "v-ingredients-item",

  props: {
    ingredientData: {
      type: Object,
      default() {
        return {};
      },
    }
  },

  filters: {
    ucfirst,
  },

  methods: {
    gotToMealsPage() {
      this.$router.push({
        name: 'meals',
        params: {ingredients: [ this.ingredientData.id ]},
      })
    }
  },
}
</script>

<style lang="scss">
.v-ingredients-item {
  display: flex;
  align-items: center;
  height: 50px;
  transition: all .1s linear;

  &:hover {
    background-color: #e7e7e7;
    box-shadow: 0 0 5px 0 #e7e7e7;
    cursor: pointer;
  }

  &__name {
    font-size: 20px;
    margin-left: 20px;
    color: #1a202c;
    cursor: pointer;
  }
}
</style>