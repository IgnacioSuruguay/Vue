* pase a produccion con github pages y netlify
* VUE 3 con Vite en vez de vue-cli


*** DEPLOY EN GETHUB PAGES
* instalar dependencias
npm i gh-pages -D

*ir a vue.config.js y agregar...
publicPath: process.env.NODE_ENV === "production"
 ? "/NOMBRE-REPO/"
 : "/",

process.env.NODE_ENV === 'production'
    ? '/prueba/'
    : '/',


*ir a package.json y agregar 

"script":{
    /*
    ...
    */,
    "deploy": "gh-pages -d dist"
}

*git 
git init
git add .
git commit -m "Primer commit"

git remote add origin <URL-REPO>

** deploy
npm run build
npm deploy

** se crea  un nuevo brach en github
** aguardar unos minutos hasta que se compila y publica la pagina


Para deploy a GitHub 
1- EN mi proyecto, 
2-  Crear un repo en 
3- Editar el archivo 
publicPath: 
4- Agregar a package.json, 
5- git init / git add . / git commit -m “Primer commit”
git remote add origin https://github.com/LauGM/prueba.git
git branch -M main
git push -u origin main
Con los detalles propios de tu repo
6- npm run build
7- npm run deploy
A esperar que quede activo en el repo
