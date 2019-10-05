<template>
  <transition name="bounce">
    <div class="fb-page-loading__container">
      <div class="fb-page-loading__box">
        <div class="d-b text-center">
          <logo />
        </div>
        <div class="fb-page-loading__spinner" />
      </div>
    </div>
  </transition>
</template>

<script>
  import Logo from '../../../assets/images/fastybird_signin.svg?inline'

  export default {

    name: 'FbPageLoading',

    components: {
      Logo,
    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>

<style rel="stylesheet/scss" lang="scss">
  .bounce-enter-active {
    animation: bounce-in .25s;
  }

  .bounce-leave-active {
    animation: bounce-in .25s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
