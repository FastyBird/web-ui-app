<template>
  <teleport
    :to="`#${teleportTarget}`"
    :disabled="!teleport"
  >
    <div
      :class="['fb-layout-header-icon__container', {'fb-layout-header-icon__container-left': left}, {'fb-layout-header-icon__container-right': right}]"
    >
      <slot />
    </div>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue'

import { FbMenuItemTypes } from '@/types'

import { IFbLayoutHeaderIconProps } from './types'

export default defineComponent({

  name: 'FbLayoutHeaderIcon',

  props: {

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

  setup(props: IFbLayoutHeaderIconProps) {
    const teleportTarget = `fb-layout-header-button-${props.left ? 'left' : ''}${props.right ? 'right' : ''}`

    return {
      teleportTarget,
      menuItemTypes: FbMenuItemTypes,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
