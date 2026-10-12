# Currency Explorer · Starter Project




## Integrantes
- Estudiante A: Andres Herrera Oettinghaus
- Estudiante B: Juan Diego Tamayo de la Cruz




## Pair Programming
| Misión | Driver | Navigator | Commit / evidencia |
|---|---|---|---|
| 04 | Nombre A | Nombre B | Lectura dinámica de origen y destino |
| 05 | Nombre B | Nombre A | Resultado actualizado desde el DOM |
| 06 | Nombre A | Nombre B | Intercambio de monedas |
| 07 | Nombre B | Nombre A | Validación de cantidad y monedas |
| 08 | Nombre A | Nombre B | Estado visual de carga |
| 09 | Nombre B | Nombre A | Manejo de errores HTTP y de red |
| 10 | Nombre A | Nombre B | Documentación y revisión final |


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
   
5. En vez de usar live server, solo guardabamos con ctrl+s el proyecto y en el navegador refrescabamos el index y se visualizaban los cambios 


## Revisión cruzada

- Aspecto bien resuelto: La aplicación actualiza el resultado sin recargar la página.
- Error o comportamiento mejorable: La versión inicial no comprobaba `response.ok`.
- Propuesta de mejora: Mostrar un mensaje de carga.
- Cambio incorporado después de la revisión: Se agregó `try/catch/finally`,
  validación HTTP y estado visual de consulta.


## Reflexión final (150–200 palabras)
Explica el principal aprendizaje técnico, una dificultad relevante y una decisión que haya surgido del trabajo Driver/Navigator.

