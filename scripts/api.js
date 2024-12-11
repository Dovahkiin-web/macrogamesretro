function animacionCarga(main) { //Como parametro le pasamos el nombre del selector al que queramos hacer la animacion
    // Primero, espera un poco antes de iniciar la animación
    setTimeout(function() {

        // Desvanecer la pantalla de carga
        document.getElementById('div_loader').style.opacity = 0; //Al div de carga, se quita la opacidad
        document.getElementById(main).style.display = 'block'; //Al selector seleccionado le quitamos el display: none; y lo mostramos 

        // Espera el tiempo suficiente para la transición antes de ocultar el loader
        //Esto es para que aunque la pagina este totalmente cargada, darle un poco de tiempo extra para la carga de imagenes o videos.
        setTimeout(function() {
            document.getElementById('div_loader').style.display = 'none'; // Ocultar el loader completamente
            
            // Mostrar el contenido de la página con una transición suave
            document.getElementById(main).classList.add('show');
        }, 200); // Esperar el tiempo de la animación de desvanecimiento
    }, 300); // Esperar 0.3 segundos para mostrar el loader antes de la transición
}

function animacionCargaBusqueda(main) { //Como parametro le pasamos el nombre del selector al que queramos hacer la animacion
    // Primero, espera un poco antes de iniciar la animación
    const divCarga = document.getElementById('div_loader_search');
    const mainSearch = document.getElementById(main);

    // Aparecer la pantalla de carga
    divCarga.style.display = 'flex'; //Al div de carga, lo desplegamos
    mainSearch.classList.remove('show');
    mainSearch.style.display = 'none'; //Al selector seleccionado le ponemos display none, para que no aparezca.
    divCarga.style.opacity = 1; //Al div de carga, le ponemos opacidad

    setTimeout(function() {
        // Desvanecer la pantalla de carga
        divCarga.style.opacity = 0; //Al div de carga, se quita la opacidad
        mainSearch.style.display = 'block'; //Al selector seleccionado le quitamos el display: none; y lo mostramos 

        // Espera el tiempo suficiente para la transición antes de ocultar el loader
        //Esto es para que aunque la pagina este totalmente cargada, darle un poco de tiempo extra para la carga de imagenes o videos.
        setTimeout(function() {
            divCarga.style.display = 'none'; // Ocultar el loader completamente
            
            // Mostrar el contenido de la página con una transición suave
            mainSearch.classList.add('show');
        }, 200); // Esperar el tiempo de la animación de desvanecimiento
    }, 1500); // Esperar 0.3 segundos para mostrar el loader antes de la transición
}