<template>

  <section class="container register" >
    <h1>Registro</h1>
    <form action="" method="post"  @submit.prevent="submit">
      <div class="mb-3">
        <!--<label for="nombre" class="form-label">Nombre</label>-->
        <input type="text" class="form-control" id="nombre" name="nombre" v-model.trim="nombre" placeholder="Ingrese su nombre">
      </div>
      <div class="mb-3">
        <!--<label for="apellido" class="form-label">Apellido</label>-->
        <input type="text" class="form-control" id="apellido" name="apellido" v-model.trim="apellido" placeholder="Ingrese su apellido">
      </div>
      <div class="mb-3">
        <!--<label for="email" class="form-label">Correo electrónico</label>-->
        <input type="email" class="form-control" id="email" name="email" v-model.trim="email" placeholder="Ingrese su correo electrónico">
      </div>
      <div class="mb-3">
        <!--<label for="password" class="form-label">Contraseña</label>-->
        <input type="password" class="form-control" id="password" name="password" v-model.trim="password" placeholder="Ingrese su contraseña">
        
      </div>
      <div class="mb-3">
        <!--<label for="password" class="form-label">Confirmar contraseña</label>-->
        <input type="password" class="form-control" id="repassword" name="repassword" v-model.trim="repassword" placeholder="Ingrese su contraseña nuevamente">
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
    </form>
  </section>
  

</template>

<script lang="js">
  // class Usuario {
  //   constructor(nom, apel, mail, pass) {
  //     this.nombre = nom;
  //     this.apellido = apel;
  //     this.email = mail;
  //     this.password = pass;
  //   }
  // }
  
  import Usuario from '../class'
  export default  {
    name: 'Register',
    props: {},
    mounted () {

    },
    data () {
      return {
        nombre:"",
        apellido:"",
        email:"",
        password:"",
        repassword:"",
        usuarios:[
          {            
            nombre:"Admin",
            apellido:"Admin",
            email:"admin@admin.com",
            password:"Password01."
          }
        ]
      } 
    },
    methods: {
      submit(){
        
        if(!this.nombre){
          alert("nombre vacio");
          return;
        }
        if(!this.apellido){
          alert("apellido vacio");
          return;
        }
        if(!this.email){
          alert("email vacio");
          return;
        }
        if(!this.password){
          alert("password vacio");
          return;
        }
        if(!this.repassword){
          alert("repassword vacio");
          return;
        }
        if(this.usuarios.find((e)=> e.email === this.email)){
          alert("El correo electrónico ya se encuentra registrado");
          return;
        }
        if(this.password != this.repassword){
          alert("Ambas contraseñas deben ser iguales");
          return;
        }

        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*])(?=.{4,})");

        // ^	                The password string will start this way
        // (?=.*[a-z])	      The string must contain at least 1 lowercase alphabetical character
        // (?=.*[A-Z])	      The string must contain at least 1 uppercase alphabetical character
        // (?=.*[0-9])	      The string must contain at least 1 numeric character
        // (?=.*[!@#$%^&*])   The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict. (?=.*[\.!@#\$%\^&\*])
        // (?=.{8,})	        The string must be eight characters or longer
        
        if(! strongRegex.test(this.password)) {
          alert("regex");
          return;
        }

        let user = new Usuario(this.nombre, this.apellido, this.email, this.password);
        // let user  = {
        //   nombre: this.nombre,
        //   apellido: this.apellido,
        //   email: this.email,
        //   password: this.password
        // };
        this.usuarios.push(user)


        //reset data values
        //Object.assign(this.$data, this.$options.data());
          this.nombre = '';
          this.apellido = '';
          this.email = '';
          this.password = '';
        
      }
    },
    computed: {

    }
}
</script>

<style scoped>
.register{
  border: 1px solid lightgrey;
    border-radius: 10px;
}
.register form{
  width: 400px;
  margin: 10px auto;
}
</style>
