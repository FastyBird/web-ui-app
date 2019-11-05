<template>
  <div class="fb-default-layout__container">
    <fb-phone-header
      :has-profile="hasProfile"
      :avatar="userAvatar"
      :user-name="userName"
      :user-email="userEmail"
      :user-menu-items="userMenuItems"
      :home-link="homeLink"
    >
      <font-awesome-icon
        slot="add-icon"
        icon="plus"
      />
    </fb-phone-header>

    <fb-desktop-header />

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

    <div class="fb-default-layout__content">
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

    <fb-bottom-navigation :items="bottomMenuItems" />

    <slot name="other" />

    <fb-page-loading v-if="loadingOverlay" />
  </div>
</template>

<script>
  const FbLogo = () => import('@/node_modules/@fastybird-com/theme/components/Layout/FbLogo')
  const FbDesktopHeader = () => import('@/node_modules/@fastybird-com/theme/components/Layout/FbDesktopHeader')
  const FbPhoneHeader = () => import('@/node_modules/@fastybird-com/theme/components/Layout/FbPhoneHeader')
  const FbNavigation = () => import('@/node_modules/@fastybird-com/theme/components/Layout/FbNavigation')
  const FbUserSideNavigation = () => import('@/node_modules/@fastybird-com/theme/components/Layout/FbUserSideNavigation')
  const FbBottomNavigation = () => import('@/node_modules/@fastybird-com/theme/components/Layout/FbBottomNavigation')

  export default {

    name: 'FbLayoutDefault',

    components: {
      FbLogo,
      FbDesktopHeader,
      FbPhoneHeader,
      FbNavigation,
      FbUserSideNavigation,
      FbBottomNavigation,
    },

    props: {

      loadingOverlay: {
        type: Boolean,
        default: false,
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

    },

    mounted() {
      this.windowResizeHandler()

      window.addEventListener('visibilitychange', this.windowResizeHandler)
      window.addEventListener('DOMContentLoaded', this.windowResizeHandler)
      window.addEventListener('resize', this.windowResizeHandler)

      this.$store.watch(
        this.$store.getters['theme/getWindowHeightAdjust'],
        (adjust) => {
          const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

          document.body.style['height'] = `${viewportHeight - adjust}px`
        }, {
          immediate: true,
        },
      )

      this.$store.watch(
        this.$store.getters['theme/getBodyTopMarginAdjust'],
        (margin) => {
          document.body.style['margin-top'] = `${margin}px`
        }, {
          immediate: true,
        },
      )

      this.$store.watch(
        this.$store.getters['theme/getBodyBottomMarginAdjust'],
        (margin) => {
          document.body.style['margin-bottom'] = `${margin}px`
        }, {
          immediate: true,
        },
      )
    },

    beforeDestroy() {
      window.removeEventListener('visibilitychange', this.windowResizeHandler)
      window.removeEventListener('DOMContentLoaded', this.windowResizeHandler)
      window.removeEventListener('resize', this.windowResizeHandler)
    },

    methods: {

      /**
       * Window resize handler
       */
      windowResizeHandler() {
        if (!document.hidden) {
          const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

          if (matchMedia('(max-width: 575px)').matches) {
            this.$store.dispatch('theme/setWindowSize', {
              size: 'xs'
            }, {
              root: true,
            })
          } else if (matchMedia('(max-width: 767px)').matches) {
            this.$store.dispatch('theme/setWindowSize', {
              size: 'sm'
            }, {
              root: true,
            })
          } else if (matchMedia('(max-width: 991px)').matches) {
            this.$store.dispatch('theme/setWindowSize', {
              size: 'md'
            }, {
              root: true,
            })
          } else if (matchMedia('(max-width: 1199px)').matches) {
            this.$store.dispatch('theme/setWindowSize', {
              size: 'lg'
            }, {
              root: true,
            })
          } else {
            this.$store.dispatch('theme/setWindowSize', {
              size: 'xl'
            }, {
              root: true,
            })
          }

          document.body.style['height'] = `${viewportHeight - this.$store.getters['theme/getWindowHeightAdjust']()}px`
        }

        if (this._.get(this.$refs, 'footer')) {
          const elementHeight = this._.get(this.$refs, 'footer.clientHeight')

          this.$store.dispatch('theme/setWindowHeight', {
            key: 'footer',
            adjust: elementHeight,
          }, {
            root: true,
          })

          this.$store.dispatch('theme/setBodyMargin', {
            key: 'footer',
            position: 'bottom',
            margin: elementHeight,
          }, {
            root: true,
          })
        }
      },

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
