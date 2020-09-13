<template>
  <fb-md-field-container
    :id="id"
    :name="name"
    :label="label"
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

    <template slot="field">
      <input
        :id="id ? id : name"
        :name="name"
        :tabindex="tabIndex"
        :type="type"
        :readonly="readonly"
        :value="value"
        :placeholder="placeholder"
        :class="['fb-md-input__control', {'has-error': hasError}]"
        @input="updateValue($event.target.value)"
        @focus="setFocused(true)"
        @blur="setFocused(false)"
      >
    </template>

    <template
      v-if="slotExists('help-line') && !hasError"
      slot="help-line"
    >
      <slot name="help-line" />
    </template>
  </fb-md-field-container>
</template>

<script>
import FbMdFieldContainer from '@/components/Forms/FbMdFieldContainer'

export default {

  name: 'FbMdFormInput',

  components: {
    FbMdFieldContainer,
  },

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
     * @param {[String|Number]} value
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
