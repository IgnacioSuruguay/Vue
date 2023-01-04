<template>
  <div id="app">
    <div >
      <nav class="navbar fixed-top navbar-light bg-light" >
        <div class="logo" @click="$router.push({path:'/'})">
          <img alt="Logo" src="@/assets/logo.png" style="margin: 0 10px 0 20px ;width: 60px;"/>CINEMA
        </div>
        <ul id="nav-list">
          <li>
            <router-link to="/">
              <font-awesome-icon icon="fa-solid fa-house" /> Inicio
            </router-link>
          </li>
          <li v-if="$store.getters.getUser && !$store.getters.esAdministrador">
            <router-link to="/carrito">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Carrito
            </router-link>
          </li>
          <li v-if="$store.getters.esAdministrador">
            <router-link to="/peliculas" >ABM Peliculas</router-link>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-user" />
          </li>
          <li>
            <router-link to="/signin" v-if="!$store.getters.getUser" class="btn btn-outline-success">Iniciar sesión</router-link>
            
            <button href="#" v-else class="btn btn-outline-danger" @click="signOut()" >
              <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
              Sign Out
            </button>
          </li>            
        </ul>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/background-wallpaper2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; 
  margin-top: 65px;
}
.logo:hover{
  cursor: pointer;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#nav-list{
  list-style-type: none;
  margin: 0;
  display: inline-flex;
}
#nav-list li:hover:not(:last-child) {
    background-color: lightgray;
}
#nav-list li{
  margin-right: 10px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    display: flex;
  cursor: pointer;
}
#nav-list li:not(:last-child){
  border-bottom: 2px solid;
}

</style>
<script>

import { mapMutations } from 'vuex';
export default {
  components: {},
  name: "App",
  data() {
      return {
      };
  },
  methods:{
      ...mapMutations(['setUser']),
    signOut(){
      this.setUser(null);
      localStorage.removeItem("user");
      this.$router.push({path:'/signin'});
      // location.reload();
    }
  }
}
</script>
