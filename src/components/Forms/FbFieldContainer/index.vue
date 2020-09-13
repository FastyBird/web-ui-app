<template>
  <div
    :class="fieldClass"
    :data-orientation="orientation"
    :data-size="size"
  >
    <fb-label
      :id="id ? id : name"
      :orientation="orientation"
      :size="size"
      :label="label"
      :required="required"
      :is-focused="isFocused"
      :has-value="hasValue"
      :has-error="error !== null"
    />

    <div>
      <div
        v-if="slotExists('left-addon') || slotExists('right-addon')"
        class="fb-field-container__input-group"
      >
        <span
          v-if="slotExists('left-addon')"
          class="fb-field-container__input-group-addon"
        >
          <slot name="left-addon" />
        </span>

        <span class="fb-field-container__grouped-input-field">
          <slot name="field" />

          <span
            v-if="error !== null"
            class="fb-field-container__input-feedback"
            aria-hidden="true"
          >
            <font-awesome-icon icon="exclamation-triangle" />
          </span>
        </span>

        <span
          v-if="slotExists('right-addon')"
          class="fb-field-container__input-group-addon"
        >
          <slot name="right-addon" />
        </span>
      </div>

      <template v-else>
        <span class="fb-field-container__input-field">
          <slot name="field" />

          <span
            v-if="error !== null"
            class="fb-field-container__input-feedback"
            aria-hidden="true"
          >
            <font-awesome-icon icon="exclamation-triangle" />
          </span>
        </span>
      </template>

      <p
        v-if="slotExists('help-line')"
        class="fb-field-container__help"
      >
        <small>
          <slot name="help-line" />
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import FbLabel from '@/components/Forms/FbLabel'
import FbError from '@/components/Forms/FbError'

function sizeValidator (value) {
  // The value must match one of these strings
  return [
    'lg', 'md', 'sm', 'xs', 'none'
  ].indexOf(value) !== -1
}

export default {

  name: 'FbFormFieldContainer',

  components: {
    FbLabel,
    FbError,
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

    required: {
      type: Boolean,
      default: false,
    },

    isFocused: {
      type: Boolean,
      default: false,
    },

    hasValue: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
      default: null,
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

  computed: {

    fieldClass() {
      const classes = []

      classes.push('fb-field-container__container')

      const margins = ['mt', 'mb']

      margins.forEach((type) => {
        if (this[type] !== 'none') {
          classes.push(`fb-field-container__container-${type}-${this[type]}`)
        }
      })

      if (this.error) {
        classes.push('has-error')
      }

      return classes
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
