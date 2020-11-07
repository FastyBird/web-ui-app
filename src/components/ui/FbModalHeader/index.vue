<template>
  <div
    :variant="variant"
    class="fb-ui-modal-header__container"
  >
    <div
      v-if="variant === variantsTypes.PHONE"
      class="fb-ui-modal-header__buttons"
    >
      <div
        v-if="closeBtnShow"
        class="fb-ui-modal-header__buttons-left-button"
      >
        <slot name="left-button">
          <fb-ui-button
            :variant="buttonVariantsTypes.LINK"
            :size="sizesTypes.EXTRA_SMALL"
            @click.prevent="$emit('close', $event)"
          >
            {{ closeBtnText }}
          </fb-ui-button>
        </slot>
      </div>

      <div
        v-if="okBtnShow"
        class="fb-ui-modal-header__buttons-right-button"
      >
        <slot name="right-button">
          <fb-ui-button
            v-else
            :variant="buttonVariantsTypes.LINK"
            :size="sizesTypes.EXTRA_SMALL"
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

import { FbUiModalVariantType, FbUiButtonVariantTypes, FbSizeTypes } from '@/components/types'

export default defineComponent({

  name: 'FbUiModalHeader',

  props: {

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

    okBtnText: {
      type: String,
      default: 'Ok',
    },

    okBtnShow: {
      type: Boolean,
      default: true,
    },

    closeBtnText: {
      type: String,
      default: 'Close',
    },

    closeBtnShow: {
      type: Boolean,
      default: true,
    },

  },

  setup() {
    return {
      variantsTypes: FbUiModalVariantType,
      sizesTypes: FbSizeTypes,
      buttonVariantsTypes: FbUiButtonVariantTypes,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
