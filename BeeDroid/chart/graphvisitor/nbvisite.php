<?php

$requete="";
$requete=$_GET['visitor'];
$o_requete = json_decode($requete);
$visite = $o_requete->{'visite'};


if($visite=="create")
{    $today = getdate();
	$myfile = fopen("visite.txt", "a") or die("Unable to open file!");
	//$txt = "visiteur | ".$today[year]."-".$today[mon]."-".$today[mday]." h ".($today[hours]-1)."\n";
	if($today[hours]==0)
	{
	$txt="23"."\n";
	}
	else
	{
	$txt=($today[hours]-1)."\n";
	}
	fwrite($myfile, $txt);
	fclose($myfile); 
}
if($visite=="client")
{    $today1 = getdate();
	$myfile1 = fopen("client.txt", "a") or die("Unable to open file!");
	if($today1[hours]==0)
	{
	$txt1="23"."\n";
	}
	else
	{
	$tx1t=($today1[hours]-1)."\n";
	}
	fwrite($myfile1, $txt1);
	fclose($myfile1); 
}

 if($visite=="nb")
 {
		$f = "visite.txt";
		$arr = file($f);
		 
		echo json_encode($arr);
 
 }
 if($visite=="nbclient")
 {
		$f = "client.txt";
		$arr = file($f);
		 
		echo json_encode($arr);
 
 }

 
 if($visite=="deleteclient")
 {  
  $myfile1 = fopen("client.txt", "w+") or die("Unable to open file!");
  fclose($myfile1); 
 }
 if($visite=="deletevisitor")
 {  
  $myfile1 = fopen("visite.txt", "w+") or die("Unable to open file!");
  fclose($myfile1); 
 }
 
 
 /*
 
 $f = "visite.txt";

// read into array
$arr = file($f);

$i=0;
$taille=count($arr);
 while($i<$taille)
 {
 echo $arr[$i];
 $i++;
 }
 
echo "taille : ".$i;



// remove second line
unset($arr[0]);

// reindex array
$arr = array_values($arr);

// write back to file
file_put_contents($f,implode($arr));
 

 
*/

?>