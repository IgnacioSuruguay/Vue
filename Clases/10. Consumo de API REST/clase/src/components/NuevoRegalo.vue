<template>

  <div>
    <h1>Form regalo</h1>
    <form action="" method="post" @submit.prevent="submitPost()">
      <label>Para quien es el regalo: </label>
      <input type="text" v-model="destinatario" class="form-control" placeholder="Ingresar nombre">
      <label for="">Ingresa lo que quieras regalar:</label>
      <input type="text" v-model="regalo" class="form-control" placeholder="Aqui regalo">

      <button type="submit" class="btn btn-warning">Enviar</button>
    </form>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'nuevo-regalo',
    props: [],
    mounted () {

    },
    data () {
      return {
        destinatario: '',
        regalo: ''
      }
    },
    methods: {
      async submitPost(){
        const nuevoRegalo={
          destinatario: this.destinatario,
          regalo: this.regalo
        }
        const urlPost = "https://639a6077d514150197347436.mockapi.io/regalos";
        const header = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoRegalo)
        }
        const response = await fetch(urlPost, header);
        const respuestaPost = response.json();
        console.log(respuestaPost);
      }
    },
    computed: {

    }
}


</script>

<style scoped >
  .nuevo-regalo {

  }
</style>
