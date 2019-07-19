import Vue from 'vue'
import cloneDeep from 'lodash/cloneDeep'

import * as types from './types'

const initialState = {
  leftButton: null,
  rightButton: null,

  heading: null,
  subHeading: null,

  hiddenRightButton: false,

  customClass: null,

  hideShadow: null,
}

const storeState = Vue.util.extend({}, cloneDeep(initialState))

const storeGetters = {

  hasLeftButton: (state) => () => {
    return state.leftButton !== null
  },

  hasRightButton: (state) => () => {
    return state.rightButton !== null
  },

  getLeftButton: (state) => () => {
    return state.leftButton
  },

  getRightButton: (state) => () => {
    return state.rightButton
  },

  hasHeading: (state) => () => {
    return state.heading !== null
  },

  hasSubHeading: (state) => () => {
    return state.subHeading !== null
  },

  getHeading: (state) => () => {
    return state.heading
  },

  getSubHeading: (state) => () => {
    return state.subHeading
  },

  isHiddenRightButton: (state) => () => {
    return state.hiddenRightButton
  },

  getCustomClass: (state) => () => {
    return state.customClass
  },

  hasHiddenShadow: (state) => () => {
    return state.hideShadow
  },

}

const storeActions = {

  setLeftButton({ commit }, { name, link, callback, icon }) {
    commit(types.HEADER_SET_BUTTON, {
      position: 'left',
      name,
      link,
      callback,
      icon,
    })
  },

  setRightButton({ commit }, { name, link, callback, icon }) {
    commit(types.HEADER_SET_BUTTON, {
      position: 'right',
      name,
      link,
      callback,
      icon,
    })
  },

  resetLeftButton({ commit }) {
    commit(types.HEADER_UNSET_BUTTON, {
      position: 'left',
    })
  },

  resetRightButton({ commit }) {
    commit(types.HEADER_UNSET_BUTTON, {
      position: 'right',
    })
  },

  setHeading({ commit }, { heading, subHeading }) {
    commit(types.HEADER_SET_HEADING, {
      heading,
      subHeading,
    })
  },

  resetHeading({ commit }) {
    commit(types.HEADER_UNSET_HEADING)
  },

  showRightButton({ commit }) {
    commit(types.HEADER_SHOW_RIGHT_BUTTON)
  },

  hideRightButton({ commit }) {
    commit(types.HEADER_HIDE_RIGHT_BUTTON)
  },

  setCustomClass({ commit }, { className }) {
    commit(types.HEADER_SET_CUSTOM_CLASS, {
      className,
    })
  },

  resetCustomClass({ commit }) {
    commit(types.HEADER_UNSET_CUSTOM_CLASS)
  },

  showShadow({ commit }) {
    commit(types.HEADER_SHOW_SHADOW)
  },

  hideShadow({ commit }) {
    commit(types.HEADER_HIDE_SHADOW)
  },

  resetStore({ commit }) {
    commit(types.COMMON_RESET_STATE)
  },

}

const storeMutations = {

  [types.HEADER_SET_BUTTON](state, action) {
    if (action.position === 'left') {
      state.leftButton = {
        name: action.name,
        link: action.link,
        callback: action.callback,
        icon: action.icon,
      }
    } else if (action.position === 'right') {
      state.rightButton = {
        name: action.name,
        link: action.link,
        callback: action.callback,
        icon: action.icon,
      }

      state.hiddenRightButton = false
    }
  },

  [types.HEADER_UNSET_BUTTON](state, action) {
    if (action.position === 'left') {
      state.leftButton = null
    } else if (action.position === 'right') {
      state.rightButton = null

      state.hiddenRightButton = false
    }
  },

  [types.HEADER_SET_HEADING](state, action) {
    state.heading = action.heading

    if (action.hasOwnProperty('subHeading')) {
      state.subHeading = typeof action.subHeading !== 'undefined' && action.subHeading !== null && action.subHeading !== '' ? action.subHeading : null
    } else {
      state.subHeading = null
    }
  },

  [types.HEADER_UNSET_HEADING](state) {
    state.heading = null
    state.subHeading = null
  },

  [types.HEADER_SHOW_RIGHT_BUTTON](state) {
    state.hiddenRightButton = false
  },

  [types.HEADER_HIDE_RIGHT_BUTTON](state) {
    state.hiddenRightButton = true
  },

  [types.HEADER_SET_CUSTOM_CLASS](state, action) {
    state.customClass = action.className
  },

  [types.HEADER_UNSET_CUSTOM_CLASS](state) {
    state.customClass = null
  },

  [types.HEADER_SHOW_SHADOW](state) {
    state.hideShadow = false
  },

  [types.HEADER_HIDE_SHADOW](state) {
    state.hideShadow = true
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
