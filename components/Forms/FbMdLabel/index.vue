<template>
  <label
    v-if="id !== null && label !== null"
    :for="id"
    :class="['fb-md-label__container', {'is-focused': isFocused}, {'has-value': hasValue}, {'has-error': hasError}]"
  >
    {{ label }}
  </label>
</template>

<script>
  export default {

    name: 'FbMdFormLabel',

    props: {

      id: {
        type: String,
        default: null,
      },

      label: {
        type: String,
        default: null,
      },

      isFocused: {
        type: Boolean,
        default: false,
      },

      hasValue: {
        type: Boolean,
        default: false,
      },

      hasError: {
        type: Boolean,
        default: false,
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
