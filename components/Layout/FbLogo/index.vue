<template>
  <nuxt-link
    :to="link"
    class="fb-logo"
    alt="Home"
  >
    <fb-logo-image />
  </nuxt-link>
</template>

<script>
  import FbLogoImage from '../../../assets/images/fastybird_row.svg?inline'

  export default {

    name: 'FbLogo',

    components: {
      FbLogoImage,
    },

    props: {

      link: {
        type: String,
        required: true,
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
