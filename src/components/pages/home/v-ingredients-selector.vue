<template>
  <div class="v-ingredients-selector">
    <div
        class="v-ingredients-selector__search-result"
        v-if="selectedIngredients.length > 0"
    >
      Found {{  mealsIdx.length }} recipes
    </div>

    <multiselect
        v-model="value"
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
    />
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
      mealsIdx: [],
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

    mealsIdx() {
      this.$emit('select', this.mealsIdx);
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

    async selectIngredient(ingredient) {
      if (!this.selectedIngredients.includes(ingredient)) {
        this.selectedIngredients.push(ingredient.id);
        this.mealsIdx = await this.getMealsIdxFromApi(this.selectedIngredients);
      }
    },

    async removeIngredient(ingredient) {
      let index = this.selectedIngredients.findIndex(item => item === ingredient.id);
      this.selectedIngredients.splice(index, 1);
      this.mealsIdx = this.selectedIngredients.length > 0
          ? await this.getMealsIdxFromApi(this.selectedIngredients)
          : [];
    },

    async getMealsIdxFromApi(ingredients) {
      return await (await this.$api.meals.getByIngredients(ingredients)).data;
    },

    closeSelector() {
      this.isSelectorOpen = !this.isSelectorOpen;
    },
  },
}
</script>

<style lang="scss">
.v-ingredients-selector {
  &__search-result {
    margin-left: 20px;
    margin-bottom: 5px;
    width: 100%;
    font-size: 12px;
    font-style: italic;
    color: $grey;
  }
}
</style>
