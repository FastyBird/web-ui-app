<template>
  <div class="fb-sign-header__container">
    <nuxt-link
      :to="_.get(this, '$coreLinks.signInLnk', '/sing-in')"
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

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
