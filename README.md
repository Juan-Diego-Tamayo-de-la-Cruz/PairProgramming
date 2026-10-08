# Currency Explorer

## Integrantes
- Estudiante A: ____________________
- Estudiante B: ____________________

## Pair Programming

Completar los nombres y la evidencia real de cada sesión antes de entregar.

| Misión | Driver | Navigator | Commit / evidencia |
|---|---|---|---|
| 04 | | | Lectura dinámica de las monedas seleccionadas |
| 05 | | | Resultado actualizado en el DOM |
| 06 | | | Intercambio de monedas |
| 07 | | | Validación de entrada |
| 08 | | | Estado visual de carga |
| 09 | | | Manejo de errores HTTP y de red |
| 10 | | | Revisión y documentación final |

## Objetivo
Completar una aplicación frontend que consuma Frankfurter API para convertir divisas y demostrar comprensión de eventos, DOM, `fetch()`, JSON, asincronía, validación y manejo de errores.

## Ejecución
1. Abre la carpeta en VS Code.
2. Ejecuta `index.html` con Live Server o un servidor local equivalente.
3. Abre DevTools → Console y Network para observar el comportamiento.
4. Escribe una cantidad, selecciona las monedas y pulsa **Convertir**.

No se requieren dependencias ni comandos de instalación.

## API
Endpoint de referencia:
`https://api.frankfurter.dev/v2/rate/{origen}/{destino}`

## Decisiones técnicas

1. Se utiliza `fetch()` con `async/await` para consultar la API sin recargar la
   página y mantener legible el flujo asíncrono.
2. Se comprueba `response.ok` y se valida `datos.rate` antes de calcular, para
   evitar mostrar conversiones incorrectas cuando la API devuelve un error.
3. Los botones se deshabilitan durante la consulta para evitar solicitudes
   duplicadas.
4. Si las monedas son iguales, se usa una tasa de 1 sin hacer una petición
   innecesaria.

## Revisión cruzada
- Aspecto bien resuelto: La interfaz se actualiza sin recargar la página.
- Error o comportamiento mejorable: La versión inicial tenía la conversión
  fija entre EUR y USD y no comprobaba los errores HTTP.
- Propuesta de mejora: Validar entradas, mostrar carga y manejar errores de red.
- Cambio incorporado después de la revisión: Se agregaron conversión dinámica,
  intercambio, validación, carga y manejo de errores.

## Reflexión final (150–200 palabras)

Durante el desarrollo de Currency Explorer aprendimos a conectar una interfaz
web con una API pública utilizando `fetch()` y funciones asíncronas. La parte
más importante fue comprender que una petición externa puede fallar, por lo
que no es suficiente con recibir una respuesta: también debemos comprobar su
estado HTTP y validar que los datos obtenidos tengan el formato esperado.

Una dificultad relevante fue coordinar la lectura de los valores del formulario
con la actualización del DOM. Al principio las monedas estaban escritas
directamente en el código, por lo que la aplicación solo podía convertir de EUR
a USD. Después utilizamos los valores de los elementos `select` para hacer el
flujo dinámico y agregamos el intercambio entre monedas.

El trabajo Driver/Navigator ayudó a detectar errores antes de finalizar cada
misión. Mientras una persona escribía la solución, la otra revisaba la
validación, los mensajes de error y los casos límite, como seleccionar la misma
moneda. También decidimos deshabilitar los botones durante la consulta para
evitar solicitudes duplicadas. La principal lección fue que una aplicación
funcional no solo debe producir un resultado correcto, sino también informar al
usuario cuando está cargando o cuando ocurre un problema.
