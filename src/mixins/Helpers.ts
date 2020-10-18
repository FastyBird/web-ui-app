import get from 'lodash/get'

export default {

  methods: {

    /**
     * Check to see if a slot exists
     */
    slotExists(name: string): boolean {
      return (name in get(this, '$slots', []))
    },

    /**
     * Get element composed path
     */
    getEventElementsPath(event: Event): Array<EventTarget | Element> {
      let path = null

      if (Object.prototype.hasOwnProperty.call(event, 'path')) {
        path = get(event, 'path')
      } else if (Object.prototype.hasOwnProperty.call(event, 'composedPath')) {
        path = typeof event.composedPath === 'function' ? event.composedPath() : event.composedPath
      } else if (
        Object.prototype.hasOwnProperty.call(event, 'target') &&
        typeof event.target !== 'undefined' &&
        event.target !== null
      ) {
        path = []

        let current: HTMLElement | EventTarget | null = event.target

        while (current) {
          path.push(current)

          if (get(current, 'tagName', null) === 'HTML') {
            path.push(document)
            path.push(window)

            break
          }

          current = get(current, 'parentElement', null)
        }
      }

      return path
    },

  },

}
