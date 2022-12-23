<template>
	<section class="form-alta-pelicula container">
		<h1>form-alta-funcion</h1>
		<!-- <form action="" method="post" @submit.prevent="submit()" id="form1" class="needs-validation" novalidate> -->
		<form action="" method="post" @submit.prevent="submit()" id="form1" novalidate>
    <!-- fila 1 -->
			<div class="row g-3" >
				<!-- pelicula  -->
        <div class="form-floating mb-3 col-md-6" id="input-titulo">
					<input id="titulo" ref="titulo" v-model="titulo" class="form-control input-group-sm" type="text" required/>      
					<label for="">Película</label>
					<div class="invalid-feedback text-start" ref="errortitulo"></div>
				</div>
        <!-- anio -->
				<div class="form-floating mb-3 col-md-3">
					<input class="form-control input-group-sm has-validation" type="text" value="" v-model="anio" ref="anio">
					<label class="" for="anio">
					Año
					</label>
					<div class="invalid-feedback text-start" ref="erroranio"></div>
				</div>
        <!-- idioma -->
				<div class="form-floating mb-3 col-md-3">
					<select class="form-select input-group-sm has-validation" ref="idioma" v-model="idioma" required>
						<option selected disabled hidden>Seleccione un idioma</option>
						<option value="Castellano">Castellano</option>
						<option value="Ingles">Inglés</option>
						<option value="Italiano">Italiano</option>
						<option value="Frances">Francés</option>
						<option value="Ruso">Ruso</option>
					</select>
					<label for="">Idioma</label>
					<div class="invalid-feedback text-start" ref="erroridioma"></div>
				</div>
			</div>
      <!-- fila 2 -->
			<div class="row g-3" >
  			<!-- sinopsis -->
        <div class="form-floating col-md-6">
					<textarea  name="sinopsis" ref="sinopsis" style="height: 200px;" class="form-control input-group-sm has-validation" v-model="sinonsis" required></textarea>
					<label for="inicio-fecha">Sinopsis</label>
					<div class="invalid-feedback" ref="errorsinopsis"></div>
				</div>
        <!-- generos -->
        <div class="col-md-6">
          <div class="form-check text-start">
            <input class="form-check-input" type="checkbox" name="genero" ref="genero1" value="Acción" v-model="genero" required>
            <label class="form-check-label" for="genero1">
            Acción
            </label>
          </div>
          <div class="form-check text-start">
            <input class="form-check-input" type="checkbox" name="genero" ref="genero2" value="Terror" v-model="genero" required>
            <label class="form-check-label" for="genero2">
            Terror
            </label>
          </div>
          <div class="form-check text-start">
            <input class="form-check-input" type="checkbox" name="genero" ref="genero3" value="Suspenso" v-model="genero" required>
            <label class="form-check-label" for="genero3">
            Suspenso
            </label>
          </div>
          <div class="form-check text-start">
            <input class="form-check-input" type="checkbox" name="genero" ref="genero4" value="Drama" v-model="genero" required>
            <label class="form-check-label" for="genero4">
            Drama
            </label>
          </div>
          <div class="form-check text-start">
            <input class="form-check-input" type="checkbox" name="genero" ref="genero5" value="Romance" v-model="genero" required>
            <label class="form-check-label" for="genero5">
            Romance
            </label>
          </div>
          <div class="form-check text-start">
            <input class="form-check-input" type="checkbox" name="genero" ref="genero6" value="Animacion" v-model="genero" required>
            <label class="form-check-label" for="genero6">
            Animacion
            </label>
          </div>
          <div class="form-check text-start">
            <input class="form-check-input" type="checkbox" name="genero" ref="genero7" value="Comedia" v-model="genero" required>
            <label class="form-check-label" for="genero7">
            Comedia
            </label>
          </div>
          <div class="form-check text-start">
            <input class="form-check-input" type="checkbox" name="genero" ref="genero8" value="Aventuda" v-model="genero" required>
            <label class="form-check-label" for="genero8">
            Aventura
            </label>
            <div class="invalid-feedback" ref="errorgenero"></div>
          </div>
        </div>
			</div>
			
			<button class="btn btn-primary" type="submit">Crear función</button>
		</form>
	</section>
</template>

<script lang="js">

class Pelicula{
  constructor(titulo, anio, idioma, sinopsis, genero){
    this.titulo = titulo;
    this.anio = anio;
    this.idioma  =idioma;
    this.sinopsis = sinopsis;
    this.genero = genero;
  }
}
import axios from 'axios';
export default  {
  name: 'form-alta-funcion',
  props: [],
  created(){

  },
  mounted () {

  },
  data () {
    return {
      titulo: '',
      anio: '',
      idioma: '',
      sinopsis: '',
      genero:[],
      
    }
  },
  methods: {
    submit(){
      let flagError = false;
      // document.getElementById("errorpeli").innerText="";

      // document.getElementById("pelicula").classList.remove("is-invalid");
      
      debugger
      if(!this.titulo){
        this.$refs.titulo.classList.add("is-invalid");
        this.$refs.errortitulo.innerText="Campo obligatorio";
        flagError = true;
      }
      if(!this.anio){
        this.$refs.anio.classList.add("is-invalid");
        this.$refs.erroranio.innerText="Campo obligatorio";
        flagError = true;
      }
      if(!this.idioma){
        this.$refs.idioma.classList.add("is-invalid");
        this.$refs.erroridioma.innerText="Campo obligatorio";
        flagError = true;
      }
      if(!this.sinopsis){
        this.$refs.sinopsis.classList.add("is-invalid");
        this.$refs.errorsinopsis.innerText="Campo obligatorio";
        flagError = true;
      }

      //validacion fecha. no puede ser menor a la fecha actual

      if(!this.genero.length){
        this.$refs.genero1.classList.add("is-invalid");
        this.$refs.genero2.classList.add("is-invalid");
        this.$refs.genero3.classList.add("is-invalid");
        this.$refs.genero4.classList.add("is-invalid");
        this.$refs.genero5.classList.add("is-invalid");
        this.$refs.genero6.classList.add("is-invalid");
        this.$refs.genero7.classList.add("is-invalid");
        this.$refs.genero8.classList.add("is-invalid");
        this.$refs.errorgenero.innerText = "Debe seleccionar al menos un género";
        flagError = true;
      }

      let form = document.getElementById('form1');
      // form.classList.add('was-validated');

      if (!form.checkValidity() || flagError) {
        return;
      }
      let pelicula = new Pelicula(this.titulo, this.anio, this.idioma, this.sinopsis, this.genero);
      this.funciones.push(fn);

    },
  },
  computed: {

  }
}


</script>

<style scoped >
  .form-alta-pelicula {
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
</style>
