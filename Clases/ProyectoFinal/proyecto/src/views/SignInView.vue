<template>
  <div class="home">
    <log-in></log-in>
    <Register :register="true"></Register>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue';
import LogIn from '../components/LogIn.vue'

export default {
  name: 'SignInView',
  components: {
    Register,
    LogIn
  },
  data(){
    return {
      usuario: null,
    }
  }
}
</script>