/**
 * los componentes son unidireccionales desde el componente hacia el quien lo invoca.
 * Sus prosp son de solo lectura.
 */
Vue.component('prueba-componente',{
    data: function(){
        return {
            nombre:"Pepinio"
        }
    },
    props:["titulo", "edad-prop"],
    // props:{
    //     titulo: String,
    //     edadprop: Int32Array
    // },
    template:/*html*/`
    <div>
        <h2> Hola {{nombre}} </h2>
        <h2 class="text-center text-primary">{{titulo}}</h2>
        <p>La edad es de {{edadProp}}</p>
    </div>
    `
})