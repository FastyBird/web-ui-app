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

      <button
        v-if="hasHeadingIcon() && (getHeadingIcon().callback || this.getHeadingIcon().link)"
        role="button"
        class="fb-phone-header-heading__icon"
        @click.prevent="iconClick()"
      >
        <font-awesome-icon :icon="getHeadingIcon().icon" />
      </button>
      <div
        v-else-if="hasHeadingIcon()"
        class="fb-phone-header-heading__icon"
      >
        <font-awesome-icon :icon="getHeadingIcon().icon" />
      </div>
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

    methods: {

      iconClick() {
        if (this.getHeadingIcon().callback && typeof this.getHeadingIcon().callback === 'function') {
          this.getHeadingIcon().callback()
        } else if (this.getHeadingIcon().link && typeof this.getHeadingIcon().link === 'string') {
          this.$router.push(this.getHeadingIcon().link)
        }
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
