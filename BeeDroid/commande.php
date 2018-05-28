<?php
error_reporting(0);

/*
$db=mysql_connect("mysql.hostinger.fr", "u788488735_bee", "beedroid");
mysql_select_db("u788488735_bee");
*/
$db=mysql_connect("localhost","root", "");
mysql_select_db("android");


extract($_POST);
$id_app=" ";
$comm_verr=" ";
$comm_aff=" ";
$comm_recup=" ";
$comm_del=" ";
$comm_app=" ";
$comm_app1=" ";

$query1 = mysql_query("SELECT Id_appareil FROM appareil WHERE Adresse_physique= '$mac'");
while($row1 = mysql_fetch_array($query1))
$id_app=$row1["Id_appareil"];




$query2 = mysql_query("SELECT * FROM commandes WHERE Id_appareil= '$id_app'  AND Commande LIKE '%afficher%'   ORDER BY Id_commande");
$count2=mysql_num_rows($query2);
while($row2 = mysql_fetch_array($query2))
$comm_aff=$row2["Commande"];





$query3 = mysql_query("SELECT * FROM commandes WHERE Id_appareil= '$id_app'  AND Commande LIKE '%verrouillage%'   ORDER BY Id_commande");
$count3=mysql_num_rows($query3);
while($row3 = mysql_fetch_array($query3))
$comm_verr=$row3["Commande"];





$query4 = mysql_query("SELECT * FROM commandes WHERE Id_appareil= '$id_app'  AND Commande LIKE '%recuperation%'   ORDER BY Id_commande");
$count4=mysql_num_rows($query4);
while($row4 = mysql_fetch_array($query4))
$comm_recup=$row4["Commande"];




$query5 = mysql_query("SELECT * FROM commandes WHERE Id_appareil= '$id_app'  AND Commande LIKE '%ecraser%'   ORDER BY Id_commande");
$count5=mysql_num_rows($query5);
while($row5 = mysql_fetch_array($query5))
$comm_del=$row5["Commande"];


$query6 = mysql_query("SELECT * FROM commandes WHERE Id_appareil= '$id_app'  AND Commande LIKE '%startcall%'   ORDER BY Id_commande");
$count6=mysql_num_rows($query6);
while($row6 = mysql_fetch_array($query6))
$comm_app=$row6["Commande"];


$query7 = mysql_query("SELECT * FROM commandes WHERE Id_appareil= '$id_app'  AND Commande LIKE '%stopcall%'   ORDER BY Id_commande");
$count7=mysql_num_rows($query7);
while($row7 = mysql_fetch_array($query7))
$comm_app1=$row7["Commande"];
 
	$json[]=array(
'cmdverr'=>$comm_verr,
'cmdaff'=>$comm_aff,
'cmdrecup'=>$comm_recup,
'cmddel'=>$comm_del,
'cmdapp'=>$comm_app,
'cmdappoff'=>$comm_app1
);

print json_encode($json);

?>