Vue.component("componente-table", {
    data: function(){
        return{
            
        }
    },
    props:{
        alumnos: Array,
        tipo: String,
        fontcolor : String
    },
    // props:["alumnos", "tipo"],
    template:/*html*/`
    <table class="table" :class="tipo"  v-bind:style="{color: fontcolor}">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Peso</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(alumno, i) of alumnos" :key="i" >
            <td>{{alumno.nombre}}</td>
            <td>{{alumno.edad}}</td>
            <td>{{alumno.peso}}</td>
          </tr>
        </tbody>
      </table>    
    `
})
