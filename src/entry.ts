import _Vue from 'vue';
import PortalVue from 'portal-vue'

// Import vue components
import * as components from '@/components/index';
// Import vue directives
import * as directives from '@/directives/index'
// Import vue mixins
import * as mixins from '@/mixins/index'
// Import types
import { InstallFunction } from '@/types'

// install function executed by Vue.use()
const install: InstallFunction = function installWebUiTheme(Vue: typeof _Vue) {
  if (install.installed) return;
  install.installed = true;

  Vue.use(PortalVue);

  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });

  Object.entries(directives).forEach(([directiveName, directive]) => {
    Vue.directive(directiveName, directive)
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(mixins).forEach(([_mixinName, mixin]) => {
    Vue.mixin(mixin)
  });
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
// @ts-ignore
if ('false' === process.env.ES_BUILD) {
  let GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = (global as any).Vue;
  }
  if (GlobalVue) {
    (GlobalVue as typeof _Vue).use(plugin);
  }
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/components/forms';
export * from '@/components/ui';
export * from '@/components/layout';
// Export TS interfaces
export * from '@/types'
