<template>
  <div class="v-meals-selector">
    <multiselect
        v-model="value"
        :placeholder="placeholder"
        label="name"
        track-by="id"
        :options="MEALS_NAMES_LIST"
        :loading="isLoading"
        :preserve-search="true"
        :hideSelected="true"
        open-direction="bottom"
        selectLabel=""
        @open="openSelector"
        @select="selectMeal"
        @close="closeSelector"
    />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-meals-selector",

  components: {
    Multiselect,
  },

  data() {
    return {
      value: null,
      selectedMeals: [],
      isSelectorOpen: false,
      isLoading: false,
    }
  },

  computed: {
    ...mapGetters([
      'MEALS_NAMES_LIST',
    ]),

    placeholder() {
      return !this.isSelectorOpen ? 'Select meals' : '';
    },
  },

  methods: {
    ...mapActions([
      'LOAD_MEALS_NAMES_LIST',
    ]),

    async openSelector() {
      this.isSelectorOpen = !this.isSelectorOpen;
      if (this.MEALS_NAMES_LIST.length === 0) {
        let list = await this.getMealsListFromApi();
        this.LOAD_MEALS_NAMES_LIST(list);
      }
    },

    async getMealsListFromApi() {
      this.isLoading = true;
      let list = (await this.$api.meals.getList()).data;
      this.isLoading = false;
      return list;
    },

    selectMeal(meal) {
      this.value = meal;
      this.$emit('select', [{ meal_id: this.value.id }]);
    },

    closeSelector() {
      this.isSelectorOpen = !this.isSelectorOpen;
    },
  },
}
</script>

<style lang="scss">

</style>