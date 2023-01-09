import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse( localStorage.getItem("user")),
    productos: null,
    pedidos: null,
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
    getPedidos(state){
      return state.pedidos;
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
    setPedidos(state, data){
      state.pedidos = data;
    },
  },
  //metodo publico que invoca a los setters
  actions: {
    getProductosAction({commit}){
      console.log("getProductosAction being");
      const peliculasEndPoint = "https://639a6077d514150197347436.mockapi.io/cinema/peliculas";
        axios.get(peliculasEndPoint)
        .then((response) => {
          commit('setProductos',response.data);
          localStorage.setItem("productos", JSON.stringify(response.data));
        })
        .catch((err) => { console.error(`${err}`); });
        console.log("getProductosAction end");

    },
    getPedidosAction({commit}){
        const pedidosEndPoint = "https://639a6077d514150197347436.mockapi.io/cinema/pedidos";
          axios.get(pedidosEndPoint)
          .then((response) => {
            commit('setPedidos',response.data);
            localStorage.setItem("pedidos", JSON.stringify(response.data));
          })
          .catch((err) => { console.error(`${err}`); });
      }
  },
  modules: {
  }
})
