<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomeComponent></HomeComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent
}
}
</script>
