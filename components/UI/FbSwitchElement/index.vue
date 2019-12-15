<template functional>
  <label
    :data-variant="props.variant"
    class="fb-switch-element__container"
  >
    <input
      :checked="props.status"
      :disabled="props.disabled"
      type="checkbox"
      @change.prevent="listeners['change']()"
    >
    <span class="fb-switch-element__track" />
    <span class="fb-switch-element__thumb" />
  </label>
</template>

<script>
  export default {

    name: 'SwitchElement',

    props: {

      status: {
        type: Boolean,
        default: false,
      },

      disabled: {
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

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
