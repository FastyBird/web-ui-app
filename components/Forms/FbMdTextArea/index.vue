<template>
  <fb-md-field-container
    :id="id"
    :name="name"
    :label="label"
    :is-focused="focused"
    :has-value="value !== '' && value !== null"
    :error="error"
  >
    <template
      v-if="slotExists('left-addon')"
      slot="left-addon"
    >
      <slot name="left-addon" />
    </template>

    <template slot="field">
      <textarea
        :id="id ? id : name"
        :name="name"
        :tabindex="tabIndex"
        :type="type"
        :value="value"
        class="fb-md-textarea__control"
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
  </fb-md-field-container>
</template>

<script>
  const FbMdFieldContainer = () => import('../FbMdFieldContainer')

  export default {

    name: 'FbMdFormTextArea',

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
