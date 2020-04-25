<template>
  <div
    class="fb-phone-header__container"
    ref="container"
  >
    <div class="fb-phone-header__row">
      <heading
        v-if="headingStyle === 'normal'"
        :heading="heading"
        :sub-heading="subHeading"
        :icon="icon"
        :home-link="homeLink"
        :left-align="leftButton === null && heading !== null"
        :full-row-heading="false"
        @iconClicked="$emit('iconClicked')"
      />

      <action-button
        v-if="leftButton !== null"
        :name="leftButton.name"
        :icon="leftButton.icon"
        type="button"
        :class="['fb-phone-header__button', {'fb-phone-header__button-small': headingStyle === 'row'}, {'fb-phone-header__button-textual': leftButton.icon === null}]"
        @click="$emit('leftButtonClicked')"
      />

      <action-button
        v-if="rightButton !== null"
        :name="rightButton.name"
        :icon="rightButton.icon"
        type="button"
        :class="['fb-phone-header__button', 'fb-phone-header__button-right', {'fb-phone-header__button-small': headingStyle === 'row'}, {'fb-phone-header__button-textual': rightButton.icon === null}]"
        @click="$emit('rightButtonClicked')"
      />

      <hamburger-button
        v-if="rightButton === null || leftButton === null"
        :collapsed="menuCollapsed"
        :class="['fb-phone-header__button', {'fb-phone-header__button-right': rightButton === null}, {'fb-phone-header__button-small': headingStyle === 'row'}]"
        @click="$emit('toggleMenu')"
      />
    </div>

    <heading
      v-if="headingStyle === 'row' && heading !== null"
      :heading="heading"
      :sub-heading="subHeading"
      :icon="icon"
      :home-link="homeLink"
      :left-align="leftButton === null && heading !== null"
      :full-row-heading="true"
      class="fb-phone-header__row"
      @iconClicked="$emit('iconClicked')"
    />

    <p
      v-if="infoText !== null"
      class="fb-phone-header__info"
    >
      {{ infoText }}
    </p>

    <tabs
      v-if="tabs.length > 0"
      :tabs="tabs"
    />

    <fb-button
      v-if="actionButton !== null"
      variant="outline-primary"
      uppercase
      pill
      class="fb-phone-header__add-button"
      @click="$emit('actionButtonClicked')"
    >
      <slot name="add-icon" />
    </fb-button>
  </div>
</template>

<script>
import Heading from './Heading'
import ActionButton from './Button'
import HamburgerButton from './HamburgerButton'
import Tabs from './Tabs'

export default {

  name: 'FbPhoneHeader',

  components: {
    Heading,
    ActionButton,
    HamburgerButton,
    Tabs,
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

    infoText: {
      type: String,
      default: null,
    },

    headingStyle: {
      type: String,
      default: 'normal',
      validator: (value) => {
        // The value must match one of these strings
        return ['normal', 'row', 'hidden'].indexOf(value) !== -1
      },
    },

    icon: {
      type: String,
      default: null,
    },

    userName: {
      type: String,
      default: null,
    },

    userEmail: {
      type: String,
      default: null,
    },

    homeLink: {
      type: String,
      default: '/',
    },

    menuCollapsed: {
      type: Boolean,
      default: true,
    },

    tabs: {
      type: Array,
      default: () => {
        return []
      },
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

  updated() {
    this.$emit('mounted')
  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
