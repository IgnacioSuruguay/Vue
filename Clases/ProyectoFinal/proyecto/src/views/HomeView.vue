<template>
  <div class="home">
    <img alt="Logo" src="../assets/logo.png" style="width: 10em">
    <listado-productos></listado-productos>
  </div>
</template>

<script>
// @ is an alias to /src
import ListadoProductos from '../components/ListadoProductos.vue'

export default {
  name: 'HomeView',
  components: {
    ListadoProductos,
  }
}
</script>
