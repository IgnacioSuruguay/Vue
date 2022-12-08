<template>
  <div class="container">
    <div v-show="errores.length" class="alert alert-danger">
      {{ mostrarErrores }}
    </div>
    <form action="" id="form" @submit.prevent="validarFormulario">
      <div class="row">
        <div class="col col-12">
          <br /><br />
          <label for="inputNombre" class="text-start">Tu nombre</label>
          <input v-model.trim="nombre" @keyup.space="contarPalabras" type="text" class="form-control" id="inputNombre" placeholder="Nombre completo"  />
          <br />
          <p> Validar nombre: <span class="text-success fw-bold">{{ nombre }}</span></p>
          <br />
          <label for="inputEdad" class="form-label text-start">Edad</label>
          <input v-model.number="edad" type="number" class="form-control" id="inputEdad" placeholder="Edad"  />
          <br />
          <p> Validar edad: <span class="text-success fw-bold">{{ edad }}</span></p>
          <br />
          <label for="inputEmail" class="form-label text-start">Email</label>
          <input v-model="email" type="email" class="form-control" id="inputEmail" placeholder="tu@email.com"  />
          <br />
          <p> Validar email: <span class="text-success fw-bold">{{ email }}</span></p>
          <br />
          <div class="row">
              <h4>Selecciona tu curso</h4>
              <div class="col col-2">
                <div class="form-check">
                    <input v-model="cursos" class="form-check-input" type="checkbox" value="JavaScript" id="checkJS"/>
                    <label class="form-check-label" for="checkJS">       JavaScript     </label>
                </div>
                <div class="form-check">
                    <input v-model="cursos" class="form-check-input" type="checkbox" value="React" id="checkReact"/>
                    <label class="form-check-label" for="checkReact"> React </label>   
                </div>
                <div class="form-check">
                    <input v-model="cursos" class="form-check-input" type="checkbox" value="Angular" id="checkNg"/>
                    <label class="form-check-label text-start" for="checkNg">       Angular     </label>   
                </div>
                <div class="form-check">
                    <input v-model="cursos" class="form-check-input" type="checkbox" value="Vue" id="checkVue"/>
                    <label class="form-check-label" for="checkVue"> Vue </label>   
                </div>
              </div>
          </div>
          <br />
          <p> Validar cursos seleccionados: <span class="text-success fw-bold">{{ cursos }}</span></p>
          <br />
          <label for="areaComentarios" class="form-label text-start" >Comentarios</label>
          <textarea v-model.trim="comentarios" class="form-control" id="areaComentarios" rows="3"></textarea>
          <br />
          <p> Validar Comentarios: <span class="text-success fw-bold">{{ comentarios }}</span></p>
          <br />
          <label for="selector">Elige tu país</label>
          <select v-model="pais" id="selector" name="selector" class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="colombia">Colombia</option>
              <option value="argentina">Argentina</option>
              <option value="chile">Chile</option>
          </select>
          <p> Validar pais: <span class="text-success fw-bold">{{ pais }}</span></p>
          <br />
          <div class="row">
              <h4>Tipo de documento</h4>
              <div class="col">   
                <input v-model="documento" type="radio" name="checkDNI" id="checkDNI" class="form-check-input" value="DNI"/>
                <label for="checkDNI">DNI</label>
              </div>
              <div class="col">   
                <input v-model="documento" type="radio" name="checkPass" id="checkPass" class="form-check-input" value="Pasaporte"/>
                <label for="checkPass">Pasaporte</label>
              </div>
              <div class="col">   
                <input v-model="documento" type="radio" name="checkVisa" id="checkVisa" class="form-check-input" value="Visa"/>
                <label for="checkVisa">VISA</label>
              </div>
          </div>
          <p> Validar documento: <span class="text-success fw-bold">{{ documento }}</span></p>
          <br />
          <hr />
          <div class="row">
              <br /> 
              <div class="col-10"></div>
              <br /> 
              <div class="col-2">   <input type="submit" class="btn btn-primary" value="ENVIAR" /> </div>
              <br />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormularioWeb",
  data() {
    return {
      nombre: "",
      edad: null,
      email: "",
      cursos: [],
      comentarios: "",
      documento: "",
      pais: "",
      errores: [],
      contador: 1
    };
  },
  methods: {
    validarFormulario() {
      if (this.nombre && this.edad && this.email) {
        alert("Campos obligatorios esta ok!!");
        setTimeout(() => {
          document.getElementById("form").reset();
          Object.assign(this.$data, this.$options.data());
        }, 500);
      }
      if (!this.nombre) {
        this.errores.push("El nombre es obligatorio.");
      }
      if (!this.edad) {
        this.errores.push("El edad es obligatorio.");
      }
      if (!this.email) {
        this.errores.push("El email es obligatorio.");
      }
      setTimeout(() => {
        this.errores = [];
      }, 3000);
    },
    contarPalabras(){
      console.log("Agregando otro nombre.")
    }
  },
  computed: {
    mostrarErrores() {
      return this.errores.join(" ");
    }
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
</style>
