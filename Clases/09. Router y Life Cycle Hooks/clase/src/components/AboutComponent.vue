<template >

  <section class="about-component">
    <h1>about-component Component</h1>
    <button @click="volverAtras()">Volver atras</button>
  </section>

</template>

<script >

  export default  {
    name: 'about-component',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      volverAtras(){
        this.$router.go(-1);
      }
    },
    computed: {

    }
}


</script>

<style scoped >
  .about-component {

  }
</style>
