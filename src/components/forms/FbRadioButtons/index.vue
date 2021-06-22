<template>
  <fb-form-field
    :id="id"
    :orientation="orientation"
    :size="size"
    :name="name"
    :label="label"
    :required="required"
    :has-value="true"
    :error="error"
  >
    <div
      slot="field"
      role="group"
      aria-label="radiobutton-group"
      class="fb-form-radio-buttons__control"
    >
      <template v-for="(option, index) in options">
        <fb-form-radio-button
          :id="`${id ? id : name}_${index}`"
          :key="index"
          v-model="model"
          :name="name"
          :option="option.value"
          :size="size"
          :label="option.name"
          :tab-index="tabIndex ? tabIndex + index + 1 : null"
          :has-error="error !== null"
          :readonly="readonly"
          :disabled="disabled"
          @change="handleChange"
        />
      </template>
    </div>

    <template
      v-if="'help-line' in $slots"
      slot="help-line"
    >
      <slot name="help-line" />
    </template>
  </fb-form-field>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  SetupContext,
} from '@vue/composition-api'

import { FbFormOrientationTypes, FbSizeTypes } from '@/types'

import FbFormField from './../FbField/index.vue'
import FbFormRadioButton from './../FbRadioButton/index.vue'

export interface FbFormRadioButtonsItemInterface {
  name: string
  value: string | number | boolean
}

interface FbFormRadioButtonsPropsInterface {
  orientation: FbFormOrientationTypes
  size: FbSizeTypes
  name: string
  id: string | null
  options: FbFormRadioButtonsItemInterface[]
  value: string | number | boolean | null
  label: string | null
  required: boolean
  tabIndex: number | null
  error: string
  readonly: boolean
  disabled: boolean
}

export default defineComponent({

  name: 'FbFormRadioButtons',

  components: {
    FbFormField,
    FbFormRadioButton,
  },

  props: {

    orientation: {
      type: String as PropType<FbFormOrientationTypes>,
      default: FbFormOrientationTypes.VERTICAL,
      validator: (value: FbFormOrientationTypes) => {
        // The value must match one of these strings
        return [
          FbFormOrientationTypes.HORIZONTAL,
          FbFormOrientationTypes.VERTICAL,
          FbFormOrientationTypes.INLINE,
        ].includes(value)
      },
    },

    size: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.MEDIUM,
      validator: (value: FbSizeTypes) => {
        // The value must match one of these strings
        return [
          FbSizeTypes.LARGE,
          FbSizeTypes.MEDIUM,
          FbSizeTypes.SMALL,
        ].includes(value)
      },
    },

    name: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      required: true,
    },

    value: {
      type: [String, Number, Boolean],
      default: null,
    },

    id: {
      type: String,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    required: {
      type: Boolean,
      default: false,
    },

    tabIndex: {
      type: Number,
      default: null,
    },

    error: {
      type: String,
      default: null,
    },

    readonly: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

  },

  setup(props: FbFormRadioButtonsPropsInterface, context: SetupContext) {
    const model = computed<string | number | boolean | null | (string | number | boolean)[]>({
      get: (): string | number | boolean | null | (string | number | boolean)[] => {
        return props.value
      },
      set: (val) => {
        context.emit('input', val)
      },
    })

    const handleChange = (): void => {
      context.emit('change', props.value)
    }

    return {
      model,
      handleChange,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
