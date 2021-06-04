<template>
  <nuxt-link
    v-if="to !== null"
    ref="element"
    :to="to"
    :data-variant="variant"
    :data-size="size"
    :class="classNames"
    role="button"
    @click.native="clickHandle($event)"
  >
    <slot />
  </nuxt-link>

  <a
    v-else-if="href !== null"
    ref="element"
    :href="href"
    :data-variant="variant"
    :data-size="size"
    :class="classNames"
    role="button"
    @click.native="clickHandle($event)"
  >
    <slot />
  </a>

  <button
    v-else
    ref="element"
    :type="type"
    :data-variant="variant"
    :data-size="size"
    :class="classNames"
    :disabled="disabled"
    role="button"
    @click="clickHandle($event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType, ref,
  SetupContext,
} from '@vue/composition-api'

import {FbSizeTypes, FbUiButtonButtonTypes, FbUiButtonVariantTypes} from '@/types/web-ui-theme'

interface FbUiButtonPropsInterface {
  href: string | null
  to: string | {} | null
  type: FbUiButtonButtonTypes
  size: FbSizeTypes
  block: boolean
  uppercase: boolean
  pill: boolean
  thick: boolean
  expander: boolean
  icon: boolean
  active: boolean
  disabled: boolean
}

export default defineComponent({

  name: 'FbUiButton',

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

    expander: {
      type: Boolean,
      default: false,
    },

    icon: {
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

  },

  setup(props: FbUiButtonPropsInterface, context: SetupContext) {
    const element = ref<HTMLElement | null>(null)

    const classNames = []

    classNames.push('fb-ui-button')

    if (props.block) {
      classNames.push('fb-ui-button-block')
    }

    if (props.pill) {
      classNames.push('fb-ui-button-pill')
    }

    if (props.thick) {
      classNames.push('fb-ui-button-thick')
    }

    if (props.expander) {
      classNames.push('fb-ui-button-expander')
    }

    if (props.uppercase) {
      classNames.push('fb-ui-button-uppercase')
    }

    if (props.icon) {
      classNames.push('fb-ui-button-icon')
    }

    if (props.active) {
      classNames.push('active')
    }

    function clickHandle(e: Event): void {
      context.emit('click', e)

      if (element.value !== null && typeof element.value.blur !== 'undefined') {
        element.value.blur()
      }
    }

    return {
      element,
      classNames,
      clickHandle,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
