<template>
  <div
    v-show="!collapsed"
    class="fb-bottom-navigation__container"
    ref="container"
  >
    <div>
      <div
        v-for="(button, index) in buttons"
        :key="index"
        :class="[`fb-bottom-navigation__item-${columns}`]"
      >
        <item :item="button" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item'

export default {

  name: 'FbBottomNavigation',

  components: {
    Item,
  },

  props: {

    items: {
      type: Array,
      default: () => {
        return []
      },
    },

    collapsed: {
      type: Boolean,
      default: true,
    },

  },

  computed: {

    /**
     * Get buttons from store or default
     *
     * @return {Array}
     */
    buttons() {
      return this.items
    },

    /**
     * Calculate column coun
     * Max 12 is supported
     *
     * @return {Number}
     */
    columns() {
      return 12 / this.buttons.length
    },

  },

  mounted() {
    this.$emit('mounted')
  },

  updated() {
    this.$emit('mounted')
  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
