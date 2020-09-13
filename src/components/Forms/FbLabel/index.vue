<template>
  <label
    v-if="id !== null && label !== null && orientation !== 'inline'"
    :for="id"
    :class="['fb-label__container', {'fb-label__container-required': required}]"
    :data-orientation="orientation"
    :data-size="size"
  >
    {{ label }}
  </label>
</template>

<script>
export default {

  name: 'FbFormLabel',

  props: {

    id: {
      type: String,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    orientation: {
      type: String,
      default: 'vertical',
      validator: (value) => {
        // The value must match one of these strings
        return ['vertical', 'horizontal', 'inline'].indexOf(value) !== -1
      },
    },

    size: {
      type: String,
      default: null,
      validator: (value) => {
        // The value must match one of these strings
        return ['lg', 'sm'].indexOf(value) !== -1
      },
    },

    required: {
      type: Boolean,
      default: false,
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
