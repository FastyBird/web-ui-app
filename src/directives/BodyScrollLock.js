import BodyScrollLock from 'body-scroll-lock'

const RESERVE_SCROLL_BAR_GAP = 'reserve-scroll-bar-gap'

const options = {
  reserveScrollBarGap: true,
}

export default {

  inserted: (el, binding) => {
    if (binding.arg && binding.arg === RESERVE_SCROLL_BAR_GAP && binding.value) {
      BodyScrollLock.disableBodyScroll(el, options)
    } else if (binding.value) {
      BodyScrollLock.disableBodyScroll(el)
    }
  },

  componentUpdated: (el, binding) => {
    if (binding.oldValue === binding.value) {
      return
    }

    if (binding.arg && binding.arg === RESERVE_SCROLL_BAR_GAP && binding.value) {
      BodyScrollLock.disableBodyScroll(el, options)
    } else if (binding.value) {
      BodyScrollLock.disableBodyScroll(el)
    } else {
      BodyScrollLock.enableBodyScroll(el)
    }
  },

  unbind: (el) => {
    BodyScrollLock.enableBodyScroll(el)
  },

}
