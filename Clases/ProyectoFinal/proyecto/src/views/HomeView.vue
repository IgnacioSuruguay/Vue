<template>
  <div class="home">
    <img alt="Logo" src="../assets/logo.png" style="width: 10em">
    <listado-productos></listado-productos>
  </div>
</template>

<script>
import ListadoProductos from '../components/ListadoProductos.vue';
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    ListadoProductos,
  },
  beforeCreate(){
    if(!JSON.parse( sessionStorage.getItem("user"))){
      this.$router.push({path:'/signin'})
    }
  },
  data() {
    return {
      user: JSON.parse( sessionStorage.getItem("user")) ,
    };
  },
  
}
</script>
