//Cargamos el catalogo de la consola elegida.
function cargarCatalogoSeleccionado(consola) {
    let texto = ``;
    let consolaEscogida;

    for (let i = 0; i < consolas.length; i++) {
        if (consola == consolas[i]) {
            consolaEscogida = i;        
        }    
    }

    texto += `<section class="catalog-section">
            <h2>${consola}</h2>
            <div class="game-list">`;

    for (let i = 0; i < juegos[consolaEscogida].length; i++) {
            texto += `<div class="game-item">
                    <div class="game-cover">
                    <a href="javascript:void(0);" id="${juegos[consolaEscogida][i].toLocaleUpperCase()}" onclick="redirigirConParametro(this.id)"><img src="./assets/images/${consolas[consolaEscogida].toLocaleLowerCase().replace(/\s+/g, '')}/${juegos[consolaEscogida][i].toLocaleLowerCase().replace(/\s+/g, '')}.jpg"></a>
                    </div>
                    <hr>
                    <h3>${juegos[consolaEscogida][i]}</h3>
                    </div>`;
    }

    texto += `</div>
    </section>`;

    main_select.innerHTML = texto;
}

// Función de búsqueda
function buscar() {
    //Obtenemos el contenedor donde se mostrarán los juegos buscados
    const resultsContainer = document.getElementById("main_select");

    // Limpiar resultados anteriores
    resultsContainer.innerHTML = "";

    //Obtenemos el valor de la busqueda
    const queryOrigin = document.getElementById("search-input").value;

    if (queryOrigin != '') {
        const query = document.getElementById("search-input").value.toUpperCase();

    //Hacemos un bucle para que recorra cada uno de los arrays que almacenan juegos (busca en todas las consolas)
    for (let i = 0; i < consolas.length; i++) {
        //Creamos un array llamado results, con los resultados de busqueda de los juegos
        const results = juegos[i].filter(item => item.toUpperCase().includes(query));

        let texto = '';

        // Muestra los resultados de cada consola si hay (si hay juegos de psx lo muestra, si no, no muestra nada)
        if (results.length > 0) {
            //Creamos el section para el catalogo de busqueda
            texto += `<section class="catalog-section">
            <h2>${consolas[i]}</h2>
            <div class="game-list">`;

            //Bucle en el que se irán creando los items en el catalogo, con la foto, el nombre y el enlace al iframe del juego.
            for (let j = 0; j < results.length; j++) {
                texto += `<div class="game-item">
                        <div class="game-cover">
                        <a href="javascript:void(0);" id="${results[j]}" onclick="redirigirConParametro(this.id)"><img src="./assets/images/${consolas[i].toLocaleLowerCase()}/${results[j].toLocaleLowerCase().replace(/\s+/g, '')}.jpg"></a>
                        </div>
                        <hr>
                        <h3>${results[j]}</h3>
                        </div>`;
            }

            //Cerramos el catalogo de esa consola
            texto += `</div>
                </section>`;

            //Insertamos el contenido de la busqueda
            resultsContainer.innerHTML += texto;
        }
    }

    //Si no encontro ningun juego para ninguna consola, muestra el mensaje.
    if (resultsContainer.textContent == '') {
        resultsContainer.innerHTML = `<h2>No se encontraron resultados para -> ${queryOrigin}</h2>
        <br>
        <img src="./assets/images/error.gif" width="200px">`;;
    }

    //Si el usuario no escribe nada, muestra el siguiente mensaje.
    } else {
        resultsContainer.innerHTML = `<h2>Escribe algo para poder buscar.</h2>
        <br>
        <img src="./assets/images/error.gif" width="200px">`;
    }
}

//Cuando la pagina haya cargado por completo, se ejecutará.
window.onload = function() {
    // Obtener el parámetro 'consola' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const consola = urlParams.get('consola');

    if (consola) {
       // Llamamos a la función con el valor de consola, para mostrar el catalogo de la misma
       cargarCatalogoSeleccionado(consola);
    }

    animacionCarga('main_select');
 };