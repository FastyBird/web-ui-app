<template>
  <fb-form-field
    :id="id"
    :orientation="orientation"
    :size="size"
    :name="name"
    :label="label"
    :required="required"
    :is-focused="isFocused"
    :has-value="value !== '' && value !== null || placeholder !== null"
    :error="error"
  >
    <template
      v-if="'left-addon' in $slots"
      slot="left-addon"
    >
      <slot name="left-addon" />
    </template>

    <template
      v-if="'right-addon' in $slots"
      slot="right-addon"
    >
      <slot name="right-addon" />
    </template>

    <template slot="field">
      <input
        :id="id ? id : name"
        :ref="`field-${name}`"
        :data-size="size"
        :data-error="error !== null"
        :name="name"
        :type="type"
        :tabindex="tabIndex"
        :disabled="disabled"
        :readonly="readonly"
        :value="value"
        :placeholder="error !== null && !isFocused ? error : placeholder"
        class="fb-form-input__control"
        @input="handleUpdateValue($event.target.value)"
        @focus="handleSetFocus(true)"
        @blur="handleSetFocus(false)"
        @keydown="handleKeyDown"
      >
    </template>

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
  defineComponent,
  PropType,
  ref,
  SetupContext,
} from '@vue/composition-api'

import {
  FbFormInputTypeTypes,
  FbFormOrientationTypes,
  FbSizeTypes,
} from '@/types'

import FbFormField from './../FbField/index.vue'

interface FbFormInputPropsInterface {
  orientation: FbFormOrientationTypes
  size: FbSizeTypes
  name: string
  id: string | null
  label: string | null
  type: FbFormInputTypeTypes
  required: boolean
  value: string | number | null
  tabIndex: number | null
  error: string | null
  placeholder: string | null
  disabled: boolean
  readonly: boolean
}

export default defineComponent({

  name: 'FbFormInput',

  components: {
    FbFormField,
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

    type: {
      type: String as PropType<FbFormInputTypeTypes>,
      default: FbFormInputTypeTypes.TEXT,
      validator: (value: FbFormInputTypeTypes) => {
        // The value must match one of these strings
        return [
          FbFormInputTypeTypes.TEXT,
          FbFormInputTypeTypes.PASSWORD,
          FbFormInputTypeTypes.EMAIL,
          FbFormInputTypeTypes.NUMBER,
          FbFormInputTypeTypes.TEL,
          FbFormInputTypeTypes.URL,
        ].includes(value)
      },
    },

    required: {
      type: Boolean,
      default: false,
    },

    value: {
      type: [String, Number],
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

    placeholder: {
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

  setup(_props: FbFormInputPropsInterface, context: SetupContext) {
    const isFocused = ref<boolean>(false)

    // Emit an input event up to the parent
    const handleUpdateValue = (value: string | number | null): void => {
      context.emit('input', value)
    }

    // Fire focus & blur events
    const handleSetFocus = (value: boolean): void => {
      isFocused.value = value

      if (value) {
        context.emit('focus')
      } else {
        context.emit('blur')
      }
    }

    const handleKeyDown = (event: Event): void => {
      context.emit('keydown', event)
    }

    return {
      isFocused,
      handleUpdateValue,
      handleSetFocus,
      handleKeyDown,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
