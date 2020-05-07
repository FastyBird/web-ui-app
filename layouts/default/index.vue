<template>
  <div class="fb-default-layout__container">
    <fb-phone-header
      ref="phone-header"
      :heading="heading"
      :sub-heading="subHeading"
      :info-text="headingInfoText"
      :heading-style="headingStyle"
      :icon="headingIcon"
      :user-name="userName"
      :user-email="userEmail"
      :home-link="homeLink"
      :menu-collapsed="mainMenuCollapsed"
      :tabs="headingTabs"
      :left-button="headingLeftButton"
      :right-button="headingRightButton"
      :action-button="headingActionButton"
      @toggleMenu="$emit('toggleMenu')"
      @iconClicked="$emit('headingIconClicked')"
      @leftButtonClicked="$emit('headingLeftButtonClicked')"
      @rightButtonClicked="$emit('headingRightButtonClicked')"
      @actionButtonClicked="$emit('headingActionButtonClicked')"
      @mounted="$emit('mounted')"
    >
      <font-awesome-icon
        slot="add-icon"
        icon="plus"
      />
    </fb-phone-header>

    <fb-desktop-header
      ref="desktop-header"
      :heading="heading"
      :sub-heading="subHeading"
      :left-button="headingLeftButton"
      :right-button="headingRightButton"
      :action-button="headingActionButton"
      @leftButtonClicked="$emit('headingLeftButtonClicked')"
      @rightButtonClicked="$emit('headingRightButtonClicked')"
      @actionButtonClicked="$emit('headingActionButtonClicked')"
      @mounted="$emit('mounted')"
    />

    <div class="fb-default-layout__sidebar">
      <div class="fb-default-layout__sidebar-header">
        <fb-logo :link="homeLink" />
      </div>

      <fb-navigation :items="menuItems" />

      <div
        v-if="hasProfile"
        class="fb-default-layout__sidebar-footer"
      >
        <fb-user-side-navigation
          :avatar="userAvatar"
          :name="userName"
          :email="userEmail"
          :version="appVersion"
          :items="userMenuItems"
        />
      </div>
    </div>

    <fb-phone-navigation
      :items="phoneMenuItems"
      :collapsed="mainMenuCollapsed"
      @collapse="$emit('collapseMenu')"
    />

    <div
      :style="`height: ${viewportHeight - contentHeightAdjust}px; margin-bottom: ${paddingBottom}px;`"
      class="fb-default-layout__content"
    >
      <slot name="content" />
    </div>

    <div
      ref="footer"
      class="fb-default-layout__footer"
    >
      <div class="fb-default-layout__footer-body">
        <small>&copy; 2017 <a
          v-if="authorWebsite !== null"
          :href="authorWebsite"
          target="_blank"
          rel="noreferrer"
        >
          {{ authorName }}</a>
        </small>
      </div>
    </div>

    <fb-bottom-navigation
      ref="bottom-navigation"
      :items="bottomMenuItems"
      :collapsed="bottomMenuCollapsed"
      @mounted="$emit('mounted')"
    />

    <slot name="other" />
  </div>
</template>

<script>
const FbLogo = () => import('@/node_modules/@fastybird-com/ui-theme/components/Layout/FbLogo')
const FbDesktopHeader = () => import('@/node_modules/@fastybird-com/ui-theme/components/Layout/FbDesktopHeader')
const FbPhoneHeader = () => import('@/node_modules/@fastybird-com/ui-theme/components/Layout/FbPhoneHeader')
const FbNavigation = () => import('@/node_modules/@fastybird-com/ui-theme/components/Layout/FbNavigation')
const FbPhoneNavigation = () => import('@/node_modules/@fastybird-com/ui-theme/components/Layout/FbPhoneNavigation')
const FbUserSideNavigation = () => import('@/node_modules/@fastybird-com/ui-theme/components/Layout/FbUserSideNavigation')
const FbBottomNavigation = () => import('@/node_modules/@fastybird-com/ui-theme/components/Layout/FbBottomNavigation')

export default {

  name: 'FbLayoutDefault',

  components: {
    FbLogo,
    FbDesktopHeader,
    FbPhoneHeader,
    FbNavigation,
    FbPhoneNavigation,
    FbUserSideNavigation,
    FbBottomNavigation,
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

    headingInfoText: {
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

    headingIcon: {
      type: String,
      default: null,
    },

    hasProfile: {
      type: Boolean,
      default: false,
    },

    userName: {
      type: String,
      default: null,
    },

    userEmail: {
      type: String,
      default: null,
    },

    userAvatar: {
      type: String,
      default: null,
    },

    menuItems: {
      type: Array,
      default: () => {
        return []
      },
    },

    phoneMenuItems: {
      type: Array,
      default: () => {
        return []
      },
    },

    userMenuItems: {
      type: Array,
      default: () => {
        return []
      },
    },

    bottomMenuItems: {
      type: Array,
      default: () => {
        return []
      },
    },

    headingTabs: {
      type: Array,
      default: () => {
        return []
      },
    },

    headingLeftButton: {
      type: Object,
      default: null,
      validator: (value) => {
        return !(
          !Object.prototype.hasOwnProperty.call(value, 'icon') ||
          !Object.prototype.hasOwnProperty.call(value, 'name')
        )
      },
    },

    headingRightButton: {
      type: Object,
      default: null,
      validator: (value) => {
        return !(
          !Object.prototype.hasOwnProperty.call(value, 'icon') ||
          !Object.prototype.hasOwnProperty.call(value, 'name')
        )
      },
    },

    headingActionButton: {
      type: Object,
      default: null,
      validator: (value) => {
        return !(
          !Object.prototype.hasOwnProperty.call(value, 'icon') ||
          !Object.prototype.hasOwnProperty.call(value, 'name')
        )
      },
    },

    mainMenuCollapsed: {
      type: Boolean,
      default: true,
    },

    bottomMenuCollapsed: {
      type: Boolean,
      default: false,
    },

    homeLink: {
      type: String,
      default: '/',
    },

    appVersion: {
      type: String,
      default: '0.0.0',
    },

    authorWebsite: {
      type: String,
      default: null,
    },

    authorName: {
      type: String,
      default: 'FastyBird s.r.o.',
    },

    contentHeightAdjust: {
      type: Number,
      required: true,
    },

    paddingTop: {
      type: Number,
      required: true,
    },

    paddingBottom: {
      type: Number,
      required: true,
    },

    viewportHeight: {
      type: Number,
      required: true,
    },

  },

  mounted() {
    this.$emit('mounted')
  },

  head() {
    return {
      htmlAttrs: {
        'data-layout': 'layout_default',
      },
    }
  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
