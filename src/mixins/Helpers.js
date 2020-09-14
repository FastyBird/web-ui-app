export default {

  methods: {

    /**
     * Check to see if a slot exists
     *
     * @param  {String} name
     *
     * @return {Boolean}
     */
    slotExists(name) {
      return (name in this.$slots)
    },

    /**
     * Get element composed path
     *
     * @param {Object} event
     *
     * @return {Array}
     */
    getEventElementsPath(event) {
      let path = null

      if (event.hasOwnProperty('path')) {
        path = event.path
      } else if (event.hasOwnProperty('composedPath')) {
        path = typeof event.composedPath === 'function' ? event.composedPath() : event.composedPath
      } else {
        path = this._composedPath(event.target)
      }

      return path
    },

    _composedPath(el) {
      const path = []

      while (el) {
        path.push(el)

        if (el.tagName === 'HTML') {
          path.push(document)
          path.push(window)

          return path
        }

        el = el.parentElement
      }
    },

  },

}
