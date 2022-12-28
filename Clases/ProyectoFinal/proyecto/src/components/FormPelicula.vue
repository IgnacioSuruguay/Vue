<template>
	<section class="form-edit-pelicula container">
		<h1 v-if="this.pelicula">Formulario de modificación</h1>
		<h1 v-else>Formulario de creación</h1>

		<!-- <form action="" method="post" @submit.prevent="submit()" id="form1" class="needs-validation" novalidate> -->
		<form action="" method="post" @submit.prevent="submit()" id="form1" novalidate>
    <!-- fila 1 -->
			<div class="row g-3" >
				<!-- pelicula  -->
        <div class="form-floating mb-3 col-md-6" id="input-titulo">
					<input id="titulo" ref="titulo" v-model="peli_titulo" class="form-control input-group-sm" type="text" required/>      
					<label for="">
            Pelicula
          </label>
					<div class="invalid-feedback text-start" ref="errortitulo"></div>
				</div>
        <!-- anio -->
				<div class="form-floating mb-3 col-md-3">
					<input class="form-control input-group-sm has-validation" type="text" value="" v-model="peli_anio" ref="anio">
					<label class="" for="anio">
					Año
					</label>
					<div class="invalid-feedback text-start" ref="erroranio"></div>
				</div>
        <!-- idioma -->
				<div class="form-floating mb-3 col-md-3">
					<select class="form-select input-group-sm has-validation" ref="idioma" v-model="peli_idioma" required>
						<option v-for="(idioma, index) in list_idiomas" :key="index" :value="idioma">{{ idioma }}</option>
					</select>
					<label for="">Idioma</label>
					<div class="invalid-feedback text-start" ref="erroridioma"></div>
				</div>
			</div>
      <!-- fila 2 -->
			<div class="row g-3">
        <!-- sinopsis -->
        <div class="form-floating col-md-6">
					<textarea  name="sinopsis" ref="sinopsis" style="height: 200px;" class="form-control input-group-sm has-validation" v-model="peli_sinopsis" required></textarea>
					<label for="inicio-fecha">Sinopsis</label>
					<div class="invalid-feedback" ref="errorsinopsis"></div>
				</div>
        <!-- generos -->
        <div class="col-md-3">
          <div class="form-check text-start" v-for="(gene, index) in list_generos" :key="index">
            <input class="form-check-input" type="checkbox" name="genero" :id="'genero'+index" ref="generos" :value="gene" v-model="peli_genero" required>
            <label class="form-check-label" :for="'genero'+index">
            {{gene}}
            </label>
          </div> 
          <div class="form-check text-start" >
            <input class="form-check-input" type="checkbox" ref="genero8" id="genero8" hidden >
            <label class="form-check-label" for="genero8" hidden>
            dummy
            </label>
            <div class="invalid-feedback" ref="errorgenero"></div>
          </div>
        </div>
        <!-- precio -->
        <div class="form-floating mb-3 col-md-3">
          <input class="form-control input-group-sm has-validation" type="number" step="0.01" min="0" max="10" value=""  v-model="peli_precio" ref="precio" required> 
          <!-- <input type="text" inputmode="numeric" pattern="\d*"  required/> -->          
          <label class="" for="precio">
          Precio (Ej: 10.00)
          </label>
          <div class="invalid-feedback text-start" ref="errorprecio"></div>
        </div>
			</div>
			<div class="row g-3">
      <!-- url -->
          <!-- https://http2.mlstatic.com/D_NQ_NP_809718-MLA41881336198_052020-O.jpg -->
        <div class="form-floating mb-3 col-md-6">
          <input class="form-control input-group-sm has-validation" type="url" value="" v-model="peli_posterurl" ref="posterurl"> 
          <label class="" for="precio">
          URL Poster
          </label>
          <div class="invalid-feedback text-start" ref="errorposterurl"></div>
        </div>
        <div class="mb-3 col-md-6">
          <div class="card" style="width: 18rem;">
            <img :src="peli_posterurl" class="card-img-top" alt="..." onerror="this.src='https://www.loscotos.es/module/shop/img/no-normal.jpg'"/>
          </div>
        </div>
      </div>
			<span class="btn btn-secondary m-1" type="submit" data-bs-dismiss="modal">Atras</span>
			<button class="btn btn-primary m-1" type="submit" data-bs-dismiss="modal">Actualizar</button>
		</form>
	</section>
</template>

<script lang="js">

class Pelicula{
  constructor(titulo, anio, idioma, sinopsis, genero, precio, posterUrl){
    this.titulo = titulo;
    this.anio = anio;
    this.idioma  =idioma;
    this.sinopsis = sinopsis;
    this.genero = genero;
    this.precio = precio;
    this.posterUrl = posterUrl
  }
}
import axios from 'axios';
export default  {
  name: 'form-edit-pelicula',
  props: {
    pelicula: Object
  },
  created(){

  },
  mounted () {
    if(this.pelicula){
      console.log("hay lago");
    }
    else{
      console.log("empty");
    }
  },
  data () {
    return {
      peli_titulo: (this.pelicula) ? this.pelicula.titulo : '' ,
      peli_anio: (this.pelicula) ? this.pelicula.anio :'',
      peli_idioma: (this.pelicula) ? this.pelicula.idioma :'',
      peli_sinopsis: (this.pelicula) ? this.pelicula.sinopsis :'',
      peli_genero:(this.pelicula) ? this.pelicula.genero : [],
      peli_precio: (this.pelicula) ? this.pelicula.precio :"",
      peli_posterurl:(this.pelicula) ? this.pelicula.posterUrl :"",
      list_idiomas:
      [
        "Castellano",
        "Inglés",
        "Italiano",
        "Francés",
        "Ruso"
      ],
      list_generos: 
      [
        'Acción',
        'Terror',
        'Suspenso',
        'Drama',
        'Romance',
        'Animacion',
        'Comedia',
        'Aventura'
      ],
      
    }
  },
  methods: {
    submit(){
      let flagError = false;

      this.$refs.errortitulo.innerText="";
      this.$refs.erroranio.innerText="";
      this.$refs.erroridioma.innerText="";
      this.$refs.errorsinopsis.innerText="";      
      this.$refs.errorposterurl.innerText="";
      
      this.$refs.titulo.classList.remove("is-invalid");
      this.$refs.anio.classList.remove("is-invalid");
      this.$refs.idioma.classList.remove("is-invalid");
      this.$refs.sinopsis.classList.remove("is-invalid");
      this.$refs.generos.forEach(genero => genero.classList.remove("is-invalid"));
      this.$refs.genero8.classList.remove("is-invalid");
      this.$refs.posterurl.classList.remove("is-invalid");
      
      if(!this.peli_titulo){
        this.$refs.titulo.classList.add("is-invalid");
        this.$refs.errortitulo.innerText="Campo obligatorio";
        flagError = true;
      }
      this.validacionesTitulo();

      if(!this.peli_anio){
        this.$refs.anio.classList.add("is-invalid");
        this.$refs.erroranio.innerText="Campo obligatorio";
        flagError = true;
      }
      this.validacionesAnio();

      if(!this.peli_idioma){
        this.$refs.idioma.classList.add("is-invalid");
        this.$refs.erroridioma.innerText="Campo obligatorio";
        flagError = true;
      }
      this.validacionesIdioma();

      if(!this.peli_sinopsis){
        this.$refs.sinopsis.classList.add("is-invalid");
        this.$refs.errorsinopsis.innerText="Campo obligatorio";
        flagError = true;
      }
      this.validacionesSinopsis();

      if(!this.peli_precio){
        this.$refs.precio.classList.add("is-invalid");
        this.$refs.errorprecio.innerText="Campo obligatorio";
        flagError = true;
      }
      this.validacionesPrecio();

      if(!this.peli_posterurl){
        this.$refs.posterurl.classList.add("is-invalid");
        this.$refs.errorposterurl.innerText="Campo obligatorio";
        flagError = true;
      }
      this.validacionesPoster();

      if(!this.peli_genero.length){
        this.$refs.generos.forEach(genero => genero.classList.add("is-invalid"));
        this.$refs.genero8.classList.add("is-invalid");
        this.$refs.errorgenero.innerText = "Debe seleccionar al menos un género";
        flagError = true;
      }
      this.validacionesGenero();
      // let form = document.getElementById('form1');
      // form.classList.add('was-validated');

      if (flagError) {
        return;
      }

      let pelicula = new Pelicula(this.peli_titulo, this.peli_anio, this.peli_idioma, this.peli_sinopsis, this.peli_genero, this.peli_precio, this.peli_posterurl);

      if(!this.pelicula){
        axios.post("https://639a6077d514150197347436.mockapi.io/cinema/peliculas", pelicula)
        .then((response) =>{
          console.log("created" + response.data);
          Object.assign(this.$data, this.$options.data());
        })
        .catch((err) => {
          console.error(`${err}`)
        }); 
      }
      else{
        axios.put("https://639a6077d514150197347436.mockapi.io/cinema/peliculas/"+this.pelicula.id, pelicula)
        .then((response) =>{
          console.log("created" + response.data);
          Object.assign(this.$data, this.$options.data());
        })
        .catch((err) => {
          console.error(`${err}`)
        });         
      }
    },
    validacionesTitulo(){},
    validacionesAnio(){
      //validacion anio
      if(isNaN(this.peli_anio)){
        this.$refs.anio.classList.add("is-invalid");
        this.$refs.erroranio.innerText="Ingrese un año";
      }
    },
    validacionesIdioma(){},
    validacionesSinopsis(){},
    validacionesGenero(){},
    validacionesPrecio(){
    },
    validacionesPoster(){
      //validacion URL
      // if(! /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(this.peli_posterurl)) {
      if(! /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/g.test(this.peli_posterurl)) {
        this.$refs.posterurl.classList.add("is-invalid");
        this.$refs.errorposterurl.innerText="Ingrese un URL valida";
        return;
      }
    }
  },
  computed: {

  },
  watch:{
    pelicula(newData ){
      console.log("prop PELICULA actualiza");
      console.log(newData);
      this.peli_titulo =  (this.pelicula) ? this.pelicula.titulo : '' ;
      this.peli_anio =  (this.pelicula) ? this.pelicula.anio :'';
      this.peli_idioma =  (this.pelicula) ? this.pelicula.idioma :'';
      this.peli_sinopsis =  (this.pelicula) ? this.pelicula.sinopsis :'';
      this.peli_genero = (this.pelicula) ? this.pelicula.genero :'';
      this.peli_precio =  (this.pelicula) ? this.pelicula.precio :"";
      this.peli_posterurl = (this.pelicula) ? this.pelicula.posterUrl :"";
    }
  }
}


</script>

<style scoped >
  .form-edit-pelicula {
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  /* input[type=number] {
    -moz-appearance: textfield;
  } */
</style>
