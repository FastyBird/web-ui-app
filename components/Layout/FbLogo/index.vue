<template web>
  <router-link
    :to="link"
    class="fb-logo"
    alt="Home"
  >
    <fb-logo-image />
  </router-link>
</template>

<script>
  import FbLogoImage from '../../../assets/images/fastybird_row.svg'

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
