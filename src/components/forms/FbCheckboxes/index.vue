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
      aria-label="checkboxes-group"
      class="fb-form-checkboxes__control"
    >
      <template v-for="(option, index) in options">
        <fb-form-checkbox
          :id="options.length > 1 ? `${id ? id : name}_${index}` : `${id ? id : name}`"
          :key="index"
          v-model="model"
          :size="size"
          :name="options.length > 1 ? `${name}[]` : name"
          :label="option.name"
          :option="option.value"
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
import FbFormCheckbox from './../FbCheckbox/index.vue'

export interface FbFormCheckboxesItemInterface {
  name: string
  value: string | number | boolean
}

interface FbFormCheckboxesPropsInterface {
  orientation: FbFormOrientationTypes
  size: FbSizeTypes
  name: string
  id: string | null
  label: string | null
  required: boolean
  options: FbFormCheckboxesItemInterface[]
  value: string | number | boolean | null | (string | number)[]
  tabIndex: number | null
  error: string | null
  disabled: boolean
  readonly: boolean
}

export default defineComponent({

  name: 'FbFormCheckboxes',

  components: {
    FbFormField,
    FbFormCheckbox,
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

    options: {
      type: Array,
      required: true,
    },

    value: {
      type: [String, Number, Boolean, Array] as PropType<string | number | boolean | null | (string | number | boolean)[]>,
      default: null,
    },

    tabIndex: {
      type: Number,
      default: null,
    },

    error: {
      type: String,
      default: null,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    readonly: {
      type: Boolean,
      default: false,
    },

  },

  setup(props: FbFormCheckboxesPropsInterface, context: SetupContext) {
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
