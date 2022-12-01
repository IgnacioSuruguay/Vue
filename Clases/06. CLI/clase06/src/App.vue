<template>
  <div id="App">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="mensaje"/>
    <BuscadorWeb :lista="productos" />
    <watcher-prueba/>
    <componente-vgc/>
  </div>
</template>

<script>

import BuscadorWeb from './components/BuscadorWeb.vue'
import HelloWorld from './components/HelloWorld.vue'
import WatcherPrueba from './components/WatcherPrueba.vue'
import ComponenteVgc from './components/ComponenteVgc.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BuscadorWeb,
    WatcherPrueba,
    ComponenteVgc
  },
  data: function(){
    return {
      mensaje:"Buscador de productos",
      productos: [
      {
        id: "1",
        nombre:"teclado"
      },
      {
        id: "2",
        nombre:"mouse"
      },
      {
        id: "3",
        nombre:"monitor"
      }
    ]
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
