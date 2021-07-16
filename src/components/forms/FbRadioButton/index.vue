<template>
  <label
    :data-size="size"
    :data-error="hasError"
    class="fb-form-radio-button__container"
  >
    <input
      :id="id ? id : name"
      v-model="model"
      :name="name"
      :value="option"
      :readonly="readonly"
      :disabled="disabled"
      :tabindex="tabIndex"
      class="fb-form-radio-button__input"
      type="radio"
      @change="handleChange"
    >

    <span class="fb-form-radio-button__indicator" />

    <span
      v-if="'default' in $slots || label !== null"
      class="fb-form-radio-button__label"
    >
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  PropType,
  SetupContext,
} from '@vue/composition-api'

import { FbSizeTypes } from '@/types'

import FbFormRadioButtons from './../FbRadioButtons/index.vue'

interface FbFormRadioButtonPropsInterface {
  size: FbSizeTypes
  name: string
  option: string | number | boolean
  value: string | number | boolean | null
  id: string | null
  label: string | null
  tabIndex: number | null
  hasError: boolean
  readonly: boolean
  disabled: boolean
  group: InstanceType<typeof FbFormRadioButtons> | null
}

export default defineComponent({

  name: 'FbFormRadioButton',

  props: {

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
      type: String as PropType<string>,
      required: true,
    },

    option: {
      type: [String, Number, Boolean],
      required: true,
    },

    value: {
      type: [String, Number, Boolean],
      required: false,
      default: null,
    },

    id: {
      type: String as PropType<string>,
      default: null,
    },

    label: {
      type: String as PropType<string>,
      default: null,
    },

    tabIndex: {
      type: Number as PropType<number>,
      default: null,
    },

    hasError: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    readonly: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    group: {
      type: Object as PropType<InstanceType<typeof FbFormRadioButtons>>,
      default: null,
    },

  },

  setup(props: FbFormRadioButtonPropsInterface, context: SetupContext) {
    const model = computed<string | number | boolean | null>({
      get: (): string | number | boolean | null => {
        return props.group !== null ? props.group.value : props.value
      },
      set: (val) => {
        if (props.group !== null) {
          props.group.$emit.apply(props.group, ['input', val])
        } else {
          context.emit('input', val)
        }
      },
    })

    const handleChange = (): void => {
      nextTick(() => {
        if (props.group !== null) {
          props.group.$emit.apply(props.group, ['change', props.group.value])
        } else {
          context.emit('change', props.value)
        }
      })
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
