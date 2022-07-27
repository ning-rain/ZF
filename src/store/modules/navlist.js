import axios from 'axios'
export default {
  namespaced: true,
  state: {
    navlist: null,
    current: null,
    ID:null
  },
  mutations: {
    updateNavlist (state, payload) {
      state.navlist = payload
    },
    updateCurrent (state, payload) {
      state.current = payload.active
      state.ID=payload.id
    }
  },
  actions: {
    async getNavlist (context) {
      const { data: { data: { channels } } } = await axios.get('http://toutiao.itheima.net/v1_0/channels')
      context.commit('updateNavlist', channels)
      context.commit('updateCurrent', {active:0,id:0})
    }
  }
}
