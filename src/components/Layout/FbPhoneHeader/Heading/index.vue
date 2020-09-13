<template>
  <div
    :class="['fb-phone-header-heading__container', {'fb-phone-header-heading__container-left': leftAlign}, {'fb-phone-header-heading__container-with-buttons': !fullRowHeading}]"
  >
    <fb-logo
      v-if="heading === null"
      :link="homeLink"
      class="fb-phone-header-heading__logo"
    />

    <div v-else-if="fullRowHeading">
      <h1
        v-if="heading !== null && subHeading === null"
        class="single-row"
      >
        {{ heading }}
      </h1>

      <h1 v-if="heading !== null && subHeading !== null">
        <span>{{ heading }}</span>
        <small>{{ subHeading }}</small>
      </h1>

      <button
        v-if="icon"
        role="button"
        class="fb-phone-header-heading__icon"
        @click.prevent="$emit('iconClicked')"
      >
        <font-awesome-icon :icon="icon" />
      </button>

      <div
        v-else-if="icon"
        class="fb-phone-header-heading__icon"
      >
        <font-awesome-icon :icon="icon" />
      </div>
    </div>

    <template v-else>
      <h1
        v-if="heading !== null && subHeading === null"
        class="single-row"
      >
        {{ heading }}
      </h1>

      <h1 v-if="heading !== null && subHeading !== null">
        <span>{{ heading }}</span>
        <small>{{ subHeading }}</small>
      </h1>
    </template>
  </div>
</template>

<script>
import FbLogo from '@/components/Layout/FbLogo'

export default {

  name: 'FbPhoneHeaderHeading',

  components: {
    FbLogo,
  },

  props: {

    heading: {
      type: String,
      default: null,
    },

    subHeading: {
      type: String,
      default: null,
    },

    icon: {
      type: String,
      default: null,
    },

    homeLink: {
      type: String,
      default: '/',
    },

    leftAlign: {
      type: Boolean,
      default: false,
    },

    fullRowHeading: {
      type: Boolean,
      default: false,
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
