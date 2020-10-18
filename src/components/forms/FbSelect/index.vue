<template>
  <fb-form-field
    :id="id"
    :orientation="orientation"
    :size="size"
    :name="name"
    :label="label"
    :required="required"
    :is-focused="focused"
    :has-value="true"
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
      <select
        :id="id ? id : name"
        :ref="`field-${name}`"
        :name="name"
        :tabindex="tabIndex"
        class="fb-form-select__control"
        @input="updateValue($event.target.value)"
        @change="changed()"
        @focus="setFocused(true)"
        @blur="setFocused(false)"
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
              :selected="value == subitem.value ? 'selected' : ''"
            >
              {{ subitem.name }}
            </option>
          </optgroup>

          <option
            v-else
            :key="index"
            :value="item.value"
            :selected="value == item.value ? 'selected' : ''"
          >
            {{ item.name }}
          </option>
        </template>
      </select>
    </template>

    <template
      v-if="slotExists('help-line') && !hasError"
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

import FbFormField from '@/components/forms/FbField/index.vue'
import {
  FbFormOrientationTypes,
  FbSizeTypes,
} from '@/components/types'

export interface FbFormSelectItemInterface {
  name: string
  value: string | number
}

export interface FbFormSelectItemGroupInterface {
  name: string
  items: Array<FbFormSelectItemInterface>
}

interface FbFormSelectPropsInterface {
  orientation: FbFormOrientationTypes
  size: FbSizeTypes
  name: string
  id: string | null
  label: string | null
  required: boolean
  items: Array<FbFormSelectItemInterface | FbFormSelectItemGroupInterface>
  value: string | number | null
  tabIndex: number | null
  hasError: boolean
  error: string | null
  blankSelect: string | null
  readonly: boolean
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

    items: {
      type: Array,
      required: true,
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

    blankSelect: {
      type: String,
      default: null,
    },

    readonly: {
      type: Boolean,
      default: false,
    },

  },

  setup(props: FbFormSelectPropsInterface, context: SetupContext) {
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

    function changed(): void {
      context.emit('change', props.value)
    }

    return {
      focused,
      updateValue,
      setFocused,
      changed,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
