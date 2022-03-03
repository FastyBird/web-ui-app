<template>
  <teleport
    :to="`#${teleportTarget}`"
    :disabled="!teleport"
  >
    <template v-if="actionType === menuItemTypes.LINK">
      <a
        :href="action"
        :class="['fb-theme-layout-header-button__container', {'fb-theme-layout-header-button__container-small': small}, {'fb-theme-layout-header-button__container-textual': !('icon' in $slots)}, {'fb-theme-layout-header-button__container-left': left}, {'fb-theme-layout-header-button__container-right': right}]"
        @click.prevent="$emit('click', $event)"
      >
        <template v-if="'icon' in $slots">
          <slot name="icon" />
        </template>

        <template v-else>
          {{ label }}
        </template>
      </a>
    </template>

    <template v-else-if="actionType === menuItemTypes.VUE_LINK">
      <router-link
        :to="action"
        :class="['fb-theme-layout-header-button__container', {'fb-theme-layout-header-button__container-small': small}, {'fb-theme-layout-header-button__container-textual': !('icon' in $slots)}, {'fb-theme-layout-header-button__container-left': left}, {'fb-theme-layout-header-button__container-right': right}]"
        @click.prevent="$emit('click', $event)"
      >
        <template v-if="'icon' in $slots">
          <slot name="icon" />
        </template>

        <template v-else>
          {{ label }}
        </template>
      </router-link>
    </template>

    <template v-else-if="actionType === menuItemTypes.BUTTON">
      <button
        role="button"
        :class="['fb-theme-layout-header-button__container', {'fb-theme-layout-header-button__container-small': small}, {'fb-theme-layout-header-button__container-textual': !('icon' in $slots)}, {'fb-theme-layout-header-button__container-left': left}, {'fb-theme-layout-header-button__container-right': right}]"
        @click.prevent="$emit('click', $event)"
      >
        <template v-if="'icon' in $slots">
          <slot name="icon" />
        </template>

        <template v-else>
          {{ label }}
        </template>
      </button>
    </template>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue'

import { FbMenuItemTypes } from '@/types'

import { IFbLayoutHeaderButtonProps } from './types'

export default defineComponent({

  name: 'FbLayoutHeaderButton',

  props: {

    action: {
      type: [String, Object] as PropType<string | { [key: string]: any } | null>,
      default: null,
    },

    actionType: {
      type: String as PropType<FbMenuItemTypes>,
      default: FbMenuItemTypes.BUTTON,
      validator: (value: FbMenuItemTypes) => {
        // The value must match one of these strings
        return [
          FbMenuItemTypes.BUTTON,
          FbMenuItemTypes.LINK,
          FbMenuItemTypes.VUE_LINK,
        ].includes(value)
      },
    },

    label: {
      type: String as PropType<string | null>,
      default: null,
    },

    small: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    left: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    right: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    teleport: {
      type: Boolean as PropType<boolean>,
      default: true,
    },

  },

  emits: ['click'],

  setup(props: IFbLayoutHeaderButtonProps) {
    let teleportTarget = 'fb-layout-header-button'

    if (props.small) {
      teleportTarget = `${teleportTarget}-small`
    } else {
      teleportTarget = `${teleportTarget}-${props.left ? 'left' : ''}${props.right ? 'right' : ''}`
    }

    return {
      teleportTarget,
      menuItemTypes: FbMenuItemTypes,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import 'index';
</style>
