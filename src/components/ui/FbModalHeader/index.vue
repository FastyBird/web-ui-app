<template>
  <div class="fb-ui-modal-header__container">
    <div
      v-if="variant === variantsTypes.PHONE"
      class="fb-ui-modal-header__header-phone"
    >
      <div class="fb-ui-modal-header__header-phone-left-button">
        <template v-if="slotExists('left-button')">
          <slot name="left-button" />
        </template>

        <fb-ui-button
          v-else
          variant="link"
          size="xs"
          @click.prevent="$emit('close', $event)"
        >
          {{ cancelText }}
        </fb-ui-button>
      </div>

      <div class="fb-ui-modal-header__header-phone-right-button">
        <template v-if="slotExists('right-button')">
          <slot name="right-button" />
        </template>

        <fb-ui-button
          v-else
          variant="link"
          size="xs"
          @click.prevent="$emit('submit', $event)"
        >
          {{ okText }}
        </fb-ui-button>
      </div>
    </div>

    <button
      v-else
      type="button"
      class="fb-ui-modal-header__close"
      @click.prevent="$emit('close', $event)"
    >
      <span aria-hidden="true">×</span>
      <span class="sr-only">{{ closeBtnLabel }}</span>
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

import {FbUiModalVariantType} from '@/components/types'

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

    okText: {
      type: String,
      default: 'Ok',
    },

    cancelText: {
      type: String,
      default: 'Cancel',
    },

    closeBtnLabel: {
      type: String,
      required: false,
      default: 'Close',
    },

  },

  setup() {
    return {
      variantsTypes: FbUiModalVariantType
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
