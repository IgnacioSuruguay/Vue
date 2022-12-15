<template>

  <section class="eliminar-regalo">
    <h1>eliminar-regalo </h1>
    <div>
    <h1>Form regalo</h1>
    <form action="" method="post" @submit.prevent="submitDelete()">
      <label>ID a eliminar: </label>
      <input type="number" v-model="id" class="form-control" placeholder="Ingresar ID">
      <button type="submit" class="btn btn-warning">Eliminar</button>
    </form>
  </div>
  </section>

</template>

<script lang="js">
  import axios from 'axios'
  export default  {
    name: 'eliminar-regalo',
    props: [],
    mounted () {

    },
    data () {
      return {
        id: null,
      }
    },
    methods: { 
      submitDelete(){
        const urlDelete = "https://639a6077d514150197347436.mockapi.io/regalos/"+ this.id
        const respuesta = axios.delete(urlDelete);
        console.log(respuesta);
      }
    },
    computed: {

    }
}


</script>

<style scoped >
  .eliminar-regalo {

  }
</style>
