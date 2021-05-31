<template>
  <div class="v-home" ref="home">
    <v-header></v-header>

    <main class="main">
      <h1 class="heading">What Should I Cook?</h1>

      <div class="ingredients-selector">

        <div
            class="ingredients-selector__selected-items"
            ref="selected-items"
        >
          <div
              class="ingredients-selector__selected-item"
              v-for="(ingredient, index) in selectedIngredients"
              :key="ingredient.id"
          >
            <span class="ingredients-selector__selected-name">{{ ingredient.name }}</span>

            <div class="ingredients-selector__selected-remove">
              <i class="material-icons ingredients-selector__selected-remove-icon"
                 @click="removeIngredient(index)"
              >close</i>
            </div>
          </div>
        </div>

        <div
            class="ingredients-selector__list"
        >
          <input
              class="ingredients-selector__input"
              :class="{ 'ingredients-selector__input_active': isSelectorOpen }"
              placeholder="select ingredients"
              v-model="inputData"
          >

          <div
              class="ingredients-selector__items"
              :class="{ 'ingredients-selector__items_active': isSelectorOpen }"
              ref="selector-items"
          >
            <div
                class="ingredients-selector__item"
                v-for="ingredient in sortedIngredients"
                :key="ingredient.id"
                @click="selectIngredient(ingredient)"
            >{{ ingredient.name }}
            </div>
          </div>
        </div>

        <button
            class="ingredients-selector__submit"
            type="submit"
            @click="showMealsRecipes"
        >show
        </button>
      </div>

    </main>

    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from '../../layout/header/v-header';
import vFooter from '../../layout/footer/v-footer';

import {mapActions, mapGetters} from 'vuex';

export default {
  name: "v-home",

  components: {
    vHeader,
    vFooter,
  },

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
        params: { ingredients: this.selectedIngredients.map(item => item.id) },
      });
    },

    sortIngredients() {
      this.sortedIngredients = this.INGREDIENTS.sort((a, b) => {
        return b.name.toLowerCase().indexOf(this.inputData.toLowerCase()) - a.name.toLowerCase().indexOf(this.inputData.toLowerCase());
      });
      this.sortedIngredients = this.sortedIngredients.slice(0, 5);
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
      this.sortedIngredients = this.inputData.length !== 0 ? this.sortedIngredients : []
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
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;

  .heading {
    color: #000000;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 64px;
  }

  .ingredients-selector {
    display: flex;
    flex-direction: column;
    align-items: center;

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
      visibility: hidden;
      opacity: 0;
      position: absolute;
      transition: all .3s ease;
      z-index: 30;

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
      min-height: 51px;
      padding: 10px;
      background-color: #ffffff;
      border: 1px solid #676767;
      border-top: none;
      font-size: 18px;
      color: #696969;
      transition: background-color .2s linear;
      box-sizing: border-box;
      width: 361px;
      text-align: center;

      &:last-of-type {
        border-radius: 0 0 21px 21px;
      }

      &:hover {
        background-color: #e7e7e7;
        cursor: pointer;
      }
    }

    &__input {
      width: 361px;
      height: 61px;
      border-radius: 21px;
      border: 1px solid #676767;
      color: #000000;
      font-size: 28px;
      text-align: center;
      background-color: #ffffff;
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
      width: 361px;
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
}
</style>