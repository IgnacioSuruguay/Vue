<template>
    <div>
        <h1>Watcher</h1>
        <label for="nombre">
            Nombre: 
            <input type="text" name="nombre" v-model="nombre">
        </label>
        <p v-if="escribe">Escribiendo...</p>
    </div>
</template>
<script>
export default ({
    name: "WatcherPrueba",
    data() {
        return{
            nombre:"",
            escribe: false
        }
    },
    watch:{
        //el watcher debe tener el mismo nombre que la variable a observar
        nombre(nuevo, viejo){
            console.log("Nombre anterior: " + viejo);
            console.log("Nombre nuevo: " + nuevo);
            this.escribe=true;
            setTimeout(()=>{
                this.escribe=false;
            },2000)
        }
    }
})
</script>

<style scoped>
div{
    background-color: bisque;
    border: 5px solid;
}
</style>