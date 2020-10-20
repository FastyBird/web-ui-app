<template>
  <fb-ui-modal-window
    :size="size"
    :transparent-bg="transparentBg"
    @close="$emit('close', $event)"
  >
    <template slot="modal-title">
      <slot nem="icon" />
      <slot name="header" />
    </template>

    <form
      slot="modal-body"
      class="fb-ui-modal-form__form"
      @submit.prevent="$emit('submit', $event)"
    >
      <slot name="form" />

      <div
        v-if="resultIsOk"
        class="fb-ui-modal-form__result"
      >
        <fb-ui-result-ok />
      </div>

      <div
        v-if="resultIsErr"
        class="fb-ui-modal-form__result"
      >
        <fb-ui-result-err />
      </div>
    </form>

    <template slot="modal-footer">
      <div class="fb-ui-modal-form__buttons">
        <fb-ui-button
          uppercase
          variant="link"
          size="lg"
          :disabled="lockButtons"
          :tabindex="(initialTabindex + 2)"
          name="close"
          @click.prevent="$emit('close', $event)"
        >
          {{ cancelBtnLabel }}
        </fb-ui-button>

        <fb-ui-button
          uppercase
          variant="outline-primary"
          size="lg"
          :disabled="lockButtons || lockSubmitButton"
          :tabindex="(initialTabindex + 1)"
          name="save"
          @click.prevent="$emit('submit', $event)"
        >
          {{ submitBtnLabel }}
        </fb-ui-button>
      </div>
    </template>
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

import { FbSizeTypes } from "@/components/types";

interface FbUiModalFormPropsInterface {
  size: FbSizeTypes
  submitBtnLabel: string
  cancelBtnLabel: string
  lockButtons: boolean
  lockSubmitButton: boolean
  transparentBg: boolean
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

    resultIsOk: {
      type: Boolean,
      default: false,
    },

    resultIsErr: {
      type: Boolean,
      default: false,
    },

  },

  setup(_props: FbUiModalFormPropsInterface, context: SetupContext) {
    const initialTabindex = ref<number>(get(context, 'slots.form', []).length + 1)

    return {
      initialTabindex,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
