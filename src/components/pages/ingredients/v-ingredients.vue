<template>
  <div class="v-ingredients">
    <div class="v-ingredients__header">
      <h1 class="v-ingredients__h1">Ингредиенты</h1>
      <div class="v-ingredients__close-box">
          <i class="material-icons v-ingredients__close-icon"
             @click="closeIngredients"
          >close</i>
        </div>
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

  mounted() {
    if (this.INGREDIENTS.length === 0) {
      this.getIngredientsFromApi();
    }
  },

  methods: {
    ...mapActions([
      'LOAD_INGREDIENTS',
    ]),

    async getIngredientsFromApi() {
      const ingredients = (await this.$api.ingredients.get()).data;
      this.LOAD_INGREDIENTS(ingredients);
    },

    closeIngredients() {
      this.$router.push('/');
    }
  },
}
</script>

<style lang="scss">
.v-ingredients {
  display: flex;
  flex-direction: column;

  &__header {
    margin-top: 35px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
  }

  &__close-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__close-icon {
    font-size: 32px;
    cursor: pointer;
  }

  &__content {
    box-sizing: content-box;
  }
}
</style>