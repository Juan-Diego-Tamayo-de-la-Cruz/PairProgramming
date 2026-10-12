# Currency Explorer · Starter Project




## Integrantes
- Estudiante A: Tamayo de la Cruz Juan Diego
- Estudiante B: Andres Herrera Oettinghaus

## Pair Programming
| Misión | Driver | Navigator | Commit / evidencia |
|---|---|---|---|
| 04 | Andres | Tamayo | Monedas dinámicas |
| 05 | Tamayo | Andres | Resultado en el DOM |
| 06 | Andres | Tamayo | Intercambio de monedas |
| 07 | Tamayo | Andres | Validación completa |
| 08 | Tamayo | Andres | Estado de carga |
| 09 | Tamayo | Andres | Errores HTTP y de red |
| 10 | Tamayo | Andres | Documentación y revisión |

## Objetivo
Completar una aplicación frontend que consuma Frankfurter API para convertir divisas y demostrar comprensión de eventos, DOM, `fetch()`, JSON, asincronía, validación y manejo de errores.

## Ejecución
1. Descomprime el proyecto.
2. Abre la carpeta en VS Code.
3. Ejecuta `index.html` con Live Server o un servidor local equivalente.
4. Abre DevTools → Console y Network para observar el comportamiento.

## API
Endpoint de referencia:
`https://api.frankfurter.dev/v2/rate/{origen}/{destino}`

## Decisiones técnicas

1. Se utilizó `fetch()` con `async/await` porque permite consumir la API de forma
   asíncrona y mantener el código legible.

2. Se validó `response.ok` antes de procesar el JSON para distinguir entre una
   respuesta exitosa y errores HTTP de la API.

3. Se deshabilitaron los botones durante la consulta para evitar peticiones
   duplicadas mientras se espera la respuesta.

4. Cuando la moneda de origen y destino son iguales, se utiliza una tasa de 1
   sin consultar la API.
   
5. En vez de usar Live Server, guardábamos con Ctrl+S y actualizábamos el
   navegador para visualizar los cambios.
6. Decidimos usar Live Share para realizar pair programming remoto en línea y en
   tiempo real, viendo los cambios del código de cada integrante.
7. Usamos GitHub para trabajar en distintos momentos y conservar el historial
   de las implementaciones.

## Revisión cruzada

- Aspecto bien resuelto: La aplicación actualiza el resultado sin recargar la página.
- Error o comportamiento mejorable: La versión inicial no comprobaba `response.ok`.
- Propuesta de mejora: Mostrar un mensaje de carga.
- Cambio incorporado después de la revisión: Se agregó `try/catch/finally`,
  validación HTTP y estado visual de consulta.


## Reflexión final (150–200 palabras)

Durante esta práctica aprendimos a construir una aplicación frontend que consume
una API pública y actualiza el DOM sin recargar la página. El aprendizaje
principal fue entender el flujo completo de una petición asíncrona: validar los
datos del formulario, construir la URL, esperar la respuesta, comprobar el
estado HTTP y mostrar un resultado o un mensaje de error.

Una dificultad importante fue coordinar los cambios realizados por los dos
integrantes en GitHub. También tuvimos que resolver conflictos porque algunas
misiones se desarrollaron en momentos diferentes. La solución fue revisar cada
versión, conservar las mejoras compatibles y comprobar que el proyecto
mantuviera su estructura de HTML, CSS y JavaScript.

En el trabajo Driver/Navigator, el Driver implementaba la solución mientras el
Navigator revisaba la lógica, proponía casos de prueba y señalaba posibles
errores. A partir de esa revisión decidimos deshabilitar los botones durante la
consulta, validar respuestas HTTP y manejar el caso en que las dos monedas son
iguales. También utilizamos Live Share para observar cambios en tiempo real y
GitHub para continuar el trabajo de forma asíncrona. La experiencia mostró que
la comunicación y la revisión constante son tan importantes como escribir el
código.
