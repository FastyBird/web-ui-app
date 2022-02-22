<template>
  <div
    :data-type="type"
    class="fb-theme-ui-divider__container"
  >
    <div class="fb-theme-ui-divider__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue'

import { FbUiDividerVariantTypes } from '@/types'

export default defineComponent({

  name: 'FbUiDivider',

  props: {

    type: {
      type: String as PropType<FbUiDividerVariantTypes>,
      default: FbUiDividerVariantTypes.HORIZONTAL,
      validator: (value: FbUiDividerVariantTypes) => {
        // The value must match one of these strings
        return [
          FbUiDividerVariantTypes.HORIZONTAL,
          FbUiDividerVariantTypes.VERTICAL,
        ].includes(value)
      },
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
