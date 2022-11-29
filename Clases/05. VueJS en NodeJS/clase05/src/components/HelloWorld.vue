<template>
  <div class="hello">
    <h1 >Proyecto clase 05</h1>
    <h3 class="text-primary">{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

