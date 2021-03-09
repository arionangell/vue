import Vue from 'vue'
import Vuex from 'vuex'
import tablas from '../modulos/tablas'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      titulo:'prueba'
  },
  mutations: {
  increment (state,valor) {
      // mutate state
      state.titulo=valor
    }
  },
  actions: {
  },
  modules: {
    tablas
  }
})
