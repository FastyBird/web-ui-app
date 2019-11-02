import Vue from 'vue'
import cloneDeep from 'lodash/cloneDeep'

import * as types from './types'

const initialState = {
  items: null,
  hidden: false,
}

const storeState = Vue.util.extend({}, cloneDeep(initialState))

const storeGetters = {

  hasItems: (state) => () => {
    return state.items !== null && state.items.length
  },

  getItems: (state) => () => {
    return state.items !== null ? state.items : []
  },

  isHidden: (state) => () => {
    return state.hidden
  },

}

const storeActions = {

  addItem({ commit }, { name, link, callback, icon }) {
    commit(types.BOTTOM_NAVIGATION_ADD_ITEM, {
      name,
      link,
      callback,
      icon,
    })
  },

  hideNavigation({ commit }) {
    commit(types.BOTTOM_NAVIGATION_HIDE)
  },

  resetStore({ commit }) {
    commit(types.COMMON_RESET_STATE)
  },

}

const storeMutations = {

  [types.BOTTOM_NAVIGATION_ADD_ITEM](state, action) {
    if (state.items === null) {
      state.items = []
    }

    state.items.push({
      name: action.name,
      link: action.link,
      callback: action.callback,
      icon: action.icon,
    })
  },

  [types.BOTTOM_NAVIGATION_SHOW](state) {
    state.hidden = false
  },

  [types.BOTTOM_NAVIGATION_HIDE](state) {
    state.hidden = true
  },

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
