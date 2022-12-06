<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="usuario"/>
    <padre-prueba titulo="Frases inspiradoras" />

    <slot-prueba>
      <h3>Oso de agua - slot</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-CnQ-kbDLo1FygGF4d03axdxI4LgCzMVaA&usqp=CAU" alt="" srcset="">
      <p slot="precio">${{precio}}</p>
    </slot-prueba>
    <!-- filtros -->
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PadrePrueba from './components/PadrePrueba.vue'
import SlotPrueba from './components/SlotPrueba.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PadrePrueba,
    SlotPrueba
  },
  data:function(){
    return{
      usuario:{
        nombre:"Lucas",
        edad:15,
      },
      precio: 2399
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
