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
        v-if="slotExists('icon')"
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

export enum FbHeaderHeadingAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export default defineComponent({

  name: 'FbLayoutHeaderHeading',

  props: {

    heading: {
      type: String,
      required: true,
    },

    subHeading: {
      type: String,
      default: null,
    },

    align: {
      type: String as PropType<FbHeaderHeadingAlign>,
      default: 'left',
      validator: (value: FbHeaderHeadingAlign) => {
        // The value must match one of these strings
        return [FbHeaderHeadingAlign.LEFT, FbHeaderHeadingAlign.RIGHT, FbHeaderHeadingAlign.CENTER].includes(value)
      },
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
