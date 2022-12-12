<template>

  <section class="log-in container">
    <h1>LogIn</h1>
    <form action="" method="post"  @submit.prevent="submit">
      <div class="mb-3">
        <!--<label for="email" class="form-label">Correo electrónico</label>-->
        <input type="email" class="form-control" id="email" name="email" v-model.trim="email" placeholder="Correo electrónico">
      </div>
      <div class="mb-3">
        <!--<label for="password" class="form-label">Contraseña</label>-->
        <input type="password" class="form-control" id="password" name="password" v-model.trim="password" placeholder="Contraseña">
      </div>
      <a href="javascript:alert('Olvidé mi contraseña')">Olvidé mi contraseña</a>
      <br>
      <button class="btn btn-primary">Iniciar sesión</button>
    </form>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'log-in',
    props: [],
    mounted () {

    },
    data () {
      return {
        email:"",
        password:"",
        usuarios:[
          {            
            nombre:"User",
            apellido:"Admin",
            email:"admin@admin.com",
            password:"Password01."
          }
        ]
      }
    },
    methods: {
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
        alert(`Bienvenido ${user.nombre} ${user.apellido}` );
        
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
