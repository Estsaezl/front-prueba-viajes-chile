const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function () {
    $("#btn-enviar-formulario").on("click", function () {
        alert("Gracias por contactarnos!");
    });

    $(".card-img-top").on("click", function () {
        $(".card-text").toggle("slow");
    })
});