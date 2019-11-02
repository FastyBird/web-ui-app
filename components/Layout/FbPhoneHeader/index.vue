<template>
  <div
    class="fb-phone-header__container"
    ref="phone-header"
  >
    <div class="fb-phone-header__row">
      <heading
        v-if="!hasFullRowHeading() && !isHiddenHeading()"
        :home-link="homeLink"
      />

      <hamburger-button
        v-if="!hasHiddenHamburger() && !hasLeftButton()"
        :collapsed="menuCollapsed"
        :class="['fb-phone-header__button', {'fb-phone-header__button-right': hasLeftButton() && !hasRightButton() && !isHiddenRightButton()}, {'fb-phone-header__button-small': hasFullRowHeading()}]"
        @click="toggleMainMenu"
      />

      <action-button
        v-if="hasLeftButton() && !isHiddenLeftButton()"
        :icon="getLeftButton().icon"
        type="button"
        :class="['fb-phone-header__button', {'fb-phone-header__button-small': hasFullRowHeading()}]"
        @click="buttonAction('left')"
      />

      <action-button
        v-if="hasRightButton() && !isHiddenRightButton()"
        :icon="getRightButton().icon"
        type="button"
        :class="['fb-phone-header__button', 'fb-phone-header__button-right', {'fb-phone-header__button-small': hasFullRowHeading()}]"
        @click="buttonAction('right')"
      />

      <profile-button
        v-if="hasProfile && !isHiddenRightButton() && !hasRightButton()"
        :user-name="userName"
        :user-email="userEmail"
        :collapsed="!show.usernav"
        :class="['fb-phone-header__button', 'fb-phone-header__button-right', {'fb-phone-header__button-small': hasFullRowHeading()}]"
        @click="toggleProfileMenu"
      />
    </div>

    <heading
      v-if="hasFullRowHeading() && !isHiddenHeading() && hasHeading()"
      :home-link="homeLink"
      class="fb-phone-header__row"
    />

    <tabs
      v-if="hasTabs()"
      :tabs="getTabs()"
    />

    <fb-button
      v-if="hasAddButton()"
      variant="outline-primary"
      uppercase
      pill
      class="fb-phone-header__add-button"
      @click="buttonAction('add')"
    >
      <slot name="add-icon" />
    </fb-button>

    <profile-navigation
      v-if="hasProfile && !isHiddenRightButton() && !hasRightButton()"
      :user-name="userName"
      :user-menu-items="userMenuItems"
      :collapsed="!show.usernav"
      @click="blur"
    />
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  import Heading from './Heading'
  import ActionButton from './Button'
  import HamburgerButton from './HamburgerButton'
  import ProfileButton from './ProfileButton'
  import ProfileNavigation from './ProfileNavigation'
  import Tabs from './Tabs'

  export default {

    name: 'FbPhoneHeader',

    components: {
      Heading,
      ActionButton,
      HamburgerButton,
      ProfileButton,
      ProfileNavigation,
      Tabs,
    },

    props: {

      hasProfile: {
        type: Boolean,
        default: false,
      },

      avatar: {
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

      userMenuItems: {
        type: Array,
        default: () => {
          return []
        },
      },

      homeLink: {
        type: String,
        default: '/',
      },

    },

    data() {
      return {
        show: {
          mainnav: false,
          usernav: false,
        },
      }
    },

    computed: {

      ...mapState({
        menuCollapsed: state => state.theme.menu.collapsed.xs,
      }),

      ...mapGetters('header', [
        'hasHeading',
        'hasFullRowHeading',
        'isHiddenHeading',
        'hasHiddenHamburger',
        'hasLeftButton',
        'isHiddenLeftButton',
        'getLeftButton',
        'hasRightButton',
        'isHiddenRightButton',
        'getRightButton',
        'hasTabs',
        'getTabs',
        'hasAddButton',
        'getAddButton',
      ]),

      leftButton() {
        return this.getLeftButton()
      },

      hasLeftButtonCallback() {
        const button = this.getLeftButton()

        return typeof this._.get(button, 'callback') === 'function'
      },

      rightButton() {
        return this.getRightButton()
      },

      hasRightButtonCallback() {
        const button = this.getRightButton()

        return typeof this._.get(button, 'callback') === 'function'
      },

      addButton() {
        return this.getAddButton()
      },

      hasAddButtonCallback() {
        const button = this.getAddButton()

        return typeof this._.get(button, 'callback') === 'function'
      },

    },

    watch: {

      $route() {
        for (const key in this.show) {
          if (this.show.hasOwnProperty(key)) {
            this.show[key] = false
          }
        }
      },

    },

    mounted() {
      this._applyBodyLimits()

      window.addEventListener('visibilitychange', this._applyBodyLimits)
      window.addEventListener('DOMContentLoaded', this._applyBodyLimits)
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
      window.removeEventListener('DOMContentLoaded', this._applyBodyLimits)
      window.removeEventListener('resize', this._applyBodyLimits)
    },

    methods: {

      ...mapActions('theme', {
        toggleMenu: 'menuToggle',
      }),

      toggleProfileMenu() {
        this.show.usernav = !this.show.usernav
      },

      toggleMainMenu() {
        this.toggleMenu()
        this.show.usernav = false
      },

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
        } else if (position === 'add') {
          if (this.hasAddButtonCallback) {
            this.addButton.callback()
          } else {
            this.$router.push(this.addButton.link)
          }
        }
      },

      blur() {
        for (const key in this.show) {
          if (this.show.hasOwnProperty(key)) {
            this.show[key] = false
          }
        }
      },

      /**
       * Calculate viewport size after window resizing
       *
       * @private
       */
      _applyBodyLimits() {
        if (this._.get(this.$refs, 'phone-header')) {
          const elementHeight = this._.get(this.$refs, 'phone-header.clientHeight')

          this.$store.dispatch('theme/setWindowHeight', {
            key: 'phone-header',
            adjust: elementHeight,
          }, {
            root: true,
          })

          if (elementHeight) {
            document.body.style['margin-top'] = `${elementHeight}px`
          }
        }
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>

<i18n src="./locales.json" />
