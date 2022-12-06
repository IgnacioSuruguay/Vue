<template>

  <section class="PadrePrueba">
    <h1>padre-prueba Component</h1>
    <hijo-prueba :titulo="tit_hijo" @enviar="frases.push($evet)" />

  </section>

</template>

<script >

  export default  {
    name: 'PadrePrueba',
    props: [],
    mounted () {

    },
    data () {
      return {
        tit_hijo:"Ingrese nueva frase",
        frases:["persevera y triunfaras"]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >

</style>
