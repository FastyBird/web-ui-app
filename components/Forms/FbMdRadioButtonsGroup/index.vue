<template web>
  <div
    role="group"
    aria-label="radiobutton-group"
  >
    <slot />
  </div>
</template>

<script>
  export default {

    name: 'FbMdFormRadioButtonsGroup',

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
