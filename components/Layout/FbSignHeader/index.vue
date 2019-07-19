<template web>
  <div class="fb-sign-header__container">
    <router-link
      :to="_.get(this, '$coreLinks.signInLnk', '/')"
      class="fb-sign-header__brand"
    >
      <logo />
    </router-link>
  </div>
</template>

<script>
  import Logo from '../../../assets/images/fastybird_bird.svg'

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
