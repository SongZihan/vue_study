import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 组件间共享数据
export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    set_list(state, value) {
      state.list = value
    }
  },
  actions: {
  },
  modules: {
  }
})
