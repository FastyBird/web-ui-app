<template>
  <div
    role="group"
    aria-label="radiobutton-group"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbFormRadioButtonsGroup',

  props: {

    value: {
      type: [String, Number, Boolean],
      default: null,
    },

  },

})
</script>
