<template >

  <section class="ciclo-vida">
    <h1>ciclo de vida de un componente</h1>
    <p>{{dato}}</p>
  <button @click="cambiarDato()">Cambiar dato</button>
  <button @click="destruir()">Destruir componente</button>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'ciclo-vida',
    props: [],
    beforeCreate(){
      console.log("beforeCreate()");
      console.log("Dato:" + this.dato);
    },
    created(){
      //accede a los datos pero aun no puede renderizar en el dom. 
      console.log("created()");
      console.log("Dato:" + this.dato);
    },
    beforeMount(){
      //Justo en el momento previo a insertar cosas en el DOM?
      console.log("beforeMount()");
    },
    mounted () {
      // inserto en el DOM. se piede acceder a los datos e invocar a los metodos
      console.log("mounted()");
    },
    beforeUpdate(){
      console.log("beforeUpdate()");
    },
    updated(){
      console.log("updated()");
    },
    beforeDestroy(){
      //antes de destruir la instancia debo guardar lo que necesito usar/persistir
      console.log("beforeDestroy()");
    },
    destroyed(){
      //Se destrulle la instancia
      console.log("destroyed()");
    },
    data () {
      return {
        dato: "Hola soy un dato que se renderiza!"
      }
    },
    methods: {
      cambiarDato(){
        this.dato = "Dato cambiado!!!!";
      },
      destruir(){
        //se mata el componente
        this.$destroy();
      }
    },
    computed: {

    }
}


</script>

<style scoped>
  .ciclo-vida {

  }
</style>
