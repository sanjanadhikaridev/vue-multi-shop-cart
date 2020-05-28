import Vue from 'vue'
import Vuex from 'vuex'
import * as stock from '@/store/modules/stock'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stock
  }
})
