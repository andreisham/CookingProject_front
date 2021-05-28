<template>
  <router-link :to="{name: 'meals', params: { id: ingredientData.id }}">
    <div class="v-ingredients-item">
        <p class="v-ingredients-item__name">
          {{ ingredientData.name | ucfirst}}
        </p>
    </div>
  </router-link>
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
  }
}
</script>

<style lang="scss">
.v-ingredients-item {
  display: flex;
  align-items: center;
  height: 50px;

  &:hover  {
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