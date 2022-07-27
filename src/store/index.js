import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import navlist from './modules/navlist'
import newlist from './modules/newlist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key:'zufang-token'
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, data) {
      state.user = data
    },
  },
  getters:{
    navlist: (state) => state.navlist.navlist,
    current: (state) => state.navlist.current,
    ID:(state)=>state.navlist.ID,
    localNewList: (state) => state.newlist.allNews[state.navlist.current] || []
  },
  actions: {},
  modules: {
    navlist,
    newlist
  },
  plugins: [vuexLocal.plugin],
})
