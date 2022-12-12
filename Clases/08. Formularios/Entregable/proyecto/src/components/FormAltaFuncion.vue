<template>

  <section class="form-alta-funcion container">
    <h1>form-alta-funcion</h1>
    <form action="" method="post">
      <div class="form-floating">
        <select class="form-select input-group-sm mb-3" id="floatingSelect" aria-label="Floating label select example">
          <option selected disabled hidden>Open this select menu</option>
          <option value="1">Terminator</option>
          <option value="2">Volver al Futuro</option>
          <option value="3">Depredador</option>
        </select>
        <label for="floatingSelect">Película</label>
      </div>      
      <div class="form-floating">
        <input id="startDate" class="form-control  input-group-sm mb-3" type="date" />      
        <label for="startDate">Dia de la función</label>
      </div>
      <div class="form-floating">
        <input id="" class="form-control  input-group-sm mb-3" type="time" />      
        <label for="">Hora de la función</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          2D
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
        <label class="form-check-label" for="flexRadioDefault2">
          3D
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" >
        <label class="form-check-label" for="flexRadioDefault3">
          3D + DBOX
        </label>
      </div>
      
    </form>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'form-alta-funcion',
    props: [],
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
  .form-alta-funcion {
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
</style>
