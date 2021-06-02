<template>
  <div
      class="v-burger"
      :class="{ active: isBurgerActive }"
      @click="activateBurger"
  >
    <span class="v-burger__span"></span>
  </div>
</template>

<script>
export default {
  name: "v-burger",

  data() {
    return {
        isBurgerActive: false,
    };
  },

  methods: {
    activateBurger() {
      this.isBurgerActive = !this.isBurgerActive;
      this.$emit('activateBurger', this.isBurgerActive);
    }
  }
}
</script>

<style lang="scss">
.v-burger {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 30px;
  height: 20px;
  z-index: 30;
  margin: 10px 20px;
  cursor: pointer;

  &__span {
    position: absolute;
    background-color: $white;
    left: 0;
    height: 3px;
    top: 9px;
    width: 100%;
    transition: all .3s ease 0s;
  }

  &::before, &::after {
    content: "";
    background-color: $white;
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    transition: all .3s ease 0s;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  &.active .v-burger__span {
    transform: scale(0);
  }

  &.active::before {
    transform: rotate(45deg);
    top: 8px;
  }

  &.active::after {
    transform: rotate(-45deg);
    bottom: 9px;
  }
}
</style>
