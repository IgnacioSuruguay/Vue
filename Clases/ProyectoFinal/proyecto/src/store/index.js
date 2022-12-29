import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser(state){
      return state.user;
    }
  },
  //setters. al igual que los getters, son privados
  mutations: {
    setUser(state, usuario){
      state.user = usuario;
    },
  },
  //metodo publico que invoca a los setters
  actions: {
    asignarUsuarioActivo(context, user){
      context.commit("setUser", user );
    }
  },
  modules: {
  }
})
