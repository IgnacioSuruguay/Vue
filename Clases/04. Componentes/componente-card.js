Vue.component("componente-card",{
    props:{
        titulo: String,
        imagen: String,
        costo: Number,
        stock: Boolean
    },
    template:/*html*/`
    <div class="card col-2 text-center" >
        <img :src="imagen" :alt="titulo">
        <div class="card-body">
            <h5 class="card-title">{{titulo}}</h5>
            <p class="card-text">$ <strong>{{costo}}</strong></p>
            <button v-if="stock" class="btn btn-primary">Comprar</button>
            <p v-else>Sin stock</p>
        </div>
    </div>    
    `
})