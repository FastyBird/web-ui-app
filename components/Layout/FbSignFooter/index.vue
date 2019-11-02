<template>
  <div class="fb-sign-footer__container">
    <p v-if="!isSignIn">
      {{ $t('texts.alreadyHaveAccount') }}
      <nuxt-link :to="signInLink">
        {{ $t('buttons.signIn.title') }}
      </nuxt-link>
    </p>

    <p v-if="isSignIn">
      {{ $t('texts.withoutAccount') }}
      <nuxt-link :to="signUpLink">
        {{ $t('buttons.signUp.title') }}
      </nuxt-link>
    </p>

    <ul>
      <li>
        <nuxt-link
          v-if="isSignIn"
          :to="signUpLink"
        >
          {{ $t('buttons.signUp.title') }}
        </nuxt-link>
        <nuxt-link
          v-if="!isSignIn"
          :to="signInLink"
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
          v-if="authorWebsite !== null"
          :href="authorWebsite"
          target="_blank"
        >
          {{ authorName }}
        </a> 2017
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

    name: 'FbSignFooter',

    props: {

      signInLink: {
        type: String,
        default: '/sing-in',
      },

      signUpLink: {
        type: String,
        default: '/sing-up',
      },

      authorWebsite: {
        type: String,
        default: null,
      },

      authorName: {
        type: String,
        default: 'FastyBird s.r.o.',
      },

    },

    computed: {

      isSignIn() {
        return this.$route.path === this.signInLink
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>

<i18n src="./locales.json" />
