<template
  functional
  web
>
  <div class="fb-loading-box__container">
    <div class="fb-loading-box__spinner" />
    <p>
      {{ props.text }}
    </p>
  </div>
</template>

<script>
  export default {

    name: 'FbLoadingBox',

    props: {

      text: {
        type: String,
        required: true,
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
