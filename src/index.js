import {components} from './components'
import directives from './directives'

// Mixins
import ThemeHelpersMixin from './mixins/helpers'

// Layout components
import FbBottomNavigation from './components/Layout/FbBottomNavigation/index.vue'
import FbDesktopHeader from './components/Layout/FbDesktopHeader/index.vue'
import FbLogo from './components/Layout/FbLogo/index.vue'
import FbNavigation from './components/Layout/FbNavigation/index.vue'
import FbPhoneHeader from './components/Layout/FbPhoneHeader/index.vue'
import FbPhoneNavigation from './components/Layout/FbPhoneNavigation/index.vue'
import FbSignFooter from './components/Layout/FbSignFooter/index.vue'
import FbSignHeader from './components/Layout/FbSignHeader/index.vue'
import FbUserSideNavigation from './components/Layout/FbUserSideNavigation/index.vue'

const Plugin = {
  install: (Vue) => {
    for (let component in components) {
      // register components
      Vue.component(components[component].name, components[component])
    }

    for (let directive in directives) {
      Vue.directive(directive, directives[directive])
    }

    // Mixins
    Vue.mixin(ThemeHelpersMixin)
  },

  ...components,
  FbBottomNavigation,
  FbDesktopHeader,
  FbLogo,
  FbNavigation,
  FbPhoneHeader,
  FbPhoneNavigation,
  FbSignFooter,
  FbSignHeader,
  FbUserSideNavigation,
  ...directives
}

export default Plugin
