<?php



$requete="";
$requete=$_GET['etat'];
$o_requete = json_decode($requete);
$etat = $o_requete->{'et'};


if($etat=="on")
 {
		$myfile = fopen("etats.txt", "w") or die("Unable to open file!");
			 
			    $txt="on";
				fwrite($myfile, $txt);
				fclose($myfile); 
 }
 if($etat=="off")
 {
	
		$myfile = fopen("etats.txt", "w") or die("Unable to open file!");
				 
			    $txt="off";
				fwrite($myfile, $txt);
				fclose($myfile); 	 
 
 }
 if($etat=="select")
 {
		$f = "etats.txt";
		$arr = file($f);
		 
		echo json_encode($arr);
 
 }




?>