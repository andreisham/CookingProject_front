<template>
  <div class="v-ingredients-selector">
      <label class="typo__label"></label>
      <multiselect v-model="value"
                   id="ajax"
                   tag-placeholder="Select ingredients"
                   placeholder="Select ingredients"
                   label="name"
                   track-by="name"
                   :options="options"
                   :multiple="true"
                   :loading="isLoading"
                   :clear-on-select="false"
                   @open="getIngredients"
                   @select="selectIngredient"
                   @remove="removeIngredient"
                   :close-on-select="false"
                   :preserve-search="true"
                   :preselect-first="true"
                   :hideSelected="true"
                   selectLabel=""
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
    Multiselect
  },
  data() {
    return {
      value: [],
      options: [],
      selectedIngredients: [],
      isLoading: false
    }
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

    getIngredients: function () {
      this.GET_INGREDIENTS_FROM_API().then(response => {
        this.options = response.data
        this.isLoading = false
      })
    },

    showMealsRecipes() {
      this.$router.push({
        name: 'meals',
        params: {ingredients: this.selectedIngredients.map(item => item.id)},
      });
    },

    selectIngredient(ingredient) {
      if (!this.selectedIngredients.includes(ingredient)) {
        this.selectedIngredients.push(ingredient);
      }
    },

    removeIngredient(index) {
      this.selectedIngredients.splice(index, 1);
    },
  },

  mounted() {
    this.GET_INGREDIENTS_FROM_API();
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
.multiselect {
  text-align: center;
  &__placeholder {
    font-size: 18px;
  }
  &__tags {
    border-radius: 25px;
  }
  &__content-wrapper {
    border-radius: 0 0 25px 25px;
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
    margin-top: 40px;
    color: #fefefe;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    width: 100%;
    height: 61px;
    border-radius: 21px;
    background-color: rgb(43, 153, 91);
    border: none;
    cursor: pointer;
    transition: background-color .2s linear;

    &:hover {
      background-color: rgb(75, 183, 141);
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
}
</style>
