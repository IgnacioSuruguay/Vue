<template lang="">

  <section class="usuario-componente">
    <h1>usuario-componente</h1>
    <!-- <p>{{this.$route.params.id}}</p> -->
    <h4>Datos del usuario {{this.$route.params.id}}</h4>
    <p>Nombre: {{usuarios[this.$route.params.id -1].nombre}}</p>
    <p>Password: {{usuarios[this.$route.params.id -1]["password"]}}</p>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'usuario-componente',
    props: [],
    mounted () {

    },
    data () {
      return {
        usuarios:[
          {
            id: 1,
            nombre: "Alf",
            password: "23po"
          },
          {
            id: 2,
            nombre: "Marian",
            password: "mari22"
          }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .usuario-componente {

  }
</style>
