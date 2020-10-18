import {
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'

export default {

  inserted(el: HTMLElement, binding: any): void {
    if (binding.arg && binding.arg === 'reserve-scroll-bar-gap' && binding.value) {
      disableBodyScroll(el, {
        reserveScrollBarGap: true,
      })
    } else if (binding.value) {
      disableBodyScroll(el)
    }
  },

  componentUpdated(el: HTMLElement, binding: any): void {
    if (binding.oldValue === binding.value) {
      return
    }

    if (binding.arg && binding.arg === 'reserve-scroll-bar-gap' && binding.value) {
      disableBodyScroll(el, {
        reserveScrollBarGap: true,
      })
    } else if (binding.value) {
      disableBodyScroll(el)
    } else {
      enableBodyScroll(el)
    }
  },

  unbind(el: HTMLElement): void {
    enableBodyScroll(el)
  },

}
