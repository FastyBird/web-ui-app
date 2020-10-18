<template>
  <portal :to="portalName">
    <div :class="['fb-layout-header__spacer', {'fb-layout-header__spacer-left': left}, {'fb-layout-header__spacer-right': right}, {'fb-layout-header__spacer-center': !right && !left}]" />
  </portal>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

interface FbHeaderSpacerPropsInterface {
  left: boolean
  right: boolean
  small: boolean
}

export default defineComponent({

  name: 'FbLayoutHeaderSpacer',

  props: {

    left: {
      type: Boolean,
      default: false,
    },

    right: {
      type: Boolean,
      default: false,
    },

    small: {
      type: Boolean,
      default: false,
    },

  },

  setup(props: FbHeaderSpacerPropsInterface) {
    let portalName = 'fb-layout-header-button'

    if (props.small) {
      portalName = `${portalName}-small`
    } else {
      portalName = `${portalName}-${props.left ? 'left' : ''}${props.right ? 'right' : ''}`
    }

    return {
      portalName,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
