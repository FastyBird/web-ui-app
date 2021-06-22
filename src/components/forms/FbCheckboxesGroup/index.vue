<template>
  <div
    role="group"
    aria-label="checkbox-group"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbFormCheckboxesGroup',

  props: {

    value: {
      type: Array as PropType<(string | number)[]>,
      default: () => {
        return []
      },
    },

  },

})
</script>
