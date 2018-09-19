import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    counter: 0, 
    nav_items: {},
    foot_items: {},
    sponsors: {},
    active_page: ''
  },

  mutations: {
    increment (state) {
      state.counter++
    },

    setNavData (state, payload) {
      state.nav_items = payload
    },

    setFootData (state, payload) {
      state.foot_items = payload
    },

    setSponsorData (state, payload) {
      state.sponsors = payload
    },

    addProgramme (state, payload) {
      if (!state.nav_items.dropdown.programme_items) {
        state.nav_items.dropdown.programme_items = []
        state.nav_items.dropdown.programme_items.push(payload)
      } else {
        state.nav_items.dropdown.programme_items.push(payload)
      }
    },

    setActiveNav (state, payload) {
      state.active_page = payload
    }
  },

  actions: {
    async loadNav ({ commit }) {
      let content = await import('~/content/nav.json')
      commit('setNavData', content)

      // Using webpacks context to gather all files from a folder
      const context = require.context('~/content/programmes/', false, /\.json$/)

      const programmes = context.keys().map(key => ({
        ...context(key),
        _path: `/programmes/${key.replace('.json', '').replace('./', '')}`
      }))

      for (var index in programmes) {
        commit('addProgramme', {'title': programmes[index].title, 'link': programmes[index]._path})
      }
    },

    async loadFoot ({ commit }) {
      let content = await import('~/content/footer.json')
      commit('setFootData', content)
    },

    async loadSponsors ({ commit }) {
      let content = await import('~/content/sponsors.json')
      commit('setSponsorData', content)
    }
  }
})

/** Menu Item
 * 
 * menu_item: {
 *  title: String,
 *  url: String,
 *  is_dropdown: Boolean,
 *  dropdown_items: Array,
 *  is_active: Boolean
 * }
 * 
 * dropdown_item {
 *  title: String,
 *  url: String (not required is title = divider),
 *  is_active: Boolean
 * }
 * 
 */

export default store