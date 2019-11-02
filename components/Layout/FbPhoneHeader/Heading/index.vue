<template>
  <div
    :class="['fb-phone-header-heading__container', {'fb-phone-header-heading__container-left': hasHiddenHamburger() && !hasLeftButton()}, {'fb-phone-header-heading__container-with-buttons': !hasFullRowHeading()}]"
  >
    <fb-logo
      v-if="!hasHeading()"
      :link="homeLink"
      class="fb-phone-header-heading__logo"
    />

    <div v-else-if="hasFullRowHeading()">
      <div
        v-if="hasHeadingIcon()"
        class="fb-phone-header-heading__icon"
      >
        <font-awesome-icon :icon="getHeadingIcon()" />
      </div>

      <h1
        v-if="hasHeading() && getSubHeading() === null"
        class="single-row"
      >
        {{ getHeading() }}
      </h1>

      <h1 v-if="hasHeading() && getSubHeading() !== null">
        <span>{{ getHeading() }}</span>
        <small>{{ getSubHeading() }}</small>
      </h1>
    </div>

    <template v-else>
      <h1
        v-if="hasHeading() && getSubHeading() === null"
        class="single-row"
      >
        {{ getHeading() }}
      </h1>

      <h1 v-if="hasHeading() && getSubHeading() !== null">
        <span>{{ getHeading() }}</span>
        <small>{{ getSubHeading() }}</small>
      </h1>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  const FbLogo = () => import('./../../FbLogo')

  export default {

    name: 'FbPhoneHeaderHeading',

    components: {
      FbLogo,
    },

    props: {

      homeLink: {
        type: String,
        default: '/',
      },

    },

    computed: {

      ...mapGetters('header', [
        'hasHeading',
        'getHeading',
        'getSubHeading',
        'hasHiddenHamburger',
        'hasLeftButton',
        'hasFullRowHeading',
        'hasHeadingIcon',
        'getHeadingIcon',
      ]),

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
