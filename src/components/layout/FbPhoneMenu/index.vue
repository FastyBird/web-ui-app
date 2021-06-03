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
        @click.prevent="$emit('close', $event)"
      />
    </transition>

    <transition name="fb-phone-menu-content">
      <div
        v-show="show"
        class="fb-layout-phone-menu__inner"
      >
        <div class="fb-layout-phone-menu__content">
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
        </div>

        <portal-target
          v-if="showClose"
          class="fb-layout-phone-menu__footer"
          name="fb-layout-phone-menu-button"
        >
          <fb-ui-button
            block
            variant="link"
            size="lg"
            type="button"
            @click="$emit('close', $event)"
          >
            {{ closeBtnText }}
          </fb-ui-button>
        </portal-target>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  ref,
  watch,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutPhoneMenu',

  props: {

    showClose: {
      type: Boolean,
      default: true,
    },

    closeBtnText: {
      type: String,
      required: false,
      default: 'Close',
    },

  },

  setup() {
    const element = ref<HTMLElement | null>(null)

    const show = ref<boolean>(false)

    function itemsPortalChanged(newContent: boolean): void {
      show.value = newContent
    }

    watch(
      () => show.value,
      (val: boolean): void => {
        nextTick(() => {
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
