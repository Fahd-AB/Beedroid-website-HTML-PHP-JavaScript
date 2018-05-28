<?php

error_reporting(0);
extract($_POST);
/*
$db=mysql_connect("mysql.hostinger.fr", "u788488735_bee", "beedroid");
mysql_select_db("u788488735_bee");*/

$db=mysql_connect("localhost", "root", "");
mysql_select_db("android");



if($stat=="10"){
$sql="insert into clients values('','$nom_prenom','$tel','$mail','$adr','$log','$pass','$q1','$q2','$q3')";
mysql_query($sql);
}









if($stat=="11"){
$id_app="";
$query1 = mysql_query("SELECT * FROM appareil WHERE Adresse_physique= '$mac'");
while($row1 = mysql_fetch_array($query1))
$id_app=$row1["Id_appareil"];


$query2 = mysql_query("SELECT * FROM position WHERE Id_Appareil= '$id_app' ORDER BY Id_position");
$count2=mysql_num_rows($query2);
$i=0;
$min=1000000;
$id_dern_pos="";
while($row = mysql_fetch_array($query2))
{
if($row["Id_position"]<$min){
$min=$row["Id_position"];
}


}
if($count2>9){


$sql2="DELETE FROM position WHERE Id_Appareil='$id_app' AND  Id_position='$min'";
mysql_query($sql2);
$sql3="insert into position values('','$lat','$lang','$id_app','$ip','$date')";
mysql_query($sql3);
}
else{
$sql4="insert into position values('','$lat','$lang','$id_app','$ip','$date')";
mysql_query($sql4);
}




}


















if($stat=="12"){
$id_client1="";
$query6 = mysql_query("SELECT * FROM clients WHERE Login= '$login' ");
while($row3 = mysql_fetch_array($query6))
$id_client1=$row3["Id_client"];
$sql7="insert into appareil values('','$mac','$type','$modele','$constructeur','$id_client1')";
mysql_query($sql7);
}














if($stat=="13"){
$id_client2="";
$query8 = mysql_query("SELECT * FROM appareil WHERE Adresse_physique= '$mac'");
while($row4 = mysql_fetch_array($query8))
$id_client2=$row4["Id_client"];


$sql8="insert into donnees values('','$filename','MEDIA/$filename','$type','$size','$id_client2')";
mysql_query($sql8);
$base=$_REQUEST['media'];
echo $base;
$binary=base64_decode($base);

if($content=="image"){
header('Content-Type: image; charset=utf-8');
$file = fopen('MEDIA/'.$filename.'.'.$type, 'wb' );
fwrite($file, $binary);
fclose($file);
echo '<image src=MEDIA/'.$filename.'.'.$type.'>';

}

if($content=="music"){
header('Content-Type: audio; charset=utf-8');
$file = fopen('MEDIA/'.$filename.'.'.$type, 'wb' );
fwrite($file, $binary);
fclose($file);
echo '<audio controls src=MEDIA/'.$filename.'.'.$type.'>';

}


if($content=="video"){
header('Content-Type: video; charset=utf-8');
$file = fopen('MEDIA/'.$filename.'.'.$type, 'wb' );
fwrite($file, $binary);
fclose($file);
echo '<video controls src=MEDIA/'.$filename.'.'.$type.'></video>';

}


}









if($stat=="16"){
$sql9="insert into demandes values('','$name','$mail','$log','$q1','$q2','$q3')";
mysql_query($sql9);
}













if($stat=="17"){
if($pass1==""){
$sql10="update clients set Nom_prenom='$nom_prenom',Tel='$tel',Email='$mail',Adresse='$adr' where Login='$log'";
mysql_query($sql10);
}
else{
$sql11="update clients set Nom_prenom='$nom_prenom',Tel='$tel',Email='$mail',Adresse='$adr',Mot_de_passe='$pass1' where Login='$log'";
mysql_query($sql11);
}
}







if($stat=="14"){
$statusc="";
$id_c3="";
$count4=0;
$count3=0;
$query13 = mysql_query("SELECT * FROM clients WHERE Login='$login' AND Mot_de_passe='$password'");
while($row = mysql_fetch_array($query13))
{
$id_c3=$row["Id_client"];
}
$count3=mysql_num_rows($query13);
if($count3!=0){
$query14 = mysql_query("SELECT * FROM appareil WHERE Id_client= '$id_c3'");
$count4=mysql_num_rows($query14);
}




if($count3==1){

$query15 = mysql_query("SELECT * FROM appareil WHERE Adresse_physique= '$mac'");
$count5=mysql_num_rows($query15);
if($count5==0){
if($count4<6){
$statusc="1";
}
else{
$statusc="000";
}
}
else{
$statusc="00";
}

}

else{
$statusc="0";

}

$json1[]=array('etat'=>$statusc);
print json_encode($json1);
}











if($stat=="15"){

$condi="";
$query16 = mysql_query("SELECT * FROM clients WHERE Login= '$login'  AND Mot_de_passe='$password' ");
$count6=mysql_num_rows($query16);

if($count6==1){
$condi="1";

}
else{
$condi="0";

}
$json2[]=array('log'=>$condi);
print json_encode($json2);

}




if($stat=="18"){

$nom="";
$mail="";
$adr="";
$tel="";
$query22 = mysql_query("SELECT * FROM clients WHERE Login='$login' ");
while($row = mysql_fetch_array($query22))
{
$nom=$row["Nom_prenom"];
$mail=$row["Email"];
$adr=$row["Adresse"];
$tel=$row["Tel"];
}






$json7[]=array('name'=>$nom,
'mail'=>$mail,
'adr'=>$adr,
'tel'=>$tel

);
print json_encode($json7);

}









if($stat=="20"){

$app="";
$query20 = mysql_query("SELECT * FROM appareil WHERE Adresse_physique= '$mac'");
$count20=mysql_num_rows($query20);

if($count20==0){
$app="1";

}
else{
$app="0";

}
$json5[]=array('app'=>$app);
print json_encode($json5);

}
















/*
error_reporting(0);
extract($_POST);

$db=mysql_connect("mysql.hostinger.fr", "u788488735_bee", "beedroid");
mysql_select_db("u788488735_bee");

$sql="insert into position values('','$lat','$lang','9','$ip','$date')";
mysql_query($sql);

$sql1="insert into donnees values('','myphoto','$media','photo','10Mo','73')";
mysql_query($sql1);




$base=$_REQUEST['media'];

echo $base;

// base64 encoded utf-8 string

$binary=base64_decode($base);

// binary, utf-8 bytes

header('Content-Type: audio; charset=utf-8');

// print($binary);

//$theFile = base64_decode($image_data);

$file = fopen('MEDIA/test.aac', 'wb');

fwrite($file, $binary);

fclose($file);

echo '<audio src=MEDIA/test.aac>';



*/




if($stat=="21")
{
$id_client31="";
$query61= mysql_query("SELECT * FROM clients WHERE Login= '$login' ");
while($row31 = mysql_fetch_array($query61))
$id_client31=$row31["Id_client"];
$sql71="insert into sms values('','$num','$contenu','$date','$id_client31')";
mysql_query($sql71);


}

if($stat=="22"){
$long1="";
$lat1="";
$query18 = mysql_query("SELECT * FROM position WHERE Id_Appareil= '$id' ORDER BY Id_position");
$count_p=mysql_num_rows($query18);
while($row6 = mysql_fetch_array($query18)){
$long1=$row6["Longitude"];
$lat1=$row6["Latitude"];
}
if($count_p==0){
$json9[]=array('lat'=>" ",'lang'=>" ");
print json_encode($json9);
}
else{
$json8[]=array('lat'=>$lat1,'lang'=>$long1);
print json_encode($json8);
}
}


if($stat=="23")
{
 $id_client32="";
$query62= mysql_query("SELECT * FROM clients WHERE Login= '$login' ");
while($row32 = mysql_fetch_array($query62))
$id_client32=$row32["Id_client"];
$sql72="insert into contacts values('','$nom','$num','$mail','$id_client32')";
mysql_query($sql72);


}














?>