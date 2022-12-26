<template>
  <div class="home">
    <FormAltaPelicula></FormAltaPelicula>
    <ListPeliculas></ListPeliculas>
  </div>
</template>

<script>
// @ is an alias to /src

import FormAltaPelicula from '@/components/FormAltaPelicula.vue';
import ListPeliculas from '@/components/ListPeliculas.vue';

export default {
  name: 'PeliculasView',
  components: {
    FormAltaPelicula,
    ListPeliculas
}
}
</script>
