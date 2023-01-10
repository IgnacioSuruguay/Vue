<template>
  <section class="listado-productos container">
    <h1>listado</h1>
    <div class="row">
      <div class="card item col-2 m-2"  v-for="(pelicula, index) in getProductos()" :key="index">
        <img :src="pelicula.posterUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>{{pelicula.titulo}}</strong></h5>
          <p class="card-text">{{pelicula.genero.join(" - ")}}</p>
          <p class="list-group-item">${{pelicula.precio}}</p>
          <div>
            <button class="btn btn-secondary m-1" @click="targetDetalle = pelicula " data-bs-toggle="modal" data-bs-target="#detalleModal">Info</button>
            <button  v-if="$store.getters.getUser && !$store.getters.esAdministrador" class="btn btn-primary m-1" @click="AgregarAlCarrito(pelicula)">Agregar</button>
          </div>        
        </div>
      </div>
      <div v-if=" $store.getters.getProductos == null" class="alert alert-light" role="alert">
        Cargando ...
      </div>
      <div v-else-if="$store.getters.getProductos.length == 0" class="alert alert-light" role="alert">
        no hay productos cargados en el sistema
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
  import { mapActions, mapGetters } from 'vuex';
  import InfoProducto from './InfoProducto.vue';
  export default  {
    name: "listado-productos",
    props: [],
    created () {
      console.log("calling getProductosAction");
      // this.getProductosAction();
      this.$store.dispatch('getProductosAction');
      console.log("called getProductosAction");
    },
    mounted() {
    },
    data() {
        return {
            targetDetalle: null
        };
    },
    methods: {
      ...mapActions(['getProductosAction']),
      ...mapGetters(["getProductos"]),
        AgregarAlCarrito(el) {
            let arr_carrito = [];
            // let item = {
            //   id_pelicula : el.id,
            //   precio : el.precio,
            //   dias: 1
            // }
            let item = el;
            item.dias = 1;
            let storage_carrito = localStorage.getItem("carrito");
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
            localStorage.setItem("carrito", JSON.stringify(arr_carrito));
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
