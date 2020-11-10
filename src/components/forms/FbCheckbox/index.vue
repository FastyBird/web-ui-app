<template>
  <div
    :data-error="error !== null"
    :data-checked="checked"
    class="fb-form-checkbox__container"
  >
    <label class="fb-form-checkbox__label">
      <input
        v-if="trueValue || falseValue"
        :id="id ? id : name"
        v-model="model"
        :name="name"
        :tabindex="tabIndex"
        :true-value="trueValue"
        :false-value="falseValue"
        class="fb-form-checkbox__input"
        type="checkbox"
        @change="handleChange"
      >

      <input
        v-else
        :id="id ? id : name"
        v-model="model"
        :name="name"
        :tabindex="tabIndex"
        :value="value !== null ? value : label"
        class="fb-form-checkbox__input"
        type="checkbox"
        @change="handleChange"
      >

      <span class="fb-form-checkbox__indicator" />
      <span
        v-if="$slots.default || label"
        class="fb-form-checkbox__indicator-label"
      >
        <slot>{{ label }}</slot>
      </span>
    </label>

    <fb-form-error
      v-if="error !== null"
      :error="error"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType, ref,
  SetupContext, watch,
} from '@vue/composition-api'

import get from 'lodash/get'

import FbFormCheckboxesGroup from '@/components/forms/FbCheckboxesGroup/index.vue'

interface FbFormCheckboxPropsInterface {
  name: string
  id: string | null
  label: string | number | boolean | null
  trueValue: string | number | boolean | null
  falseValue: string | number | boolean | null
  value: string | number | boolean | null
  required: boolean
  tabIndex: number | null
  error: string | null
  group: InstanceType<typeof FbFormCheckboxesGroup> | null
}

export default defineComponent({

  name: 'FbFormCheckbox',

  props: {

    name: {
      type: String,
      required: true,
    },

    id: {
      type: String,
      default: null,
    },

    label: {
      type: [String, Number, Boolean],
      default: null,
    },

    trueValue: {
      type: [String, Number, Boolean],
      default: null,
    },

    falseValue: {
      type: [String, Number, Boolean],
      default: null,
    },

    value: {
      type: [String, Number, Boolean],
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

    group: {
      type: Object as PropType<InstanceType<typeof FbFormCheckboxesGroup> | null>,
      default: null,
    },

  },

  setup(props: FbFormCheckboxPropsInterface, context: SetupContext) {
    const checked = ref<boolean>(false)

    const model = computed<string | number | boolean | null | Array<string | number | boolean>>({
      get: (): string | number | boolean | null | Array<string | number | boolean> => {
        return props.group !== null ? props.group.value : props.value
      },
      set: (val) => {
        if (props.group !== null) {
          // eslint-disable-next-line no-useless-call
          props.group.$emit.apply(props.group, ['input', val])
        } else {
          context.emit('input', val)
        }
      },
    })

    function handleChange(ev: Event): void {
      let value

      if (get(ev, 'target.checked', false)) {
        value = props.trueValue === null ? true : props.trueValue
      } else {
        value = props.falseValue === null ? false : props.falseValue
      }

      context.emit('change', value, ev)

      context.root.$nextTick(() => {
        if (props.group !== null) {
          // eslint-disable-next-line no-useless-call
          props.group.$emit.apply(props.group, ['change', props.group.value])
        }
      })
    }

    watch(
      () => model.value,
      ((val) => {
        if (Array.isArray(val)) {
          checked.value = val.includes(props.value)
        } else {
          checked.value = props.value === val
        }
      })
    )

    return {
      model,
      checked,
      handleChange,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
