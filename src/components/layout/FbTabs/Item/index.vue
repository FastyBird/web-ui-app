<template>
  <div :class="['fb-layout-tabs-item__container', {'fb-layout-tabs-item__container-active': active}]">
    <fb-ui-button
      v-if="type === menuItemTypes.LINK"
      :href="link"
      :active="active"
      block
      variant="link"
      size="lg"
    >
      <span
        v-if="slotExists('icon')"
        class="fb-layout-tabs-item__icon"
      >
        <slot name="icon" />
      </span>
      <span class="fb-layout-tabs-item__label">{{ label }}</span>
    </fb-ui-button>

    <fb-ui-button
      v-else-if="type === menuItemTypes.NUXT_LINK"
      :to="link"
      :active="active"
      block
      variant="link"
      size="lg"
    >
      <span
        v-if="slotExists('icon')"
        class="fb-layout-tabs-item__icon"
      >
        <slot name="icon" />
      </span>
      <span class="fb-layout-tabs-item__label">{{ label }}</span>
    </fb-ui-button>

    <fb-ui-button
      v-else-if="type === menuItemTypes.BUTTON"
      block
      variant="link"
      size="lg"
      type="button"
      @click.prevent="$emit('click', $event)"
    >
      <span
        v-if="slotExists('icon')"
        class="fb-layout-tabs-item__icon"
      >
        <slot name="icon" />
      </span>
      <span class="fb-layout-tabs-item__label">{{ label }}</span>
    </fb-ui-button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbMenuItemType } from '@/components/types'

export default defineComponent({

  name: 'FbLayoutTabsItem',

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
      default: null,
    },

    link: {
      type: String,
      default: null,
    },

    active: {
      type: Boolean,
      default: false,
    },

  },

  setup() {
    return {
      menuItemTypes: FbMenuItemType,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
