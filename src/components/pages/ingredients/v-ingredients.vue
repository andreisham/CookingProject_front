<template>
  <div class="v-ingredients">
    <div class="v-ingredients__header">
      <h1 class="v-ingredients__h1">Ингредиенты</h1>
      <span>
          <i class="material-icons v-ingredients__close-icon"
             @click="closeIngredients"
          >close</i>
        </span>
    </div>

    <div class="v-ingredients__content">
      <div class="v-ingredients__list">

        <v-ingredients-item
          v-for="ingredient in INGREDIENTS"
          :key="ingredient.id"
          :ingredientData="ingredient"
        />

      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import vIngredientsItem from './v-ingredients-item';

export default {
  name: "v-ingredients",

  components: {
    vIngredientsItem,
  },

  computed: {
    ...mapGetters([
      'INGREDIENTS',
    ]),
  },

  methods: {
    ...mapActions([
        'GET_INGREDIENTS_FROM_API',
    ]),

    closeIngredients() {
      this.$router.push('/');
    }
  },

  mounted() {
    if (this.INGREDIENTS.length === 0) {
      this.GET_INGREDIENTS_FROM_API();
    }
  },
}
</script>

<style lang="scss">
  .v-ingredients {
    display: flex;
    flex-direction: column;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 15px;
    }

    &__close-icon {
      cursor: pointer;
    }

    &__content {
      box-sizing: content-box;
    }
  }
</style>