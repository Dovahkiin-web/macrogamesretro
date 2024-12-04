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