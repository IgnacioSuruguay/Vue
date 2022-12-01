<template>
  <div >
    <input type="number" v-model="id">
    <button @click="buscar()" >Buscar</button>
    <p>{{encontrado}}</p>
  </div>
</template>

<script>
export default {
  name: 'BuscadorWeb',
  props: {
    lista: Array,
  },
  data(){
    return{
      id: "",
      encontrado: ""
    };
  },
  methods:{
    buscar(){
      this.encontrado = this.lista.find((prod)=> prod.id == parseInt(this.id)) ?? "No existe el id";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
