<template>
  <fb-ui-modal-window
    :show-footer="false"
    :show-header="false"
    :transparent-bg="transparentBg"
    @close="$emit('close', $event)"
  >
    <template slot="modal-body">
      <div
        :data-variant="variant"
        class="fb-ui-confirmation-window__container"
      >
        <slot name="icon" />
        <h3>
          <slot name="header" />
        </h3>

        <slot name="question" />

        <div class="fb-ui-confirmation-window__buttons">
          <template v-if="primaryButton === 'no'">
            <fb-ui-button
              v-if="showYes"
              uppercase
              variant="link"
              size="lg"
              tabindex="2"
              @click.prevent="$emit('confirmed', $event)"
            >
              {{ yesBtnLabel }}
            </fb-ui-button>

            <fb-ui-button
              v-if="showNo"
              uppercase
              :variant="buttonVariant"
              size="lg"
              tabindex="3"
              @click.prevent="$emit('close', $event)"
            >
              {{ noBtnLabel }}
            </fb-ui-button>
          </template>

          <template v-else>
            <fb-ui-button
              v-if="showNo"
              uppercase
              variant="link"
              size="lg"
              tabindex="2"
              @click.prevent="$emit('close', $event)"
            >
              {{ noBtnLabel }}
            </fb-ui-button>

            <fb-ui-button
              v-if="showYes"
              uppercase
              :variant="buttonVariant"
              size="lg"
              tabindex="3"
              @click.prevent="$emit('confirmed', $event)"
            >
              {{ yesBtnLabel }}
            </fb-ui-button>
          </template>
        </div>
      </div>
    </template>
  </fb-ui-modal-window>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbSizeTypes } from '@/components/types'
import { FbUiButtonVariantTypes } from '@/components/ui/FbButton/index.vue'

export enum FbUiConfirmationWindowPrimaryButtonTypes {
  YES = 'yes',
  NO = 'no',
}

export enum FbUiConfirmationWindowVariantTypes {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

interface FbUiConfirmationWindowPropsInterface {
  size: FbSizeTypes
  primaryButton: FbUiConfirmationWindowPrimaryButtonTypes
  variant: FbUiConfirmationWindowVariantTypes
  showYes: boolean
  showNo: boolean
  yesBtnLabel: string
  noBtnLabel: string
  transparentBg: boolean
}

export default defineComponent({

  name: 'FbUiConfirmationWindow',

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

    primaryButton: {
      type: String as PropType<FbUiConfirmationWindowPrimaryButtonTypes>,
      default: FbUiConfirmationWindowPrimaryButtonTypes.NO,
      validator: (value: FbUiConfirmationWindowPrimaryButtonTypes) => {
        // The value must match one of these strings
        return [
          FbUiConfirmationWindowPrimaryButtonTypes.YES,
          FbUiConfirmationWindowPrimaryButtonTypes.NO,
        ].includes(value)
      },
    },

    variant: {
      type: String as PropType<FbUiConfirmationWindowVariantTypes>,
      default: FbUiConfirmationWindowVariantTypes.DANGER,
      validator: (value: FbUiConfirmationWindowVariantTypes) => {
        // The value must match one of these strings
        return [
          FbUiConfirmationWindowVariantTypes.PRIMARY,
          FbUiConfirmationWindowVariantTypes.SUCCESS,
          FbUiConfirmationWindowVariantTypes.DANGER,
          FbUiConfirmationWindowVariantTypes.WARNING,
          FbUiConfirmationWindowVariantTypes.INFO,
        ].includes(value)
      },
    },

    showYes: {
      type: Boolean,
      default: true,
    },

    showNo: {
      type: Boolean,
      default: true,
    },

    yesBtnLabel: {
      type: String,
      required: false,
      default: 'Yes',
    },

    noBtnLabel: {
      type: String,
      required: false,
      default: 'No',
    },

    transparentBg: {
      type: Boolean,
      default: false,
    },

  },

  setup(props: FbUiConfirmationWindowPropsInterface) {
    let buttonVariant = FbUiButtonVariantTypes.DEFAULT

    switch (props.variant) {
      case FbUiConfirmationWindowVariantTypes.PRIMARY:
        buttonVariant = FbUiButtonVariantTypes.OUTLINE_PRIMARY
        break

      case FbUiConfirmationWindowVariantTypes.SUCCESS:
        buttonVariant = FbUiButtonVariantTypes.OUTLINE_SUCCESS
        break

      case FbUiConfirmationWindowVariantTypes.DANGER:
        buttonVariant = FbUiButtonVariantTypes.OUTLINE_DANGER
        break

      case FbUiConfirmationWindowVariantTypes.WARNING:
        buttonVariant = FbUiButtonVariantTypes.OUTLINE_WARNING
        break

      case FbUiConfirmationWindowVariantTypes.INFO:
        buttonVariant = FbUiButtonVariantTypes.OUTLINE_INFO
        break
    }

    return {
      buttonVariant,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
