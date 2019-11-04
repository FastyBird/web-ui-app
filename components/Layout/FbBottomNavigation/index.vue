<template>
  <div
    v-show="!isHidden()"
    class="fb-bottom-navigation__container"
    ref="bottom-navigation"
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
  import { mapGetters } from 'vuex'

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

    },

    computed: {

      ...mapGetters('bottomNavigation', [
        'hasItems',
        'getItems',
        'isHidden',
      ]),

      /**
       * Get buttons from store or default
       *
       * @return {Array}
       */
      buttons() {
        if (this.hasItems()) {
          return this.getItems()
        }

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
      this._applyBodyLimits()

      window.addEventListener('visibilitychange', this._applyBodyLimits)
      window.addEventListener('DOMContentLoaded', this._applyBodyLimits)
      window.addEventListener('resize', this._applyBodyLimits)

      this.$store.watch(
        this.$store.getters['bottomNavigation/isHidden'],
        () => {
          this._applyBodyLimits()
        }, {
          immediate: true,
        },
      )
    },

    beforeDestroy() {
      window.removeEventListener('visibilitychange', this._applyBodyLimits)
      window.removeEventListener('DOMContentLoaded', this._applyBodyLimits)
      window.removeEventListener('resize', this._applyBodyLimits)
    },

    methods: {


      /**
       * Calculate viewport size after window resizing
       *
       * @private
       */
      _applyBodyLimits() {
        if (this._.get(this.$refs, 'bottom-navigation')) {
          const elementHeight = this._.get(this.$refs, 'bottom-navigation.clientHeight')

          this.$store.dispatch('theme/setWindowHeight', {
            key: 'bottom-navigation',
            adjust: elementHeight,
          }, {
            root: true,
          })

          this.$store.dispatch('theme/setBodyMargin', {
            key: 'bottom-navigation',
            position: 'bottom',
            margin: this.isHidden() ? 0 : elementHeight,
          }, {
            root: true,
          })
        }
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
