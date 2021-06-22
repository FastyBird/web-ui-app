import {
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'

export default {

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  inserted(el: HTMLElement, binding: any): void {
    if (binding.arg && binding.arg === 'reserve-scroll-bar-gap' && binding.value) {
      disableBodyScroll(el, {
        reserveScrollBarGap: true,
      })
    } else if (binding.value) {
      disableBodyScroll(el)
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
