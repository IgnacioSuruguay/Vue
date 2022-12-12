<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Register></Register>
    <LogIn></LogIn>
    <ListadoProductos></ListadoProductos>
    <InfoProducto></InfoProducto>
    <Carrito></Carrito>
  </div>
</template>

<script>
import Carrito from './components/Carrito.vue';
import InfoProducto from './components/InfoProducto.vue';
import ListadoProductos from './components/ListadoProductos.vue';
import LogIn from './components/LogIn.vue';
import Register from './components/Register.vue';

export default {
  name: 'App',
  components: {
    Register,
    LogIn,
    ListadoProductos,
    InfoProducto,
    Carrito
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
