<template>
  <div class="v-switcher">
    <div class="v-switcher__desc">{{ title }}</div>
    <div
        class="v-switcher__box"
        :class="{'v-switcher__box_active': isSwitcherActive}"
        @click="checkSwitcher"

    >
      <div
          class="v-switcher__thumb"
          :class="{'v-switcher__thumb_active': isSwitcherActive}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-switcher",

  props: {
    title: {
       type: String,
        default() {
         return '';
        }
    },
  },

  data() {
    return {
      isSwitcherActive: false,
    }
  },

  methods: {
    checkSwitcher() {
      this.isSwitcherActive = !this.isSwitcherActive;
      this.$emit('switch', this.isSwitcherActive);
    }
  }
}
</script>

<style lang="scss">
.v-switcher {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__desc {
    margin-right: 7px;
    font-size: 12px;
    color: $grey-lighten-1;
    transition: all .3s;
  }

  &__box {
    display: flex;
    align-items: center;
    width: 40px;
    height: 26px;
    background-color: $grey-lighten-2;
    border-radius: 25px;
    cursor: pointer;
    transition: all .5s;
    &_active {
      background-color: $green;
    }
  }

  &__thumb {
    margin-left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 23px;
    background-color: $white;
    transition: all .3s;
    &_active {
      transform: translateX(14px);
    }
  }
}
</style>
