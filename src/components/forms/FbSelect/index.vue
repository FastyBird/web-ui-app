<template>
  <fb-form-field
    :id="id"
    :orientation="orientation"
    :size="size"
    :name="name"
    :label="label"
    :required="required"
    :is-focused="isFocused"
    :has-value="true"
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
      <select
        :id="id ? id : name"
        :ref="`field-${name}`"
        :data-size="size"
        :data-error="error !== null"
        :name="name"
        :tabindex="tabIndex"
        :disabled="disabled"
        :readonly="readonly"
        class="fb-form-select__control"
        @input="handleUpdateValue($event.target.value)"
        @focus="handleSetFocus(true)"
        @blur="handleSetFocus(false)"
        @change="handleChange"
      >
        <option
          v-if="blankSelect !== null"
          value=""
        >
          {{ blankSelect }}
        </option>

        <template v-for="(item, index) in items">
          <optgroup
            v-if="Array.isArray(item.value) || typeof item.value === 'object'"
            :key="index"
            :label="item.name"
          >
            <option
              v-for="(subitem, subindex) in item.value"
              :key="`${index}_${subindex}`"
              :value="subitem.value"
              :selected="String(value) === String(item.value) ? 'selected' : ''"
            >
              {{ subitem.name }}
            </option>
          </optgroup>

          <option
            v-else
            :key="index"
            :value="item.value"
            :selected="String(value) === String(item.value) ? 'selected' : ''"
          >
            {{ item.name }}
          </option>
        </template>
      </select>
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
  FbFormOrientationTypes,
  FbSizeTypes,
} from '@/types'

import FbFormField from './../FbField/index.vue'

export interface FbFormSelectItemInterface {
  name: string
  value: string | number
}

export interface FbFormSelectItemGroupInterface {
  name: string
  items: FbFormSelectItemInterface[]
}

interface FbFormSelectPropsInterface {
  orientation: FbFormOrientationTypes
  size: FbSizeTypes
  name: string
  items: (FbFormSelectItemInterface | FbFormSelectItemGroupInterface)[]
  value: string | number | null
  id: string | null
  label: string | null
  required: boolean
  tabIndex: number | null
  hasError: boolean
  error: string | null
  blankSelect: string | null
  readonly: boolean
  disabled: boolean
}

export default defineComponent({

  name: 'FbFormSelect',

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
      type: String as PropType<string>,
      required: true,
    },

    items: {
      type: Array as PropType<(FbFormSelectItemInterface | FbFormSelectItemGroupInterface)[]>,
      required: true,
    },

    value: {
      type: [String, Number],
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

    required: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    tabIndex: {
      type: Number as PropType<number>,
      default: null,
    },

    error: {
      type: String as PropType<string>,
      default: null,
    },

    blankSelect: {
      type: String as PropType<string>,
      default: null,
    },

    readonly: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

  },

  setup(props: FbFormSelectPropsInterface, context: SetupContext) {
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

    const handleChange = (): void => {
      context.emit('change', props.value)
    }

    return {
      isFocused,
      handleUpdateValue,
      handleSetFocus,
      handleChange,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
