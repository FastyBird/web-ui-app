<template>
  <portal :to="portalName">
    <a
      v-if="type === menuItemTypes.LINK"
      :href="link"
      :class="['fb-layout-header-button__container', {'fb-layout-header-button__container-small': small}, {'fb-layout-header-button__container-textual': !slotExists('icon')}, {'fb-layout-header-button__container-left': left}, {'fb-layout-header-button__container-right': right}]"
      @click.native="$emit('click', $event)"
    >
      <template v-if="slotExists('icon')">
        <slot name="icon" />
      </template>

      <template v-else>
        {{ label }}
      </template>
    </a>

    <nuxt-link
      v-else-if="type === menuItemTypes.NUXT_LINK"
      :href="link"
      :class="['fb-layout-header-button__container', {'fb-layout-header-button__container-small': small}, {'fb-layout-header-button__container-textual': !slotExists('icon')}, {'fb-layout-header-button__container-left': left}, {'fb-layout-header-button__container-right': right}]"
      @click.native="$emit('click', $event)"
    >
      <template v-if="slotExists('icon')">
        <slot name="icon" />
      </template>

      <template v-else>
        {{ label }}
      </template>
    </nuxt-link>

    <button
      v-else-if="type === menuItemTypes.BUTTON"
      role="button"
      :class="['fb-layout-header-button__container', {'fb-layout-header-button__container-small': small}, {'fb-layout-header-button__container-textual': !slotExists('icon')}, {'fb-layout-header-button__container-left': left}, {'fb-layout-header-button__container-right': right}]"
      @click.prevent="$emit('click', $event)"
    >
      <template v-if="slotExists('icon')">
        <slot name="icon" />
      </template>

      <template v-else>
        {{ label }}
      </template>
    </button>
  </portal>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbMenuItemType } from '@/components/types'

interface FbHeaderButtonPropsInterface {
  type: FbMenuItemType
  label?: string
  link?: string
  small: boolean
  left: boolean
  right: boolean
}

export default defineComponent({

  name: 'FbLayoutHeaderButton',

  props: {

    type: {
      type: String as PropType<FbMenuItemType>,
      required: true,
      validator: (value: FbMenuItemType) => {
        // The value must match one of these strings
        return [
          FbMenuItemType.BUTTON,
          FbMenuItemType.LINK,
          FbMenuItemType.NUXT_LINK,
        ].includes(value)
      },
    },

    label: {
      type: String,
      default: null,
    },

    link: {
      type: String,
      default: null,
    },

    small: {
      type: Boolean,
      default: false,
    },

    left: {
      type: Boolean,
      default: false,
    },

    right: {
      type: Boolean,
      default: false,
    },

  },

  setup(props: FbHeaderButtonPropsInterface) {
    let portalName = 'fb-layout-header-button'

    if (props.small) {
      portalName = `${portalName}-small`
    } else {
      portalName = `${portalName}-${props.left ? 'left' : ''}${props.right ? 'right' : ''}`
    }

    return {
      portalName,
      menuItemTypes: FbMenuItemType,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
