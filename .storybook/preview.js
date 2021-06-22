import '!style-loader!css-loader!sass-loader!./storybook-styles.css';

import Vue from 'vue'

import VueCompositionApi from '@vue/composition-api'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBell,
  faChartBar,
  faCog,
  faEnvelope,
  faExclamation,
  faInfo,
  faInfoCircle,
  faMagic,
  faNewspaper,
  faPaperPlane,
  faTrash,
  faUser,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { BodyScrollLock } from '../src/directives'

library.add(faBell)
library.add(faChartBar)
library.add(faCog)
library.add(faEnvelope)
library.add(faExclamation)
library.add(faInfo)
library.add(faInfoCircle)
library.add(faMagic)
library.add(faNewspaper)
library.add(faPaperPlane)
library.add(faTrash)
library.add(faUser)
library.add(faUserSecret)

Vue.use(VueCompositionApi)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.directive('BodyScrollLock', BodyScrollLock)

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
