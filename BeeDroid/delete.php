<?php

$requete="";
$requete=$_GET['send'];
$o_requete= json_decode($requete);
 
$file= $o_requete->{'file'};

unlink('slider/'.$file);
echo $file."          eee";


?>