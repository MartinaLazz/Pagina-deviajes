function validarForm(evento) {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    if (!confirm(`Gracias por enviar tus datos! Tu información es muy importante para nosotros. Por favor, confirmá los datos ingresados:
Nombre: ${nombre}
Apellido: ${apellido}
E-mail: ${email}`)) {
    evento.preventDefault();
}
}

document.getElementById("button").addEventListener("click", validarForm);
