<template functional>
  <label
    :data-variant="props.variant"
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

import { FbUiSwitchElementVariantTypes } from '@/components/types'

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
      type: String as PropType<FbUiSwitchElementVariantTypes>,
      default: FbUiSwitchElementVariantTypes.DEFAULT,
      validator: (value: FbUiSwitchElementVariantTypes) => {
        // The value must match one of these strings
        return [
          FbUiSwitchElementVariantTypes.DEFAULT,
          FbUiSwitchElementVariantTypes.PRIMARY,
          FbUiSwitchElementVariantTypes.SUCCESS,
          FbUiSwitchElementVariantTypes.DANGER,
          FbUiSwitchElementVariantTypes.WARNING,
          FbUiSwitchElementVariantTypes.INFO,
        ].includes(value)
      },
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
