<template>
  <div
    :data-error="error !== null"
    class="fb-form-radio__container"
  >
    <label class="fb-form-radio__label">
      <input
        :id="id ? id : name"
        v-model="model"
        :name="name"
        :value="value !== null ? value : label"
        class="fb-form-radio__input"
        type="radio"
        @change="handleChange"
      >

      <span class="fb-form-radio__indicator" />
      <span
        v-if="$slots.default || label"
        class="fb-form-radio__indicator-label"
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
  PropType,
  SetupContext,
} from '@vue/composition-api'

import FbFormRadioButtonsGroup from '@/components/forms/FbRadioButtonsGroup/index.vue'

interface FbFormRadioButtonPropsInterface {
  name: string
  id: string | null
  label: string | number | boolean | null
  value: string | number | boolean | null
  required: boolean
  tabIndex: number | null
  error: string | null
  group: InstanceType<typeof FbFormRadioButtonsGroup> | null
}

export default defineComponent({

  name: 'FbFormRadioButton',

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
      type: Object as PropType<InstanceType<typeof FbFormRadioButtonsGroup>>,
      default: null,
    },

  },

  setup(props: FbFormRadioButtonPropsInterface, context: SetupContext) {
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

    function handleChange(): void {
      context.root.$nextTick(() => {
        if (props.group !== null) {
          // eslint-disable-next-line no-useless-call
          props.group.$emit.apply(props.group, ['change', props.group.value])
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
