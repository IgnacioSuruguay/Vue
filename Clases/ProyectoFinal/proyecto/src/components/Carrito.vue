<template >

  <section class="carrito container">
    <h1>carrito Component</h1>

    <table class="table table-light table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Película</th>
          <th>Género</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in carrito" :key="index" >
          <td>{{index + 1}}</td>
          <td>{{item.titulo}}</td>
          <td>{{item.genero.join(" / ")}}</td>
          <td>${{item.precio}}</td>
          <td><button class="btn btn-secondary" @click="Quitar(item)">Quitar</button></td>
        </tr>
        <tr v-if="carrito.length == 0">
          <td colspan="5">No hay elementos seleccionados</td>
        </tr>
      </tbody>
      <tfoot class="table-dark" v-if="carrito.length > 0">
        <tr>
          <td colspan="4">Total</td>
          <td>${{calcularTotal}}</td>
        </tr>
      </tfoot>
    </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'carrito',
    props: [],
    mounted () {

    },
    data () {
      return {
        carrito:[
          {
            id: 1,
            titulo : "Terminator",
            anio : 1984,
            // poster :"../assets/posters/terminator-1984.jpg",
            poster: "https://img.yts.mx/assets/images/movies/The_Terminator_1984/medium-cover.jpg",
            sinopsis : "Un cyborg ha sido enviado desde el futuro en una misión mortal: Eliminar a Sarah Connor, una joven cuya vida tendrá una gran importancia en los próximos años.",
            genero : ["Ciencia Ficción", "Acción"],
            precio : 10.0
          },
          {
            id: 2,
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
      Quitar(item){
        let newCarrito = this.carrito.filter((e)=> e.id !== item.id);
        this.carrito = newCarrito;
      }
    },
    computed: {
      calcularTotal(){
        let total = 0;
        this.carrito.forEach(e => total += e.precio);
        return total;
      }
    }
}


</script>

<style scoped>
  .carrito {
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
</style>
