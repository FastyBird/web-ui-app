let binded: Array<{ node: HTMLElement, callback: any }> = []

function handler(e: Event) {
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

function addListener(node: HTMLElement, callback: any) {
  if (!binded.length) {
    document.addEventListener('click', handler, false)
  }

  binded.push({ node, callback })
}

function removeListener(node: HTMLElement, callback: any) {
  binded = binded.filter(el => el.node !== node ? true : !callback ? false : el.callback !== callback)

  if (!binded.length) {
    document.removeEventListener('click', handler, false)
  }
}

export default {

  bind(el: HTMLElement, binding: any): void {
    removeListener(el, binding.value)

    if (typeof binding.value !== 'function') {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(`ClickOutside only work with a function, received: v-${binding.name}="${binding.expression}"`)
      }
    } else {
      addListener(el, binding.value)
    }
  },

  update(el: HTMLElement, binding: any): void {
    if (binding.value !== binding.oldValue) {
      removeListener(el, binding.oldValue)
      addListener(el, binding.value)
    }
  },

  unbind(el: HTMLElement, binding: any): void {
    removeListener(el, binding.value)
  },

}
