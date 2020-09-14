<template>
  <p class="fb-field-error__container">
    <small>
      {{ error }}
    </small>
  </p>
</template>

<script>
export default {

  name: 'FbFormError',

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
