function logeadoRegistrado(logReg) {
    let formulario = document.getElementById('div_login');
    let mensaje = document.getElementById('login_mensaje');
    let divMensaje = document.getElementById('div_login_mensaje');

    mostrarMensaje(logReg, mensaje);

    formulario.style.display = 'none';
    divMensaje.style.display = 'block';
}

function mostrarMensaje(logReg, mensaje) {
    mensaje.innerHTML = `Te has ` + logReg + ' correctamente';
}