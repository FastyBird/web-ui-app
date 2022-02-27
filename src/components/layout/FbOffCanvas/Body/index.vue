<template>
  <div class="fb-theme-layout-off-canvas-body__container">
    <div class="fb-theme-layout-off-canvas-body__header">
      <div class="fb-theme-layout-off-canvas-body__header-heading">
        <div class="fb-theme-layout-off-canvas-body__header-heading-title">
          <h4>
            <slot name="heading" />

            <small v-if="'subheading' in $slots">
              <slot name="subheading" />
            </small>
          </h4>
        </div>
      </div>

      <div class="fb-theme-layout-off-canvas-body__header-left-button">
        <slot name="left-button" />
      </div>

      <div class="fb-theme-layout-off-canvas-body__header-right-button">
        <slot name="right-button" />
      </div>
    </div>

    <div class="fb-theme-layout-off-canvas-body__body">
      <slot name="body" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  name: 'FbLayoutOffCanvasBody',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
