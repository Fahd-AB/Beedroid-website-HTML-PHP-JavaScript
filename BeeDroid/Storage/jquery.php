<?php
	   error_reporting(0);
	   session_start();
	  $login=$_SESSION['login'];
/*	 $db=mysql_connect("mysql.hostinger.fr", "u788488735_bee", "beedroid");
mysql_select_db("u788488735_bee");*/
$db=mysql_connect("localhost","root", "");
mysql_select_db("android");

	  $taille=0;
	  $id_client="";
	 $query8 = mysql_query("SELECT * FROM clients WHERE Login= '$login' ");
		while($row12 = mysql_fetch_array($query8))
		$id_client=$row12["Id_client"];
	 $query9 = mysql_query("SELECT * FROM donnees WHERE Id_client= '$id_client'");
		while($row15 = mysql_fetch_array($query9))
		$taille=$taille+(int)$row15["Taille"];
	  
	  
	?>
<html>
<head>


	<link async href="http://fonts.googleapis.com/css?family=Actor"  rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" href="style.css"/>
	
	
	
	
</head>
<style>


</style>

<body style="overflow:hidden;" id="bd">

	 
	

	 

	<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
	<script src="jquery.easypiechart.min.js"></script>
	<script>
	var st=0;
	var alloc=2097152;
	var taille_utilise=0;
	st='<?php  echo $taille  ?>';
	taille_utilise=alloc-st;
	var go=(taille_utilise/1024)/1024;
	var s_used=go.toFixed(2);
	var rest=(2-s_used)*100;
	document.getElementById("bd").innerHTML="<span class='chart' data-percent='"+rest+"'><span class='percent'></span><p style='font: normal 16px/1 'Actor', Helvetica, sans-serif;'>Espace Stockage Utilisé</p></span>";
	
	
	$(function() {
		$('.chart').easyPieChart({
			easing: 'easeOutBounce',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(rest));
			}
		});
		var chart = window.chart = $('.chart').data('easyPieChart');
		$('.js_update').on('click', function() {
			chart.update(Math.random()*200-100);
		});
	});
	</script>
</body>
</html>
