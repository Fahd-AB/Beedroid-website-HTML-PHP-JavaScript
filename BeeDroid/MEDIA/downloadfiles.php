<?php
error_reporting(0);
extract($_POST);
/*
$db=mysql_connect("mysql.hostinger.fr", "u788488735_bee", "beedroid");
mysql_select_db("u788488735_bee");*/

$db=mysql_connect("localhost", "root", "");
mysql_select_db("android");

$down="";
$down=$_GET['download'];
$d = json_decode($down);
$id= $d->{'id'};
$type= $d->{'type'};

 

if($type=="image")
{ 
$query6 = mysql_query("SELECT * FROM donnees WHERE Id_client='$id' AND (Type='png' OR Type='jpeg' OR Type='jpg' OR Type='JPG' OR Type='PNG' OR Type='JPEG')"); 
$zip1 = new ZipArchive();
$filename = "photos".$id.".zip";
$zip1->open($filename, ZipArchive::CREATE);
 	 
 
 
		while($row3 = mysql_fetch_array($query6))
		{
		     
	      $zip1->addFile($row3["Nom_fichier"].'.'.$row3["Type"]);
		  
		}
 
		
	 
		
		
$zip1->close();
$file = $filename;

if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.basename($file));
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
}

}

// music 


if($type=="music")
{ 
$query7 = mysql_query("SELECT * FROM donnees WHERE Id_client='$id' AND   (Type='mp3' OR Type='aac' OR Type='midi' OR Type='amr') "); 
$zip1 = new ZipArchive();
$filename2= "music".$id.".zip";
$zip1->open($filename2, ZipArchive::CREATE);
 	 
 
 
		while($row3 = mysql_fetch_array($query7))
		{
		     
	      $zip1->addFile($row3["Nom_fichier"].'.'.$row3["Type"]);
		  
		}
 
		
	 
		
		
$zip1->close();
$file = $filename2;

if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.basename($file));
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
}


}



// video 


if($type=="video")
{ 
$query8 = mysql_query("SELECT * FROM donnees WHERE Id_client='$id' AND   (Type='mp4' OR Type='3gp' OR Type='3GP' OR Type='avi' OR Type='mpeg') "); 
$zip1 = new ZipArchive();
$filename3 = "video".$id.".zip";
$zip1->open($filename3, ZipArchive::CREATE);
 	 
 
 
		while($row3 = mysql_fetch_array($query8))
		{
		     
	      $zip1->addFile($row3["Nom_fichier"].'.'.$row3["Type"]);
		  
		}
 
		
	 
		
		
$zip1->close();
$file = $filename3;

if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.basename($file));
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
}


}






















?>