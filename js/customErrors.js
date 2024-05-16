export const tipoError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
];

export const mensajes = {
    url_imagen: {
        valueMissing: "El campo URL no puede estar vacío.",
        typeMismatch: "Por favor, ingrese una URL válida.",
        tooShort: "La URL debe tener al menos 3 caracteres.",
    },
    categoria: {
        valueMissing: "Por favor, seleccione una categoría.",
    },
    precio: {
        valueMissing: "El campo precio no puede estar vacío.",
        tooShort: "El precio mínimo es 1.",
    },
    tipo_iva: {
        valueMissing: "Por favor, seleccione un tipo de IVA.",
    },
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un nombre válido.",
        tooShort: "El nombre debe tener al menos 3 caracteres.",
    },
    descripcion: {
        valueMissing: "El campo descripción no puede estar vacío.",
        patternMismatch: "Por favor, ingrese una descripción válida.",
        tooShort: "La descripción debe tener al menos 3 caracteres.",
    },
    cantidad: {
        valueMissing: "El campo cantidad no puede estar vacío.",
        tooShort: "La cantidad mínima es 1.",
    },
    descuento: {
        valueMissing: "El campo descuento no puede estar vacío.",
        tooShort: "El descuento mínimo es 1.",
    },
};
