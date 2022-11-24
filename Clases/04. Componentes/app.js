/**
 * Un componente web es un elemente que cuenta con uanb Vista,estilos y logica propia.
 * El mismo puede ser reutilizado.
 */
const app = new Vue({
    el: "#app",
    data:{
       texto: "Mis cards de productos-componentes",
       edad: 28,
       productos:[
        {
            titulo:"Celular iPhone 14",
            imagen: "./img/celular.png",
            costo: 999,
            stock: true
        },
        {
            titulo:"Celular iPhone 12",
            imagen: "./img/celular.png",
            costo: 600,
            stock: true
        },
        {
            titulo:"Celular iPhone 9",
            imagen: "./img/celular.png",
            costo: 500,
            stock: false
        }
    ]
    },
    methods:{
    },
    computed:{

    }
});