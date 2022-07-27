import axios from 'axios'
export default {
  namespaced: true,
  state: {
    allNews: {}
  },
  mutations: {
    updateNews (state, payload) {
      state.allNews = { ...state.allNews, [payload.current]: payload.list }
    }
  },
  actions: {
    async getNewlist (context,load) {
       console.log( 'load',load)
      const { data: { data: { results } } } = await axios({
        method: 'GET',
        url: 'http://toutiao.itheima.net/v1_0/articles',
        params: {
          channel_id: load.id,
          timestamp: Date.now()
        }
      })
      console.log(results)
    
      const payload = { current: load.current, list: results }
      context.commit('updateNews', payload)
    }
  }

}
