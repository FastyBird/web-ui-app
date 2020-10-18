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

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import {
  FbFormOrientationTypes,
  FbSizeTypes,
} from '@/components/types'

export default defineComponent({

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
      type: String as PropType<FbFormOrientationTypes>,
      default: FbFormOrientationTypes.VERTICAL,
      validator: (value: FbFormOrientationTypes) => {
        // The value must match one of these strings
        return [
          FbFormOrientationTypes.VERTICAL,
          FbFormOrientationTypes.HORIZONTAL,
          FbFormOrientationTypes.INLINE,
        ].includes(value)
      },
    },

    size: {
      type: String,
      default: FbSizeTypes.MEDIUM,
      validator: (value: FbSizeTypes) => {
        // The value must match one of these strings
        return [
          FbSizeTypes.LARGE,
          FbSizeTypes.MEDIUM,
          FbSizeTypes.SMALL,
        ].includes(value)
      },
    },

    required: {
      type: Boolean,
      default: false,
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
