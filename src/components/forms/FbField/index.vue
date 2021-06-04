<template>
  <div
    :data-orientation="orientation"
    :data-size="size"
    :data-error="error !== null"
    class="fb-form-field__container"
  >
    <fb-form-label
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
        class="fb-form-field__input-group"
      >
        <span
          v-if="slotExists('left-addon')"
          class="fb-form-field__input-group-addon fb-form-field__input-group-addon-left"
        >
          <slot name="left-addon" />
        </span>

        <span class="fb-form-field__grouped-input-field">
          <slot name="field" />

          <span
            v-if="error !== null"
            class="fb-form-field__input-feedback"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.001 512.001"
            >
              <path
                d="M503.839,395.379l-195.7-338.962C297.257,37.569,277.766,26.315,256,26.315c-21.765,0-41.257,11.254-52.139,30.102 L8.162,395.378c-10.883,18.85-10.883,41.356,0,60.205c10.883,18.849,30.373,30.102,52.139,30.102h391.398 c21.765,0,41.256-11.254,52.14-30.101C514.722,436.734,514.722,414.228,503.839,395.379z M477.861,440.586 c-5.461,9.458-15.241,15.104-26.162,15.104H60.301c-10.922,0-20.702-5.646-26.162-15.104c-5.46-9.458-5.46-20.75,0-30.208 L229.84,71.416c5.46-9.458,15.24-15.104,26.161-15.104c10.92,0,20.701,5.646,26.161,15.104l195.7,338.962 C483.321,419.836,483.321,431.128,477.861,440.586z"
              />
              <rect
                x="241.001"
                y="176.01"
                width="29.996"
                height="149.982"
              />
              <path
                d="M256,355.99c-11.027,0-19.998,8.971-19.998,19.998s8.971,19.998,19.998,19.998c11.026,0,19.998-8.971,19.998-19.998 S267.027,355.99,256,355.99z"
              />
            </svg>
          </span>
        </span>

        <span
          v-if="slotExists('right-addon')"
          class="fb-form-field__input-group-addon fb-form-field__input-group-addon-right"
        >
          <slot name="right-addon" />
        </span>
      </div>

      <template v-else>
        <span class="fb-form-field__input-field">
          <slot name="field" />

          <span
            v-if="error !== null"
            class="fb-form-field__input-feedback"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.001 512.001"
            >
              <path
                d="M503.839,395.379l-195.7-338.962C297.257,37.569,277.766,26.315,256,26.315c-21.765,0-41.257,11.254-52.139,30.102 L8.162,395.378c-10.883,18.85-10.883,41.356,0,60.205c10.883,18.849,30.373,30.102,52.139,30.102h391.398 c21.765,0,41.256-11.254,52.14-30.101C514.722,436.734,514.722,414.228,503.839,395.379z M477.861,440.586 c-5.461,9.458-15.241,15.104-26.162,15.104H60.301c-10.922,0-20.702-5.646-26.162-15.104c-5.46-9.458-5.46-20.75,0-30.208 L229.84,71.416c5.46-9.458,15.24-15.104,26.161-15.104c10.92,0,20.701,5.646,26.161,15.104l195.7,338.962 C483.321,419.836,483.321,431.128,477.861,440.586z"
              />
              <rect
                x="241.001"
                y="176.01"
                width="29.996"
                height="149.982"
              />
              <path
                d="M256,355.99c-11.027,0-19.998,8.971-19.998,19.998s8.971,19.998,19.998,19.998c11.026,0,19.998-8.971,19.998-19.998 S267.027,355.99,256,355.99z"
              />
            </svg>
          </span>
        </span>
      </template>

      <p
        v-if="slotExists('help-line')"
        class="fb-form-field__help"
      >
        <small>
          <slot name="help-line" />
        </small>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbFormOrientationTypes, FbSizeTypes } from '@/types/web-ui-theme'

export default defineComponent({

  name: 'FbFormField',

  props: {

    orientation: {
      type: String as PropType<FbFormOrientationTypes>,
      default: FbFormOrientationTypes.VERTICAL,
      validator: (value: FbFormOrientationTypes) => {
        // The value must match one of these strings
        return [
          FbFormOrientationTypes.HORIZONTAL,
          FbFormOrientationTypes.VERTICAL,
          FbFormOrientationTypes.INLINE,
        ].includes(value)
      },
    },

    size: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.MEDIUM,
      validator: (value: FbSizeTypes) => {
        // The value must match one of these strings
        return [
          FbSizeTypes.LARGE,
          FbSizeTypes.MEDIUM,
          FbSizeTypes.SMALL,
        ].includes(value)
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

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
