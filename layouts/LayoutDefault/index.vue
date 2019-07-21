<template web>
  <div class="fb-default-layout__container">
    <fb-phone-header
      :profile="account.username !== null"
      :avatar="_.get(this, '$avatar', null)"
      :user-name="account.username"
      :user-email="account.email"
      :user-menu-items="_.get(this, '$userMenuItems', [])"
    />

    <fb-desktop-header />

    <div class="fb-default-layout__body">
      <div class="fb-default-layout__sidebar-container">
        <div class="fb-default-layout__sidebar-backdrop" />

        <div class="fb-default-layout__sidebar-header">
          <fb-logo :link="_.get(this, '$coreLinks.home', [])" />
        </div>

        <fb-navigation :items="_.get(this, '$menuItems', [])" />

        <div
          v-if="account.username !== null"
          class="fb-default-layout__sidebar-footer"
        >
          <fb-user-side-navigation
            :avatar="_.get(this, '$avatar', null)"
            :name="account.username"
            :email="account.email"
            :version="_.get(this, '$appVersion', '0.0.0')"
            :items="_.get(this, '$userMenuItems', [])"
          />
        </div>
      </div>

      <div
        :style="minimalContentHeight !== null ? `height: ${minimalContentHeight}px` : ''"
        class="fb-default-layout__content-container"
      >
        <div
          :style="minimalContentHeight !== null ? `height: ${minimalContentHeight}px` : ''"
          class="fb-default-layout__content-body"
        >
          <transition-page>
            <slot />
          </transition-page>
        </div>
      </div>

      <div class="fb-default-layout__footer-container">
        <div class="fb-default-layout__footer-body">
          <small>&copy; 2017 <a
            v-if="_.get(this, '$authorWebsite', null) !== null"
            :href="_.get(this, '$authorWebsite', null)"
            target="_blank"
            rel="noreferrer"
          >{{ _.get(this, '$authorName', null) }}</a></small>
        </div>
      </div>
    </div>

    <fb-bottom-navigation :items="_.get(this, '$bottomMenu', [])" />

    <fb-page-loading v-if="loadingAnimation" />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  const FbLogo = () => import('./../../components/Layout/FbLogo')
  const FbDesktopHeader = () => import('./../../components/Layout/FbDesktopHeader')
  const FbPhoneHeader = () => import('./../../components/Layout/FbPhoneHeader')
  const FbNavigation = () => import('./../../components/Layout/FbNavigation')
  const FbUserSideNavigation = () => import('./../../components/Layout/FbUserSideNavigation')
  const FbBottomNavigation = () => import('./../../components/Layout/FbBottomNavigation')

  const TransitionPage = () => import('../../transitions/TransitionPage')

  export default {

    name: 'LayoutDefault',

    components: {
      FbLogo,
      FbDesktopHeader,
      FbPhoneHeader,
      FbNavigation,
      FbUserSideNavigation,
      FbBottomNavigation,

      TransitionPage,
    },

    data() {
      return {
        viewportHeight: null,
        minimalContentHeight: null,
        prevHeight: 0,
        loadingAnimation: false,
      }
    },

    computed: {

      ...mapState({
        windowSize: state => state.theme.windowSize,
        account: state => state.theme.account,
      }),

    },

    watch: {

      windowSize() {
        this._calculateWindowHeight()
      },

    },

    created() {
      const headElements = document.getElementsByTagName('html')

      if (headElements.length > 0) {
        headElements[0].setAttribute('data-layout', 'layout_default')
      }

      this._calculateWindowHeight()

      this.$bus.$on('wait-page_reloading', (status) => {
        this.loadingAnimation = status
      })
    },

    beforeMount() {
      this.windowsResizeHandler()

      window.addEventListener('visibilitychange', this.windowsResizeHandler)
      window.addEventListener('DOMContentLoaded', this.windowsResizeHandler)
      window.addEventListener('resize', this.windowsResizeHandler)
    },

    beforeDestroy() {
      window.removeEventListener('visibilitychange', this.windowsResizeHandler)
      window.removeEventListener('DOMContentLoaded', this.windowsResizeHandler)
      window.removeEventListener('resize', this.windowsResizeHandler)

      this.$bus.$off('wait-page_reloading')
    },

    methods: {

      ...mapActions('theme', [
        'setWindowSize',
      ]),

      /**
       * Window resize handler
       */
      windowsResizeHandler() {
        if (!document.hidden) {
          if (matchMedia('(max-width: 575px)').matches) {
            this.setWindowSize({ size: 'xs' })
          } else if (matchMedia('(max-width: 767px)').matches) {
            this.setWindowSize({ size: 'sm' })
          } else if (matchMedia('(max-width: 991px)').matches) {
            this.setWindowSize({ size: 'md' })
          } else if (matchMedia('(max-width: 1199px)').matches) {
            this.setWindowSize({ size: 'lg' })
          } else {
            this.setWindowSize({ size: 'xl' })
          }
        }

        this._calculateWindowHeight()
      },

      /**
       * Calculate viewport size after window resizing
       *
       * @private
       */
      _calculateWindowHeight() {
        this.viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

        document.body.style.height = `${this.viewportHeight - 55}px`
        this.minimalContentHeight = this.viewportHeight - 55
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import './index.scss';
</style>
