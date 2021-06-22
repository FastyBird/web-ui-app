<template>
  <portal :to="portalName">
    <button
      role="button"
      :class="['fb-layout-header-menu-button__container', {'fb-layout-header-menu-button__container-small': small}, {'fb-layout-header-menu-button__container-textual': !'icon' in $slots}, {'fb-layout-header-menu-button__container-left': left}, {'fb-layout-header-menu-button__container-right': right}]"
      @click.prevent="$emit('toggleMenu', $event)"
    >
      <template v-if="'icon' in $slots">
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
} from '@vue/composition-api'

interface FbHeaderMenuButtonPropsInterface {
  label?: string
  link?: string
  small: boolean
  left: boolean
  right: boolean
}

export default defineComponent({

  name: 'FbLayoutHeaderMenuButton',

  props: {

    label: {
      type: String,
      default: 'Menu',
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

  setup(props: FbHeaderMenuButtonPropsInterface) {
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
