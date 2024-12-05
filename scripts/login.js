/*const datos = [
    ['Juan002', 'password123'], 
    ['Manolo1_9', 'abc123'],
    ['Pepepp32', 'pruebaPk32'],
    ['mariaJ00', 'passw333']
];

//Funcion para comprobar el login
function comprobarLog(usuario, password, mensaje) {
    //Obtenemos por el id, los divs y formularios, a ocultar y mostrar
    let formulario = document.getElementById('div_login');
    let mensaje = document.getElementById('login_mensaje');
    let divMensaje = document.getElementById('div_login_mensaje');

    //Acciones
    for (let i = 0; i < datos.length; i++) {
        if (usuario == datos[i][0]) {
            if (password != datos[i][1]) {
                mostrarMensajeError();
            } else {
                mostrarMensaje(usuario, mensaje);
            }
        } else {
            mostrarMensajeError();
        }
    }

    //Ocultar formulario y mostrar mensaje
    formulario.style.display = 'none';
    divMensaje.style.display = 'block';
}

//Funcion para comprobar el registro
function comprobarReg(usuario, password, mensaje) {
    let formulario = document.getElementById('div_login');
    let mensaje = document.getElementById('login_mensaje');
    let divMensaje = document.getElementById('div_login_mensaje');

    //Acciones
    mostrarMensaje(usuario, mensaje);

    //Ocultar formulario y mostrar mensaje
    formulario.style.display = 'none';
    divMensaje.style.display = 'block';
}*/

//Funcion para mostrar el mensaje
function mostrarMensaje(usuario, mensaje) {
    mensaje.innerHTML = `Hola ` + usuario + ' te has' + mensaje + ' correctamente';
}

//Funcion para mostrar el mensaje de error
function mostrarMensajeError() {
    mensaje.innerHTML = `Has introducido mal los datos.`;
}