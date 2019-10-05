// Components
import FbMdFormCheckbox from './components/Forms/FbMdCheckbox'
import FbMdFormCheckboxesGroup from './components/Forms/FbMdCheckboxesGroup'
import FbMdFormDatePicker from './components/Forms/FbMdDatePicker'
import FbMdFormInput from './components/Forms/FbMdInput'
import FbMdFormRadioButton from './components/Forms/FbMdRadioButton'
import FbMdFormRadioButtonsGroup from './components/Forms/FbMdRadioButtonsGroup'
import FbMdFormSelect from './components/Forms/FbMdSelect'
import FbMdFormTextArea from './components/Forms/FbMdTextArea'

// Layout components
import FbButton from './components/UI/FbButton'
import FbCardBox from './components/UI/FbCardBox'
import FbConfirmationWindow from './components/UI/FbConfirmationWindow'
import FbModalForm from './components/UI/FbModalForm'
import FbModalInfo from './components/UI/FbModalInfo'
import FbModalWindow from './components/UI/FbModalWindow'
import FbLoadingBox from './components/UI/FbLoadingBox'
import FbPageLoading from './components/UI/FbPageLoading'

// Store
import theme from './store/common'
import header from './store/header'

import ThemeHelpersMixin from './mixins/helpers'

import ThemeClickOutsideDirective from './directives/ClickOutside'

export default {

  install(Vue) {
    Vue.component('FbMdFormCheckbox', FbMdFormCheckbox)
    Vue.component('FbMdFormCheckboxesGroup', FbMdFormCheckboxesGroup)
    Vue.component('FbMdFormDatePicker', FbMdFormDatePicker)
    Vue.component('FbMdFormInput', FbMdFormInput)
    Vue.component('FbMdFormRadioButton', FbMdFormRadioButton)
    Vue.component('FbMdFormRadioButtonsGroup', FbMdFormRadioButtonsGroup)
    Vue.component('FbMdFormSelect', FbMdFormSelect)
    Vue.component('FbMdFormTextArea', FbMdFormTextArea)

    Vue.component('FbButton', FbButton)
    Vue.component('FbCardBox', FbCardBox)
    Vue.component('FbConfirmationWindow', FbConfirmationWindow)
    Vue.component('FbModalForm', FbModalForm)
    Vue.component('FbModalInfo', FbModalInfo)
    Vue.component('FbModalWindow', FbModalWindow)
    Vue.component('FbLoadingBox', FbLoadingBox)
    Vue.component('FbPageLoading', FbPageLoading)

    Vue.mixin(ThemeHelpersMixin)

    Vue.directive('clickOutside', ThemeClickOutsideDirective)
  },

}
