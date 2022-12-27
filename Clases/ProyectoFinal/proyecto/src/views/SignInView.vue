<template>
  <div class="home">
    <log-in v-if="visible" @register="visible = $event"></log-in>
    <Register v-else @register="visible = $event" ></Register>
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
      visible: true
    }
  },
  methods:{

  }
}
</script>