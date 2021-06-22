<template functional>
  <label
    :data-variant="props.variant"
    :data-size="props.size"
    :class="[data.class, data.staticClass, 'fb-ui-switch-element__container']"
  >
    <input
      :checked="props.status"
      :disabled="props.disabled"
      type="checkbox"
      @change.prevent="listeners['change']()"
    >
    <span class="fb-ui-switch-element__track" />
    <span class="fb-ui-switch-element__thumb" />
  </label>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbSizeTypes, FbUiVariantTypes } from '@/types'

export default defineComponent({

  name: 'FbUiSwitchElement',

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
      type: String as PropType<FbUiVariantTypes>,
      default: FbUiVariantTypes.DEFAULT,
      validator: (value: FbUiVariantTypes) => {
        // The value must match one of these strings
        return [
          FbUiVariantTypes.DEFAULT,
          FbUiVariantTypes.PRIMARY,
          FbUiVariantTypes.SUCCESS,
          FbUiVariantTypes.DANGER,
          FbUiVariantTypes.WARNING,
          FbUiVariantTypes.INFO,
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
