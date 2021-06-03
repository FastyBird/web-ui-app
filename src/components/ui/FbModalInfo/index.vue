<template>
  <fb-ui-modal-window
    :size="size"
    :variant="variant"
    :show-header="slotExists('header')"
    :transparent-bg="transparentBg"
    :enable-closing="enableClosing"
    :show-footer="enableClosing"
    :ok-btn-show="false"
    :close-btn-text="closeBtnText"
    @close="$emit('close', $event)"
  >
    <template
      v-if="slotExists('header')"
      slot="modal-title"
    >
      <slot name="icon" />
      <slot name="header" />
    </template>

    <template slot="modal-body">
      <slot name="info" />
    </template>
  </fb-ui-modal-window>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import {FbUiModalVariantTypes, FbSizeTypes} from "~/web-ui-theme";

export default defineComponent({

  name: 'FbUiModalInfo',

  props: {

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

    variant: {
      type: String as PropType<FbUiModalVariantTypes>,
      default: FbUiModalVariantTypes.DEFAULT,
      validator: (value: FbUiModalVariantTypes) => {
        // The value must match one of these strings
        return [
          FbUiModalVariantTypes.DEFAULT,
          FbUiModalVariantTypes.PHONE,
          FbUiModalVariantTypes.TABLET,
        ].includes(value)
      },
    },

    enableClosing: {
      type: Boolean,
      required: false,
      default: true,
    },

    closeBtnText: {
      type: String,
      required: false,
      default: 'Close',
    },

    transparentBg: {
      type: Boolean,
      default: false,
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
