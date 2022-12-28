<template >

  <section class="list-peliculas container">
    <div style="display: flex; justify-content: space-between;" class="m-2"> 
      <h1>list-peliculas</h1>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editPeliModal" style="align-self: center;" @click="targetEdit = null" >Nuevo</button>  
    </div>
        <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Película</th>
            <th>Año</th>
            <th>Idioma</th>
            <th>Genero</th>
            <th>Eliminar</th>
            <th>Modificar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pelicula, index) in list_peliculas" :key="index">
            <td>{{index+1}}</td>
            <td>{{pelicula.titulo}}</td>
            <td>{{pelicula.anio}}</td>
            <td>{{pelicula.idioma}}</td>
            <td>{{pelicula.genero.join("/")}}</td>
            <td><button class="btn btn-danger" @click="EliminarPelicula(pelicula)">Eliminar</button></td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editPeliModal" @click="targetEdit= pelicula">Editar</button> </td>
          </tr>
          <tr v-if="list_peliculas == null">
            <td colspan="7">Cargando</td>
          </tr>
          <tr v-else-if="list_peliculas.length == 0">
            <td colspan="7">No hay peliculas disponibles</td>
          </tr>
        </tbody>
      </table>
      <!-- model edicion -->
      <!-- Button trigger modal -->
      <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editPeliModal">
        Launch demo modal
      </button> -->

      <!-- Modal -->
      <div class="modal fade modal-lg" id="editPeliModal" tabindex="-1" ref="editPeliModal" aria-labelledby="editPeliModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">            
            <FormPelicula ref="FormPelicula" :pelicula="targetEdit" ></FormPelicula>
          </div>
        </div>
      </div>      

      
  </section>

</template>

<script lang="js">

import axios from 'axios';
import FormPelicula from './FormPelicula.vue';
  export default  {
    name: "list-peliculas",
    props: [],
    created() {
        axios.get("https://639a6077d514150197347436.mockapi.io/cinema/peliculas")
            .then((response) => {
            // console.table(response.data);
            this.list_peliculas = response.data;
        })
            .catch((err) => { console.error(`${err}`); });
    },
    mounted() {
    },
    data() {
        return {
            list_peliculas: null,
            targetEdit: null
        };
    },
    methods: {
        EliminarPelicula(el) {
            const idToDelete = el.id;
            const deleteURL = "https://639a6077d514150197347436.mockapi.io/cinema/peliculas" + "/" + idToDelete;
            axios.delete(deleteURL)
                .then((response) => {
                console.table(response.data);
                this.list_peliculas = this.list_peliculas.filter(e => e.id != idToDelete);
            })
                .catch((err) => { console.error(`${err}`); });
        }
    },
    computed: {},
    components: { FormPelicula }
}


</script>

<style scoped>
  .list-peliculas {

  }
</style>
