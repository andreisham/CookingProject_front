<template>
  <div class="v-home">
        <v-ingredients-modal
          v-if="isIngredientsVisible"
          @closeIngredients="closeIngredients"
        >
        <v-ingredient-item
            v-for="ingredient in INGREDIENTS.meals"
            :key="ingredient.idIngredient"
            :ingredient_data="ingredient"
        />
        </v-ingredients-modal>

    <main class="main">
      <h1 class="heading">What Should I Cook?</h1>
      <form action="#" class="form_radio_group">

        <div class="radio_group">
          <div class="select">select ingredients</div>

<!--          <div class="form_radio_group-item">-->
<!--            <input id="radio-1" type="radio" name="radio" value="Говядина" checked>-->
<!--            <label for="radio-1">Говядина</label>-->
<!--          </div>-->
<!--          <div class="form_radio_group-item">-->
<!--            <input id="radio-2" type="radio" name="radio" value="Свинина">-->
<!--            <label for="radio-2">Свинина</label>-->
<!--          </div>-->
<!--          <div class="form_radio_group-item">-->
<!--            <input id="radio-3" type="radio" name="radio" value="Лосось">-->
<!--            <label for="radio-3">Лосось</label>-->
<!--          </div>-->
<!--          <div class="form_radio_group-item">-->
<!--            <input id="radio-4" type="radio" name="radio" value="Курица">-->
<!--            <label for="radio-4">Курица</label>-->
<!--          </div>-->

        </div>
        <button class="submit" type="submit" @click.prevent="showIngredients">show</button>
      </form>
    </main>
  </div>
</template>

<script>
import vIngredientItem from './v-ingredient-item'
import vIngredientsModal from './v-ingredients-modal';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "v-home",

  components: {
    vIngredientItem,
    vIngredientsModal,
  },

  data() {
    return {
      isIngredientsVisible: false,
    }
  },

  computed: {
    ...mapGetters([
      'INGREDIENTS',
    ]),
  },

  methods: {
    showIngredients() {
      this.isIngredientsVisible = true;
    },

    closeIngredients() {
      this.isIngredientsVisible = false;
    },

    ...mapActions([
        'GET_INGREDIENTS',
    ]),
  },

  mounted() {
    this.GET_INGREDIENTS();
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
  .select {
    width: 361px;
    height: 61px;
    border-radius: 21px;
    border: 1px solid #676767;
    color: #000000;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
  }
  .radio_group {
    display: flex;
    flex-direction: column;
    border-radius: 21px;
    background-color: #f5c932;
    background-image: linear-gradient(to top, #5cb88d 0%, #69b593 100%);
  }
  .radio_group.active {
    top: 0;
  }
  .radio_group.hidden {
    display: none;
  }
  .form_radio_group input[type=radio] {
    display: none;
  }
  .form_radio_group label {
    cursor: pointer;
    user-select: none;
    width: 361px;
    height: 61px;
    border: 1px solid #676767;
    color: #000000;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form_radio_group .form_radio_group-item:first-child label {
    border-radius: 21px 21px 0 0;;
  }
  .form_radio_group .form_radio_group-item:last-child label {
    border-radius: 0 0 21px 21px;
    border-right: 1px solid #999;
  }

  .form_radio_group input[type=radio]:checked + label {
    background-image: linear-gradient(to top, #37a56d 0%, #1f8360 100%);;
  }

  .form_radio_group label:hover {
    color: #666;
  }
  .submit {
    margin-top: 40px;
    color: #fefefe;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    width: 361px;
    height: 61px;
    border-radius: 21px;
    background-image: linear-gradient(to top, #18a86b 0%, #2fb383 100%);
  }
}
</style>