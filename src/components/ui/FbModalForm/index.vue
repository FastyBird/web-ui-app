<template>
  <fb-ui-modal-window
    :size="size"
    :variant="variant"
    :transparent-bg="transparentBg"
    :ok-btn-show="submitBtnShow"
    :close-btn-show="cancelBtnShow"
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
        v-if="variant !== modalVariantTypes.PHONE && variant !== modalVariantTypes.TABLET"
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
        v-if="cancelBtnShow"
        slot="close-button"
        :disabled="lockButtons"
        :tabindex="(initialTabindex + 2)"
        :size="variant === modalVariantTypes.PHONE || variant === modalVariantTypes.TABLET ? sizeTypes.EXTRA_SMALL : sizeTypes.LARGE"
        :variant="buttonVariantTypes.LINK_DEFAULT"
        uppercase
        name="close"
        @click.prevent="$emit('cancel', $event)"
      >
        {{ cancelBtnText }}
      </fb-ui-button>
    </slot>

    <slot name="submit-button">
      <fb-ui-button
        v-if="submitBtnShow"
        slot="ok-button"
        :disabled="lockButtons || lockSubmitButton"
        :tabindex="(initialTabindex + 1)"
        :size="variant === modalVariantTypes.PHONE || variant === modalVariantTypes.TABLET ? sizeTypes.EXTRA_SMALL : sizeTypes.LARGE"
        :variant="variant === modalVariantTypes.PHONE || variant === modalVariantTypes.TABLET ? buttonVariantTypes.LINK_DEFAULT : buttonVariantTypes.OUTLINE_PRIMARY"
        uppercase
        name="save"
        @click.prevent="$emit('submit', $event)"
      >
        {{ submitBtnText }}
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

import {FbFormResultTypes, FbUiModalVariantTypes, FbSizeTypes, FbUiButtonVariantTypes} from "@/components/types";

interface FbUiModalFormPropsInterface {
  size: FbSizeTypes
  variant: FbUiModalVariantTypes
  submitBtnText: string
  submitBtnShow: boolean
  cancelBtnText: string
  cancelBtnShow: boolean
  lockButtons: boolean
  lockSubmitButton: boolean
  transparentBg: boolean
  state: FbFormResultTypes
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

    submitBtnText: {
      type: String,
      default: 'Save',
    },

    submitBtnShow: {
      type: Boolean,
      default: true,
    },

    cancelBtnText: {
      type: String,
      default: 'Close',
    },

    cancelBtnShow: {
      type: Boolean,
      default: true,
    },

    lockButtons: {
      type: Boolean,
      default: false,
    },

    lockSubmitButton: {
      type: Boolean,
      default: false,
    },

    transparentBg: {
      type: Boolean,
      default: false,
    },

    state: {
      type: String as PropType<FbFormResultTypes>,
      default: FbFormResultTypes.NONE,
    },

  },

  setup(_props: FbUiModalFormPropsInterface, context: SetupContext) {
    const initialTabindex = ref<number>(get(context, 'slots.form', []).length + 1)

    return {
      initialTabindex,
      resultTypes: FbFormResultTypes,
      modalVariantTypes: FbUiModalVariantTypes,
      sizeTypes: FbSizeTypes,
      buttonVariantTypes: FbUiButtonVariantTypes,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
