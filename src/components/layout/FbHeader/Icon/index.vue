<template>
  <portal :to="portalName">
    <div
      :class="['fb-layout-header-icon__container', {'fb-layout-header-icon__container-left': left}, {'fb-layout-header-icon__container-right': right}]"
    >
      <slot />
    </div>
  </portal>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

import { FbMenuItemTypes } from '@/components/types'

interface FbHeaderIconPropsInterface {
  left: boolean
  right: boolean
}

export default defineComponent({

  name: 'FbLayoutHeaderIcon',

  props: {

    left: {
      type: Boolean,
      default: false,
    },

    right: {
      type: Boolean,
      default: false,
    },

  },

  setup(props: FbHeaderIconPropsInterface) {
    const portalName = `fb-layout-header-button-${props.left ? 'left' : ''}${props.right ? 'right' : ''}`

    return {
      portalName,
      menuItemTypes: FbMenuItemTypes,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
