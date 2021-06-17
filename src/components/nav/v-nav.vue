<template>
  <div
      class="v-nav"
      :class="{ active: this.isMenuOpen }"
      v-touch:swipe.up="close"
  >
    <div class="v-nav__menu">
        <router-link
            class="v-nav__link"
            :to="{name: route.page}"
            v-for="(route, index) in routes"
            :key="index"
        >
            <span @click="selectRoute">{{ route.title }}</span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-nav",

  props: {
    isMenuOpen: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },

  data() {
    return {
      routes: [
        {
          page: 'ingredients',
          title: 'Ингредиенты',
        },
        {
          page: 'meals',
          title: 'Случайный рецепт',
        },
        {
          page: 'account',
          title: 'Личный кабинет',
        },
        {
          page: 'favorites',
          title: 'Избранное',
        },
      ],
    }
  },

  methods: {
    selectRoute() {
      this.$emit('selectRoute');
    },

    close() {
      this.$emit('close');
    }
  },
}
</script>

<style lang="scss">
.v-nav {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $yellow;
  background-image: linear-gradient(to top, $pink 0%, $orange 100%);
  overflow: auto;
  transition: all .3s ease 0s;
  display: flex;
  justify-content: center;
  z-index: 20;

  &.active {
    top: 0;
    padding-top: 110px;
  }

  &__menu {
    max-width: $mobile-max-width;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 40px;
  }

  &__link {
    display: flex;
    align-items: center;
    height: 40px;
    color: $white;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>