import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    counter: 0, 
    nav_items: {}
  },

  mutations: {
    increment (state) {
      state.counter++
    },

    setNavData (state, payload) {
      state.nav_items = payload
    }
  },

  actions: {
    async loadNav ({ commit }) {
      let content = await import('~/content/nav.json')
      commit('setNavData', content)
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