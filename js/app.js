$(document).ready(function() {
    $('.form').validate({
        rules: {
            name: "campos",
            nombres: {
                required: true,
                minlength: 6,
                maxlength: 50
            }
        },
        messages: {
            nombres: {
                required: "El campo nombre es requerido.",
                minlength: "El tamaño minimo son 6 caracteres",
                maxlength: "El tamaño max son 50 caracteres."
            }
        }
    });
});