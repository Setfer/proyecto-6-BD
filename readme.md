# Proyecto 6

## Base de datos

1 .La base de datos estará compuesta de dos colecciones: **Juegos y Personajes**.
Cada **juego** tendrá los siguientes atributos:

- nombre: String
- publicacion :Number
- genero: String

Cada **personaje** tendrá los siguientes atributos:

- nombre: String
- edad :Number
- arma: String
- juego: ObjectId ref:'juegos'

2 .El servidor está creado en el puerto 3000, dispondremos de dos endpoints principales:

- /api/v1/juegos
- /api/v1/personajes

En ambos endpoints podremos hacer crud completo, dependiendo de tipo de petición que realicemos.

3 .Tanto para el delete como para el update, debemos de poner en la ruta el id de dicho objeto que deseemos modificar,
también lo haremos de esta forma si queremos buscar por id quedando así :

- /api/v1/personajes/_ID DEL JUEGO_
- /api/v1/juegos/_ID DEL JUEGO_

  4.También tendremos la opción de hacer búsqueda por género con la siguiente ruta :

- /api/v1/juegos/genero/_GENERO DEL JUEGO_

5 .Para un correcto funcionamiento, necesitaremos las librerias **nodemon**, **express**, **dotenv** y **mongoose**

6 .Como utilidades, podremos volcar semillas tanto de personajes como de juegos.
Podemos volcarlo de forma individual con los comandos

```
npm run juegosSeed
npm run personajesSeed
```

y de forma conjunta con

```
npm run seedAll
```
