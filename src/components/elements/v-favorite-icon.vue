<template>
  <i
      class="material-icons v-favorite-icon"
      @click="select"
  >
    {{ type }}
  </i>
</template>

<script>
export default {
  name: "v-favorite-icon",

  props: {
    isSelected: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },

  computed: {
    type: function() {
      return this.isSelected ? 'favorite' : 'favorite_border';
    }
  },

  methods: {
    select() {
      this.$emit('clickFavoriteIcon', !this.isSelected);
    }
  },
}
</script>

<style lang="scss">
  .v-favorite-icon {
    color: $green;
    user-select: none;
    transition: all .3s;
    -webkit-tap-highlight-color:  transparent;
    &:active {
      transform: scale(.9);
    }
  }
</style>