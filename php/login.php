<?php 

if ( isset ( $_REQUEST['btn_login'] ) || isset ( $_REQUEST['btn_register'] ) ){
    if ( isset ( $_REQUEST['btn_login'] ) ) {
        echo "Te has logeado";
    } elseif (isset($_REQUEST['btn_register'])) {
        echo "Te has registrado";
    }
}

?>