<template>
  <portal to="fb-layout-header-sub-content">
    <slot />
  </portal>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutHeaderContent',

})
</script>
