<template>
  <portal to="fb-layout-header-heading">
    <div class="fb-layout-phone-header-heading__container">
      <div :class="['fb-layout-phone-header-heading__heading', `fb-layout-phone-header-heading__heading-${align}`]">
        <h1 v-if="subHeading === null">
          {{ heading }}
        </h1>

        <h1 v-if="subHeading !== null">
          <span>{{ heading }}</span>
          <small>{{ subHeading }}</small>
        </h1>
      </div>

      <div
        v-if="'icon' in $slots"
        class="fb-layout-phone-header-heading__icon"
      >
        <slot name="icon" />
      </div>
    </div>
  </portal>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbLayoutHeaderHeadingAlign } from '@/types'

export default defineComponent({

  name: 'FbLayoutHeaderHeading',

  props: {

    heading: {
      type: String as PropType<string>,
      required: true,
    },

    subHeading: {
      type: String as PropType<string>,
      default: null,
    },

    align: {
      type: String as PropType<FbLayoutHeaderHeadingAlign>,
      default: FbLayoutHeaderHeadingAlign.LEFT,
      validator: (value: FbLayoutHeaderHeadingAlign) => {
        // The value must match one of these strings
        return [FbLayoutHeaderHeadingAlign.LEFT, FbLayoutHeaderHeadingAlign.RIGHT, FbLayoutHeaderHeadingAlign.CENTER].includes(value)
      },
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
