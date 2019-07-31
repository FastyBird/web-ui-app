<template>
  <div
    v-if="windowSize !== 'xs' && windowSize !== 'sm'"
    class="fb-desktop-header__container"
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
        :icon="leftButton.icon"
        type="button"
        class="fb-desktop-header__button"
        @click="buttonAction('left')"
      />

      <action-button
        v-if="hasCustomRightButton"
        :icon="rightButton.icon"
        type="button"
        class="fb-desktop-header__button"
        @click="buttonAction('right')"
      />
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  import ActionButton from './Button'

  export default {

    name: 'FbDesktopHeader',

    components: {
      ActionButton,
    },

    computed: {

      ...mapState({
        windowSize: state => state.theme.windowSize,
      }),

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

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import './index.scss';
</style>
