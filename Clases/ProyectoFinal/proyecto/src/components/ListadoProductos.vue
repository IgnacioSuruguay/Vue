<template>

  <section class="listado-productos">
    <div class="card item"  v-for="(pelicula, index) in peliculas" :key="index">
      <img :src="pelicula.poster" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><strong>{{pelicula.titulo}}</strong></h5>
        <p class="card-text">{{pelicula.genero.join(" - ")}}</p>
        <p class="list-group-item">${{pelicula.precio}}</p>
        <button class="btn btn-primary">Mas Información</button>
      </div>
    </div>    
  </section>

</template>

<script lang="js">
  // import {Pelicula} from "../class"
  export default  {
    name: 'listado-productos',
    props: [],
    mounted () {

    },
    data () {
      return {
        peliculas:[
          {
            titulo : "Terminator",
            anio : 1984,
            // poster :"../assets/posters/terminator-1984.jpg",
            poster: "https://img.yts.mx/assets/images/movies/The_Terminator_1984/medium-cover.jpg",
            sinopsis : "Un cyborg ha sido enviado desde el futuro en una misión mortal: Eliminar a Sarah Connor, una joven cuya vida tendrá una gran importancia en los próximos años.",
            genero : ["Ciencia Ficción", "Acción"],
            precio : 10.0
          },
          
          {
            titulo : "Volver al futuro",
            anio : 1985,
            // poster :"../assets/posters/backtothefuture-1985.jpg",
            poster: "https://img.yts.mx/assets/images/movies/Back_to_the_Future_1985/medium-cover.jpg",
            sinopsis : "Marty McFly es un adolescente amigo de Doc, un científico a los que todos menos él toman por chiflado. Cuando Doc crea una máquina para viajar en el tiempo en forma de un automóvil deportivo, Marty viaja accidentalmente al año 1955",
            genero : ["Ciencia Ficción"],
            precio : 9.5
          }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .listado-productos {
    border: 1px solid lightgrey;
    border-radius: 10px;
    width: 400px;
    margin: 10px auto;
    display: flex;
  }
  .item{
    width: 18rem;
    margin: 20px 10px;
  }
</style>
