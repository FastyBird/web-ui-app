<template>
  <div
    class="fb-desktop-header__container"
    ref="container"
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
        v-if="leftButton !== null"
        :name="leftButton.name"
        :icon="leftButton.icon"
        type="button"
        class="fb-desktop-header__button"
        @click="$emit('leftButtonClicked')"
      />

      <action-button
        v-if="rightButton !== null"
        :name="rightButton.name"
        :icon="rightButton.icon"
        type="button"
        class="fb-desktop-header__button"
        @click="$emit('rightButtonClicked')"
      />

      <action-button
        v-if="actionButton !== null"
        name="name"
        icon="plus"
        type="button"
        class="fb-desktop-header__button"
        @click="$emit('actionButtonClicked')"
      />
    </div>
  </div>
</template>

<script>
import ActionButton from '@/components/Layout/FbDesktopHeader/Button'

export default {

  name: 'FbDesktopHeader',

  components: {
    ActionButton,
  },

  props: {

    heading: {
      type: String,
      default: null,
    },

    subHeading: {
      type: String,
      default: null,
    },

    leftButton: {
      type: Object,
      default: null,
      validator: (value) => {
        return !(
          !Object.prototype.hasOwnProperty.call(value, 'icon') ||
          !Object.prototype.hasOwnProperty.call(value, 'name')
        )
      },
    },

    rightButton: {
      type: Object,
      default: null,
      validator: (value) => {
        return !(
          !Object.prototype.hasOwnProperty.call(value, 'icon') ||
          !Object.prototype.hasOwnProperty.call(value, 'name')
        )
      },
    },

    actionButton: {
      type: Object,
      default: null,
      validator: (value) => {
        return !(
          !Object.prototype.hasOwnProperty.call(value, 'icon') ||
          !Object.prototype.hasOwnProperty.call(value, 'name')
        )
      },
    },

  },

  mounted() {
    this.$emit('mounted')
  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
