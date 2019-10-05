<template>
  <div class="fb-sign-footer__container">
    <p v-if="!isSignIn">
      {{ $t('texts.alreadyHaveAccount') }}
      <nuxt-link :to="_.get(this, '$coreLinks.signInLnk', '/sign-in')">
        {{ $t('buttons.signIn.title') }}
      </nuxt-link>
    </p>

    <p v-if="isSignIn">
      {{ $t('texts.withoutAccount') }}
      <nuxt-link :to="_.get(this, '$coreLinks.signUpLnk', '/sign-up')">
        {{ $t('buttons.signUp.title') }}
      </nuxt-link>
    </p>

    <ul>
      <li>
        <nuxt-link
          v-if="isSignIn"
          :to="_.get(this, '$coreLinks.signUpLnk', '/sing-up')"
        >
          {{ $t('buttons.signUp.title') }}
        </nuxt-link>
        <nuxt-link
          v-if="!isSignIn"
          :to="_.get(this, '$coreLinks.signInLnk', '/sign-in')"
        >
          {{ $t('buttons.signIn.title') }}
        </nuxt-link>
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
  export default {

    name: 'FbSignFooter',

    computed: {

      isSignIn() {
        return this.$route.path === this._.get(this, '$coreLinks.signInLnk', null)
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>

<i18n src="./locales.json" />
