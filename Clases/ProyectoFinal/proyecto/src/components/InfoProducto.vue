<template>

  <section class="info-producto container">
    <h1>info-producto</h1>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="item.poster" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{item.titulo}}</h5>
            <p class="card-text">{{item.sinopsis}}</p>
            <p class="card-text"><small class="text-muted">{{item.anio}}. {{item.genero.join(" / ")}}</small></p>
            <p class="card-text"><small class="text-muted">Costo de alquiler ${{item.precio}}</small></p>
          </div>
        </div>
      </div>
    </div>    
  </section>

</template>

<script lang="js">

  export default  {
    name: 'info-producto',
    props: [],
    mounted () {

    },
    data () {
      return {
        item:{
            titulo : "Terminator",
            anio : 1984,
            // poster :"../assets/posters/terminator-1984.jpg",
            poster: "https://img.yts.mx/assets/images/movies/The_Terminator_1984/medium-cover.jpg",
            sinopsis : "Un cyborg ha sido enviado desde el futuro en una misión mortal: Eliminar a Sarah Connor, una joven cuya vida tendrá una gran importancia en los próximos años.",
            genero : ["Ciencia Ficción", "Acción"],
            precio : 10.0
          }
      }
    },
    methods: {

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
