<template>
  <div class="v-selector">
    <component
        :is="currentSelector"
        @select="setSelectedItems"
    />

    <button
        class="waves-effect waves-light btn v-selector__submit"
        type="submit"
        @click="showMeals"
    >
      show
    </button>

    <v-switcher
        class="v-selector__switcher"
        title="search for meals"
        @switch="switchSelector"
    />
  </div>
</template>

<script>
import vIngredientsSelector from "./v-ingredients-selector";
import vMealsSelector from "./v-meals-selector";
import vSwitcher from '../../elements/v-switcher';

export default {
  name: "v-selector",

  components: {
    vIngredientsSelector,
    vMealsSelector,
    vSwitcher,
  },

  data() {
    return {
      selected: [],
      currentSelector: vIngredientsSelector,
    }
  },

  methods: {
    switchSelector() {
      this.currentSelector = (this.currentSelector === vIngredientsSelector)
          ? vMealsSelector
          : vIngredientsSelector;
    },

    setSelectedItems(items) {
      this.selected = items;
    },

    showMeals() {
      let mealsIdx = [];
      if (this.selected.length > 0) {
        mealsIdx = this.selected.map(i => i.meal_id);
      }
      this.$router.push({name: 'meals', params: { mealsIdx }});
    }
  }
}
</script>

<style lang="scss">
@import '~vue-multiselect/dist/vue-multiselect.min.css';

.v-selector {
  width: 360px;
  overflow: hidden;

  .agile__list {
    overflow: visible;
  }

  .multiselect {
    position: absolute;
    width: 360px;
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

    &__tag-icon {
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: $green;
      }
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
      position: absolute;
      border-radius: 0 0 25px 25px;

      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }

    &__option {
      white-space: pre-wrap;
    }
  }

  &__switcher {
    margin-top: 20px;
    margin-right: 15px;
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
  .v-selector {
    max-width: 250px;
    transition: all .5s;

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