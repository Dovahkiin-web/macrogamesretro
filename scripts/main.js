//Numero de consolas totales
const NUM_CONSOLAS = 8;

//Array con los juegos de la portada
const juegosPortada = ['GRAN TURISMO', 'SUPER MARIO 64', 'POKEMON ROJO FUEGO', 'NEW SUPER MARIO BROS', 'SUPER MARIO WORLD', 'PAC-MAN', 'SONIC THE HEDGEHOG', 'ALIEN VS PREDATOR'];

//Array con los creadores de cada consola
const creadorConsola = [
    'SONY',
    'NINTENDO',
    'NINTENDO',
    'NINTENDO',
    'NINTENDO',
    'ATARI, NAMCO, SEGA...',
    'SEGA',
    'ATARI'
];

//Array con los lanzamientos de cada consola
const lanzamientoConsola = [
    '1994',
    '1996',
    '2001',
    '2004',
    '1990',
    '1978-1980',
    '1990',
    '1994'
];

//Cargamos el catalogo de la pagina inicial.
function cargarCatalogo() {
    
    let texto = `<div class="consolas-container">`;

    for (let i = 0; i < NUM_CONSOLAS; i++) {
            texto += `
            <div class="consola-juegos">
                <div class="consola">
                    <a href="./game_select.html?consola=${consolas[i]}" id="${consolas[i]}"><img src="./assets/images/consolas/${consolas[i].toLocaleLowerCase()}.png" alt="${consolas[i]}" class="consola-img" height="300px" width="350px"></a>
                    <div class="historia-consola">
                        <h1>${consolas[i]}</h1>
                        <hr>
                        <h3>CREADOR: <i>${creadorConsola[i]}</i></h3>
                        <h3>LANZAMIENTO: ${lanzamientoConsola[i]}</h3>
                        <h3>JUEGO MÁS VENDIDO: ${juegosPortada[i]}</h3>
                    </div>
                </div>
                    <div class="juegos">
                        <div class="game-item-portada">
                            <div class="game-cover-portada">
                                <a href="javascript:void(0);" id="${juegosPortada[i]}" onclick="redirigirConParametro(this.id)"><img src="./assets/images/${consolas[i].toLocaleLowerCase()}/${juegosPortada[i].toLocaleLowerCase().replace(/\s+/g, '')}.jpg"></a>
                                <div class="text-overlay">
                    </div>
                            </div>
                        <h3>${juegosPortada[i]}</h3>
                        </div>
                    </div>
                </div>`;
    }

    main_index.innerHTML = texto;
    
    animacionCarga('main_index');
}