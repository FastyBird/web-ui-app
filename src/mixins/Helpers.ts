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
      if (get(event, 'path') !== null) {
        return get(event, 'path', [])
      } else if (get(event, 'composedPath') !== null) {
        // @ts-ignore
        return typeof event.composedPath === 'function' ? event.composedPath() : get(event, 'composedPath', [])
      } else if (get(event, 'target') !== null) {
        let path = []

        let current: HTMLElement | EventTarget | null = event.target

        while (current) {
          path.push(current)

          if (get(current, 'tagName', null) === 'HTML') {
            path.push(document)
            path.push(window)

            return path
          }

          current = get(current, 'parentElement', null)
        }
      }

      return []
    },

  },

}
