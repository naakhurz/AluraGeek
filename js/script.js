import { tipoError, mensajes } from "./customErrors.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
const enviarBoton = document.getElementById("enviar");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar todos los campos antes de enviar el formulario
  camposDeFormulario.forEach((campo) => {
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    const campoName = campo.getAttribute("name");
    if (!campo.value.trim()) {
      mensajeError.textContent = mensajes[campoName].valueMissing || "Este campo es requerido.";
    } else {
      mensajeError.textContent = "";
    }
  });

  // Validar si se ha seleccionado una categoría
  const categoriaSelect = document.getElementById("categoria");
  const mensajeErrorCategoria = categoriaSelect.parentNode.querySelector(".mensaje-error");
  if (!categoriaSelect.value) {
    mensajeErrorCategoria.textContent = mensajes.categoria.valueMissing || "Por favor, seleccione una categoría.";
    return; // Detener el envío del formulario si no se ha seleccionado una categoría
  }
  mensajeErrorCategoria.textContent = "";

  // Validar si se ha seleccionado un tipo de IVA
  const tipoIvaSelect = document.getElementById("tipo_iva");
  const mensajeErrorIva = tipoIvaSelect.parentNode.querySelector(".mensaje-error");
  if (!tipoIvaSelect.value) {
    mensajeErrorIva.textContent = mensajes.tipo_iva.valueMissing || "Por favor, seleccione un tipo de IVA.";
    return; // Detener el envío del formulario si no se ha seleccionado un tipo de IVA
  }
  mensajeErrorIva.textContent = "";

  // Si todos los campos están llenos y se han seleccionado las opciones requeridas, enviar el formulario
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    categoria: e.target.elements["categoria"].value,
    precio: e.target.elements["precio"].value,
    cantidad: e.target.elements["cantidad"].value,
    tipo_iva: e.target.elements["tipo_iva"].value,
    descuento: e.target.elements["descuento"].value,
    url: e.target.elements["url"].value,
  };

  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  window.location.href = "producto-registrado.html";
});

enviarBoton.addEventListener("click", (e) => {
  // Validar todos los campos antes de enviar el formulario
  camposDeFormulario.forEach((campo) => {
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    const campoName = campo.getAttribute("name");
    if (!campo.value.trim()) {
      mensajeError.textContent = mensajes[campoName].valueMissing || "Este campo es requerido.";
    } else {
      mensajeError.textContent = "";
    }
  });

  // Validar si se ha seleccionado una categoría
  const categoriaSelect = document.getElementById("categoria");
  const mensajeErrorCategoria = categoriaSelect.parentNode.querySelector(".mensaje-error");
  if (!categoriaSelect.value) {
    mensajeErrorCategoria.textContent = mensajes.categoria.valueMissing || "Por favor, seleccione una categoría.";
  } else {
    mensajeErrorCategoria.textContent = "";
  }

  // Validar si se ha seleccionado un tipo de IVA
  const tipoIvaSelect = document.getElementById("tipo_iva");
  const mensajeErrorIva = tipoIvaSelect.parentNode.querySelector(".mensaje-error");
  if (!tipoIvaSelect.value) {
    mensajeErrorIva.textContent = mensajes.tipo_iva.valueMissing || "Por favor, seleccione un tipo de IVA.";
  } else {
    mensajeErrorIva.textContent = "";
  }

  // Evitar el envío del formulario si algún campo no es válido
  camposDeFormulario.forEach((campo) => {
    if (!campo.value.trim()) {
      e.preventDefault();
    }
  });
});

camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  let mensaje = "";
  campo.setCustomValidity("");
  // Campos validity
  tipoError.forEach((error) => {
    if (campo.validity[error]) {
      const campoName = campo.getAttribute("name");
      mensaje = mensajes[campoName][error];
    }
  });

  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();

  if (!validarInputCheck && mensaje) {
    mensajeError.textContent = mensaje;
  } else {
    mensajeError.textContent = "";
  }
}