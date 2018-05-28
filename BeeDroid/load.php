



<?php
error_reporting(0);

session_start ();
if( isset($_SESSION['login']) && !isset($_SESSION['_connect_']) ){
 
 header('Location: acceuil.php');
 
}
if( isset($_SESSION['_connect_'])){
 
 header('Location: admin.php');
 
}


?> 




<html>
<head>
<link rel="icon" 
      type="image/ico" 
      href="favicon.ico">
	<link async href="http://fonts.googleapis.com/css?family=Aguafina%20Script" rel="stylesheet" type="text/css"/>
    <link async href="http://fonts.googleapis.com/css?family=Coda"  rel="stylesheet" type="text/css"/>
	<link async href="http://fonts.googleapis.com/css?family=Antic"  rel="stylesheet" type="text/css"/>
	
	<link rel="stylesheet" href="css/loadstyle.css">
	<title>BeeDroid</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js" type="text/javascript"></script>
	
	
  
	<script>
	
	 var lo='<?php  echo  $_SESSION['login']  ; ?>';
	 var lo_ad='<?php  echo  $_SESSION['_connect_']  ; ?>';
	  
	 function showconnect(json)
		{
		 
		 
		 
		// alert(json);
		 
		 
		 
	   if((lo!=" "))
		{
        		if(json=="start" )
				 {
				 document.location.href="admin.php";
				 localStorage.login="admin";
				 }
				 else if ( (json=="start1") )
				 {
				 
				 document.location.href="acceuil.php";
				   localStorage.login="client";
				   var main0='{"visite":"client"}';
                  $.getJSON("chart/graphvisitor/nbvisite.php",{visitor:main0});
				 }
				 else
				 {
				 
				 //document.location.href="load.php";
				 document.getElementById("login").style.background='#EF7F7F';
				 document.getElementById("pass").style.background='#EF7F7F';
				 }
		 
		}
        else
		{
		 document.location.href="acceuil.php";
		
		}
			

		
		 
		}
	
	
	
	
	function rdirect(){
      
		if(lo=="")
		{
	 var login=document.getElementById("login").value;
	 var pass=document.getElementById("pass").value;
	 
	 var main3='{"verif":"connect","login_ad":"'+login+'" , "pass_ad":"'+pass+'"}';

	 $.getJSON("./controler/main.php",{connect_admin:main3},showconnect); 
	 
	 }
        else
		{
		 document.location.href="acceuil.php";
		
		}
	 
	 
	 
	 }
	 
  function mdp_lost(){
     document.location.href="index/pass.html";
	 }
	 function redirect_index(){
	 document.location.href="index.html";
	 }
	 function reset_log(){
	  document.getElementById("login").style.background='#FFF';
	 }
	  function reset_mdp(){
	  document.getElementById("pass").style.background='#FFF';
	 }
	 
	 
	 
	 function conn(event) {
 
    var char = event.which || event.keyCode;
  if(char==13){
    rdirect();
  }
}

	 
	 
	 
	 
	</script>
</head>




<body class="w1">

 
<div id="main" style="text-align:center">

	<div id="cnx" class="cnx_f">
		<div class="top1">
		<a href="#Acceuil" onClick="redirect_index();"><div class="logopalce"></div></a><div class="titrelogo">BeeDroid</div>
		</div>
		
		
		<div class="cent1">
			<br>
				<center><div class="font2">Connectez-vous pour continuer</div></center><br>
				
			<center>	
			<input onFocus="reset_log();" id="login" class="form1" type="text" placeholder="Login ..." onkeypress="conn(event)"/> <br><br>
			<input onFocus="reset_mdp();" id="pass" class="form1" type="password" placeholder="Mot de passe ..." onkeypress="conn(event)" /><br><br>
			<input id="cnx" type="submit" class="btn_cnx" value="Connexion" onClick="rdirect();"><br><br>
			<a href="#password" onClick="mdp_lost();"><font size=2>Mot de passe oublié ?</font></a>
			</center>
		</div>
		<div class="bottom1"></div></div>
</div>
 <div id="footer">
<div class="font2">Engagement et confidentialités | Conditions générales | Copyrighted © 2015 BeeDroid inc.Tout les droits réservés.</div>
 </div>
</body>
</html>