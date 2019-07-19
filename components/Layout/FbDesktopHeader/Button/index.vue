<template
  functional
  web
>
  <button
    role="button"
    class="fb-desktop-header-button__button"
    @click.prevent="listeners['click']()"
  >
    <font-awesome-icon :icon="props.icon" />
  </button>
</template>

<script>
  export default {

    name: 'FbDesktopHeaderButton',

    props: {

      icon: {
        type: String,
        required: true,
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import './index.scss';
</style>
