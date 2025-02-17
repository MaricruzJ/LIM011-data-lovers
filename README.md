# Descripción del Proyecto Data Lovers - Pokemanía
  Nuestros principales usuarios son los jugadores de Pokemon Go.
  La página fue diseñada con el propósito de brindarle al usuario toda la información sobre los pokemones y puedan jugar de manera estratégica. 

  Nuestra primera vista muestra a la mano derecha todos los pokemones, con su imágen y nombre respectivamente de forma ascendente. En la mano izquierda muestra todos nuestros filtros, por tipos, debilidades, ordenado por los más fuertes y más débiles, cantidad de candies, el top 10 de los Pokemones y finalmente se tiene la opción de volver a mostrarnos todos los pokemos ordenados de forma ascendente. Además en la parte superior de filtros, tenemos un buscador, donde se pueden buscar los pokemones de su preferencia. 

  La segunda vista se muestra al darle click al Pokemon, esta contiene la información como su tipo, candy, candy-count, peso, talla, multiplicadores, debilidades, anterior evolución, siguiente evolución. 

  ### Imágenes sobre el proyecto:
  

## Investigación UX
  ### ¿Quiénes son los usuarios y los objetivos en relación con el producto?
  Nuestros principales usuarios son los jugadores de Pokemon Go.
  Los usuarios necesitan conocer las caracterísiticas de cada Pokemon. 
  1. Al usuario le gustaría hacer búsqueda específicas para encontrar a determinado pokemon.
  2. Al usuario le gustaría ver el top 10 de pokemones de frecuencia de aparición.
  3. Al usuario le gustaría poder filtrar a los pokemones por sus tipos y debilidades.
  4. Al usuario le gustaría saber quiénes son los pokemones más fuertes. 
  5. Al usuario le gustaría saber qué pokemones tienen más debilidades. 
  6. Al usuario le gustaría saber por rangos, la cantidad de candies que necesita un pokemon.
  7. Al usuario le gustaría conocer las evoluciones de los pokemones, tanto la anterior como la siguiente evolución. 

  ### ¿Cómo el producto soluciona los problemas/necesidades de dichos usuarios?

  En la primera viste de la página web, se puede encontrar una sección de filtros: 
  Nos permiten hacer búsquedas específicas. 
  Muestra a los 10 pokemones con mayor frecuencia de aparición.
  Filtra a los pokemones por sus tipos y debilidades. 
  Filtra a los pokemones más fuertes y más débiles. 
  Filtra a pokemones por por la cantida de candies que necesitan para alimentarse. 

  En la segunda vista, a parte de mostrar todos sus datos de los pokemones, podemos ver sus evoluciones y en base a ello, seguir navegando en cada uno de los pokemones. 

  ### Foto del primer prototipo en papel

  ### Resumen del feedback recibido y las mejoras a realizar

  Inicialmente nuestro búscador se encontraba en la sección donde se viasualizan todos los pokemones, actualmente después de recibir el feedback consideramos que debería ir para el lado izquierdo.

  ### Imagen del prototipo final

  ![Primera vista!](/src/images/Primer-prototipo.jpeg "Primera vista")
  ![Segunda vista!](/src/images/Segundo prototipo.jpeg "Segunda vista")
  ![Tercera vista!](/src/images/tercer prototipo.jpeg "Tercera vista")

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener _feedback_ e iterar.
- [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [x] Planear y ejecutar _tests_ de usabilidad.

### HTML y CSS

- [x] Entender y reconocer por qué es importante el HTML semántico.
- [x] Identificar y entender tipos de selectores en CSS.
- [x] Entender como funciona `flexbox` en CSS.
- [ ] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM

- [x] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [x] Manejar eventos del DOM. (addEventListener)
- [ ] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value).

### Javascript

- [x] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [x] Manipular objects (key | value).
- [x] Entender el uso de condicionales (`if-else` | `switch`).
- [ ] Entender el uso de bucles (`for` | `forEach`).
- [x] Entender la diferencia entre expression y statements.
- [ ] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [x] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [x] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [x] Testear funciones (funciones puras).

### Git y GitHub

- [x] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [x] Utilizar los repositorios de GitHub (`clone` | `fork` | gh-pages).
- [x] Colaborar en Github (pull requests).

### Buenas prácticas de desarrollo
- [x] Organizar y dividir el código en módulos (Modularización).
- [ ] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [x] Utilizar linter para seguir buenas prácticas (ESLINT).


El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── pokemon
|  ├── README.md
├── potter
|  ├── README.md
├── lol
|  ├── README.md
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  └── lol.json
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  └── pokemon.json
|  |  ├── potter
|  |  |  ├── potter.js
|  |  |  └── potter.json
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
├── test
|  ├── data.spec.js
├── README.md
└── package.json

directory: 9 file: 16
