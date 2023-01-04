import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    getProductos(context){
      const peliculasEndPoint = "https://639a6077d514150197347436.mockapi.io/cinema/peliculas";
        axios.get(peliculasEndPoint)
        .then((response) => {
          // console.table(response.data);
          // this.peliculas = response.data;
          context.commit('cargarLibros',response.data);
        })
        .catch((err) => { console.error(`${err}`); });
    }
  },
  modules: {
  }
})
