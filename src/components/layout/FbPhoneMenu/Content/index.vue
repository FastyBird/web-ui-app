<template>
  <portal to="fb-layout-phone-menu-items">
    <slot />
  </portal>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutPhoneMenuContent',

})
</script>
