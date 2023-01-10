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
          costoFinal: this.calcularTotal,
          estado: "pendiente"
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
