<template>
  <section class="listado-productos container">
    <h1>listado</h1>
    <div class="row">
      <div class="card item col-2 m-2"  v-for="(pelicula, index) in peliculas" :key="index">
        <img :src="pelicula.posterUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>{{pelicula.titulo}}</strong></h5>
          <p class="card-text">{{pelicula.genero.join(" - ")}}</p>
          <p class="list-group-item">${{pelicula.precio}}</p>
          <div>
            <button class="btn btn-secondary m-1" @click="targetDetalle = pelicula " data-bs-toggle="modal" data-bs-target="#detalleModal">Info</button>
            <button class="btn btn-primary m-1" @click="AgregarAlCarrito(pelicula)">Agregar</button>
          </div>        
        </div>
      </div>
    </div> 
      <!-- Modal -->
      <div class="modal fade modal-lg" id="detalleModal" tabindex="-1" ref="detalleModal" aria-labelledby="detalleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <InfoProducto :pelicula="targetDetalle" @agregar="AgregarAlCarrito($event)"></InfoProducto>
          </div>
        </div>
      </div>   
  </section>

</template>

<script lang="js">
  // import {Pelicula} from "../class"
  import axios from 'axios';
import InfoProducto from './InfoProducto.vue';
  export default  {
    name: "listado-productos",
    props: [],
    created() {
        const peliculasEndPoint = "https://639a6077d514150197347436.mockapi.io/cinema/peliculas";
        axios.get(peliculasEndPoint)
            .then((response) => {
            // console.table(response.data);
            this.peliculas = response.data;
        })
            .catch((err) => { console.error(`${err}`); });
    },
    mounted() {
    },
    data() {
        return {
            peliculas: [],
            targetDetalle: null
            // peliculas:[
            //   {
            //     id: 1,
            //     titulo : "Terminator",
            //     anio : 1984,
            //     // poster :"../assets/posters/terminator-1984.jpg",
            //     poster: "https://img.yts.mx/assets/images/movies/The_Terminator_1984/medium-cover.jpg",
            //     sinopsis : "Un cyborg ha sido enviado desde el futuro en una misi??n mortal: Eliminar a Sarah Connor, una joven cuya vida tendr?? una gran importancia en los pr??ximos a??os.",
            //     genero : ["Ciencia Ficci??n", "Acci??n"],
            //     precio : 10.0
            //   },
            //   {
            //     id: 2,
            //     titulo : "Volver al futuro",
            //     anio : 1985,
            //     // poster :"../assets/posters/backtothefuture-1985.jpg",
            //     poster: "https://img.yts.mx/assets/images/movies/Back_to_the_Future_1985/medium-cover.jpg",
            //     sinopsis : "Marty McFly es un adolescente amigo de Doc, un cient??fico a los que todos menos ??l toman por chiflado. Cuando Doc crea una m??quina para viajar en el tiempo en forma de un autom??vil deportivo, Marty viaja accidentalmente al a??o 1955",
            //     genero : ["Ciencia Ficci??n"],
            //     precio : 9.5
            //   }
            // ]
        };
    },
    methods: {
        AgregarAlCarrito(el) {
            let arr_carrito = [];
            // let item = {
            //   id_pelicula : el.id,
            //   precio : el.precio,
            //   dias: 1
            // }
            let item = el;
            item.dias = 1;
            let storage_carrito = sessionStorage.getItem("carrito");
            if (storage_carrito) {
                arr_carrito = JSON.parse(storage_carrito);
            }
            let indexPeli = arr_carrito.findIndex((item) => item.id == el.id);
            if (indexPeli != -1) {
                arr_carrito[indexPeli].dias += 1;
            }
            else {
                arr_carrito.push(item);
            }
            sessionStorage.setItem("carrito", JSON.stringify(arr_carrito));
        }
    },
    computed: {},
    components: { InfoProducto }
}


</script>

<style scoped>
  .listado-productos ul{
    display: flex;
  }
  .listado-productos ul li{
    display: inline-flex;
  }
  .item{
    width: 18rem;
    padding-left: 0 ;
    padding-right: 0 ;
  }
</style>
