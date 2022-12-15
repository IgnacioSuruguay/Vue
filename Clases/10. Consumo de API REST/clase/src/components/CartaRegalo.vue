<template>

    <div class="card col-2 p-1 m-2" >
      <img :src="regalo.avatar" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Regalo para {{regalo.destinatario}}</h5>
        <p class="card-text">Agregado: {{regalo.createdAt}}</p>
        <p>Lo que le quiero regalar <strong>{{regalo.regalo}}</strong></p>
      </div>
    </div>    

</template>

<script lang="js">

  export default  {
    name: 'carta-regalo',
    props: {
      regalo: Object
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >
  .carta-regalo {

  }
</style>
