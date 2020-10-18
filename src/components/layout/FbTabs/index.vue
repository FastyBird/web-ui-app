<template>
  <div :class="['fb-layout-tabs__container', {'fb-layout-tabs__container-collapsed': collapsed}]">
    <portal-target
      class="fb-layout-tabs__container-inner"
      name="fb-layout-tabs-items"
    >
      <slot />
    </portal-target>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutTabs',

  props: {

    collapsed: {
      type: Boolean,
      default: true,
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
