<template>

  <section class="home-component">
    <h1>home-component</h1>
    <div class="container">
      <form action="" @submit.prevent="chequearUsuarios()" v-if="!$store.getters.getUsuActivo">
        <div class="form-group">
          <label for="user">Usuario:
            <input type="text" name="user" id="user" v-model="user" placeholder="Ingresa usuario">
          </label>
        </div>
        
        <div class="form-group">
          <label for="password">Contraseña:
            <input type="text" name="password" id="password" v-model="password" placeholder="Ingresa contraseña">
          </label>
        </div>
        <button class="btn btn-primary">Login</button>
      </form>
    </div>
  </section>

</template>

<script >
  import { mapMutations, mapActions } from 'vuex';
  export default  {
    name: 'home-component',
    props: [],
    created(){
      this.obtenerUsuariosApi();
    },
    mounted () {

    },
    data () {
      return {
        user: "",
        password: ""
      }
    },
    methods: {
      ...mapActions(['obtenerUsuariosApi']),
      ...mapMutations(['modificarUsuActivo']),
      chequearUsuarios(){
        const encontrado = this.$store.state.listaUsuarios.find((usuario) => (usuario.nombre == this.user && usuario.password == this.password));
        console.log(encontrado);

        if(encontrado){
          //acceder al store y modificar el usuario activo
          this.modificarUsuActivo(encontrado.nombre);
          Object.assign(this.$data, this.$options.data);
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped >
  .home-component {

  }
</style>
