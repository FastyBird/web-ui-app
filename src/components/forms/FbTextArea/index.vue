<template>
  <fb-field-container
    :id="id"
    :orientation="orientation"
    :size="size"
    :name="name"
    :label="label"
    :required="required"
    :is-focused="focused"
    :has-value="value !== '' && value !== null || placeholder !== null"
    :error="error"
    :mt="mt"
    :mb="mb"
  >
    <template
      v-if="slotExists('left-addon')"
      slot="left-addon"
    >
      <slot name="left-addon" />
    </template>

    <template slot="field">
      <textarea
        :ref="`field-${name}`"
        :id="id ? id : name"
        :name="name"
        :tabindex="tabIndex"
        :type="type"
        :readonly="readonly"
        :value="value"
        :placeholder="hasError && !focused ? error : placeholder"
        class="fb-textarea__control"
        @input="updateValue($event.target.value)"
        @focus="setFocused(true)"
        @blur="setFocused(false)"
      />
    </template>

    <template
      v-if="slotExists('help-line') && !hasError"
      slot="help-line"
    >
      <slot name="help-line" />
    </template>
  </fb-field-container>
</template>

<script>
import FbFieldContainer from '@/components/Forms/FbFieldContainer'

function sizeValidator (value) {
  // The value must match one of these strings
  return [
    'lg', 'md', 'sm', 'xs', 'none'
  ].indexOf(value) !== -1
}

export default {

  name: 'FbFormTextArea',

  components: {
    FbFieldContainer,
  },

  props: {

    orientation: {
      type: String,
      default: 'vertical',
      validator: (value) => {
        // The value must match one of these strings
        return ['vertical', 'horizontal', 'inline'].indexOf(value) !== -1
      },
    },

    size: {
      type: String,
      default: null,
      validator: (value) => {
        // The value must match one of these strings
        return ['lg', 'sm'].indexOf(value) !== -1
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
      type: String,
      default: 'text',
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

    mt: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    mb: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

  },

  data() {
    return {
      focused: false,
    }
  },

  methods: {

    /**
     * Emit an input event up to the parent
     *
     * @param {[type]} value
     */
    updateValue(value) {
      this.$emit('input', value)
    },

    /**
     * Fire focus & blur events
     *
     * @param {Boolean} value
     */
    setFocused(value) {
      this.focused = value

      if (value) {
        this.$emit('focus')
      } else {
        this.$emit('blur')
      }
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
