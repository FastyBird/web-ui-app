<template>
  <div
    v-if="'header' in $slots || 'content' in $slots || 'footer' in $slots"
    class="fb-layout-sidebar__container"
  >
    <transition name="sidebar-overlay">
      <div
        v-if="!collapsed"
        class="fb-layout-sidebar__overlay"
        @click.prevent="$emit('collapse', $event)"
      />
    </transition>

    <div :class="['fb-layout-sidebar__inner', {'fb-layout-sidebar__inner-open': !collapsed}]">
      <div
        v-if="'header' in $slots"
        class="fb-layout-sidebar__header"
      >
        <slot name="header" />
      </div>

      <div
        v-if="'content' in $slots"
        class="fb-layout-sidebar__content"
      >
        <slot name="content" />
      </div>

      <div
        v-if="'footer' in $slots"
        class="fb-layout-sidebar__footer"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutSidebar',

  props: {

    collapsed: {
      type: Boolean as PropType<boolean>,
      default: true,
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
