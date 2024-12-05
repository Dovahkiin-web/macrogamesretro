<?php 
      if ( isset ( $_REQUEST['btn_login'] ) || isset ( $_REQUEST['btn_register'] ) ){
        if ( isset ( $_REQUEST['btn_login'] ) ) {
          $user = $_POST["userLogin"];
          $passwd = $_POST["passLogin"];
          $mensaje = "LOGEADO";
          $funcion = 'comprobarLog';
        } elseif (isset($_REQUEST['btn_register'])) {
          $user = $_POST["userReg"];
          $passwd = $_POST["passReg"];
          $mensaje = "REGISTRADO";
          $funcion = 'comprobarReg';
        }

        echo "<script type='text/javascript'>$funcion('$user', '$passwd', '$mensaje');</script>";
       }
?>