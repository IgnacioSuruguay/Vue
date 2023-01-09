<template >

  <section class="carrito container">
    <h1>pedidos</h1>

    <table class="table table-light table-striped">
      <thead>
        <tr>
          <th>ID Pedido</th>
          <th>Usuario</th>
          <th>Peliculas</th>
          <th>Total</th>
          <th>Fecha de ingreso</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getPedidos()" :key="index" >
          <td>{{item.id}}</td>
          <td>{{item.user}}</td>
          <td>{{item.peliculas.length}}</td>
          <td>${{item.costoFinal}}</td>
          <td>{{item.fechaPedido}}</td>
          <td><button class="btn btn-primary" >Entregar</button></td>
        </tr>
        <tr v-if="$store.state.pedidos == null">
          <td colspan="7">Cargando ...</td>
        </tr>
        <tr v-else-if="$store.state.pedidos.length == 0">
          <td colspan="7">No hay elementos seleccionados</td>
        </tr>
      </tbody>
    </table>
  </section>

</template>

<script lang="js">
  // import axios from 'axios';
  import { mapActions, mapGetters } from 'vuex';
  export default  {
    name: 'pedidos',
    props: [],
    created(){
      console.log("calling getProductosAction");
      // axios.get("https://639a6077d514150197347436.mockapi.io/cinema/pedidos")
      // .then((response) => {
      //   console.table(response.data);
      //   this.pedidos = response.data;
      // })
      // .catch((err) => { console.error(`error get pedidos: ${err}`); });
      this.$store.dispatch('getPedidosAction');

    },
    mounted () {

    },
    data () {
      return {
        pedidos : [],
      }
    },
    methods: {
      ...mapActions(["getPedidosAction"]),
      ...mapGetters(["getPedidos"]),
    },
    computed: {
    }
}


</script>

<style scoped>
  .carrito {
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
</style>
