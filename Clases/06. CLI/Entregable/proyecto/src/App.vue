<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Componentes con Vue CLI"/>
    <div class="container">
    <TablePersonas   :alumnos="alumnosCrossfit.alumnos" tipo="table-dark" :fontcolor="alumnosCrossfit.color" />
    <TablePersonas :alumnos="alumnosBoxeo.alumnos" tipo="table-danger" :fontcolor="alumnosBoxeo.color" />
    <TablePersonas :alumnos="alumnosMusculacion.alumnos" tipo="table-primary" :fontcolor="alumnosMusculacion.color" />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TablePersonas from './components/TablePersonas.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TablePersonas
  },
  data: function(){
    return {
      
        alumnosCrossfit:
        {
            alumnos: [
                {
                    nombre: "Lucas",
                    edad: 25,
                    peso: 70.5
                },
                {
                    nombre: "Gabriel",
                    edad: 43,
                    peso: 105.2
                },
                {
                    nombre: "Joaquin",
                    edad: 31,
                    peso: 84.7
                },
                {
                    nombre: "Lucas",
                    edad: 35,
                    peso: 120.4
                }
            ],
            color: "blue"
        },
        alumnosMusculacion: {
            alumnos: [
                {
                    nombre: "Agustina",
                    edad: 17,
                    peso: 64.3
                },
                {
                    nombre: "Lucia",
                    edad: 23,
                    peso: 71.5
                },
                {
                    nombre: "Mauro",
                    edad: 28,
                    peso: 55.1
                },
                {
                    nombre: "Ailen",
                    edad: 28,
                    peso: 65.4
                }
            ],
            color: "grey",
        },
        alumnosBoxeo: {
            alumnos: [
                {
                    nombre: "Lucia",
                    edad: 15,
                    peso: 60.3
                },
                {
                    nombre: "Ignacio",
                    edad: 28,
                    peso: 71.5
                },
                {
                    nombre: "Guillermo",
                    edad: 32,
                    peso: 88.1
                },
                {
                    nombre: "Antonella",
                    edad: 16,
                    peso: 65.4
                }
            ],
            color: "red"
        }
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
