<template>
  <div class="fb-sign-header__container">
    <nuxt-link
      :to="signInLink"
      class="fb-sign-header__brand"
    >
      <logo />
    </nuxt-link>
  </div>
</template>

<script>
  import Logo from '../../../assets/images/fastybird_bird.svg?inline'

  export default {

    name: 'FbSignHeader',

    components: {
      Logo,
    },

    props: {

      signInLink: {
        type: String,
        default: '/sing-in',
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
