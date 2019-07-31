<template>
  <div class="fb-md-radio__container">
    <label class="fb-md-radio__label">
      <input
        :id="id ? id : name"
        v-model="model"
        :name="name"
        :value="label"
        class="fb-md-radio__input"
        type="radio"
        @change="handleChange"
      >

      <span :class="['fb-md-radio__indicator', {'has-error': hasError}]" />
      <span
        v-if="$slots.default || label"
        :class="['fb-md-radio__indicator-label', {'has-error': hasError}]"
      >
        <slot>{{ label }}</slot>
      </span>
    </label>

    <template v-if="slotExists('right-addon')">
      <slot name="right-addon" />
    </template>

    <fb-md-error
      v-if="hasError"
      :error="error"
    />
  </div>
</template>

<script>
  const FbMdError = () => import('../FbMdError')

  export default {

    name: 'FbMdFormRadioButton',

    components: {
      FbMdError,
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

      required: {
        type: Boolean,
        default: false,
      },

      value: {
        type: [String, Number, Boolean],
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

            while (parent && (!name || name !== 'FbMdFormRadioButtonsGroup')) {
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
        return this._radiobuttonsGroup ? this._radiobuttonsGroup.value : this.value
      },

      isGroup() {
        let parent = this.$parent

        while (parent) {
          if (parent.$options.name !== 'FbMdFormRadioButtonsGroup') {
            parent = parent.$parent
          } else {
            this._radiobuttonsGroup = parent // eslint-disable-line

            return true
          }
        }

        return false
      },

    },

    methods: {

      addToStore() {
        if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
          this.model.push(this.label)
        } else {
          this.model = this.trueValue || true
        }
      },

      handleChange() {
        this.$nextTick(() => {
          if (this.isGroup) {
            let parent = this.$parent || this.$root
            let name = parent.$options.name

            while (parent && (!name || name !== 'FbMdFormRadioButtonsGroup')) {
              parent = parent.$parent

              if (parent) {
                name = parent.$options.name
              }
            }

            if (parent) {
              parent.$emit.apply(parent, ['change'].concat([this._radiobuttonsGroup.value]))
            }
          }

          this.$emit('change', this.model)
        })
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
