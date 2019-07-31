<template>
  <div
    v-if="windowSize === 'xs' || windowSize === 'sm'"
    :class="['fb-phone-header__container', {'fb-phone-header__container-hide-shadow': hideShadow}]"
  >
    <div class="fb-phone-header__navbar">
      <div :class="['fb-phone-header__navbar-header', customClass]">
        <fb-logo
          v-if="!hasCustomHeading"
          :link="_.get(this, '$coreLinks.home', [])"
        />

        <h1
          v-if="hasCustomHeading && subHeading === null"
          class="one-row"
        >
          {{ heading }}
        </h1>
        <h1 v-if="hasCustomHeading && subHeading !== null">
          <span>{{ heading }}</span>
          <small>{{ subHeading }}</small>
        </h1>

        <action-button
          v-if="hasCustomLeftButton"
          :icon="leftButton.icon"
          type="button"
          class="fb-phone-header__button"
          @click="buttonAction('left')"
        />

        <hamburger-button
          v-else
          :collapsed="menuCollapsed"
          @click="toggleCollapseMain"
        />

        <action-button
          v-if="showRightButton && hasCustomRightButton"
          :icon="rightButton.icon"
          type="button"
          class="fb-phone-header__button"
          @click="buttonAction('right')"
        />

        <hamburger-button
          v-if="hasCustomLeftButton && !hasCustomRightButton && showRightButton"
          :collapsed="menuCollapsed"
          @click="toggleCollapseMain"
        />

        <template v-else>
          <button
            v-if="profile && showRightButton && !hasCustomRightButton"
            :class="['fb-phone-header__button', 'toggler', {collapsed: !show.usernav}]"
            type="button"
            @click.prevent="toggle('usernav')"
          >
            <span class="sr-only">{{ $t('layout.buttons.toggleNavigation.title') }}</span>
            <span class="arrow-up" />
            <div class="ellipsis">
              <gravatar
                :email="userEmail"
                :size="32"
                :default-img="'mm'"
                :alt="userName"
              />
            </div>
          </button>
        </template>
      </div>

      <div
        v-if="!hasCustomRightButton"
        class="fb-phone-header__user-navigation"
      >
        <nav :class="[{collapse: !show.usernav}]">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <h4>
                Hi, {{ userName }}
              </h4>
            </li>
            <template v-for="(item, index) in userMenuItems">
              <li
                v-if="item.hasOwnProperty('path')"
                :key="index"
              >
                <router-link :to="item.path">
                  {{ $t(item.meta.label) || item.name }}
                </router-link>
              </li>

              <li
                v-if="item.hasOwnProperty('callback')"
                :key="index"
              >
                <a
                  href="#"
                  @click.prevent="callCallback(item)"
                >
                  {{ $t(item.meta.label) || item.name }}
                </a>
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  const FbLogo = () => import('./../FbLogo')

  import ActionButton from './Button'
  import HamburgerButton from './Hamburger'

  import Gravatar from 'vue-gravatar'

  export default {

    name: 'FbPhoneHeader',

    components: {
      FbLogo,
      ActionButton,
      HamburgerButton,

      Gravatar,
    },

    props: {

      profile: {
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

    },

    data() {
      return {
        show: {
          mainnav: false,
          usernav: false,
          notifications: false,
        },
      }
    },

    computed: {

      ...mapState({
        windowSize: state => state.theme.windowSize,
        menuCollapsed: state => state.theme.menu.collapsed.xs,
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

      hasCustomRightButton() {
        return this.hasRightButton()
      },

      hasLeftButtonCallback() {
        const button = this.getLeftButton()

        return typeof button.callback === 'function'
      },

      leftButton() {
        return this.getLeftButton()
      },

      rightButton() {
        return this.getRightButton()
      },

      hasRightButtonCallback() {
        const button = this.getRightButton()

        return typeof button.callback === 'function'
      },

      hasCustomHeading() {
        return this.hasHeading()
      },

      heading() {
        return this.getHeading()
      },

      subHeading() {
        return this.getSubHeading()
      },

      showRightButton() {
        return !this.isHiddenRightButton()
      },

      customClass() {
        return this.getCustomClass()
      },

      hideShadow() {
        return this.hasHiddenShadow()
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

    methods: {

      ...mapActions('theme', {
        collapseMenu: 'menuCollapse',
        toggleMenu: 'menuToggle',
      }),

      callCallback(item) {
        const that = this

        this.blur()

        setTimeout(() => {
          item.callback(that)
        }, 50)
      },

      blur() {
        for (const key in this.show) {
          if (this.show.hasOwnProperty(key)) {
            this.show[key] = false
          }
        }
      },

      toggle(type) {
        if (this.show.hasOwnProperty(type)) {
          this.show[type] = !this.show[type]
        }
      },

      toggleCollapseMain() {
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
        }
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>

<i18n src="./locales.json" />
