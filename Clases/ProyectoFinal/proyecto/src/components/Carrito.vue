<template >

  <section class="carrito container">
    <h1>carrito</h1>

    <table class="table table-light table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Película</th>
          <th>Género</th>
          <th>Precio por día</th>
          <th>Dias</th>
          <th>Sub Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in carrito" :key="index" >
          <td>{{index + 1}}</td>
          <td>{{item.titulo}}</td>
          <td>{{item.genero.join(" / ")}}</td>
          <td>${{item.precio}}</td>
          <td > <input type="number" v-model="item.dias" style="width:50px; text-align: right;" ></td>
          <td>${{item.precio * item.dias}}</td>
          <td><button class="btn btn-secondary"  @click="Quitar(item)" >Quitar</button></td>
        </tr>
        <tr v-if="carrito.length == 0">
          <td colspan="7">No hay elementos seleccionados</td>
        </tr>
      </tbody>
      <tfoot  v-if="carrito.length > 0">
        <tr>
          <td colspan="4"></td>
          <td><strong>Total</strong></td>
          <td><strong>${{calcularTotal}}</strong></td>
          <td><button class="btn btn-primary" @click="FinalizarCompra()" >Finalizar compra</button></td>
        </tr>
      </tfoot>
    </table>
  </section>

</template>

<script lang="js">
  import axios from 'axios';
  export default  {
    name: 'carrito',
    props: [],
    created(){
      axios.get("https://639a6077d514150197347436.mockapi.io/cinema/peliculas")
      .then((response) => {
        // console.table(response.data);
        this.list_peliculas = response.data;
      })
      .catch((err) => { console.error(`${err}`); });
    },
    mounted () {

    },
    data () {
      return {
        carrito : JSON.parse( localStorage.getItem("carrito")) || [],
        // carrito:[
        //   {
        //     id: 1,
        //     titulo : "Terminator",
        //     anio : 1984,
        //     // poster :"../assets/posters/terminator-1984.jpg",
        //     poster: "https://img.yts.mx/assets/images/movies/The_Terminator_1984/medium-cover.jpg",
        //     sinopsis : "Un cyborg ha sido enviado desde el futuro en una misión mortal: Eliminar a Sarah Connor, una joven cuya vida tendrá una gran importancia en los próximos años.",
        //     genero : ["Ciencia Ficción", "Acción"],
        //     precio : 10.0
        //   },
        //   {
        //     id: 2,
        //     titulo : "Volver al futuro",
        //     anio : 1985,
        //     // poster :"../assets/posters/backtothefuture-1985.jpg",
        //     poster: "https://img.yts.mx/assets/images/movies/Back_to_the_Future_1985/medium-cover.jpg",
        //     sinopsis : "Marty McFly es un adolescente amigo de Doc, un científico a los que todos menos él toman por chiflado. Cuando Doc crea una máquina para viajar en el tiempo en forma de un automóvil deportivo, Marty viaja accidentalmente al año 1955",
        //     genero : ["Ciencia Ficción"],
        //     precio : 9.5
        //   }
        // ]
      }
    },
    methods: {
      Quitar(item){
        let newCarrito = this.carrito.filter((e)=> e.id !== item.id);
        this.carrito = newCarrito;
        JSON.parse( localStorage.setItem("carrito", JSON.stringify(this.carrito)));


      },
      FinalizarCompra(){
        let p = [];
        this.carrito.forEach(e => {
          p.push({
            id_pelicula : e.id,
            titulo : e.titulo,
            precio : e.precio,
            dias: e.dias
          });
        });
        let pedido = {
          user: this.$store.state.user.id,
          peliculas: p,
          costoFinal: this.calcularTotal
        };
        axios.post("https://639a6077d514150197347436.mockapi.io/cinema/pedidos", pedido)
        .then((response) =>{
          console.log("created" + response.data);
          Object.assign(this.$data, this.$options.data());
          localStorage.removeItem("carrito");
          this.carrito = [];
        })
        .catch((err) => {
          console.error(`${err}`)
        });

      }
    },
    computed: {
      calcularTotal(){
        let total = 0;
        this.carrito.forEach(e => total += (parseFloat(e.precio)*e.dias));
        return total;
      }
    },
    watch: {
    }
}


</script>

<style scoped>
  .carrito {
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
</style>
