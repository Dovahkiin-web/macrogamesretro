<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>MacroGames - Retro</title>
  <link rel="stylesheet" href="./styles/styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
  <link rel="icon" href="./assets/images/favicon.ico">
  <script src="./scripts/main.js" defer></script>
  <script src="./scripts/games.js" defer></script>
  <script src="./scripts/play.js" defer></script>
  <script src="./scripts/api.js" defer></script>
</head>
<!-- body: Cuando se cargue por completo, ejecuta la funcion -->
<body onload="cargarCatalogo()">

  <!-- header: tenemos el logo y la barra de navegacion -->
  <header>
    <div class="container">
      <a href="#"><img src="./assets/images/logo.png" height="70" width="350"></a>
      <nav>
        <ul>
          <hr>
          <li><a href="#">HOME</a></li>
          <hr>
          <!-- Al redireccionar, le pasamos tambien un parametro llamado consola, con el valor de la consola seleccionada -->
          <li><a href="./game_select.html?consola=PSX" id="PSX">PSX</a></li>
          <hr>
          <li><a href="./game_select.html?consola=N64" id="N64">N64</a></li>
          <hr>
          <li><a href="./game_select.html?consola=GBA" id="GBA">GBA</a></li>
          <hr>
          <li><a href="./game_select.html?consola=NDS" id="NDS">NDS</a></li>
          <hr>
          <li><a href="./game_select.html?consola=SNES" id="SNES">SNES</a></li>
          <hr>
          <li><a href="./game_select.html?consola=ARCADE" id="ARCADE">ARCADE</a></li>
          <hr>
       </ul>
      </nav>
    </div>
  </header>

  <!-- Mostrará que está cargando antes de que la pagina se cargue por completo -->
  <div id="div_loader"><span id="loader"></span></div>
  
  <!-- main: aqui se colocara desde JavaScript, todo el codigo del catalogo-->
  <main id="main_"></main>

  <!-- footer: copyright -->
  <footer>
    <div class="container">
      <p>&copy; 2024 MacroGames. Todos los derechos reservados.</p>
    </div>
  </footer>

</body>
</html>
