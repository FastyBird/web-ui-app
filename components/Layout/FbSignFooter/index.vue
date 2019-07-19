<template web>
  <div class="fb-sign-footer__container">
    <p v-if="!isSignIn">
      {{ $t('texts.alreadyHaveAccount') }}
      <router-link :to="_.get(this, '$coreLinks.signInLnk', [])">
        {{ $t('buttons.signIn.title') }}
      </router-link>
    </p>

    <p v-if="isSignIn">
      {{ $t('texts.withoutAccount') }}
      <router-link :to="_.get(this, '$coreLinks.signUpLnk', [])">
        {{ $t('buttons.signUp.title') }}
      </router-link>
    </p>

    <ul>
      <li>
        <router-link
          v-if="isSignIn"
          :to="_.get(this, '$coreLinks.signUpLnk', [])"
        >
          {{ $t('buttons.signUp.title') }}
        </router-link>
        <router-link
          v-if="!isSignIn"
          :to="_.get(this, '$coreLinks.signInLnk', [])"
        >
          {{ $t('buttons.signIn.title') }}
        </router-link>
      </li>
      <li>|</li>
      <li>
        <a href="#">{{ $t('buttons.privacyPolicy.title') }}</a>
      </li>
      <li>|</li>
      <li>
        <a href="#">{{ $t('buttons.termsOfUse.title') }}</a>
      </li>
      <li>|</li>
      <li>
        <a href="#">{{ $t('buttons.cookiePolicy.title') }}</a>
      </li>
      <li class="fb-sign-footer__owner">
        &copy;
        <a
          v-if="_.get(this, '$authorWebsite', null) !== null"
          :href="_.get(this, '$authorWebsite', null)"
          target="_blank"
        >
          {{ _.get(this, '$authorName', null) }}
        </a> 2017
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {

    name: 'FbSignFooter',

    data() {
      return {
        isSignIn: true,
      }
    },

    computed: {

      ...mapState({
        route: state => state.route,
      }),

    },

    watch: {

      route(val) {
        this.isSignIn = val.path === this._.get(this, '$coreLinks.signInLnk', null)
      },

    },

    created() {
      this.isSignIn = this.$router.currentRoute.path === this._.get(this, '$coreLinks.signInLnk', null)
    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>

<i18n src="./locales.json" />
