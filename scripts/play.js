// Función para redirigir con parámetro al hacer clic en un enlace
function redirigirConParametro(linkId) {
    // Redirigir a la página destino con el parámetro `id`
    window.location.href = "game_page.html?id=" + linkId;
  }
    
  // Función para obtener el parámetro de la URL, como parametro le pasamos que es lo que queremos obtener de la URL.
  //Por ejemplo si queremos obtener un id de un enlace, al llamar a la funcion hariamos -> obtenerParametroURL("id");
  function obtenerParametroURL(nombre) {
    //Asigamos a la variable url, el enlace completo de la pagina en la que estamos.
    //Si estamos en https://www.ejemplo.com/pagina.html?producto=zapato: url="https://www.ejemplo.com/pagina.html?producto=zapato".
    let url = window.location.href;

    //Aqui lo que hacemos es, separar la URL por el simbolo "?".
    //Ya que, el simbolo "?" separa la parte principal de la URL de los parametros de consulta.
    //Por ejemplo, con esta URL: https://www.ejemplo.com/pagina.html?producto=zapato.
    //El dominio y la ruta está antes del "?" y los parametros de consulta despues.
    let parametros = new URLSearchParams(url.split('?')[1]);

    //Ahora dentro de parametros, buscamos uno con el nombre que queramos, por ejemplo el id.
    //Esto nos devolvera el valor que tenga, el parametro que hayamos escrito.
    //Si llamamos a la funcion y le pasamos como parametro por ejemplo id, asi: obtenerParametroURL("id");
    //Tomando el enlace anterior de ejemplo, esto nos devolveria el valor "zapato".
    return parametros.get(nombre);
  }
  
  // Función que se ejecuta cuando la página de destino se carga
  function ejecutarAccionConId() {
    // Obtenemos el id de la URL
    let linkId = obtenerParametroURL('id');
  
    for (let i = 0; i < juegos.length; i++) {
      for (let j = 0; j < juegos[i].length; j++) {
          if (linkId == juegos[i][j]) {
              reproducirJuego(i, j, linkId);
              break;
          }   
          
      }
  }
  
  //Funcion que reproduce el juego seleccionado
  function reproducirJuego(consola, juego, nombre) {
    let textoIframe = '';
    let otrosJuegos = '';

    if (iframes[consola][juego] == '') {
        // Si no encuentra el iframe, muestra una imagen de error.
        game_name.innerHTML = 'No se ha encontrado el juego: ' + nombre;
        textoIframe = '<img src="./assets/images/error.gif" width="200px">';
    } else {
      // Si encuentra el iframe, muestra el juego.
      game_name.innerHTML = nombre;
        textoIframe =`<hr><iframe src="https://www.retrogames.cc/embed/${iframes[consola][juego]}.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe><hr>` ;
    }

    //Llamamos a la funcion para mostrar el apartado de -otros juegos-.
    otrosJuegos = otrosJuegosAleatorio(consola, otrosJuegos);

    //Insertamos el codigo que muestra el juego y el apartado de otros juegos
    game_iframe.innerHTML = textoIframe;
    otros_juegos.innerHTML += otrosJuegos;
    }
  }

  //Funcion para mostrar aleatoriamente en el apartado de -otros juegos-, juegos de la consola del juego seleccionado.
  function otrosJuegosAleatorio(consola, otrosJuegos) { 
    otrosJuegos = `<h2>OTROS JUEGOS DE ${consolas[consola]}</h2>
    <div class="game-list">`;

    //Creamos un array con los indices del array de juegos, nos servira como auxiliar para eliminar indices, y que no se repita ningun juego en el apartado.
    const indices = [...Array(juegos[consola].length).keys()];

    //Creamos una constante que mostrará la cantidad de juegos recomendados.
    let juegosMaxRecomend = 6;

    if (juegos[consola].length < juegosMaxRecomend) {
      juegosMaxRecomend = juegos[consola].length;
    }

    for (let i = 0; i < juegosMaxRecomend; i++) {
      //Generamos un numero aleatorio entre 0 y la longitud del array de indices (que tiene la misma longitud que el array original de juegos).
      const randomGame = Math.floor(Math.random() * indices.length)

      //Obtenemos el numero de indice del juego, y lo eliminamos del array, para que no vuelva a salir y asi no se repitan los juegos.
      const indiceSeleccionado = indices.splice(randomGame, 1)[0];

      //Generamos la carta que muestra el juego.
      otrosJuegos += `<div class="game-item">
                    <div class="game-cover">
                    <a href="javascript:void(0);" id="${juegos[consola][indiceSeleccionado].toLocaleUpperCase()}" onclick="redirigirConParametro(this.id)"><img src="./assets/images/${consolas[consola].toLocaleLowerCase().replace(/\s+/g, '')}/${juegos[consola][indiceSeleccionado].toLocaleLowerCase().replace(/\s+/g, '')}.jpg"></a>
                    </div>
                    <hr>
                    <h3>${juegos[consola][indiceSeleccionado]}</h3>
                    </div>`;
      }

    otrosJuegos += `</div>`;

    //Devolvemos todo el codigo para insertarlo en el html
    return otrosJuegos;
  }
    
  // Si la página es la de destino, ejecutamos la acción al cargarla
    if (window.location.pathname.includes("game_page.html")) {
      window.onload = function() {
        ejecutarAccionConId();
        animacionCarga('main_game');
      };
    }