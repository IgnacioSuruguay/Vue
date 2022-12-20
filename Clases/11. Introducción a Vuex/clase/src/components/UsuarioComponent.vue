<template >

  <div class="usuario-component">
    <h1>Bienvenido/a {{ $store.getters.getUsuActivo }}</h1>
    <button class="btn btn-danger" @click="desloguear()">Log out</button>
  </div>

</template>

<script >
  import { mapMutations } from 'vuex';
  export default  {
    name: 'usuario-component',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      ...mapMutations(["desloguearUsuario"]),
      desloguear(){
        this.desloguearUsuario()
        this.$router.push("./")
      }
    },
    computed: {

    }
}


</script>

<style scoped>
  .usuario-component {

  }
</style>
