<template>
  <div class="v-home">
    <v-header></v-header>

    <main class="main">
      <h1 class="heading">What Should I Cook?</h1>
      <form action="#" class="form_radio_group">

        <div class="radio_group">
          <div class="select">select ingredients</div>
        </div>

        <button
            class="submit"
            type="submit"
            @click.prevent="showMealsRecipes"
        >show</button>
      </form>
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
    return {}
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
      this.$router.push('/meal');
    }
  },

  mounted() {
    this.GET_INGREDIENTS_FROM_API();
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