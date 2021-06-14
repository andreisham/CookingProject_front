<template>
  <div class="v-ingredients-selector">

    <div
        class="v-ingredients-selector__search-result"
        v-if="selectedIngredients.length > 0"
    >
      Found {{ recipesCount }} recipes
    </div>

    <multiselect
        v-model="value"
        id="ajax"
        :placeholder="placeholder"
        label="name"
        track-by="id"
        :options="INGREDIENTS"
        :multiple="true"
        :loading="isLoading"
        :clear-on-select="false"
        :close-on-select="false"
        :preserve-search="true"
        :hideSelected="true"
        open-direction="bottom"
        selectLabel=""
        @open="openSelector"
        @close="closeSelector"
        @select="selectIngredient"
        @remove="removeIngredient"
    >
    </multiselect>

    <button
        class="waves-effect waves-light btn v-ingredients-selector__submit"
        type="submit"
        @click="showMealsRecipes"
    >
      show
    </button>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import Multiselect from 'vue-multiselect'

export default {
  name: "v-ingredients-selector",
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [],
      selectedIngredients: [],
      isSelectorOpen: false,
      isLoading: false,
      recipesCount: 0,
    }
  },

  computed: {
    ...mapGetters([
      'INGREDIENTS',
    ]),

    placeholder() {
      return !this.isSelectorOpen ? 'Select ingredients' : '';
    },
  },

  watch: {
    inputData() {
      this.sortedIngredients = this.inputData.length !== 0 ? this.sortedIngredients : [];
    },

    selectedIngredients() {
      console.log(this.selectedIngredients)
      if (this.selectedIngredients.length > 0) {
        this.getRecipesCount(this.selectedIngredients);
      }
    }
  },

  methods: {
    ...mapActions([
      'LOAD_INGREDIENTS',
    ]),

    async openSelector() {
      this.isSelectorOpen = !this.isSelectorOpen;
      if (this.INGREDIENTS.length === 0) {
        let ingredients = await this.getIngredientsFromApi();
        this.LOAD_INGREDIENTS(ingredients);
      }
    },

    async getIngredientsFromApi() {
      this.isLoading = true;
      let ingredients = (await this.$api.ingredients.get()).data;
      this.isLoading = false;
      return ingredients;
    },

    selectIngredient(ingredient) {
      if (!this.selectedIngredients.includes(ingredient)) {
        this.selectedIngredients.push(ingredient.id);
      }
    },

    closeSelector() {
      this.isSelectorOpen = !this.isSelectorOpen;
    },

    async getRecipesCount(ingredients) {
      this.recipesCount = (await this.$api.meals.getCountByIngredients(ingredients)).data.count;
    },

    removeIngredient(ingredient) {
      let index = this.selectedIngredients.findIndex(item => item === ingredient.id);
      this.selectedIngredients.splice(index, 1);
    },

    showMealsRecipes() {
      this.$router.push({
        name: 'meals',
        params: { ingredients: this.selectedIngredients },
      });
    },
  },
}
</script>

<style lang="scss">
@import '~vue-multiselect/dist/vue-multiselect.min.css';

.v-ingredients-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .5s;

  &__search-result {
    margin-left: 45px;
    margin-bottom: 5px;
    width: 100%;
    font-size: 12px;
    font-style: italic;
    color: $grey;
  }

  .multiselect {
    width: 400px;
    text-align: center;

    &__placeholder {
      font-size: 18px;
    }

    &__tags {
      border-radius: 25px;
      box-sizing: border-box;
    }

    &__tag {
      border-radius: 25px;
      font-size: 12px;
      background-color: $green-lighten-1;
    }

    &__tag-icon:hover {
      background-color: $green;
    }

    &__tags-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 0 5px;
    }

    &__input {
      padding-left: 10px;
    }

    &__content-wrapper {
      border-radius: 0 0 25px 25px;

      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }
  }

  &__submit {
    margin-top: 20px;
    color: $white;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    width: 100%;
    height: 55px;
    border-radius: 21px;
    background-color: rgb(43, 153, 91);
    border: none;
    cursor: pointer;
    transition: background-color .2s linear;

    &:hover {
      background-color: $green-lighten-1;
    }
  }
}

@media screen and (max-width: 375px) {
  .v-ingredients-selector {
    max-width: 250px;

    &__selected-items {
      max-width: 250px;
    }
  }

  .multiselect {
    max-width: 250px;

    &__content {
      width: 200px;
    }
  }
}
</style>
