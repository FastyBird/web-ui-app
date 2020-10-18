<template>
  <li class="fb-layout-navigation-item__container">
    <a
      v-if="type === menuItemTypes.LINK"
      :href="link"
      @click.native="$emit('click')"
    >
      <span
        v-if="slotExists('icon')"
        class="fb-layout-navigation-item__icon"
      >
        <slot name="icon" />
      </span>
      <span class="fb-layout-navigation-item__label">{{ label }}</span>
    </a>

    <nuxt-link
      v-else-if="type === menuItemTypes.NUXT_LINK"
      :to="link"
      active-class="fb-layout-navigation-item__active"
      @click.native="$emit('click')"
    >
      <span
        v-if="slotExists('icon')"
        class="fb-layout-navigation-item__icon"
      >
        <slot name="icon" />
      </span>
      <span class="fb-layout-navigation-item__label">{{ label }}</span>
    </nuxt-link>

    <button
      v-else-if="type === menuItemTypes.BUTTON"
      @click.prevent="$emit('click')"
    >
      <span
        v-if="slotExists('icon')"
        class="fb-layout-navigation-item__icon"
      >
        <slot name="icon" />
      </span>
      <span class="fb-layout-navigation-item__label">{{ label }}</span>
    </button>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbMenuItemType } from '@/components/types'

export default defineComponent({

  name: 'FbLayoutNavigationItem',

  props: {

    type: {
      type: String as PropType<FbMenuItemType>,
      required: true,
      validator: (value: FbMenuItemType) => {
        // The value must match one of these strings
        return [
          FbMenuItemType.BUTTON,
          FbMenuItemType.LINK,
          FbMenuItemType.NUXT_LINK,
        ].includes(value)
      },
    },

    label: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: null,
    },

  },

  setup() {
    return {
      menuItemTypes: FbMenuItemType,
    }
  },

})
</script>

<style lang="scss">
@import 'index';
</style>
