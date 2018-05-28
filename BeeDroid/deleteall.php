<?php



error_reporting(0);
/*$db=mysql_connect("mysql.hostinger.fr", "u788488735_bee", "beedroid");
mysql_select_db("u788488735_bee");*/
$db=mysql_connect("localhost", "root", "");
mysql_select_db("android");


$requete="";
$requete=$_GET['send'];
$o_requete= json_decode($requete);
 
$id_client = $o_requete->{'id'};
$type = $o_requete->{'type'};
 /*
$id_client ="73";
$type ="image";
*/

 if($type=="image")
 {
$query6 = mysql_query("SELECT * FROM donnees WHERE Id_client='$id_client' AND (Type='png' OR Type='jpeg' OR Type='jpg')");

while($row3 = mysql_fetch_array($query6))
{
 
 unlink('MEDIA/'.$row3["Nom_fichier"].'.'.$row3["Type"]);
}

$query14 = mysql_query("DELETE  FROM donnees WHERE Id_client='$id_client' AND (Type='png' OR Type='jpeg' OR Type='jpg')");
} 

if($type=="video")
 {
$query7 = mysql_query("SELECT * FROM donnees WHERE Id_client='$id_client' AND (Type='mp4' OR Type='3gp' OR Type='3GP' OR Type='avi' OR Type='mpeg')");

while($row4 = mysql_fetch_array($query7))
{
 
 unlink('MEDIA/'.$row4["Nom_fichier"].'.'.$row4["Type"]);
}

$query13 = mysql_query("DELETE  FROM donnees WHERE Id_client='$id_client' AND (Type='mp4' OR Type='3gp' OR Type='3GP' OR Type='avi' OR Type='mpeg')");
} 



if($type=="music")
 {
$query71 = mysql_query("SELECT * FROM donnees WHERE Id_client='$id_client' AND (Type='mp3' OR Type='aac' OR Type='midi' OR Type='amr')");

while($row41 = mysql_fetch_array($query71))
{
 
 unlink('MEDIA/'.$row41["Nom_fichier"].'.'.$row41["Type"]);
}

$query11 = mysql_query("DELETE  FROM donnees WHERE Id_client='$id_client' AND (Type='mp3' OR Type='aac' OR Type='midi' OR Type='amr')");
} 

 
 


?>