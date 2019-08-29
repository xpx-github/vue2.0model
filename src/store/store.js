import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // mlist: []
  },
  mutations: {},
  actions: {
    // async getMunuList () {
    //   const res = await axios.get('/sys/menu/loadUserMenu')
    //   res.data.data.filter(item => {
    //     this.state.mlist.push(item.permission)
    //   })
    // }
  },
  getters: {

  }
})
