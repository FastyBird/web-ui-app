<template>
  <div
    class="fb-desktop-header__container"
    ref="desktop-header"
  >
    <h1 v-if="subHeading === null">
      {{ heading }}
    </h1>
    <h1 v-else>
      <span>{{ heading }}</span>
      <small>{{ subHeading }}</small>
    </h1>

    <div class="fb-desktop-header__buttons">
      <action-button
        v-if="hasCustomLeftButton"
        :name="leftButton.name"
        :icon="leftButton.icon"
        type="button"
        class="fb-desktop-header__button"
        @click="buttonAction('left')"
      />

      <action-button
        v-if="hasCustomRightButton"
        :name="rightButton.name"
        :icon="rightButton.icon"
        type="button"
        class="fb-desktop-header__button"
        @click="buttonAction('right')"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import ActionButton from './Button'

  export default {

    name: 'FbDesktopHeader',

    components: {
      ActionButton,
    },

    computed: {

      ...mapGetters('header', [
        'hasLeftButton',
        'hasRightButton',
        'getLeftButton',
        'getRightButton',
        'hasHeading',
        'getHeading',
        'getSubHeading',
        'isHiddenRightButton',
        'getCustomClass',
        'hasHiddenShadow',
      ]),

      hasCustomLeftButton() {
        return this.hasLeftButton()
      },

      leftButton() {
        return this.getLeftButton()
      },

      hasLeftButtonCallback() {
        const button = this.getLeftButton()

        return typeof this._.get(button, 'callback') === 'function'
      },

      hasCustomRightButton() {
        return this.hasRightButton()
      },

      rightButton() {
        return this.getRightButton()
      },

      hasRightButtonCallback() {
        const button = this.getRightButton()

        return typeof this._.get(button, 'callback') === 'function'
      },

      heading() {
        return this.getHeading()
      },

      subHeading() {
        return this.getSubHeading()
      },

    },

    mounted() {
      window.addEventListener('visibilitychange', this._applyBodyLimits)
      window.addEventListener('resize', this._applyBodyLimits)

      this.$store.watch(
        this.$store.getters['header/stateWatch'],
        () => {
          this._applyBodyLimits()
        }, {
          immediate: true,
        },
      )
    },

    beforeDestroy() {
      window.removeEventListener('visibilitychange', this._applyBodyLimits)
      window.removeEventListener('resize', this._applyBodyLimits)
    },

    methods: {

      buttonAction(position) {
        if (position === 'left') {
          if (this.hasLeftButtonCallback) {
            this.leftButton.callback()
          } else {
            this.$router.push(this.leftButton.link)
          }
        } else if (position === 'right') {
          if (this.hasRightButtonCallback) {
            this.rightButton.callback()
          } else {
            this.$router.push(this.rightButton.link)
          }
        }
      },

      /**
       * Calculate viewport size after window resizing
       *
       * @private
       */
      _applyBodyLimits() {
        if (this._.get(this.$refs, 'desktop-header')) {
          const elementHeight = this._.get(this.$refs, 'desktop-header.clientHeight')

          this.$store.dispatch('theme/setWindowHeight', {
            key: 'desktop-header',
            adjust: elementHeight,
          }, {
            root: true,
          })

          this.$store.dispatch('theme/setBodyMargin', {
            key: 'desktop-header',
            position: 'top',
            margin: elementHeight,
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
