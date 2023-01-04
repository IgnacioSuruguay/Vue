<template>

  <section class="m-2">
    <div class="card" style="border: unset;" >
      <div class="row g-0">
        <div class="col-md-4">
          <img :src=" (pelicula) ? pelicula.posterUrl : '' " class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body text-start">
            <h3 class="card-title">{{ (pelicula) ? pelicula.titulo : '' }} </h3>
            <p class="card-title">{{ (pelicula) ? pelicula.anio : '' }} - {{ (pelicula) ? pelicula.idioma : '' }} </p>
            <p class="card-text">{{ (pelicula) ? pelicula.genero.join(" / ") : '' }}</p>
            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <p class="card-text">{{ (pelicula) ? pelicula.sinopsis : '' }}</p>

            </li>
            <li class="list-group-item"><strong>${{ (pelicula) ? pelicula.precio : '' }}</strong> </li>
          </ul>
          <button type="button" class="btn btn-secondary m-1" data-bs-dismiss="modal">Cerrar</button>
          <button v-if="!$store.getters.esAdministrador" type="button" class="btn btn-primary m-1" data-bs-dismiss="modal" @click="carrito()" >Agregar</button>

        </div>
      </div>
      
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'info-producto',
    props: {
      pelicula: Object
    },
    mounted () {

    },
    data () {
      return {
        
      }
    },
    methods: {
      carrito(){
        this.$emit("agregar", this.pelicula);
      }
    },
    computed: {

    }
}


</script>

<style scoped>
  .info-producto {
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
</style>
