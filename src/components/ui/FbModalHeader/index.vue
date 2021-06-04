<template>
  <div
    :data-variant="variant"
    class="fb-ui-modal-header__container"
  >
    <div
      v-if="variant === modalVariantTypes.PHONE || variant === modalVariantTypes.TABLET"
      class="fb-ui-modal-header__buttons"
    >
      <div
        v-if="cancelBtnShow"
        class="fb-ui-modal-header__buttons-left-button"
      >
        <slot name="left-button">
          <fb-ui-button
            :variant="buttonVariantTypes.LINK_DEFAULT"
            :size="sizesTypes.EXTRA_SMALL"
            uppercase
            @click.prevent="$emit('cancel', $event)"
          >
            {{ cancelBtnText }}
          </fb-ui-button>
        </slot>
      </div>

      <div
        v-if="okBtnShow"
        class="fb-ui-modal-header__buttons-right-button"
      >
        <slot name="right-button">
          <fb-ui-button
            :variant="buttonVariantTypes.LINK_DEFAULT"
            :size="sizesTypes.EXTRA_SMALL"
            uppercase
            @click.prevent="$emit('submit', $event)"
          >
            {{ okBtnText }}
          </fb-ui-button>
        </slot>
      </div>
    </div>

    <button
      v-else
      type="button"
      class="fb-ui-modal-header__close"
      @click.prevent="$emit('close', $event)"
    >
      <span aria-hidden="true">×</span>
      <span class="sr-only">{{ closeBtnText }}</span>
    </button>

    <div class="fb-ui-modal-header__heading">
      <slot name="icon" />

      <h4>
        <slot name="heading" />
      </h4>

      <small v-if="slotExists('description')">
        <slot name="description" />
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbUiModalVariantTypes, FbUiButtonVariantTypes, FbSizeTypes } from '@/types/web-ui-theme'

export default defineComponent({

  name: 'FbUiModalHeader',

  props: {

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

    okBtnText: {
      type: String,
      default: 'Ok',
    },

    okBtnShow: {
      type: Boolean,
      default: true,
    },

    cancelBtnText: {
      type: String,
      default: 'Cancel',
    },

    cancelBtnShow: {
      type: Boolean,
      default: true,
    },

    closeBtnText: {
      type: String,
      default: 'Close',
    },

  },

  setup() {
    return {
      modalVariantTypes: FbUiModalVariantTypes,
      sizesTypes: FbSizeTypes,
      buttonVariantTypes: FbUiButtonVariantTypes,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
