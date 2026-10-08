const cantidad = document.querySelector("#cantidad");
const origen = document.querySelector("#origen");
const destino = document.querySelector("#destino");
const btnConvertir = document.querySelector("#convertir");
const btnIntercambiar = document.querySelector("#intercambiar");
const resultado = document.querySelector("#resultado");
const resultadoTexto = document.querySelector("#resultadoTexto");
const detalleTasa = document.querySelector("#detalleTasa");

btnConvertir.addEventListener("click", convertirMoneda);
btnIntercambiar.addEventListener("click", intercambiarMonedas);

async function convertirMoneda() {
  const valor = Number(cantidad.value);
  const monedaOrigen = origen.value;
  const monedaDestino = destino.value;

  if (
    cantidad.value.trim() === "" ||
    !Number.isFinite(valor) ||
    valor <= 0
  ) {
    mostrarError("Escribe una cantidad mayor que cero.");
    return;
  }

  if (monedaOrigen === monedaDestino) {
    mostrarResultado(valor, 1, monedaOrigen, monedaDestino, "Sin consulta");
    return;
  }

  const url = `https://api.frankfurter.dev/v2/rate/${monedaOrigen}/${monedaDestino}`;

  activarCarga();

  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`La API respondió con HTTP ${respuesta.status}.`);
    }

    const datos = await respuesta.json();
    const tasa = Number(datos.rate);

    if (!Number.isFinite(tasa)) {
      throw new Error("La API no devolvió una tasa válida.");
    }

    mostrarResultado(valor, tasa, monedaOrigen, monedaDestino, datos.date);
  } catch (error) {
    mostrarError(
      "No fue posible consultar el tipo de cambio. " +
      "Verifica tu conexión e inténtalo nuevamente."
    );
    console.error("Error al convertir monedas:", error);
  } finally {
    desactivarCarga();
  }
}

function intercambiarMonedas() {
  const monedaTemporal = origen.value;
  origen.value = destino.value;
  destino.value = monedaTemporal;

  convertirMoneda();
}

function mostrarResultado(valor, tasa, monedaOrigen, monedaDestino, fecha) {
  const conversion = valor * tasa;

  resultado.classList.remove("error");
  resultadoTexto.textContent =
    `${valor.toFixed(2)} ${monedaOrigen} = ` +
    `${conversion.toFixed(2)} ${monedaDestino}`;
  detalleTasa.textContent =
    fecha === "Sin consulta"
      ? `1 ${monedaOrigen} = 1 ${monedaDestino}`
      : `1 ${monedaOrigen} = ${tasa} ${monedaDestino} · ${fecha}`;
}

function activarCarga() {
  btnConvertir.disabled = true;
  btnIntercambiar.disabled = true;
  btnConvertir.textContent = "Consultando...";
  resultado.classList.remove("error");
  resultadoTexto.textContent = "Consultando el tipo de cambio...";
  detalleTasa.textContent = "Espera un momento.";
}

function desactivarCarga() {
  btnConvertir.disabled = false;
  btnIntercambiar.disabled = false;
  btnConvertir.textContent = "Convertir";
}

function mostrarError(mensaje) {
  resultado.classList.add("error");
  resultadoTexto.textContent = mensaje;
  detalleTasa.textContent = "Revisa los datos e inténtalo nuevamente.";
}
