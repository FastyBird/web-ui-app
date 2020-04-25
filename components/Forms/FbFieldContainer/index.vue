<template>
  <div
    :class="['fb-field-container__container', {'has-error': error !== null}]"
    :data-orientation="orientation"
    :data-size="size"
  >
    <fb-label
      :id="id ? id : name"
      :orientation="orientation"
      :size="size"
      :label="label"
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

        <slot name="field" />

        <span
          v-if="slotExists('right-addon')"
          class="fb-field-container__input-group-addon"
        >
          <slot name="right-addon" />
        </span>

        <span
          v-if="error !== null"
          class="fb-field-container__input-feedback"
          aria-hidden="true"
        >
          <font-awesome-icon icon="exclamation-triangle" />
        </span>
      </div>

      <template v-else>
        <slot name="field" />

        <span
          v-if="error !== null"
          class="fb-field-container__input-feedback"
          aria-hidden="true"
        >
          <font-awesome-icon icon="exclamation-triangle" />
        </span>
      </template>

      <p
        v-if="slotExists('help-line') && error === null"
        class="fb-field-container__help"
      >
        <small>
          <slot name="help-line" />
        </small>
      </p>

      <fb-error
        v-if="error !== null"
        :error="error"
      />
    </div>
  </div>
</template>

<script>
const FbLabel = () => import('../FbLabel')
const FbError = () => import('../FbError')

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

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
