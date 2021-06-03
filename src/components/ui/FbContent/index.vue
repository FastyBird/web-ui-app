<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

import { FbSizeTypes } from '~/web-ui-theme.d.ts'

function sizeValidator(value: FbSizeTypes): boolean {
  // The value must match one of these strings
  return [
    FbSizeTypes.LARGE,
    FbSizeTypes.MEDIUM,
    FbSizeTypes.SMALL,
    FbSizeTypes.EXTRA_SMALL,
    FbSizeTypes.NONE,
  ].includes(value)
}

interface FbUiContentPropsInterface {
  mt: FbSizeTypes,
  mb: FbSizeTypes,
  ml: FbSizeTypes,
  mr: FbSizeTypes,
  mv: FbSizeTypes,
  mh: FbSizeTypes,
  pt: FbSizeTypes,
  pb: FbSizeTypes,
  pl: FbSizeTypes,
  pr: FbSizeTypes,
  pv: FbSizeTypes,
  ph: FbSizeTypes,

  [k: string]: FbSizeTypes
}

export default defineComponent({

  name: 'FbUiContent',

  props: {

    mt: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    mb: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    ml: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    mr: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    mv: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    mh: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    pt: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    pb: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    pl: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    pr: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    pv: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

    ph: {
      type: String as PropType<FbSizeTypes>,
      default: FbSizeTypes.NONE,
      validator: sizeValidator,
    },

  },

  setup(props: FbUiContentPropsInterface) {
    const classNames = []

    classNames.push('fb-ui-content')

    const margins = ['mt', 'mb', 'ml', 'mr', 'mv', 'mh']
    const paddings = ['pt', 'pb', 'pl', 'pr', 'pv', 'ph']

    Object.keys(props)
      .forEach((key): void => {
        if (margins.includes(key) && props[key] !== FbSizeTypes.NONE) {
          classNames.push(`fb-ui-content-${key}-${props[key]}`)
        }

        if (paddings.includes(key) && props[key] !== FbSizeTypes.NONE) {
          classNames.push(`fb-ui-content-${key}-${props[key]}`)
        }
      })

    return {
      classNames,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
