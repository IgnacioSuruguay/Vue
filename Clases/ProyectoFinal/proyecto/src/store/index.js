import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse( localStorage.getItem("user")),
  },
  getters: {
    getUser(state){
      return state.user;
    },
    esAdministrador(state){
      return (state.user)? state.user.esAdmin : null;
    }
  },
  //setters.
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
