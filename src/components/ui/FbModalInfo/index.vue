<template>
  <fb-ui-modal-window
    :size="size"
    :variant="variant"
    :show-header="slotExists('header')"
    :transparent-bg="transparentBg"
    :enable-closing="enableClosing"
    :show-footer="enableClosing"
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

    <div
      slot="modal-footer"
      class="fb-ui-modal-info__buttons"
    >
      <fb-ui-button
        v-if="enableClosing"
        uppercase
        variant="link"
        size="lg"
        name="close"
        tabindex="2"
        @click.prevent="$emit('close', $event)"
      >
        {{ closeBtnLabel }}
      </fb-ui-button>
    </div>
  </fb-ui-modal-window>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import {FbUiModalVariantType, FbSizeTypes} from "@/components/types";

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
      type: String as PropType<FbUiModalVariantType>,
      default: FbUiModalVariantType.DEFAULT,
      validator: (value: FbUiModalVariantType) => {
        // The value must match one of these strings
        return [
          FbUiModalVariantType.DEFAULT,
          FbUiModalVariantType.PHONE,
        ].includes(value)
      },
    },

    enableClosing: {
      type: Boolean,
      required: false,
      default: true,
    },

    closeBtnLabel: {
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
