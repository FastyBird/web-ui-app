import Vue from 'vue'
import cloneDeep from 'lodash/cloneDeep'

import * as types from './types'

const initialState = {
  leftButton: null,
  rightButton: null,

  heading: null,
  subHeading: null,
  hidenHeading: false,
  headingIcon: null,
  fullRowHeading: false,

  hiddenLeftButton: false,
  hiddenRightButton: false,

  customClass: null,

  hideHamburger: false,

  addButton: null,

  tabs: null,
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

  isHiddenHeading: (state) => () => {
    return state.hidenHeading
  },

  hasHeadingIcon: (state) => () => {
    return state.headingIcon !== null
  },

  hasFullRowHeading: (state) => () => {
    return state.fullRowHeading
  },

  getHeadingIcon: (state) => () => {
    return state.headingIcon
  },

  isHiddenLeftButton: (state) => () => {
    return state.hiddenLeftButton
  },

  isHiddenRightButton: (state) => () => {
    return state.hiddenRightButton
  },

  getCustomClass: (state) => () => {
    return state.customClass
  },

  hasHiddenHamburger: (state) => () => {
    return state.hideHamburger
  },

  hasAddButton: (state) => () => {
    return state.addButton !== null
  },

  getAddButton: (state) => () => {
    return state.addButton
  },

  hasTabs: (state) => () => {
    return state.tabs !== null && state.tabs.length
  },

  getTabs: (state) => () => {
    return state.tabs !== null ? state.tabs : []
  },

  stateWatch: (state) => () => {
    return JSON.stringify({
      heading: state.heading,
      hidenHeading: state.hidenHeading,
      fullRowHeading: state.fullRowHeading,
      tabs: state.tabs,
    })
  },

}

const storeActions = {

  setLeftButton({ commit }, { name, link = null, callback = null, icon = null }) {
    commit(types.HEADER_SET_BUTTON, {
      position: 'left',
      name,
      link,
      callback,
      icon,
    })
  },

  setRightButton({ commit }, { name, link = null, callback = null, icon = null }) {
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

  setHeading({ commit }, { heading, subHeading = null }) {
    commit(types.HEADER_SET_HEADING, {
      heading,
      subHeading,
    })
  },

  resetHeading({ commit }) {
    commit(types.HEADER_UNSET_HEADING)
  },

  hideHeading({ commit }) {
    commit(types.HEADER_HIDE_HEADING)
  },

  setHeadingIcon({ commit }, { icon }) {
    commit(types.HEADER_HEADING_ICON, {
      icon,
    })
  },

  setFullRowHeading({ commit }) {
    commit(types.HEADER_HEADING_FULL_ROW)
  },

  showLeftButton({ commit }) {
    commit(types.HEADER_SHOW_LEFT_BUTTON)
  },

  hideLeftButton({ commit }) {
    commit(types.HEADER_HIDE_LEFT_BUTTON)
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

  showHamburger({ commit }) {
    commit(types.HEADER_SHOW_HAMBURGER)
  },

  hideHamburger({ commit }) {
    commit(types.HEADER_HIDE_HAMBURGER)
  },

  setAddButton({ commit }, { name, link = null, callback = null, icon = null }) {
    commit(types.HEADER_SET_BUTTON, {
      position: 'add',
      name,
      link,
      callback,
      icon,
    })
  },

  resetAddButton({ commit }) {
    commit(types.HEADER_UNSET_BUTTON, {
      position: 'add',
    })
  },

  addTab({ commit }, { name, link, icon }) {
    commit(types.HEADER_ADD_TAB, {
      name,
      link,
      icon,
    })
  },

  clearTabs({ commit }) {
    commit(types.HEADER_CLEAR_TABS)
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

      state.hiddenLeftButton = false
    } else if (action.position === 'right') {
      state.rightButton = {
        name: action.name,
        link: action.link,
        callback: action.callback,
        icon: action.icon,
      }

      state.hiddenRightButton = false
    } else if (action.position === 'add') {
      state.addButton = {
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

      state.hiddenLeftButton = false
    } else if (action.position === 'right') {
      state.rightButton = null

      state.hiddenRightButton = false
    } else if (action.position === 'add') {
      state.addButton = null
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

  [types.HEADER_HIDE_HEADING](state) {
    state.hidenHeading = true
  },

  [types.HEADER_HEADING_ICON](state, action) {
    state.headingIcon = action.icon
  },

  [types.HEADER_HEADING_FULL_ROW](state) {
    state.fullRowHeading = true
  },

  [types.HEADER_SHOW_LEFT_BUTTON](state) {
    state.hiddenLeftButton = false
  },

  [types.HEADER_HIDE_LEFT_BUTTON](state) {
    state.hiddenLeftButton = true
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

  [types.HEADER_SHOW_HAMBURGER](state) {
    state.hideHamburger = false
  },

  [types.HEADER_HIDE_HAMBURGER](state) {
    state.hideHamburger = true
  },

  [types.HEADER_ADD_TAB](state, action) {
    if (state.tabs === null) {
      state.tabs = []
    }

    state.tabs.push({
      name: action.name,
      link: action.link,
      icon: action.icon,
    })
  },

  [types.HEADER_CLEAR_TABS](state) {
    state.tabs = null
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
