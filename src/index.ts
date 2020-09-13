import { VueConstructor } from 'vue'

// Forms components
// @ts-ignore
import FbFormInput from './components/Forms/FbInput'
// @ts-ignore
import FbFormSelect from './components/Forms/FbSelect'
// @ts-ignore
import FbFormTextArea from './components/Forms/FbTextArea'
// @ts-ignore
import FbFormCheckboxesGroup from './components/Forms/FbCheckboxesGroup'
// @ts-ignore
import FbFormRadioButton from './components/Forms/FbRadioButton'
// @ts-ignore
import FbFormRadioButtonsGroup from './components/Forms/FbRadioButtonsGroup'

// MD forms components
// @ts-ignore
import FbFormCheckbox from './components/Forms/FbCheckbox'
// @ts-ignore
import FbMdFormDatePicker from './components/Forms/FbMdDatePicker'
// @ts-ignore
import FbMdFormInput from './components/Forms/FbMdInput'
// @ts-ignore
import FbMdFormSelect from './components/Forms/FbMdSelect'
// @ts-ignore
import FbMdFormTextArea from './components/Forms/FbMdTextArea'

// UI components
// @ts-ignore
import FbAlert from './components/UI/FbAlert'
// @ts-ignore
import FbButton from './components/UI/FbButton'
// @ts-ignore
import FbCardBox from './components/UI/FbCardBox'
// @ts-ignore
import FbConfirmationWindow from './components/UI/FbConfirmationWindow'
// @ts-ignore
import FbContent from './components/UI/FbContent'
// @ts-ignore
import FbModalForm from './components/UI/FbModalForm'
// @ts-ignore
import FbModalInfo from './components/UI/FbModalInfo'
// @ts-ignore
import FbModalWindow from './components/UI/FbModalWindow'
// @ts-ignore
import FbDivider from './components/UI/FbDivider'
// @ts-ignore
import FbSwitchElement from './components/UI/FbSwitchElement'
// @ts-ignore
import FbLoadingBox from './components/UI/FbLoadingBox'
// @ts-ignore
import FbPageLoading from './components/UI/FbPageLoading'
// @ts-ignore
import FbResultErr from './components/UI/FbResultErr'
// @ts-ignore
import FbResultOk from './components/UI/FbResultOk'
// @ts-ignore
import FbSpinner from './components/UI/FbSpinner'
// @ts-ignore
import FbTransitionExpand from './components/UI/FbTransitionExpand'

// Mixins
import ThemeHelpersMixin from './mixins/helpers'

// Directives
import ThemeClickOutsideDirective from './directives/ClickOutside'
import ThemeBodyScrollLockDirective from './directives/BodyScrollLock'

const Plugin = {
  installed: false,

  install(
      Vue: VueConstructor,
  ) {
    // Classic design
    Vue.component('FbFormInput', FbFormInput)
    Vue.component('FbFormSelect', FbFormSelect)
    Vue.component('FbFormTextArea', FbFormTextArea)

    Vue.component('FbFormCheckbox', FbFormCheckbox)
    Vue.component('FbFormCheckboxesGroup', FbFormCheckboxesGroup)
    Vue.component('FbFormRadioButton', FbFormRadioButton)
    Vue.component('FbFormRadioButtonsGroup', FbFormRadioButtonsGroup)

    // Material design
    Vue.component('FbMdFormDatePicker', FbMdFormDatePicker)
    Vue.component('FbMdFormInput', FbMdFormInput)
    Vue.component('FbMdFormSelect', FbMdFormSelect)
    Vue.component('FbMdFormTextArea', FbMdFormTextArea)

    // UI components
    Vue.component('FbAlert', FbAlert)
    Vue.component('FbButton', FbButton)
    Vue.component('FbCardBox', FbCardBox)
    Vue.component('FbConfirmationWindow', FbConfirmationWindow)
    Vue.component('FbContent', FbContent)
    Vue.component('FbModalForm', FbModalForm)
    Vue.component('FbModalInfo', FbModalInfo)
    Vue.component('FbModalWindow', FbModalWindow)
    Vue.component('FbDivider', FbDivider)
    Vue.component('FbSwitchElement', FbSwitchElement)
    Vue.component('FbLoadingBox', FbLoadingBox)
    Vue.component('FbPageLoading', FbPageLoading)
    Vue.component('FbResultErr', FbResultErr)
    Vue.component('FbResultOk', FbResultOk)
    Vue.component('FbSpinner', FbSpinner)
    Vue.component('FbTransitionExpand', FbTransitionExpand)

    // Mixins
    Vue.mixin(ThemeHelpersMixin)

    // Directives
    Vue.directive('clickOutside', ThemeClickOutsideDirective)
    Vue.directive('bodyScrollLock', ThemeBodyScrollLockDirective)
  },
}

// Auto install
if (typeof window !== 'undefined' && Object.prototype.hasOwnProperty.call(window, 'Vue')) {
  (window as any).Vue.use(Plugin.install)
}

export default Plugin
