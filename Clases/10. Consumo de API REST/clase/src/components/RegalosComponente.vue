<template>

  <section class="regalos-componente">
    <h1>Lista de regalos </h1>
    <div class="card-deck row">
      <CartaRegalo v-for="(regalo,index) in regalos" :key="index"  :regalo="regalo"></CartaRegalo>
    </div>
  </section>

</template>

<script lang="js">
import CartaRegalo from './CartaRegalo.vue';


  export default  {
    name: "regalos-componente",
    props: [],
    created() {
        const urlGet = "https://639a6077d514150197347436.mockapi.io/regalos";
        fetch(urlGet)
            .then(response => response.json())
            .then(data => {
            this.regalos = data;
            console.log(this.regalos);
        });
    },
    mounted() {
    },
    data() {
        return {
            regalos: [],
        };
    },
    methods: {},
    computed: {},
    components: { CartaRegalo }
}


</script>

<style scoped >
  .regalos-componente {

  }
</style>
