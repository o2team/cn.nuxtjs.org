import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    version: '0.9.6',
    visibleHeader: false,
    visibleAffix: false,
    apiURI: 'https://docs.api.nuxtjs.org',
    _lang: 'cn',
    lang: {
      text: {
        search: '搜索',
        version: '版本'
      }
    },
    menu: {}
  },
  mutations: {
    toggle (state, key) {
      state[key] = !state[key]
    }
  },
  actions: {
    async nuxtServerInit ({ state }, { isDev }) {
      if (isDev) {
        state.apiURI = 'http://localhost:4000'
      }
      try {
        const resLang = await axios(state.apiURI + '/lang/' + state._lang)
        state.lang = resLang.data
        const resMenu = await axios(state.apiURI + '/menu/' + state._lang)
        state.menu = resMenu.data
      } catch (e) {
        console.error('Error on [nuxtServerInit] action, please run the docs server.') // eslint-disable-line no-console
      }
    }
  }
})

export default store
