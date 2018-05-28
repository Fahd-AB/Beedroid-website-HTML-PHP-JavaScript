<?php



error_reporting(0);

$id = $_GET['id'];
$op = $_GET['op'];
if($op=='1'){
session_start();
$_SESSION['sid']=$id;
}


if($op=='2'){
session_start ();
if(isset($_SESSION['sid'])){
$resp = array("O");
echo json_encode($resp);
}
else{
$resp = array("N");
echo json_encode($resp);
}
}

if($op=='3'){
session_start ();
session_unset();
session_destroy();

}

?>