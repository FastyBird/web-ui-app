<template functional>
  <span
    :data-variant="props.variant"
    :data-size="props.size"
    :class="[data.class, data.staticClass, 'fb-ui-spinner__container']"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbSizeTypes, FbUiSpinnerVariantTypes } from '@/types'

export default defineComponent({

  name: 'FbUiSpinner',

  props: {

    variant: {
      type: String as PropType<FbUiSpinnerVariantTypes>,
      default: FbUiSpinnerVariantTypes.PRIMARY,
      validator: (value: FbUiSpinnerVariantTypes) => {
        // The value must match one of these strings
        return [
          FbUiSpinnerVariantTypes.DEFAULT,
          FbUiSpinnerVariantTypes.PRIMARY,
          FbUiSpinnerVariantTypes.SUCCESS,
          FbUiSpinnerVariantTypes.DANGER,
          FbUiSpinnerVariantTypes.WARNING,
          FbUiSpinnerVariantTypes.INFO,
        ].includes(value)
      },
    },

    size: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.MEDIUM,
      validator: (value: FbSizeTypes) => {
        // The value must match one of these strings
        return [
          FbSizeTypes.SMALL,
          FbSizeTypes.MEDIUM,
          FbSizeTypes.LARGE,
        ].includes(value)
      },
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
