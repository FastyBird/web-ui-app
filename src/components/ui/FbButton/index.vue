<template>
  <nuxt-link
    v-if="to !== null"
    ref="element"
    :to="to"
    :data-variant="variant"
    :data-size="size"
    :class="classNames"
    role="button"
    @click.prevent="clickHandle($event)"
  >
    <div
      v-if="'icon' in $slots && 'default' in $slots"
      class="fb-ui-button__inner"
    >
      <div class="fb-ui-button__inner-icon">
        <slot name="icon" />
      </div>
      <div
        v-if="'default' in $slots"
        class="fb-ui-button__inner-label"
      >
        <slot />
      </div>
    </div>

    <div
      v-else-if="'icon' in $slots"
      class="fb-ui-button__icon"
    >
      <slot name="icon" />
    </div>

    <template v-else>
      <slot />
    </template>

    <span
      v-if="loading"
      class="fb-ui-button__loading"
    >
      <fb-ui-spinner
        :size="size"
        :variant="loader"
      />
    </span>
  </nuxt-link>

  <a
    v-else-if="href !== null"
    ref="element"
    :href="href"
    :data-variant="variant"
    :data-size="size"
    :class="classNames"
    role="button"
    @click.prevent="clickHandle($event)"
  >
    <div
      v-if="'icon' in $slots && 'default' in $slots"
      class="fb-ui-button__inner"
    >
      <div class="fb-ui-button__inner-icon">
        <slot name="icon" />
      </div>
      <div
        v-if="'default' in $slots"
        class="fb-ui-button__inner-label"
      >
        <slot />
      </div>
    </div>

    <div
      v-else-if="'icon' in $slots"
      class="fb-ui-button__icon"
    >
      <slot name="icon" />
    </div>

    <template v-else>
      <slot />
    </template>

    <span
      v-if="loading"
      class="fb-ui-button__loading"
    >
      <fb-ui-spinner
        :size="size"
        :variant="loader"
      />
    </span>
  </a>

  <button
    v-else-if="type === buttonTypes.SUBMIT"
    ref="element"
    :type="type"
    :data-variant="variant"
    :data-size="size"
    :class="classNames"
    :disabled="disabled"
    role="button"
  >
    <div
      v-if="'icon' in $slots && 'default' in $slots"
      class="fb-ui-button__inner"
    >
      <div class="fb-ui-button__inner-icon">
        <slot name="icon" />
      </div>
      <div
        v-if="'default' in $slots"
        class="fb-ui-button__inner-label"
      >
        <slot />
      </div>
    </div>

    <div
      v-else-if="'icon' in $slots"
      class="fb-ui-button__icon"
    >
      <slot name="icon" />
    </div>

    <template v-else>
      <slot />
    </template>

    <span
      v-if="loading"
      class="fb-ui-button__loading"
    >
      <fb-ui-spinner
        :size="size"
        :variant="loader"
      />
    </span>
  </button>

  <button
    v-else
    ref="element"
    :type="type"
    :data-variant="variant"
    :data-size="size"
    :class="classNames"
    :disabled="disabled"
    role="button"
    @click.prevent="clickHandle($event)"
  >
    <div
      v-if="'icon' in $slots && 'default' in $slots"
      class="fb-ui-button__inner"
    >
      <div class="fb-ui-button__inner-icon">
        <slot name="icon" />
      </div>
      <div
        v-if="'default' in $slots"
        class="fb-ui-button__inner-label"
      >
        <slot />
      </div>
    </div>

    <div
      v-else-if="'icon' in $slots"
      class="fb-ui-button__icon"
    >
      <slot name="icon" />
    </div>

    <template v-else>
      <slot />
    </template>

    <span
      v-if="loading"
      class="fb-ui-button__loading"
    >
      <fb-ui-spinner
        :size="size"
        :variant="loader"
      />
    </span>
  </button>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
  SetupContext,
} from '@vue/composition-api'

import { FbSizeTypes, FbUiVariantTypes, FbUiButtonButtonTypes, FbUiButtonVariantTypes } from '@/types'

import FbUiSpinner from './../FbSpinner/index.vue'

interface FbUiButtonPropsInterface {
  href: string | null
  to: string | unknown | null
  type: FbUiButtonButtonTypes
  size: FbSizeTypes
  variant: FbUiButtonVariantTypes
  block: boolean
  uppercase: boolean
  pill: boolean
  thick: boolean
  active: boolean
  disabled: boolean
  loading: boolean
}

export default defineComponent({

  name: 'FbUiButton',

  components: {
    FbUiSpinner,
  },

  props: {

    href: {
      type: String,
      default: null,
    },

    to: {
      type: [String, Object],
      default: null,
    },

    type: {
      type: String as PropType<FbUiButtonButtonTypes>,
      default: FbUiButtonButtonTypes.BUTTON,
      validator: (value: FbUiButtonButtonTypes) => {
        // The value must match one of these strings
        return [
          FbUiButtonButtonTypes.BUTTON,
          FbUiButtonButtonTypes.RESET,
          FbUiButtonButtonTypes.SUBMIT,
        ].includes(value)
      },
    },

    size: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.MEDIUM,
      validator: (value: FbSizeTypes) => {
        // The value must match one of these strings
        return [
          FbSizeTypes.EXTRA_SMALL,
          FbSizeTypes.SMALL,
          FbSizeTypes.MEDIUM,
          FbSizeTypes.LARGE,
        ].includes(value)
      },
    },

    variant: {
      type: String as PropType<FbUiButtonVariantTypes>,
      default: FbUiButtonVariantTypes.DEFAULT,
      validator: (value: FbUiButtonVariantTypes) => {
        // The value must match one of these strings
        return [
          FbUiButtonVariantTypes.DEFAULT,
          FbUiButtonVariantTypes.PRIMARY,
          FbUiButtonVariantTypes.SUCCESS,
          FbUiButtonVariantTypes.DANGER,
          FbUiButtonVariantTypes.WARNING,
          FbUiButtonVariantTypes.INFO,
          FbUiButtonVariantTypes.OUTLINE_DEFAULT,
          FbUiButtonVariantTypes.OUTLINE_PRIMARY,
          FbUiButtonVariantTypes.OUTLINE_SUCCESS,
          FbUiButtonVariantTypes.OUTLINE_DANGER,
          FbUiButtonVariantTypes.OUTLINE_WARNING,
          FbUiButtonVariantTypes.OUTLINE_INFO,
          FbUiButtonVariantTypes.LINK,
          FbUiButtonVariantTypes.LINK_DEFAULT,
        ].includes(value)
      },
    },

    block: {
      type: Boolean,
      default: false,
    },

    uppercase: {
      type: Boolean,
      default: false,
    },

    pill: {
      type: Boolean,
      default: false,
    },

    thick: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    loading: {
      type: Boolean,
      default: false,
    },

  },

  setup(props: FbUiButtonPropsInterface, context: SetupContext) {
    const element = ref<HTMLElement | null>(null)

    const classNames = computed<string[]>((): string[] => {
      const computedClassnames = []

      computedClassnames.push('fb-ui-button')

      if (props.block) {
        computedClassnames.push('fb-ui-button-block')
      }

      if (props.pill) {
        computedClassnames.push('fb-ui-button-pill')
      }

      if (props.thick) {
        computedClassnames.push('fb-ui-button-thick')
      }

      if (props.uppercase) {
        computedClassnames.push('fb-ui-button-uppercase')
      }

      if ('icon' in context.slots && !('default' in context.slots)) {
        computedClassnames.push('fb-ui-button-icon')
      }

      if (props.active) {
        computedClassnames.push('active')
      }

      if (props.loading) {
        computedClassnames.push('fb-ui-button-loading')
      }

      return computedClassnames
    })

    const spinnerVariant = computed<FbUiVariantTypes>((): FbUiVariantTypes => {
      if (
        props.variant === FbUiButtonVariantTypes.PRIMARY ||
        props.variant === FbUiButtonVariantTypes.OUTLINE_PRIMARY ||
        props.variant === FbUiButtonVariantTypes.LINK
      ) {
        return FbUiVariantTypes.PRIMARY
      } else if (
        props.variant === FbUiButtonVariantTypes.WARNING ||
        props.variant === FbUiButtonVariantTypes.OUTLINE_WARNING
      ) {
        return FbUiVariantTypes.WARNING
      } else if (
        props.variant === FbUiButtonVariantTypes.SUCCESS ||
        props.variant === FbUiButtonVariantTypes.OUTLINE_SUCCESS
      ) {
        return FbUiVariantTypes.SUCCESS
      } else if (
        props.variant === FbUiButtonVariantTypes.INFO ||
        props.variant === FbUiButtonVariantTypes.OUTLINE_INFO
      ) {
        return FbUiVariantTypes.INFO
      } else if (
        props.variant === FbUiButtonVariantTypes.DANGER ||
        props.variant === FbUiButtonVariantTypes.OUTLINE_DANGER
      ) {
        return FbUiVariantTypes.DANGER
      } else if (
        props.variant === FbUiButtonVariantTypes.DEFAULT ||
        props.variant === FbUiButtonVariantTypes.OUTLINE_DEFAULT ||
        props.variant === FbUiButtonVariantTypes.LINK_DEFAULT
      ) {
        return FbUiVariantTypes.DEFAULT
      }

      return FbUiVariantTypes.DEFAULT
    })

    const clickHandle = (e: Event): void => {
      context.emit('click', e)

      if (element.value !== null && typeof element.value.blur !== 'undefined') {
        element.value.blur()
      }
    }

    return {
      element,
      classNames,
      clickHandle,
      loader: spinnerVariant,
      buttonTypes: FbUiButtonButtonTypes,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
