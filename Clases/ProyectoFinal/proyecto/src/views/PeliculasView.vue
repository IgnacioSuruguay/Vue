<template>
  <div class="home">
    <ListPeliculas></ListPeliculas>
  </div>
</template>

<script>
// @ is an alias to /src

import ListPeliculas from '@/components/ListPeliculas.vue';

export default {
  name: 'PeliculasView',
  components: {
    ListPeliculas
}
}
</script>
