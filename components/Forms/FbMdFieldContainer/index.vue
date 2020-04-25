<template>
  <div class="fb-md-field-container__container">
    <template v-if="slotExists('left-addon')">
      <slot name="left-addon" />
    </template>

    <slot name="field" />

    <fb-md-label
      :id="id ? id : name"
      :label="label"
      :is-focused="isFocused"
      :has-value="hasValue"
      :has-error="error !== null"
    />

    <template v-if="slotExists('help-line') && error === null">
      <small class="fb-md-field-container__help">
        <slot name="help-line" />
      </small>
    </template>

    <fb-md-error
      v-if="error !== null"
      :error="error"
    />
  </div>
</template>

<script>
const FbMdLabel = () => import('../FbMdLabel')
const FbMdError = () => import('../FbMdError')

export default {

  name: 'FbMdFormFieldContainer',

  components: {
    FbMdLabel,
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
