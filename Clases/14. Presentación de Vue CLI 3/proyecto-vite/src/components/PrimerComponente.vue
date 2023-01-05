<script setup>
import { ref, onBeforeUpdate } from 'vue';
    //datos estaticos
    const titulo2 = "soy otro title";

    //datos dinamicos
    let clicks = ref(0);
    let nombre = ref("");
    const aumentar = ()=>{clicks.value++}

    onBeforeUpdate(()=>{
        console.log("El valor de lo clicks antes de actualizar:" + clicks.value);
    })

</script>

<template>
    <h1>Hola VUE 3</h1>
    <h2>{{ titulo2 }}</h2>
    <p>{{ clicks }}</p>
    <button @click="aumentar()">contar clicks</button>
    <br>
    <label for="">
        ingrese nombre
        <input type="text" v-model="nombre">
    </label>
    <p>
        nombre ingresado: {{ nombre }}
    </p>
</template>

<style scoped>

</style>