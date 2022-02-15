<template>
  <teleport
    :to="`#${teleportTarget}`"
    :disabled="!teleport"
  >
    <div :class="['fb-layout-header__spacer', {'fb-layout-header__spacer-left': left}, {'fb-layout-header__spacer-right': right}, {'fb-layout-header__spacer-center': !right && !left}]" />
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue'

import { IFbLayoutHeaderSpacerProps } from './types'

export default defineComponent({

  name: 'FbLayoutHeaderSpacer',

  props: {

    left: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    right: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    small: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    teleport: {
      type: Boolean as PropType<boolean>,
      default: true,
    },

  },

  setup(props: IFbLayoutHeaderSpacerProps) {
    let teleportTarget = 'fb-layout-header-button'

    if (props.small) {
      teleportTarget = `${teleportTarget}-small`
    } else {
      teleportTarget = `${teleportTarget}-${props.left ? 'left' : ''}${props.right ? 'right' : ''}`
    }

    return {
      teleportTarget,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
