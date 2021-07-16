<template>
  <div class="fb-layout-header__container">
    <portal-target
      name="fb-layout-header-button-small"
      multiple
      :class="['fb-layout-header__buttons-small', {'fb-layout-header__buttons-small-expanded': hasSmallButtons}]"
      @change="smallButtonsPortalChanged"
    />

    <div class="fb-layout-header__heading">
      <portal-target
        name="fb-layout-header-heading"
        class="fb-layout-header__heading-heading"
        slim
      >
        <slot name="logo" />
      </portal-target>

      <portal-target
        name="fb-layout-header-button-left"
        class="fb-layout-header__heading-button-left"
        slim
      />

      <portal-target
        name="fb-layout-header-button-right"
        class="fb-layout-header__heading-button-right"
        slim
      >
        <button
          v-if="!menuHidden"
          :class="['fb-layout-header__button-hamburger', { 'fb-layout-header__button-hamburger-collapsed': menuCollapsed }]"
          type="button"
          @click.prevent="$emit('toggleMenu', $event)"
        >
          <span class="fb-layout-header__button-hamburger-label">Toggle navigation</span>
          <span class="fb-layout-header__button-hamburger-bars">
            <span class="fb-layout-header__button-hamburger-bars-line fb-layout-header__button-hamburger-bars-line-1" />
            <span class="fb-layout-header__button-hamburger-bars-line fb-layout-header__button-hamburger-bars-line-2" />
            <span class="fb-layout-header__button-hamburger-bars-line fb-layout-header__button-hamburger-bars-line-3" />
          </span>
          <span class="fb-layout-header__button-hamburger-bars fb-layout-header__button-hamburger-bars-x">
            <span class="fb-layout-header__button-hamburger-bars-line fb-layout-header__button-hamburger-bars-line-4" />
            <span class="fb-layout-header__button-hamburger-bars-line fb-layout-header__button-hamburger-bars-line-5" />
          </span>
        </button>
      </portal-target>
    </div>

    <portal-target
      name="fb-layout-header-sub-content"
      multiple
      :class="['fb-layout-header__content', {'fb-layout-header__content-expanded': hasContent}]"
      @change="contentPortalChanged"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutHeader',

  props: {

    menuHidden: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    menuCollapsed: {
      type: Boolean as PropType<boolean>,
      default: true,
    },

  },

  setup() {
    const hasSmallButtons = ref<boolean>(false)

    function smallButtonsPortalChanged(newContent: boolean): void {
      hasSmallButtons.value = newContent
    }

    const hasContent = ref<boolean>(false)

    function contentPortalChanged(newContent: boolean): void {
      hasContent.value = newContent
    }

    return {
      hasSmallButtons,
      smallButtonsPortalChanged,
      hasContent,
      contentPortalChanged,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
