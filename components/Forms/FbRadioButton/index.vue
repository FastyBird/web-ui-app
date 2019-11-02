<template>
  <div
    v-if="!isButton"
    class="fb-radio__container">
    <label class="fb-radio__label">
      <input
        :id="id ? id : name"
        v-model="model"
        :name="name"
        :value="label"
        class="fb-radio__input"
        type="radio"
        @change="handleChange"
      >

      <span :class="['fb-radio__indicator', {'has-error': hasError}]" />
      <span
        v-if="$slots.default || label"
        :class="['fb-radio__indicator-label', {'has-error': hasError}]"
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

  <label
    v-else
    :class="radioClass"
  >
    <input
      :id="id ? id : name"
      v-model="model"
      :name="name"
      :value="label"
      class="fb-radio__input"
      type="radio"
      @change="handleChange"
    >

    <template v-if="$slots.default || label">
      <slot>{{ label }}</slot>
    </template>
  </label>
</template>

<script>
  const FbError = () => import('../FbError')

  export default {

    name: 'FbFormRadioButton',

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

            while (parent && (!name || name !== 'FbFormRadioButtonsGroup')) {
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
          if (parent.$options.name !== 'FbFormRadioButtonsGroup') {
            parent = parent.$parent
          } else {
            this._radiobuttonsGroup = parent // eslint-disable-line

            return true
          }
        }

        return false
      },

      isButton() {
        return this.isGroup && this.$parent.$props.button
      },

      radioClass() {
        const classes = []

        if (this.isButton) {
          classes.push('fb-radio__label-btn')
          classes.push(`fb-radio__label-btn-${this.$parent.$props.variant}`)
        }

        if (this.isButton && this.$parent.$props.pill) {
          classes.push('fb-radio__label-btn-pill')
        }

        if (this.isButton && this.$parent.$props.size) {
          classes.push(`fb-radio__label-btn-${this.$parent.$props.size}`)
        }

        if (this.isButton && this.model === this.label) {
          classes.push('active')
        }

        return classes
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

            while (parent && (!name || name !== 'FbFormRadioButtonsGroup')) {
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
