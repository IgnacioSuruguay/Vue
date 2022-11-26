const app = new Vue({
    el: "#app",
    data: {
        alumnosCrossfit:
        {
            alumnos: [
                {
                    nombre: "Lucas",
                    edad: 25,
                    peso: 70.5
                },
                {
                    nombre: "Gabriel",
                    edad: 43,
                    peso: 105.2
                },
                {
                    nombre: "Joaquin",
                    edad: 31,
                    peso: 84.7
                },
                {
                    nombre: "Lucas",
                    edad: 35,
                    peso: 120.4
                }
            ],
            color: "blue"
        },
        alumnosMusculacion: {
            alumnos: [
                {
                    nombre: "Agustina",
                    edad: 17,
                    peso: 64.3
                },
                {
                    nombre: "Lucia",
                    edad: 23,
                    peso: 71.5
                },
                {
                    nombre: "Mauro",
                    edad: 28,
                    peso: 55.1
                },
                {
                    nombre: "Ailen",
                    edad: 28,
                    peso: 65.4
                }
            ],
            color: "grey",
        },
        alumnosBoxeo: {
            alumnos: [
                {
                    nombre: "Lucia",
                    edad: 15,
                    peso: 60.3
                },
                {
                    nombre: "Ignacio",
                    edad: 28,
                    peso: 71.5
                },
                {
                    nombre: "Guillermo",
                    edad: 32,
                    peso: 88.1
                },
                {
                    nombre: "Antonella",
                    edad: 16,
                    peso: 65.4
                }
            ],
            color: "red"
        }
    },
    methods: {

    },
    computed: {

    }
})