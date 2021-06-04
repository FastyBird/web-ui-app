<template>
  <fb-form-field
    :id="id"
    :orientation="orientation"
    :size="size"
    :name="name"
    :label="label"
    :required="required"
    :is-focused="focused"
    :has-value="value !== '' && value !== null || placeholder !== null"
    :error="error"
  >
    <template
      v-if="slotExists('left-addon')"
      slot="left-addon"
    >
      <slot name="left-addon" />
    </template>

    <template
      v-if="slotExists('right-addon')"
      slot="right-addon"
    >
      <slot name="right-addon" />
    </template>

    <template slot="field">
      <input
        :id="id ? id : name"
        :ref="`field-${name}`"
        :name="name"
        :tabindex="tabIndex"
        :type="type"
        :readonly="readonly"
        :value="value"
        :placeholder="hasError && !focused ? error : placeholder"
        class="fb-form-input__control"
        @input="updateValue($event.target.value)"
        @focus="setFocused(true)"
        @blur="setFocused(false)"
        @keydown="keyDown"
      >
    </template>

    <template
      v-if="slotExists('help-line')"
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
} from '@/types/web-ui-theme'

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
  hasError: boolean
  error: string | null
  placeholder: string | null
  readonly: boolean
}

export default defineComponent({

  name: 'FbFormInput',

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

    hasError: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
      default: null,
    },

    placeholder: {
      type: String,
      default: null,
    },

    readonly: {
      type: Boolean,
      default: false,
    },

  },

  setup(_props: FbFormInputPropsInterface, context: SetupContext) {
    const focused = ref<boolean>(false)

    // Emit an input event up to the parent
    function updateValue(value: string | number | null): void {
      context.emit('input', value)
    }

    // Fire focus & blur events
    function setFocused(value: boolean): void {
      focused.value = value

      if (value) {
        context.emit('focus')
      } else {
        context.emit('blur')
      }
    }

    function keyDown(event: Event): void {
      context.emit('keydown', event)
    }

    return {
      focused,
      updateValue,
      setFocused,
      keyDown,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
