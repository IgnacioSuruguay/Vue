/**
 * v-if : condicional que no renderiza contenido. es mas costoso
 * v-show: pre renderiza contenido con display none. menos constoso
 */

const app = new Vue({
    el: "#app",
    data:{
        logged: false,
        usuario:"Nacho",
        mostrar:true,
        esMayor: false,
        clientes:[
            {
                nombre:"Jimena",
                imagen:"https://reqres.in/img/faces/7-image.jpg"
            },
            {
                nombre:"Juan",
                imagen:"https://reqres.in/img/faces/8-image.jpg"
            },
            {
                nombre:"Pedro",
                imagen:"https://reqres.in/img/faces/9-image.jpg"
            },
            {
                nombre:"Marcos",
                imagen:"https://reqres.in/img/faces/10-image.jpg"
            }
        ],
        css:{
            "bg-dark":true,
            "text-light": true
        }
    },
    methods:{
        Toggle(){
            this.mostrar = !this.mostrar;
        },
        ActualizarCopy(){
            
        }
    },
    computed:{

    }
});