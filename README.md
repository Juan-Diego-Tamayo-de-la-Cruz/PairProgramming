# Currency Explorer · Starter Project




## Integrantes
- Estudiante A: Tamayo de la Cruz Juan Diego
- Estudiante B: Andres Herrera Oettinghaus

## Pair Programming
| Misión | Driver | Navigator | Commit / evidencia |
|---|---|---|---|
| 04 | Andres | Tamayo | |
| 05 | Tamayo | Andres | |
| 06 | Andres | Tamayo | |
| 07 | Tamayo | Andres | |
| 08 | | | |
| 09 | | | |
| 10 | | | |

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
Explica el principal aprendizaje técnico, una dificultad relevante y una decisión que haya surgido del trabajo Driver/Navigator.

Andres Herrera Oettinghaus: Esta práctica ha sido bastante enriquecedora. Implementamos las modalidades de remote pair programming y driver-navigator, lo que nos permitió familiarizarnos con herramientas como GitHub y Visual Studio Live Share. Durante la dinámica de driver-navigator, asumí principalmente el rol de navegador: observé las modificaciones en el código, hice preguntas sobre los cambios y aporté mis ideas sobre la dirección del proyecto (por ejemplo, inicializar el repositorio en GitHub antes de escribir código o decidir si utilizar Live Server). Sin lugar a duda, al ser el integrante menos técnico del equipo, el intercambio de conocimientos que ofrece esta forma de trabajo fue muy valioso para mí. Dado que mi compañero ya cuenta con experiencia en la industria, he aprendido al verlo trabajar y dialogar con él.
