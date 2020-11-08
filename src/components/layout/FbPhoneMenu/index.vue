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
        v-show="show"
        class="fb-layout-phone-menu__items"
      >
        <portal-target
          class="fb-layout-phone-menu__heading"
          name="fb-layout-phone-menu-heading"
          tag="h4"
        />

        <portal-target
          class="fb-layout-phone-menu__items"
          name="fb-layout-phone-menu-items"
          @change="itemsPortalChanged"
        >
          <slot />
        </portal-target>

        <div
          v-if="showClose"
          class="fb-layout-phone-menu__cancel"
          @click="$emit('close', $event)"
        >
          {{ closeBtnText }}
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

export default defineComponent({

  name: 'FbLayoutPhoneMenu',

  props: {

    showClose: {
      type: Boolean,
      default: false,
    },

    closeBtnText: {
      type: String,
      required: false,
      default: 'Close',
    },

  },

  setup(props: { }, context: SetupContext) {
    const element = ref<HTMLElement | null>(null)

    const show = ref<boolean>(false)

    function itemsPortalChanged(newContent: boolean): void {
      show.value = newContent
    }

    watch(
      () => show.value,
      (val: boolean): void => {
        context.root.$nextTick(() => {
          if (val && element.value !== null) {
            element.value.focus()
          }
        })
      }
    )

    return {
      element,
      show,
      itemsPortalChanged,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
