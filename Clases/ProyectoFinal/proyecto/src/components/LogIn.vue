<template>

  <section class="log-in container" >
    <h1>LogIn</h1>
    <form action="" method="post"  @submit.prevent="submit">
      <div class="mb-3">
        <!--<label for="email" class="form-label">Correo electrónico</label>-->
        <label for="">Usar: admin@test.com</label>
        <input type="email" class="form-control" id="email" name="email" v-model.trim="email" placeholder="Correo electrónico">
      </div>
      <div class="mb-3">
        <!--<label for="password" class="form-label">Contraseña</label>-->
        <label for="">Usar: Password01.</label>

        <input type="password" class="form-control" id="password" name="password" v-model.trim="password" placeholder="Contraseña">
      </div>
      <a href="javascript:alert('Olvidé mi contraseña')">Olvidé mi contraseña</a>
      <br>
      <button class="btn btn-primary">Iniciar sesión</button>
      <span class="btn btn-secondary" @click="enviarRegister()">Registrarse</span>
    </form>
  </section>

</template>

<script lang="js">

  import { mapMutations } from 'vuex';
  import axios from 'axios'
  export default  {
    name: 'log-in',
    props: [],
    mounted () {

    },
    created(){
      const usuariosEndPoint = "https://639a6077d514150197347436.mockapi.io/cinema/usuarios";
      axios.get(usuariosEndPoint)
      .then((response) => {
        // console.table(response.data);
        this.usuarios = response.data;
      })
      .catch((err) => {console.error(`${err}`)})

    },
    data () {
      return {
        email:"",
        password:"",
        // usuarios:[
        //   {            
        //     nombre:"User",
        //     apellido:"Admin",
        //     email:"admin@admin.com",
        //     password:"Password01."
        //   }
        // ]
        usuarios:[]
      }
    },
    methods: {
      ...mapMutations(['setUser']),
      submit(){
        if(!this.email){
          alert("email vacio");
          return;
        }
        if(!this.password){
          alert("password vacio");
          return;
        }
        let user = this.usuarios.find((e)=> e.email === this.email && e.password === this.password);
        if(!user){
          alert("Credenciales incorrectas");
          return;
        }
        this.user = user;
        sessionStorage.setItem("user", JSON.stringify(user));
        this.setUser(user);
        alert(`Bienvenido ${user.nombre} ${user.apellido}` );
        this.$router.push({path:'/'})

      },
      enviarRegister(){
        this.$emit("register", false);
      }
    },
    computed: {

    }
}


</script>

<style scoped >
  .log-in {
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
  .log-in form{
    width: 400px;
    margin: 10px auto;
  }
</style>
