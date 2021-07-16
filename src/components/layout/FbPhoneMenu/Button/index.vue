<template>
  <portal to="fb-layout-phone-menu-button">
    <slot />
  </portal>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutPhoneMenuButton',

  props: {

    closeBtnText: {
      type: String as PropType<string>,
      required: false,
      default: 'Close',
    },

  },

})
</script>
