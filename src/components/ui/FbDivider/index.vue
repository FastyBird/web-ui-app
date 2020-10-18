<template functional>
  <div
    class="fb-ui-divider__container"
    :data-type="props.type"
  >
    <div class="fb-ui-divider__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export enum FbUiDividerVariantTypes {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export default defineComponent({

  name: 'FbUiDivider',

  props: {

    type: {
      type: String,
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
