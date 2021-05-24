<template>
  <div class="v-ingredients-modal">
      <div class="v-ingredients-modal__content">
        <div class="v-ingredients-modal__header">
        <span>
          <i class="material-icons v-ingredients-modal__close"
              @click="closeIngredients"
          >close</i>
        </span>
        </div>
        <div class="v-ingredients-modal__items">
          <slot></slot>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "v-ingredients-modal",
  methods: {
    closeIngredients() {
      this.$emit('closeIngredients');
    }
  }
}
</script>

<style lang="scss">
  .v-ingredients-modal {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 150px;
    width: 500px;
    opacity: 100%;
    z-index: 1;

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 450px;
      min-height: 700px;
      border-radius: 21px;
      align-items: center;
      background-color: #ffffff;
      box-shadow: 0 0 10px 0 #e7e7e7;
      padding: 10px;
      transition: opacity .5s;
    }

    &__header {
      display: flex;
      justify-content: flex-end;
      min-height: 40px;
      width: 100%;
      padding: 10px;
      align-items: flex-end;
      box-sizing: border-box;
    }

    &__close {
      color: #000000;
      cursor: pointer;
    }

    .material-icons {
      font-size: 30px;
      font-weight: bold;
    }

    &__items {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      max-height: 600px;
      padding-top: 20px;
      box-sizing: border-box;
      overflow: auto;
      color: black;
    }

  }
</style>