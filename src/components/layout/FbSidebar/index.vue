<template>
  <div
    v-if="slotExists('header') || slotExists('content') || slotExists('footer')"
    class="fb-layout-sidebar__container"
  >
    <transition name="sidebar-overlay">
      <div
        v-if="!collapsed"
        class="fb-layout-sidebar__overlay"
        @click="$emit('collapse')"
      />
    </transition>

    <div :class="['fb-layout-sidebar__inner', {'fb-layout-sidebar__inner-open': !collapsed}]">
      <div
        v-if="slotExists('header')"
        class="fb-layout-sidebar__header"
      >
        <slot name="header" />
      </div>

      <div
        v-if="slotExists('content')"
        class="fb-layout-sidebar__content"
      >
        <slot name="content" />
      </div>

      <div
        v-if="slotExists('footer')"
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
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutSidebar',

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
