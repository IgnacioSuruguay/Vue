<template>
    <div>
        <h4>{{titulo}}</h4>
        <input type="text" v-model="nuevaFrase">
        <button class="btn btn-dark" @click="enviarMethodHijo()">Enviar</button>
    </div>
</template>

<script>
export default {
    name: 'HijoPrueba',
    props:{
        titulo:String
    },
    data() {
        return {
            nuevaFrase:''
        };
    },


    methods: {
        enviarMethodHijo(){
            this.$emit("enviarEvent",this.nuevaFrase);
        }
    },
};
</script>

<style scoped>

</style>