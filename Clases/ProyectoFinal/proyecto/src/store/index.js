import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse( localStorage.getItem("user")),
    productos: null,
    pedidos: JSON.parse(localStorage.getItem("pedidos")),
  },
  getters: {
    /* Getters usuarios*/
    getUser(state){
      return state.user;
    },
    esAdministrador(state){
      return (state.user)? state.user.esAdmin : null;
    },
    getNombre(state){
      return (state.user)? state.user.nombre : null;
    },
    /* getters productos*/
    getProductos(state){
      return state.productos;
    },
  },
  //setters.
  mutations: {
    setUser(state, usuario){
      state.user = usuario;
    },
    setProductos(state, data){
      state.productos = data;
    },
  },
  //metodo publico que invoca a los setters
  actions: {
    getProductosAction({commit}){
      const peliculasEndPoint = "https://639a6077d514150197347436.mockapi.io/cinema/peliculas";
        axios.get(peliculasEndPoint)
        .then((response) => {
          commit('setProductos',response.data);
          localStorage.setItem("productos", JSON.stringify(response.data));
        })
        .catch((err) => { console.error(`${err}`); });
    }
  },
  modules: {
  }
})
