<template>
  <div
    :class="groupClass"
    role="group"
    aria-label="radiobutton-group"
  >
    <slot />
  </div>
</template>

<script>
export default {

  name: 'FbFormRadioButtonsGroup',

  props: {

    value: {
      type: [String, Number, Boolean],
      default: null,
    },

    button: {
      type: Boolean,
      default: false,
    },

    variant: {
      type: String,
      default: 'default',
      validator: (value) => {
        // The value must match one of these strings
        return [
          'default', 'primary', 'success', 'danger', 'warning', 'info',
        ].indexOf(value) !== -1
      },
    },

    size: {
      type: String,
      default: null,
      validator: (value) => {
        // The value must match one of these strings
        return ['lg', 'sm', 'xs'].indexOf(value) !== -1
      },
    },

    pill: {
      type: Boolean,
      default: false,
    },

    hasError: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
      default: null,
    },

  },

  computed: {

    groupClass() {
      if (this.button) {
        return 'fb-radio-group__btn-container'
      }

      return null
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
