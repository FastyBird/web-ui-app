<template>
  <small class="fb-md-field-error__container">
    {{ error }}
  </small>
</template>

<script>
  export default {

    name: 'FbMdFormError',

    props: {

      error: {
        type: String,
        required: true,
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
