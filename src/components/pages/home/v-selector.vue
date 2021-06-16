<template>
  <div class="v-selector">
    <component
        :is="currentSelector"
        class="v-home__selector"
    />
  </div>
</template>

<script>
import vIngredientsSelector from "./v-ingredients-selector";
import vMealsSelector from "./v-meals-selector";

export default {
  name: "v-selector",

  components: {
    vIngredientsSelector, vMealsSelector,
  },

  data() {
    return {
      currentSelector: vIngredientsSelector,
    }
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