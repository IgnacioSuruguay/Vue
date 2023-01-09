<template>
  <div class="home">
    <Pedidos></Pedidos>
  </div>
</template>

<script>
import Pedidos from '@/components/Pedidos.vue';
// @ is an alias to /src
export default {
  name: 'PedidosView',
  components: {
    Pedidos
},
  beforeCreate(){
  },
  data() {
    return {
    };
  },
  
}
</script>
