<template >

  <section class="usuarios-componente">
    <h1>lista de usuarios</h1>
    <h2>Selecciona un usuario</h2>
    <button @click="cambiarRuta({path:'/usuario/1'})">1</button>
    <button @click="cambiarRuta({path:'/usuario/2'})">2</button>
    <br>
    <button v-for="(user, index) in usuarios" :key="index" @click="cambiarRuta({path:`/usuario/${user.id}`})">{{user.id}}</button>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'usuarios-componente',
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
      cambiarRuta(ruta){
        this.$router.push(ruta)
      }
    },
    computed: {

    }
}


</script>

<style scoped>
  .usuarios-componente {

  }
</style>
