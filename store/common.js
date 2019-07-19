import Vue from 'vue'
import cloneDeep from 'lodash/cloneDeep'

import * as types from './types'

const initialState = {

  windowSize: null,

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
  actions: storeActions,
  mutations: storeMutations,
}
