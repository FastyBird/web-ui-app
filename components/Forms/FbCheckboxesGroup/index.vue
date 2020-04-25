<template>
  <div
    role="group"
    aria-label="checkbox-group"
  >
    <slot />
  </div>
</template>

<script>
export default {

  name: 'FbFormCheckboxesGroup',

  props: {

    value: {
      type: Array,
      default: () => {
        return []
      },
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

}
</script>
