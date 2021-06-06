<template>
  <header class="v-header">

    <div class="v-header__content">
      <router-link :to="{name: 'home'}">
        <div
            class="v-header__logo"
            @click="logoClick"
        >
          WSIC
        </div>
      </router-link>
      <v-burger
          :isBurgerActive="isMenuOpen"
          @activateBurger="toggleMenu"
      />
    </div>

    <v-nav
        :isMenuOpen="isMenuOpen"
        @selectRoute="toggleMenu"
    />

  </header>
</template>

<script>
import vBurger from '../../elements/v-burger';
import vNav from '../../../components/nav/v-nav';

export default {
  name: "v-header",

  components: {
    vBurger,
    vNav,
  },

  data() {
    return {
      isMenuOpen: false,
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    logoClick() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style lang="scss">
.v-header {
  display: flex;
  flex-direction: column;
  min-height: 200px;
  background: url('../../../assets/img/backgr.svg') no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: -100px;

  &__content {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
  }

  &__logo {
    position: relative;
    height: 50px;
    color: $white;
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    text-transform: uppercase;
    z-index: 30;
    cursor: pointer;
  }
}

@media screen and (max-width: 375px) {
  .v-header {
    background-position-y: -80px;
  }
}
</style>