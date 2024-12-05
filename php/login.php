<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>MacroGames - Retro</title>
  <link rel="stylesheet" href="../styles/styles.css">
  <link rel="stylesheet" href="../styles/login.css">
  <script src="../scripts/login.js" type="text/javascript"></script>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="icon" href="../assets/images/favicon.ico">
</head>
<!-- body: Cuando se cargue por completo, ejecuta la funcion -->
<body>

  <!-- header: tenemos el logo y la barra de navegacion -->
  <header>
    <div class="container">
      <a href="../index.html"><img src="../assets/images/logo.png" height="70" width="350"></a>
      <nav>
        <ul>
          <hr>
          <li><a href="../index.html">HOME</a></li>
          <hr>
          <!-- Al redireccionar, le pasamos tambien un parametro llamado consola, con el valor de la consola seleccionada -->
          <li><a href="../game_select.html?consola=PSX" id="PSX">PSX</a></li>
          <hr>
          <li><a href="../game_select.html?consola=N64" id="N64">N64</a></li>
          <hr>
          <li><a href="../game_select.html?consola=GBA" id="GBA">GBA</a></li>
          <hr>
          <li><a href="../game_select.html?consola=NDS" id="NDS">NDS</a></li>
          <hr>
          <li><a href="../game_select.html?consola=SNES" id="SNES">SNES</a></li>
          <hr>
          <li><a href="../game_select.html?consola=ARCADE" id="ARCADE">ARCADE</a></li>
          <hr>
          <li><a href="./login.php"><i class="material-icons" style="font-size: 18px;">input</i></a></li>
          <hr>
       </ul>
      </nav>
    </div>
  </header>

  <div id="div_login_mensaje" style="display: none;">
    <div id="login_mensaje"></div>
  </div>
  <form id="div_login" action="login.php" method="GET">
    <div class="div_loader">
        <input id="signin" type="radio" name="tab" checked="checked"/>
        <input id="register" type="radio" name="tab"/>
        <div class="pages">
          <div class="page">
            <div class="input">
              <div class="title">NOMBRE DE USUARIO</div>
              <input class="text" type="text" placeholder=""/>
            </div>
            <div class="input">
              <div class="title">CONTRASEÑA</div>
              <input class="text" type="password" placeholder=""/>
            </div>
            <div class="input">
                <button type="submit" name="btn_login">LOGIN</button>
            </div>
          </div>
          <div class="page signup">
            <div class="input">
              <div class="title">NOMBRE DE USUARIO</div>
              <input class="text" type="text" placeholder=""/>
            </div>
            <div class="input">
              <div class="title">CONTRASEÑA</div>
              <input class="text" type="password" placeholder=""/>
            </div>
            <div class="input">
              <button type="submit" name="btn_register">REGISTER</button>
            </div>
          </div>
        </div>
        <div class="tabs">
            <label class="tab text" for="signin">
            Sign In</label>
          <label class="tab text" for="register">
            Sing Up</label>
        </div>
      </div>
    </form>

    <?php 

        if ( isset ( $_REQUEST['btn_login'] ) || isset ( $_REQUEST['btn_register'] ) ){
            if ( isset ( $_REQUEST['btn_login'] ) ) {
                $mensaje = "LOGEADO";
            } elseif (isset($_REQUEST['btn_register'])) {
                $mensaje = "REGISTRADO";
            }

            echo "<script type='text/javascript'>logeadoRegistrado('$mensaje');</script>";
        }

    ?>

  <!-- footer: copyright -->
  <footer>
    <div class="container">
      <p>&copy; 2024 MacroGames. Todos los derechos reservados.</p>
    </div>
  </footer>

</body>
</html>