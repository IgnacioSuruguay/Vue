<template>
  <div class="home">
    <img alt="Logo" src="../assets/logo.png" style="width: 10em">
    <SignInView></SignInView>
  </div>
</template>

<script>
// @ is an alias to /src

import SignInView from './SignInView.vue';

export default {
  name: 'HomeView',
  components: {
    SignInView
}
}
</script>
