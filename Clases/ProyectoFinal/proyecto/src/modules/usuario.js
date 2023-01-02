export default{
    //namespaced me permite nombrar éste modulo en el store
    //y si hay otro modulo que tenga los mismo nombres, se diferencian entre si
    namespaced:true,
    state:{
        list_usuarios:[],
        usuarioActivo: null
    },
    getters:{
        obtenerUsuario(state){
            return state.usuario;
        },
        obtenerCiudad(state){
            return state.ciudad
        }
    },
    mutations:{},
    actions:{
        getApi: async function({commit}){
            const usuariosEndPoint = "https://639a6077d514150197347436.mockapi.io/cinema/usuarios";
            axios.get(usuariosEndPoint)
            .then((response) => {
                // console.table(response.data);
                this.usuarios = response.data;
            })
            .catch((err) => {console.error(`${err}`)})
            commit('cargarLibros',librosRecibidos.books);
        }
    }
}