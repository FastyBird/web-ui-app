<template>
  <fb-ui-modal-window
    :show="show"
    :size="size"
    :layout="layout"
    :transparent-bg="transparentBg"
    :show-left-btn="cancelBtnShow"
    :show-right-btn="submitBtnShow"
    @close="$emit('close', $event)"
  >
    <template
      v-if="'title' in $slots"
      slot="title"
    >
      <slot name="title" />
    </template>

    <template
      v-if="'icon' in $slots"
      slot="icon"
    >
      <slot name="icon" />
    </template>

    <template
      v-if="'header' in $slots"
      slot="header"
    >
      <slot name="header" />
    </template>

    <form
      slot="body"
      class="fb-ui-modal-form__form"
      @submit.prevent="$emit('submit', $event)"
    >
      <slot name="form" />

      <div class="fb-ui-modal-form__result">
        <fb-ui-spinner v-if="state === resultTypes.WORKING" />
        <fb-ui-result-ok v-if="state === resultTypes.OK" />
        <fb-ui-result-err v-if="state === resultTypes.ERROR" />
      </div>
    </form>

    <template
      v-if="'footer' in $slots"
      slot="footer"
    >
      <slot name="footer" />
    </template>

    <slot name="cancel-button">
      <fb-ui-button
        v-if="cancelBtnShow"
        slot="left-button"
        :disabled="lockButtons"
        :tabindex="(initialTabindex + 2)"
        :size="layout === modalLayoutTypes.PHONE || layout === modalLayoutTypes.TABLET ? sizeTypes.EXTRA_SMALL : sizeTypes.LARGE"
        :variant="buttonVariantTypes.LINK_DEFAULT"
        uppercase
        name="cancel"
        @click.prevent="$emit('cancel', $event)"
      >
        {{ cancelBtnText }}
      </fb-ui-button>
    </slot>

    <slot name="submit-button">
      <fb-ui-button
        v-if="submitBtnShow"
        slot="right-button"
        :disabled="lockButtons || lockSubmitButton"
        :tabindex="(initialTabindex + 1)"
        :size="layout === modalLayoutTypes.PHONE || layout === modalLayoutTypes.TABLET ? sizeTypes.EXTRA_SMALL : sizeTypes.LARGE"
        :variant="layout === modalLayoutTypes.PHONE || layout === modalLayoutTypes.TABLET ? buttonVariantTypes.LINK_DEFAULT : buttonVariantTypes.OUTLINE_PRIMARY"
        uppercase
        name="submit"
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

import { FbFormResultTypes, FbUiModalLayoutTypes, FbSizeTypes, FbUiButtonVariantTypes } from '@/types'

import FbUiButton from './../FbButton/index.vue'
import FbUiModalWindow from './../FbModalWindow/index.vue'
import FbUiResultErr from './../FbResultErr/index.vue'
import FbUiResultOk from './../FbResultOk/index.vue'
import FbUiSpinner from './../FbSpinner/index.vue'

export default defineComponent({

  name: 'FbUiModalForm',

  components: {
    FbUiButton,
    FbUiModalWindow,
    FbUiResultErr,
    FbUiResultOk,
    FbUiSpinner,
  },

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

    layout: {
      type: String as PropType<FbUiModalLayoutTypes>,
      default: FbUiModalLayoutTypes.DEFAULT,
      validator: (value: FbUiModalLayoutTypes) => {
        // The value must match one of these strings
        return [
          FbUiModalLayoutTypes.DEFAULT,
          FbUiModalLayoutTypes.PHONE,
          FbUiModalLayoutTypes.TABLET,
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

    show: {
      type: Boolean,
      default: true,
    },

    state: {
      type: String as PropType<FbFormResultTypes>,
      default: FbFormResultTypes.NONE,
    },

  },

  setup(_props, context: SetupContext) {
    const initialTabindex = ref<number>(get(context, 'slots.form', []).length + 1)

    return {
      initialTabindex,
      sizeTypes: FbSizeTypes,
      resultTypes: FbFormResultTypes,
      modalLayoutTypes: FbUiModalLayoutTypes,
      buttonVariantTypes: FbUiButtonVariantTypes,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
