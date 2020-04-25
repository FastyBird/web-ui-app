<template>
  <div class="fb-sign-footer__container">
    <p v-if="isSignUp">
      {{ alreadyHaveAccountText }}
      <nuxt-link :to="signInLink">
        {{ signInLabel }}
      </nuxt-link>
    </p>

    <p v-else>
      {{ withoutAccountText }}
      <nuxt-link :to="signUpLink">
        {{ signUpLabel }}
      </nuxt-link>
    </p>

    <ul>
      <li>
        <nuxt-link :to="signUpLink">
          {{ signUpLabel }}
        </nuxt-link>
      </li>
      <li>|</li>
      <li>
        <a href="#">{{ privacyPolicyLabel }}</a>
      </li>
      <li>|</li>
      <li>
        <a href="#">{{ termsLabel }}</a>
      </li>
      <li>|</li>
      <li>
        <a href="#">{{ cookiePolicyLabel }}</a>
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

    signInLabel: {
      type: String,
      default: 'Sign in',
    },

    signUpLabel: {
      type: String,
      default: 'Sign up',
    },

    privacyPolicyLabel: {
      type: String,
      default: 'Privacy Policy',
    },

    termsLabel: {
      type: String,
      default: 'Terms',
    },

    cookiePolicyLabel: {
      type: String,
      default: 'Cookie Policy',
    },

    alreadyHaveAccountText: {
      type: String,
      default: 'Already have an account?',
    },

    withoutAccountText: {
      type: String,
      default: 'Don\'t have an account?',
    },

  },

  computed: {

    isSignUp() {
      return this.$route.path === this.signUpLink
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
