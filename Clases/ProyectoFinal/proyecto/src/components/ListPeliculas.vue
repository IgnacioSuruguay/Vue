<template >

  <section class="list-peliculas container">
    <h1>list-peliculas Component</h1>
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
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="EditarPelicula(pelicula)">Editar</button> </td>
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
      <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button> -->

      <!-- Modal -->
      <div class="modal fade modal-lg" id="exampleModal" tabindex="-1" ref="editModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <FormEditPelicula ref="FormEditPelicula" :pelicula="targetEdit" ></FormEditPelicula>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>      

      
  </section>

</template>

<script lang="js">

import axios from 'axios';
import FormEditPelicula from './FormEditPelicula.vue';
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
        },
        EditarPelicula(el){
          debugger
          this.targetEdit = el;

        }
    },
    computed: {},
    components: { FormEditPelicula }
}


</script>

<style scoped>
  .list-peliculas {

  }
</style>
