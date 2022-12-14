<template>

  <section class="form-alta-funcion container">
    <h1>form-alta-funcion</h1>
    <!-- <form action="" method="post" @submit.prevent="submit()" id="form1" class="needs-validation" novalidate> -->
    <form action="" method="post" @submit.prevent="submit()" id="form1" novalidate>
      <div class="form-floating mb-3" id="inputpelicula">
        <select class="form-select input-group-sm has-validation" id="pelicula" aria-label="Floating label select example" v-model="pelicula" required>
          <option selected disabled hidden>Seleccione una película</option>
          <option value="Terminator">Terminator</option>
          <option value="Volver al Futuro">Volver al Futuro</option>
          <option value="Depredador">Depredador</option>
        </select>
        <label for="floatingSelect">Película</label>
        <div class="invalid-feedback text-start" id="errorpeli">
        </div>
      </div>

      <div class="row g-3" id="fechahora">
      <div class="form-floating col-md-6">
        <input id="inicio-fecha" v-model="inicio_dia" class="form-control  input-group-sm" type="date" required />
        <label for="inicio-fecha">Dia de la función</label>
        <div class="invalid-feedback" id="errorfecha"></div>
      </div>
      <div class="form-floating col-md-6">
        <input id="inicio-hora" v-model="inicio_hora" class="form-control  input-group-sm" type="time" required/>      
        <label for="inicio-hora">Hora de la función</label>
        <div class="invalid-feedback" id="errorhora">
        </div>
      </div>
    </div>
      <div class="form-check text-start">
        <input class="form-check-input" type="radio" name="formato-funcion" id="formato-funcion1" value="2D" v-model="formato_funcion" required>
        <label class="form-check-label" for="formato-funcion1">
          2D
        </label>
      </div>
      <div class="form-check text-start">
        <input class="form-check-input" type="radio" name="formato-funcion" id="formato-funcion2" value="3D" v-model="formato_funcion" required>
        <label class="form-check-label" for="formato-funcion2">
          3D
        </label>
        <div class="invalid-feedback" id="errorformato"></div>

      </div>
      <button class="btn btn-primary" type="submit">Crear función</button>
    </form>
<br>
<br>
    <div class="">
      <table class="table">
        <thead>
          <tr>
            <th>Película</th>
            <th>Formato</th>
            <th>Día</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(funcion, index) in funciones" :key="index">
            <td>{{funcion.pelicula}}</td>
            <td>{{funcion.inicio_dia}}</td>
            <td>{{funcion.inicio_hora}}</td>
            <td>{{funcion.formato_funcion}}</td>
          </tr>
          <tr v-if="funciones.length == 0">
            <td colspan="4">No hay funciones cargadas</td>
          </tr>
        </tbody>
      </table>

    </div>
  </section>

</template>

<script lang="js">

class Funcion{
  constructor(peli, fechaIni, horaIni, formato){
    this.pelicula = peli;
    this.inicio_dia  = fechaIni;
    this.inicio_hora = horaIni;
    this.formato_funcion = formato;
  }
}
  export default  {
    name: 'form-alta-funcion',
    props: [],
    mounted () {

    },
    data () {
      return {
        pelicula: '',
        inicio_dia: '',
        inicio_hora: '',
        formato_funcion: '',
        funciones: [],
      }
    },
    methods: {
      submit(){
        let flagError = false;
        document.getElementById("errorpeli").innerText="";
        document.getElementById("errorfecha").innerText="";
        document.getElementById("errorhora").innerText="";
        document.getElementById("errorformato").innerText="";

        document.getElementById("pelicula").classList.remove("is-invalid");
        document.getElementById("inicio-fecha").classList.remove("is-invalid");
        document.getElementById("inicio-hora").classList.remove("is-invalid");
        document.getElementById("formato-funcion1").classList.remove("is-invalid");
        document.getElementById("formato-funcion2").classList.remove("is-invalid");
        
        if(!this.pelicula){
          document.getElementById("pelicula").classList.add("is-invalid");
          document.getElementById("errorpeli").innerText="Campo obligatorio";
          flagError = true;
        }
        if(!this.inicio_dia){
          document.getElementById("inicio-fecha").classList.add("is-invalid");
          document.getElementById("errorfecha").innerText="Campo obligatorio";
          flagError = true;
        }
        if(!this.inicio_hora){
          document.getElementById("inicio-hora").classList.add("is-invalid");
          document.getElementById("errorhora").innerText="Campo obligatorio";
          flagError = true;
        }
        if(!this.formato_funcion){
          document.getElementById("formato-funcion1").classList.add("is-invalid");
          document.getElementById("formato-funcion2").classList.add("is-invalid");
          document.getElementById("errorformato").innerText="Campo obligatorio";
          flagError = true;
        }

        //validacion fecha. no puede ser menor a la fecha actual
        let today = new Date();
        // let fn_fecha = new Date(this.inicio_dia);
        let fn_fechahora = new Date(this.inicio_dia+", "+ this.inicio_hora);

        if(fn_fechahora < new Date().setHours(0,0,0,0)){
          document.querySelectorAll("#errorfecha")[0].innerText = "la fecha no puede ser menor al fecha actual";
          document.getElementById("inicio-fecha").classList.add("is-invalid");
          flagError = true;
        }
        if(fn_fechahora < today){
          document.querySelectorAll("#errorhora")[0].innerText = "la hora debe ser mayor al momento actual";
          document.getElementById("inicio-hora").classList.add("is-invalid");
          flagError = true;
        }
        let form = document.getElementById('form1');
        // form.classList.add('was-validated');

        if (!form.checkValidity() || flagError) {
          return;
        }
        let fn = new Funcion(this.pelicula, this.inicio_dia, this.inicio_hora, this.formato_funcion);
        this.funciones.push(fn);

      },
    },
    computed: {

    }
}


</script>

<style scoped >
  .form-alta-funcion {
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
</style>
