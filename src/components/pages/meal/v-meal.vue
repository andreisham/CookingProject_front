<template>
  <div class="v-meal">
    <main class="ingredients">
      <h1 class="heading">Блины с лососем</h1>
      <h2>Ингредиенты</h2>
      <ul class="recipe">
        <li class="recipe__list">мука 1,5 стакана</li>
        <hr>
        <li class="recipe__list">мука 1,5 стакана</li>
        <hr>
        <li class="recipe__list">мука 1,5 стакана</li>
        <hr>
        <li class="recipe__list">мука 1,5 стакана</li>
        <hr>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: "v-meal"
}
</script>

<style lang="scss">
.ingredients {

  margin: 14px 40px;
  color: #434343;
  .recipe {
    list-style-image: url("../../../assets/img/list-style.png");
    hr {
      margin-left: -22px;
      width: 361px;
      height: 1px;
      background-color: #b9b9b9;
    }
    .recipe__list {
      color: #434343;
      font-size: 20px;
      font-weight: 400;
    }
  }
}
</style>