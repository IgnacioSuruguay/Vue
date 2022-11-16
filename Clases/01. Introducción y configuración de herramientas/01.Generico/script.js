const app = {
    main: function () {

    },
    algo: function () {
        console.log("calculando numero")
        let requestPokemons = new Promise(function (resolve) {
            let num = Math.random(100);
            setTimeout(resolve, 500);
            return num;
        });
        requestPokemons.then(x => {
            debugger
            console.log("calculando factodial de " + x);
            app.factorial(x)
        });
    },
    factorial: function (n) {
        debugger
        let total = 1;
        for (i = 1; i <= n; i++) {
            total = total * i;
            console.log(total);
        }
        return total;
    }
}