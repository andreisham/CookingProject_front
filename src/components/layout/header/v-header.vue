<template>
  <div class="v-header">
    <header class="header">
      <router-link :to="{name: 'home'}">
        <div class="header__logo">WSIC</div>
      </router-link>
      <div
          class="header__burger"
          :class="{ active: isMenuOpen }"
          @click="showMenu"
      >
        <span></span>
      </div>

      <nav
          class="header__menu nav"
          :class="{active: isMenuOpen }"
      >
        <ul class="menu">
          <li
              class="menu__list"
              @click="showMenu"
              v-for="link in links"
              :key="link.page"
          >
            <router-link
                class="menu__link"
                :to="{name: link.page}"
            >{{ link.title }}</router-link>
          </li>
        </ul>
      </nav>

    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      links: [
        {
          page: 'home',
          title: 'Главная',
        },
        {
          page: 'ingredients',
          title: 'Ингредиенты',
        },
        {
          page: 'meal',
          title: 'Случайный рецепт',
        },
      ],
    }
  },

  methods: {
    showMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    showIngredients() {
      this.$emit('showIngredients');
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  height: 265px;
  background: url("../../../assets/img/backgr.svg") no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: -80px;

  &__logo {
    position: relative;
    height: 50px;
    color: #ffffff;
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
    z-index: 30;
  }

  .header__list {
    display: flex;
  }

  //burger
  .header__burger {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    z-index: 30;
    margin: 0 30px;
    cursor: pointer;
  }

  .header__burger span {
    position: absolute;
    background-color: #FFFFFF;
    left: 0;
    height: 3px;
    top: 9px;
    width: 100%;
    transition: all 0.3s ease 0s;
  }

  .header__burger::before,
  .header__burger::after {
    content: "";
    background-color: #FFFFFF;
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    transition: all 0.3s ease 0s;
  }

  .header__burger::before {
    top: 0;
  }

  .header__burger::after {
    bottom: 0;
  }

  .header__menu {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5c932;
    background-image: linear-gradient(to top, #fc686f 0%, #ff934c 100%);
    overflow: auto;
    transition: all 0.3s ease 0s;

    // added style
    display: flex;
    justify-content: center;
    z-index: 20;
  }

  .header__menu.active {
    top: 0;
    padding-top: 110px;
  }

  .menu {
    flex-direction: column;
    // added styles
    width: 500px;

    .menu__list {
      display: flex;
      align-items: center;
      height: 50px;
      text-align: left;
      width: 50%;
      font-size: 20px;
      font-weight: bold;
    }
  }

  .header__burger.active span {
    transform: scale(0);
  }

  .header__burger.active::before {
    transform: rotate(45deg);
    top: 8px;
  }

  .header__burger.active::after {
    transform: rotate(-45deg);
    bottom: 9px;
  }
}
</style>