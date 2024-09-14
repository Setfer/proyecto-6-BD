1.La base de datos estará compuesta de dos colecciones: Juegos y Personajes

2. El servidor está creado en el puerto 3000, dispondremos de dos endpoints principales:
  -/api/v1/juegos
  -/api/v1/personajes
En ambos endpoints podremos hacer crud completo, dependiendo de tipo de petición que realicemos.

3. Tanto para el delete como para el update, debemos de poner en la ruta el id de dicho objeto que deseemos modificar, 
también lo haremos de esta forma si queremos buscar por id quedando así : 
/api/v1/personajes/*ID DEL JUEGO*
-/api/v1/juegos/*ID DEL JUEGO*

4.También tendremos la opción de hacer búsqueda por género con la siguiente ruta 
-/api/v1/juegos/genero/*genero del juego*