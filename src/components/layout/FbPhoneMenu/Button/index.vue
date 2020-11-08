<template>
  <portal to="fb-layout-phone-menu-button">
    <slot />
  </portal>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutPhoneMenuButton',

  props: {

    closeBtnText: {
      type: String,
      required: false,
      default: 'Close',
    },

  },

})
</script>
