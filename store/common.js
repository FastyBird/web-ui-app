import Vue from 'vue'
import get from 'lodash/get'
import cloneDeep from 'lodash/cloneDeep'

import * as types from './types'

const initialState = {

  windowSize: null,

  windowHeight: null,
  windowHeightComputed: 0,

  margins: null,
  marginTop: 0,
  marginBottom: 0,

  account: {
    username: null,
    email: null,
  },

  menu: {
    collapsed: {
      xs: true,
    },
  },

}

const storeState = Vue.util.extend({}, cloneDeep(initialState))

const storeGetters = {

  getWindowHeightAdjust: (state) => () => {
    return state.windowHeightComputed
  },

  getBodyTopMarginAdjust: (state) => () => {
    return state.marginTop
  },

  getBodyBottomMarginAdjust: (state) => () => {
    return state.marginBottom
  },

}

const storeActions = {

  /**
   * Set windows size info
   *
   * @param {Function} commit
   * @param {String} size
   */
  setWindowSize({ commit }, { size }) {
    commit(types.WINDOW_SIZE, size)
  },

  /**
   * Store window height adjustment
   *
   * @param {Function} commit
   * @param {String} key
   * @param {Number} adjust
   */
  setWindowHeight({ commit }, { key, adjust }) {
    commit(types.WINDOW_HEIGHT, {
      key,
      adjust,
    })
  },

  setBodyMargin({ commit }, { key, position, margin }) {
    commit(types.BODY_MARGIN, {
      key,
      position,
      margin,
    })
  },

  /**
   * Set account username/name info
   *
   * @param {Function} commit
   * @param {String} username
   */
  setUsername({ commit }, { username }) {
    commit(types.ACCOUNT_USERNAME, username)
  },

  /**
   * Set account email address info
   *
   * @param {Function} commit
   * @param {String} email
   */
  setEmail({ commit }, { email }) {
    commit(types.ACCOUNT_EMAIL, email)
  },

  /**
   * Collapse opened menu
   *
   * @param {Function} commit
   */
  menuCollapse({ commit }) {
    commit(types.MENU_COLLAPSED, {
      collapsed: true,
    })
  },

  /**
   * Toggle menu state
   *
   * @param {Function} commit
   * @param {Object} state
   */
  menuToggle({ commit, state }) {
    commit(types.MENU_COLLAPSED, {
      collapsed: !state.menu.collapsed.xs,
    })
  },

  /**
   * Reset module state to initial one
   *
   * @param {Function} commit
   */
  resetStore({ commit }) {
    commit(types.COMMON_RESET_STATE)
  },

}

const storeMutations = {

  /**
   * Set client window size
   *
   * @param {Object} state
   * @param {String} state.windowSize
   * @param {String} size
   */
  [types.WINDOW_SIZE](state, size) {
    state.windowSize = size
  },

  /**
   * Set client window size
   *
   * @param {Object} state
   * @param {String} state.windowSize
   * @param {Object} action
   * @param {String} action.key
   * @param {Number} action.adjust
   */
  [types.WINDOW_HEIGHT](state, action) {
    if (state.windowHeight === null) {
      state.windowHeight = {}
    }

    state.windowHeight[action.key] = action.adjust

    let adjust = 0

    for (const key in state.windowHeight) {
      if (state.windowHeight.hasOwnProperty(key)) {
        adjust += state.windowHeight[key]
      }
    }

    state.windowHeightComputed = adjust
  },

  /**
   * Set client window size
   *
   * @param {Object} state
   * @param {String} state.windowSize
   * @param {Object} action
   * @param {String} action.key
   * @param {Number} action.position
   * @param {Number} action.margin
   */
  [types.BODY_MARGIN](state, action) {
    if (state.margins === null) {
      state.margins = {}
    }

    state.margins[action.key] = {
      position: action.position,
      margin: action.margin,
    }

    let marginTop = 0
    let marginBottom = 0

    for (const key in state.margins) {
      if (state.margins.hasOwnProperty(key)) {
        if (get(state.margins[key], 'position') === 'top' && get(state.margins[key], 'margin', 0) > marginTop) {
          marginTop = get(state.margins[key], 'margin', 0)
        }

        if (get(state.margins[key], 'position') === 'bottom' && get(state.margins[key], 'margin', 0) > marginBottom) {
          marginBottom = get(state.margins[key], 'margin', 0)
        }
      }
    }

    state.marginTop = marginTop
    state.marginBottom = marginBottom
  },

  /**
   * Set account username/name
   *
   * @param {Object} state
   * @param {Object} state.account
   * @param {String} state.account.username
   * @param {String} username
   */
  [types.ACCOUNT_USERNAME](state, username) {
    state.account.username = username
  },

  /**
   * Set account email address
   *
   * @param {Object} state
   * @param {Object} state.account
   * @param {String} state.account.email
   * @param {String} email
   */
  [types.ACCOUNT_EMAIL](state, email) {
    state.account.email = email
  },

  /**
   * Update menu collapsed state
   *
   * @param {Object} state
   * @param {Object} state.menu
   * @param {Object} state.menu.collapsed
   * @param {Boolean} state.menu.collapsed.xs
   * @param {Object} action
   * @param {Boolean} action.collapsed
   */
  [types.MENU_COLLAPSED](state, action) {
    state.menu.collapsed.xs = action.collapsed
  },

  /**
   * Reset module state to initial state
   *
   * @param {Object} state
   */
  [types.COMMON_RESET_STATE](state) {
    for (const key in initialState) {
      state[key] = initialState[key]
    }
  },

}

export default {
  namespaced: true,
  state: storeState,
  getters: storeGetters,
  actions: storeActions,
  mutations: storeMutations,
}
