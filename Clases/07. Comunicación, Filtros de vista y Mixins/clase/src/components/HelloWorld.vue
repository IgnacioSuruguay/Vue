<template>
  <div id="hello">
    <h1 href="usu">Usuario : {{msg.nombre}} - Edad: {{msg.edad}}</h1>
    <button @click="cambiarColor">Cambiar color</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: Object
  },
  methods:{
    cambiarColor(){
      this.$refs.usu.style.color="red";
    }
  }
}
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
