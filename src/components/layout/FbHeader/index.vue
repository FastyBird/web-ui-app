<template>
  <div class="fb-layout-header__container">
    <div
      id="fb-layout-header-button-small"
      ref="buttonSmall"
      :class="['fb-layout-header__buttons-small', {'fb-layout-header__buttons-small-expanded': hasSmallButtons}]"
    >
      <slot name="button-small" />
    </div>

    <div class="fb-layout-header__heading">
      <div
        id="fb-layout-header-heading"
        class="fb-layout-header__heading-heading"
      >
        <slot name="heading">
          <slot name="logo" />
        </slot>
      </div>

      <div
        id="fb-layout-header-button-left"
        class="fb-layout-header__heading-button-left"
      >
        <slot name="button-left" />
      </div>

      <div
        id="fb-layout-header-button-right"
        class="fb-layout-header__heading-button-right"
      >
        <slot name="button-right">
          <button
            v-if="!menuHidden"
            :class="['fb-layout-header__button-hamburger', { 'fb-layout-header__button-hamburger-opened': !menuCollapsed }]"
            type="button"
            @click.prevent="$emit('toggleMenu', $event)"
          >
            <span class="fb-layout-header__button-hamburger-bars" />
            <span class="fb-layout-header__button-hamburger-bars" />
            <span class="fb-layout-header__button-hamburger-bars" />
            <span class="fb-layout-header__button-hamburger-label">Toggle navigation</span>
          </button>
        </slot>
      </div>
    </div>

    <div
      id="fb-layout-header-sub-content"
      ref="subContent"
      :class="['fb-layout-header__content', {'fb-layout-header__content-expanded': hasContent}]"
    >
      <slot name="sub-content" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  ref,
  watch,
} from 'vue'

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

  emits: ['toggleMenu'],

  setup() {
    const buttonSmall = ref<HTMLElement | null>(null)
    const subContent = ref<HTMLElement | null>(null)

    const hasSmallButtons = ref<boolean>(false)
    const hasContent = ref<boolean>(false)

    onMounted((): void => {
      hasSmallButtons.value = buttonSmall.value !== null && buttonSmall.value?.children.length > 0
      hasContent.value = subContent.value !== null && subContent.value?.children.length > 0
    })

    watch(
        () => buttonSmall.value,
        (element: HTMLElement | null) => {
          hasSmallButtons.value = element !== null && element?.children.length > 0
        },
    )

    watch(
        () => subContent.value,
        (element: HTMLElement | null) => {
          hasContent.value = element !== null && element?.children.length > 0
        },
    )

    return {
      buttonSmall,
      subContent,

      hasSmallButtons,
      hasContent,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
