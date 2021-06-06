<template>
  <div class="v-favorites">

    <div class="v-favorites__header">
      <h1 class="v-favorites__h1">Избранное</h1>
    </div>

    <div class="v-favorites__items">

      <div class="v-favorites-item">
        <div class="v-favorites-item__left">
          <img src="https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg" alt="img" class="v-favorites-item__img">
        </div>

        <div class="v-favorites-item__center">
          <h3 class="v-favorites-item__name">Сахарный пирог</h3>
        </div>

        <div class="v-favorites-item__right">
          <i class="material-icons v-favorites-item__i">favorite_border</i>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "v-favorites",
}
</script>

<style lang="scss">
.v-favorites {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    box-shadow: 0 8px 15px -10px rgba(34, 60, 80, 0.1);
  }

  &__h1 {
    margin-left: 20px;
  }

  .v-favorites__items {
    overflow: auto;
    max-height: 600px;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: $light-grey;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }
  }

  .v-favorites-item {
    display: flex;
    padding: 20px 15px;
    transition: all .3s;

    &:hover {
      background-color: #e7e7e7;
      border-radius: 8px;
      cursor: pointer;
    }

    &__left {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__img {
      width: 100px;
      border-radius: 50px;
    }

    &__center {
      flex: 3;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &__name {
      margin-left: 25px;
      font-size: 24px;
      font-weight: normal;
    }

    &__right {
      flex: 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
    }

    &__i {
      font-size: 45px;
      color: $green
    }
  }
}
</style>