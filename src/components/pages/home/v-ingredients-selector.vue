<template>
  <div class="v-ingredients-selector">
    <div
        class="v-ingredients-selector__selected-items"
        ref="selected-items"
    >
      <div
          class="v-ingredients-selector__selected-item"
          v-for="(ingredient, index) in selectedIngredients"
          :key="ingredient.id"
      >
        <span class="v-ingredients-selector__selected-name">
          {{ ingredient.name }}
        </span>

        <div class="v-ingredients-selector__selected-remove">
          <i
              class="material-icons v-ingredients-selector__selected-remove-icon"
              @click="removeIngredient(index)"
          >close</i>
        </div>
      </div>
    </div>

    <div class="v-ingredients-selector__list">
        <input
            type="text"
            class="v-ingredients-selector__input"
            :class="{ 'v-ingredients-selector__input_active': isSelectorOpen }"
            v-model="inputData"
            placeholder="select ingredients"
        >

      <div
          class="v-ingredients-selector__items"
          :class="{ 'v-ingredients-selector__items_active': isSelectorOpen }"
          ref="selector-items"
      >
        <div
            class="v-ingredients-selector__item"
            v-for="ingredient in sortedIngredients"
            :key="ingredient.id"
            @click="selectIngredient(ingredient)"
        >
          {{ ingredient.name }}
        </div>
      </div>
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

export default {
  name: "v-ingredients-selector",

  data() {
    return {
      inputData: '',
      isSelectorOpen: false,
      sortedIngredients: [],
      selectedIngredients: [],
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

    showMealsRecipes() {
      this.$router.push({
        name: 'meals',
        params: {ingredients: this.selectedIngredients.map(item => item.id)},
      });
    },

    sortIngredients() {
      this.sortedIngredients = this.INGREDIENTS.sort((a, b) => {
        return b.name.toLowerCase().indexOf(this.inputData.toLowerCase()) - a.name.toLowerCase().indexOf(this.inputData.toLowerCase());
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

  watch: {
    inputData() {
      this.sortIngredients();
      this.sortedIngredients = this.inputData.length !== 0 ? this.sortedIngredients : [];
      this.isSelectorOpen = this.sortedIngredients.length > 0;
    },
  },

  mounted() {
    this.GET_INGREDIENTS_FROM_API();

    document.addEventListener('click', ({target}) => {
      if (!target.classList.contains('ingredients-selector__item')
          && !target.classList.contains('ingredients-selector__input')
          && !target.classList.contains('ingredients-selector__selected-remove-icon')) {
        this.isSelectorOpen = false;
      }
    });
  }
}
</script>

<style lang="scss">
.v-ingredients-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
  transition: all .5s;

  &__selected-items {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 35px;
    width: 400px;
  }

  &__selected-item {
    display: flex;
    align-items: center;
    height: 25px;
    border-radius: 25px;
    background-color: #d7d7d7;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    margin-left: 5px;
  }

  &__selected-name {
    font-size: 14px;
    margin-right: 20px;
  }

  &__selected-remove {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    cursor: pointer;
  }

  &__selected-remove i {
    font-size: 18px;
  }

  &__items {
    width: 360px;
    height: 300px;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all .2s linear;
    overflow: auto;
    z-index: 30;
    border: 1px solid $black;
    border-top: none;
    border-radius: 0 0 21px 21px;
    &::-webkit-scrollbar {
      width: 0;
    }
    &_active {
      visibility: visible;
      opacity: 1;
      display: flex;
      flex-direction: column;
    }
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    width: 100%;
    padding: 10px;
    background-color: $white;
    border-bottom: 1px solid $grey;
    font-size: 18px;
    color: $grey;
    transition: background-color .2s linear;
    box-sizing: border-box;
    text-align: center;

    &:hover {
      background-color: #e7e7e7;
      cursor: pointer;
    }
  }

  &__list {
    width: 100%;
  }

  &__input {
    width: 100%;
    height: 60px;
    border-radius: 20px;
    border: 1px solid $grey;
    color: #000000;
    font-size: 28px;
    text-align: center;
    background-color: $white;
    box-sizing: border-box;
    &_active {
      border-radius: 21px 21px 0 0;
    }

    &:focus {
      outline: none;
    }

    &::-webkit-input-placeholder {
      text-indent: 0;
      transition: text-indent 0.3s ease;
    }

    &::-moz-placeholder {
      text-indent: 0;
      transition: text-indent 0.3s ease;
    }

    &:-moz-placeholder {
      text-indent: 0;
      transition: text-indent 0.3s ease;
    }

    &:-ms-input-placeholder {
      text-indent: 0;
      transition: text-indent 0.3s ease;
    }

    &:focus::-webkit-input-placeholder {
      text-indent: 500px;
      transition: text-indent 0.3s ease;
    }

    &:focus::-moz-placeholder {
      text-indent: 500px;
      transition: text-indent 0.3s ease;
    }

    &:focus:-moz-placeholder {
      text-indent: 500px;
      transition: text-indent 0.3s ease;
    }

    &:focus:-ms-input-placeholder {
      text-indent: 500px;
      transition: text-indent 0.3s ease;
    }
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
    &__items {
      max-width: 250px;
    }
    &__selected-items {
      max-width: 250px;
    }
  }
}
</style>
