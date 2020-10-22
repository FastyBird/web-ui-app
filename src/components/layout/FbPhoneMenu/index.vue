<template>
  <div
    ref="element"
    class="fb-layout-phone-menu__container"
    @keyup.esc="$emit('close', $event)"
  >
    <transition name="fb-phone-menu-backdrop">
      <div
        v-if="show"
        class="fb-layout-phone-menu__backdrop"
        @click="close"
      />
    </transition>

    <transition name="fb-phone-menu-items">
      <div
        v-if="show"
        class="fb-layout-phone-menu__items"
      >
        <h4
          v-if="slotExists('heading')"
          class="fb-layout-phone-menu__heading"
        >
          <slot name="heading" />
        </h4>

        <div class="fb-layout-phone-menu__buttons">
          <slot />
        </div>

        <div
          v-if="showClose"
          class="fb-layout-phone-menu__cancel"
          @click="$emit('close', $event)"
        >
          {{ closeBtnLabel }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  SetupContext,
  watch,
} from '@vue/composition-api'

interface FbLayoutPhoneMenuPropsInterface {
  show: boolean
  showClose: boolean
  closeBtnLabel: string
}

export default defineComponent({

  name: 'FbLayoutPhoneMenu',

  props: {

    show: {
      type: Boolean,
      default: false,
    },

    showClose: {
      type: Boolean,
      default: false,
    },

    closeBtnLabel: {
      type: String,
      required: false,
      default: 'Close',
    },

  },

  setup(props: FbLayoutPhoneMenuPropsInterface, context: SetupContext) {
    const element = ref<HTMLElement | null>(null)

    watch(() => props.show, (val: Boolean): void => {
      if (val && element.value !== null) {
        context.root.$nextTick(() => {
          element.value.focus()
        })
      }
    });

    return {
      element,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
