<template>
  <div class="fb-checkbox__container">
    <label class="fb-checkbox__label">
      <input
        v-if="trueValue || falseValue"
        :id="id ? id : name"
        v-model="model"
        :name="name"
        :tabindex="tabIndex"
        :true-value="trueValue"
        :false-value="falseValue"
        class="fb-checkbox__input"
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
        class="fb-checkbox__input"
        type="checkbox"
        @change="handleChange"
      >

      <span :class="['fb-checkbox__indicator', {'has-error': hasError}]" />
      <span
        v-if="$slots.default || label"
        :class="['fb-checkbox__indicator-label', {'has-error': hasError}]"
      >
        <slot>{{ label }}</slot>
      </span>
    </label>

    <template v-if="slotExists('right-addon')">
      <slot name="right-addon" />
    </template>

    <fb-error
      v-if="hasError"
      :error="error"
    />
  </div>
</template>

<script>
import FbError from '@/components/Forms/FbError'

export default {

  name: 'FbFormCheckbox',

  components: {
    FbError,
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

    checked: {
      type: Boolean,
      default: false,
    },

    required: {
      type: Boolean,
      default: false,
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

  computed: {

    model: {
      get() {
        return this.isGroup
          ? this.store : this.value !== undefined
            ? this.value : this.selfModel
      },
      set(val) {
        if (this.isGroup) {
          let parent = this.$parent || this.$root
          let name = parent.$options.name

          while (parent && (!name || name !== 'FbFormCheckboxesGroup')) {
            parent = parent.$parent

            if (parent) {
              name = parent.$options.name
            }
          }

          if (parent) {
            parent.$emit.apply(parent, ['input'].concat([val]))
          }
        } else {
          this.$emit('input', val)
          this.selfModel = val
        }
      },
    },

    store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value
    },

    isGroup() {
      let parent = this.$parent

      while (parent) {
        if (parent.$options.name !== 'FbFormCheckboxesGroup') {
          parent = parent.$parent
        } else {
          this._checkboxGroup = parent // eslint-disable-line

          return true
        }
      }

      return false
    },

  },

  created() {
    this.checked && this.addToStore()
  },

  methods: {

    addToStore() {
      if (Array.isArray(this.model) && this.value !== null && this.model.indexOf(this.value) === -1) {
        this.model.push(this.value)
      } else if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label)
      } else {
        this.model = this.trueValue || true
      }
    },

    handleChange(ev) {
      let value

      if (ev.target.checked) {
        value = this.trueValue === undefined ? true : this.trueValue
      } else {
        value = this.falseValue === undefined ? false : this.falseValue
      }

      this.$emit('change', value, ev)

      this.$nextTick(() => {
        if (this.isGroup) {
          let parent = this.$parent || this.$root
          let name = parent.$options.name

          while (parent && (!name || name !== 'FbFormCheckboxesGroup')) {
            parent = parent.$parent

            if (parent) {
              name = parent.$options.name
            }
          }

          if (parent) {
            parent.$emit.apply(parent, ['change'].concat([this._checkboxGroup.value]))
          }
        }
      })
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
