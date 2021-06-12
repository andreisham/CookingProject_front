<template>
  <div class="v-ingredients-selector">
    <label class="typo__label"></label>
    <multiselect
        v-model="value"
        id="ajax"
        :placeholder="placeholder"
        label="name"
        track-by="name"
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
    <div
        class="v-ingredients-selector__selected-items"
        ref="selected-items"
    >
    </div>
    <button
        class="waves-effect waves-light btn v-ingredients-selector__submit"
        type="submit"
        @click="showMealsRecipes"
    >show
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

    closeSelector() {
      this.isSelectorOpen = !this.isSelectorOpen;
    },

    async getIngredientsFromApi() {
      this.isLoading = true;
      let ingredients = (await this.$api.ingredients.get()).data;
      this.isLoading = false;
      return ingredients;
    },

    selectIngredient(ingredient) {
      if (!this.selectedIngredients.includes(ingredient)) {
        this.selectedIngredients.push(ingredient);
      }
    },

    removeIngredient(index) {
      this.selectedIngredients.splice(index, 1);
    },

    showMealsRecipes() {
      this.$router.push({
        name: 'meals',
        params: {ingredients: this.selectedIngredients.map(item => item.id)},
      });
    },
  },
}
</script>

<style lang="scss">
@import '~vue-multiselect/dist/vue-multiselect.min.css';

.multiselect {
  max-width: 360px;
  text-align: center;
  position: absolute;

  &__placeholder {
    font-size: 18px;
  }

  &__tags {
    border-radius: 25px;
    box-sizing: border-box;
  }

  &__tag {
    border-radius: 25px;
    background-color: $green;
  }

  &__tag-icon:hover {
    background-color: $green-lighten-1;
  }

  &__tags-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 15px;
  }

  &__input {
    padding-left: 15px;
  }

  &__content-wrapper {
    border-radius: 0 0 25px 25px;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
}

.v-ingredients-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
  transition: all .5s;

  &__selected-items {
    width: 400px;
  }

  &__submit {
    margin-top: 60px;
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
