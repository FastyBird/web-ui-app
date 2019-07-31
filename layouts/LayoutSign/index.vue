<template>
  <div class="fb-sign-layout__container">
    <div class="fb-sign-layout__box">
      <fb-sign-header />

      <transition-page>
        <slot />
      </transition-page>
    </div>

    <fb-sign-footer />

    <fb-page-loading v-if="loadingAnimation" />
  </div>
</template>

<script>
  const FbSignHeader = () => import('../../components/Layout/FbSignHeader')
  const FbSignFooter = () => import('../../components/Layout/FbSignFooter')

  import TransitionPage from '../../transitions/TransitionPage'

  export default {

    name: 'LayoutSign',

    components: {
      FbSignHeader,
      FbSignFooter,

      TransitionPage,
    },

    data() {
      return {
        loadingAnimation: false,
      }
    },

    created() {
      const headElements = document.getElementsByTagName('html')

      if (headElements.length > 0) {
        headElements[0].setAttribute('data-layout', 'layout_sign')
      }

      this.$bus.$on('wait-sign_in', (status) => {
        this.loadingAnimation = status
      })

      this.$bus.$emit('wait-page_reloading', false)
    },

    beforeDestroy() {
      this.$bus.$off('wait-sign_in')
    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import './index.scss';
</style>
