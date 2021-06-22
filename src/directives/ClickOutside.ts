let binded: { node: HTMLElement, callback: any }[] = []

const handler = (e: Event): void => {
  binded.forEach((el) => {
    if (
      typeof e.target !== 'undefined' &&
      e.target !== null &&
      // @ts-ignore
      !el.node.contains(e.target)
    ) {
      el.callback(e)
    }
  })
}

const addListener = (node: HTMLElement, callback: any): void => {
  if (!binded.length) {
    document.addEventListener('click', handler, false)
  }

  binded.push({ node, callback })
}

const removeListener = (node: HTMLElement, callback: any): void => {
  binded = binded.filter(el => el.node !== node ? true : !callback ? false : el.callback !== callback)

  if (!binded.length) {
    document.removeEventListener('click', handler, false)
  }
}

export default {

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  bind(el: HTMLElement, binding: any): void {
    removeListener(el, binding.value)

    if (typeof binding.value !== 'function') {
      if (process.env.NODE_ENV !== 'production') {
        throw Error(`ClickOutside only work with a function, received: v-${binding.name}="${binding.expression}"`)
      }
    } else {
      addListener(el, binding.value)
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  update(el: HTMLElement, binding: any): void {
    if (binding.value !== binding.oldValue) {
      removeListener(el, binding.oldValue)
      addListener(el, binding.value)
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  unbind(el: HTMLElement, binding: any): void {
    removeListener(el, binding.value)
  },

}
