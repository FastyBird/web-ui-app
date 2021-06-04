<template>
  <div
    :data-variant="variant"
    class="fb-ui-alert__container"
    role="alert"
  >
    <div
      v-if="slotExists('icon')"
      class="fb-ui-alert__icon"
    >
      <div class="fb-ui-alert__icon-inner">
        <slot name="icon" />
      </div>

      <div class="fb-ui-alert__content">
        <slot />
      </div>
    </div>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbUiAlertVariantTypes } from '@/types'

export default defineComponent({

  name: 'FbUiAlert',

  props: {

    variant: {
      type: String as PropType<FbUiAlertVariantTypes>,
      default: FbUiAlertVariantTypes.DEFAULT,
      validator: (value: FbUiAlertVariantTypes) => {
        // The value must match one of these strings
        return [
          FbUiAlertVariantTypes.DEFAULT,
          FbUiAlertVariantTypes.PRIMARY,
          FbUiAlertVariantTypes.SUCCESS,
          FbUiAlertVariantTypes.DANGER,
          FbUiAlertVariantTypes.WARNING,
          FbUiAlertVariantTypes.INFO,
        ].includes(value)
      },
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
