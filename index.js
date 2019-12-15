// Components
import FbFormInput from './components/Forms/FbInput'
import FbFormSelect from './components/Forms/FbSelect'
import FbFormTextArea from './components/Forms/FbTextArea'
import FbFormCheckboxesGroup from './components/Forms/FbCheckboxesGroup'
import FbFormRadioButton from './components/Forms/FbRadioButton'
import FbFormRadioButtonsGroup from './components/Forms/FbRadioButtonsGroup'

// Forms
import FbFormCheckbox from './components/Forms/FbCheckbox'
import FbMdFormDatePicker from './components/Forms/FbMdDatePicker'
import FbMdFormInput from './components/Forms/FbMdInput'
import FbMdFormSelect from './components/Forms/FbMdSelect'
import FbMdFormTextArea from './components/Forms/FbMdTextArea'

// Layout components
import FbButton from './components/UI/FbButton'
import FbCardBox from './components/UI/FbCardBox'
import FbConfirmationWindow from './components/UI/FbConfirmationWindow'
import FbModalForm from './components/UI/FbModalForm'
import FbModalInfo from './components/UI/FbModalInfo'
import FbModalWindow from './components/UI/FbModalWindow'
import FbDivider from './components/UI/FbDivider'
import FbSwitchElement from './components/UI/FbSwitchElement'
import FbLoadingBox from './components/UI/FbLoadingBox'
import FbPageLoading from './components/UI/FbPageLoading'
import FbSpinner from './components/UI/FbSpinner'

import ThemeHelpersMixin from './mixins/helpers'

import ThemeClickOutsideDirective from './directives/ClickOutside'
import ThemeBodyScrollLockDirective from './directives/BodyScrollLock'

export default {

  install(Vue) {
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

    // Layout components
    Vue.component('FbButton', FbButton)
    Vue.component('FbCardBox', FbCardBox)
    Vue.component('FbConfirmationWindow', FbConfirmationWindow)
    Vue.component('FbModalForm', FbModalForm)
    Vue.component('FbModalInfo', FbModalInfo)
    Vue.component('FbModalWindow', FbModalWindow)
    Vue.component('FbDivider', FbDivider)
    Vue.component('FbSwitchElement', FbSwitchElement)
    Vue.component('FbLoadingBox', FbLoadingBox)
    Vue.component('FbPageLoading', FbPageLoading)
    Vue.component('FbSpinner', FbSpinner)

    Vue.mixin(ThemeHelpersMixin)

    Vue.directive('clickOutside', ThemeClickOutsideDirective)
    Vue.directive('bodyScrollLock', ThemeBodyScrollLockDirective)
  },

}
