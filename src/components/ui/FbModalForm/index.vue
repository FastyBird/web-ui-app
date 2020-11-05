<template>
  <fb-ui-modal-window
    :size="size"
    :variant="variant"
    :transparent-bg="transparentBg"
    @close="$emit('close', $event)"
  >
    <template
      v-if="slotExists('modal-header')"
      slot="modal-header"
    >
      <slot name="modal-header" />
    </template>

    <template
      v-else
      slot="modal-title"
    >
      <slot
        v-if="variant !== variantsTypes.PHONE"
        name="icon"
      />
      <slot name="header" />
    </template>

    <form
      slot="modal-body"
      class="fb-ui-modal-form__form"
      @submit.prevent="$emit('submit', $event)"
    >
      <slot name="form" />

      <div
        v-if="state === resultTypes.WORKING"
        class="fb-ui-modal-form__result"
      >
        <fb-ui-spinner />
      </div>

      <div
        v-if="state === resultTypes.OK"
        class="fb-ui-modal-form__result"
      >
        <fb-ui-result-ok />
      </div>

      <div
        v-if="state === resultTypes.ERROR"
        class="fb-ui-modal-form__result"
      >
        <fb-ui-result-err />
      </div>
    </form>

    <template
      v-if="slotExists('modal-footer')"
      slot="modal-footer"
    >
      <slot name="modal-footer" />
    </template>

    <slot name="cancel-button">
      <fb-ui-button
        slot="left-button"
        :disabled="lockButtons"
        :tabindex="(initialTabindex + 2)"
        :size="variant === variantsTypes.PHONE ? sizeTypes.EXTRA_SMALL : sizeTypes.LARGE"
        :variant="buttonVariantsTypes.LINK"
        uppercase
        name="close"
        @click.prevent="$emit('cancel', $event)"
      >
        {{ cancelBtnLabel }}
      </fb-ui-button>
    </slot>

    <slot name="submit-button">
      <fb-ui-button
        slot="right-button"
        :disabled="lockButtons || lockSubmitButton"
        :tabindex="(initialTabindex + 1)"
        :size="variant === variantsTypes.PHONE ? sizeTypes.EXTRA_SMALL : sizeTypes.LARGE"
        :variant="variant === variantsTypes.PHONE ? buttonVariantsTypes.LINK : buttonVariantsTypes.OUTLINE_PRIMARY"
        uppercase
        name="save"
        @click.prevent="$emit('submit', $event)"
      >
        {{ submitBtnLabel }}
      </fb-ui-button>
    </slot>
  </fb-ui-modal-window>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  SetupContext,
} from '@vue/composition-api'

import get from 'lodash/get'

import {FbFormResultType, FbUiModalVariantType, FbSizeTypes, FbUiButtonVariantTypes} from "@/components/types";

interface FbUiModalFormPropsInterface {
  size: FbSizeTypes
  submitBtnLabel: string
  cancelBtnLabel: string
  lockButtons: boolean
  lockSubmitButton: boolean
  transparentBg: boolean
  resultIsWorking: boolean
  resultIsOk: boolean
  resultIsErr: boolean
}

export default defineComponent({

  name: 'FbUiModalForm',

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

    submitBtnLabel: {
      type: String,
      required: false,
      default: 'Save',
    },

    cancelBtnLabel: {
      type: String,
      required: false,
      default: 'Close',
    },

    lockButtons: {
      type: Boolean,
      required: false,
      default: false,
    },

    lockSubmitButton: {
      type: Boolean,
      required: false,
      default: false,
    },

    transparentBg: {
      type: Boolean,
      default: false,
    },

    state: {
      type: String as PropType<FbFormResultType>,
      default: FbFormResultType.NONE,
    },

  },

  setup(_props: FbUiModalFormPropsInterface, context: SetupContext) {
    const initialTabindex = ref<number>(get(context, 'slots.form', []).length + 1)

    return {
      initialTabindex,
      resultTypes: FbFormResultType,
      variantsTypes: FbUiModalVariantType,
      sizeTypes: FbSizeTypes,
      buttonVariantsTypes: FbUiButtonVariantTypes,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
