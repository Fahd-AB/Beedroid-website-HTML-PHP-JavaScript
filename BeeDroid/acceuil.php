

<?php
error_reporting(0);

$f = "etats.txt";
$arr = file($f);
if($arr[0]=="off")
{
session_start ();
session_unset();
session_destroy();
 header('Location: site.html');
}
else{
session_start ();
if(! isset($_SESSION['_connect_client'])){
 header('Location: load.php');
 
}
}

?> 

<?php

 
$login="";
$pass="";
if( isset($_SESSION['login']) )
{
$login= $_SESSION['login'];
$pass=$_SESSION['pass'];
 
}



?>



<script>
var login= '<?php  echo $login ; ?>' ;
var pass= '<?php    echo $pass ;?>' ;
 </script>


<html>
<head>
<link rel="icon" 
      type="image/ico" 
      href="favicon.ico">
<link rel="stylesheet" href="css/acceuil.css">
<script src="js/acceuil.js"></script>	
<script src="http://maps.google.com/maps/api/js?sensor=false"></script>


        <script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/jwplayer.js"></script>       
        <script src="js/player.js" type="text/javascript"></script>
        <script>jwplayer.key = ""</script>
        <link rel="stylesheet" type="text/css" href="css/style.css" />      
	    <script src="js/sweet-alert.min.js" type="text/javascript"></script>	
        <link rel="stylesheet" type="text/css" href="css/sweet-alert.css" /> 
        
<script type="text/javascript">
$(window).load(function(){
swal({ title: "",   text: "<div class='cadre'><div class='im'></div><div id='fountainG' style='margin-left:auto;margin-right:auto;'><div id='fountainG_1' class='fountainG'></div><div id='fountainG_2' class='fountainG'></div><div id='fountainG_3' class='fountainG'></div><div id='fountainG_4' class='fountainG'></div><div id='fountainG_5' class='fountainG'></div><div id='fountainG_6' class='fountainG'></div><div id='fountainG_7' class='fountainG'></div><div id='fountainG_8' class='fountainG'></div></div></div>",   timer: 3000, html: true , showConfirmButton: false });
test();

});

function tel12()
{

document.location.href="download/download.php";

}

</script>
<?php
session_start();
$_SESSION['storage']=15;

?>



</head>

<link async href="http://fonts.googleapis.com/css?family=Aguafina%20Script" rel="stylesheet" type="text/css"/>
<link async href="http://fonts.googleapis.com/css?family=Magra"  rel="stylesheet" type="text/css"/>
<link async href="http://fonts.googleapis.com/css?family=Actor"  rel="stylesheet" type="text/css"/>


<body class="wall1" onload="">
  <img alt="full screen background image" src="/BeeDroid/a.jpg" id="full-screen-background-image" /> 
<div id="entete">


 <div class="big_div_nav">      
		
      <div class="elements_left"><a href="#" onClick="f_f_acceuil();"><img style="margin-top:13px;" src="/BeeDroid/bee1.png" height="43" width="43"></a></div>
     

	 <div class="elements_left"><a href="#" onClick="f_f_acceuil();"><div style="margin-top:25px;" class="font1">BeeDroid</div></a></div>
     <a href="#" onClick="decon();"><div class="elements_rigth" style="margin-right:8px;"><img class="logo" src="/BeeDroid/icons/Icons/small/row1/8.png"></div></a>
      <a href="#" onClick="f_f_cpt();"><div class="elements_rigth"><img class="logo" src="/BeeDroid/icons/Icons/small/row 9/2.png" ></div> </a>
	  <a href="#" onClick="f_f_msg_aid();"><div class="elements_rigth"><div id="notif_ms" class="circle"></div><img class="logo" src="/BeeDroid/icons/Icons/small/row 6/4.png" ></div></a>
	  <a href="#" onClick="f_f_aide();" ><div class="elements_rigth"><img class="logo" src="/BeeDroid/icons/Icons/small/row 5/2.png" ></div></a>
	 <div class="serach"><input id="search" onkeypress="uniCharCode(event)" onFocus="reset();" style="margin-top:25px;" type="text" size="40" placeholder="Play store..."/>
      </div>
		

</div>









</div>

<div id="main">
 <div id="menu1">
   <div id='cssmenu'>
							<ul>
							   <li><a href="#"  onClick="f_f_acceuil();"><span><img src="/BeeDroid/icons/Icons/small/row 5/14.png" > Actualités</span></a></li>
							   <li class='active has-sub'><a href='#'><span><img src="/BeeDroid/icons/Icons/small/row 8/1.png"> Signaler la perte</span></a>
								  <ul>
									 <li class='has-sub'><a href='#' onClick="f_f_msg_ec();"><span class="links_box"><img src="/BeeDroid/icons/Icons/small/row 12/6.png"> Afficher un message sur l'écran</span></a>
									 </li>
									 <li class='has-sub'><a href='#' onClick="f_f_ver();"><span class="links_box"><img src="/BeeDroid/icons/Icons/small/row 3/6.png"> Verrouillage</span></a>
									 </li>
									 <li class='has-sub'><a href='#' onClick="f_f_rec();"><span class="links_box"><img src="/BeeDroid/icons/Icons/small/row 8/3.png"> Récupération des données</span></a>
									 </li>
									 <li class='has-sub'><a href="#" onClick="supp_donn();"><span class="links_box"><img src="/BeeDroid/icons/Icons/small/row 2/1.png"> Ecrasement des données</span></a>
									 </li>
									  <li class='has-sub'><a href='#' onClick="f_f_app();"><span class="links_box"><img src="/BeeDroid/icons/Icons/small/row 4/4.png"> Appel audio-visuel</span></a>
									 </li>
								  </ul>
							   </li>
							   <li><a href='#' onClick="f_f_pos();"><span><img src="/BeeDroid/icons/Icons/small/row1/9.png"> Positions</span></a></li>
							   <li><a href='#' onClick="f_f_tel();"><span><img src="/BeeDroid/icons/Icons/small/row 8/7.png"> Téléchargements</span></a></li>
							   <li><a href='#' onClick="f_f_apps();"><span><img src="/BeeDroid/icons/Icons/small/row 12/2.png"> Appareils</span></a></li>
							   <li><a href='#' onClick="f_f_map();"><span><img src="/BeeDroid/icons/Icons/small/row1/5.png"> Maps</span></a></li>
							   <li><a href='#' onClick="play();"><span><img src="/BeeDroid/icons/Icons/small/row 5/12.png"> Play Store</span></a></li>
							   <li><a href='#' onClick="f_f_about();"><span><img src="/BeeDroid/icons/Icons/small/row 9/4.png"> A propos</span></a></li>
							   <li><a href='#' onClick="f_f_msg_aid();"><span><img src="/BeeDroid/icons/Icons/small/row 10/5.png"> Messages d'aide</span></a></li>
							   <li class='last'><a href='#' onClick="f_f_av();"><span><img src="/BeeDroid/icons/Icons/small/row 8/9.png"> Avis</span></a></li>
							   <li class='last'><a href='#' id="more_info" onClick="trans();"><span><img  src="/BeeDroid/icons/Icons/small/row 8/7.png"> Informations</span></a></li>
							</ul>
							</div>
							<div id="f_m" class="fast_menu1">
							
							<div style="margin-top:30%;">
						
						<div class="in1">Identifiant</div>
						<div class="in2" id="l_m_id_cl">00000</div>
						
						 <div class="in1">Email </div>
						 <div class="in2" id="l_m_id_mail">Client@gmail.com</div>
						 <div class="in1">Nombre d'apareils</div>
						 <div class="in2" id="l_m_nb_app">2</div>
						 <div class="in1">Dernier position</div>
						 <div class="in2" id="l_m_pos">(00.00000,00.00000)</div>
						 <div class="in1">Dernier signalement</div>
						 <div class="in2" id="f_m_sig">00/00/0000</div>
						 <div class="in1">Sms</div>
						 <div class="in2" id="f_nb_sms">00 Sms</div>
						 <div class="in1">Contacts</div>
						 <div class="in2" id="f_nb_con">00 Contact</div>
						 <div class="in1">Musique </div>
						 <div class="in2" id="fmf">00 files</div>
						 <div class="in1">Vidéos </div>
						 <div class="in2" id="fvf">00 files</div>
						 <div class="in1">Photos </div>
						 <div class="in2" id="fpf">00 files</div>
						 
						</div>
						
							</div>
 </div>

 <div id="contenu1">
                     
					 
                     <div id="menu">
                     <div id="gale" class="galerie">
					 <div style="font: normal 16px/normal 'Actor', Helvetica, sans-serif; color:#000000;">Galerie</div><br>
					 <hr color="black"></hr><br>
                     <input type="button" class="icone_sms" onClick="f_f_sms();"><br><br>
					 <input type="button" class="icone_contacts" onClick="f_f_contact();"><br><br>
					 <input type="button" class="icone_music" onClick="f_f_music();"><br><br>
					 <input type="button" class="icone_videos" onClick="f_f_videos();"><br><br>
					 <input type="button" class="icone_photos" onClick="f_f_photos();" ><br><br>
					 <div style="width:85%;heigth:100px;margin-left:auto;margin-right:auto;">
					  <iframe src="/BeeDroid/Storage/jquery.php" width="100%" height="100%" frameborder="0" style="border:0"></iframe>
					 </div>
                     </div>
                     </div>

                     <div id="contenu">
							  
							   <div class="fenetre" id="f_acceil">
						       
						 <div id="slidy-container">
							<figure id="slidy">
							<img src="/BeeDroid/slider/7.jpg" alt>
							
							</figure>
							</div>
						 
						 
					            <div class="templates_presets templates_presets_cats">
								
								<p style="color:#000000">Cher clients notre application a pour but de franchir un maximum de sécurité pous vos données personnelles et pour éliminer le risque de perdre
								votre smartphone qui contient ces précieuse données,l'application vous permet de suivre les mouvements de votre mobile à des intervales de temps
								que vous le préciser.dans le cas de perte ou de vol nottre application vous garentie la récupération de votre smartphone et vos données,l'application
								vous offre la possibilite de contacter directement l'individu que votre smartphone est à sa dispositio ou lui envoyé des textos qui seront lui affiché
								sur l'écran du mobile,vous pouvez par exemple la laissez votre numéro de téléphone pour qu'il puisse vous contacter ulterieurement.
								</p>
								</div>
								<div>
								<div class="font3">Contactez-nous</div>
								<img src="/BeeDroid/2424.jpg" style="margin-bottom:10px; width:100%;heigth:100%;">
								<div class="templates_presets templates_presets_cats">
								<p style="color:#000000 ">
								Pour vous aider et répendre à tous vos questions et pour tout renseignements vous pouvez nous contacter en envoyents un message d'aide ou signaler un probléme qui
								nous aide à améliorer nos services.
								Nous sommes valable 24 heures sur 24 pour vous répendre à vos questions,vous pouvez aussi utiliser la page d'aide en sélectionnent l'icone drapeau au haut du page
								dans le bar des menus.
								</p>
								</div>
								</div>
								
								<div>
								<div class="font3">Avis</div>
								<img src="/BeeDroid/avis.jpg" style="margin-bottom:10px;width:100%;heigth:100%;">
								<div class="templates_presets templates_presets_cats">
								<p style="color:#000000">
								Vous pouvez donnez votre avis à propos du site web et nos services engénéral cesi peut aussi nous aide à améliorer le niveau de nos services et garentir la disponibilité
								et la flexibilité de notre application.<br>
								pour plus d'infos clicker<a href="#" onClick="f_f_aide();"> ici.</a>
								</p>
								</div>
								</div>
						</div>
						 
						 <div class="fenetre_pos" id="f_pos"></div>
						 <div class="fenetre_map" id="f_map">
						 
						 <iframe id="map" src="map.php" width="100%" height="100%" frameborder="0" style="border:0"></iframe>
						
						 </div>
						 <div  class="fenetre_tel" id="f_tel">
						 <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Téléchargements</div><br><br><br>
					     <hr color="black"></hr><br>
						 <br>
						 
						 <div style="margin-top:50px;" class="templates_presets templates_presets_cats">
						 <p style="color:#000000 ;text-align:left;">
						 BeeDroid lance la nouvelle version de l'application de géolocalisation des smartphones androide ,notre aplication vous assure la sécurité de votre vie privé et vous facilite la chance de récuperer votre mobile perdu meme si après la perte l'application vous garentie la récupération de vos données et divers autres fonctionnalité ,notre but est d'assurer la sécrité de vos données personnelles ,BeeDroid est disponible comme une application androide que vous gerer d'après ce site web , pour le moment il existe une seule version de notre application (la version 1.0) qui vous offre des fonctionnalitées standard trés efficace et trés pertinentes ,pour l'amélioration des services des versions récentes seront bientot publié avec des fonctionnalitées plus riches ,
						 Notre version androide de l'application est disponible avec le lien directe de téléchargement ci dessous,si le lien n'est plus fonctionnable
						 vous pouvez signaler comme un problème de mal fonctionnement du site web,des versions plus récente seront pubier bientot,vous pouvez
                         suivre nos actualité pour verifier les dates de sortie des derniers versions de l'application. 						 
						 </p>
						 </div>
						 <div style="text-align:center;">
						  <a href="#" onClick="tel12();"><div class="telechargement"></div> 
						<div class="lien_tele" >Télécharger ici v1.0</div></a></div>
						 <p style="color:#000000 ;text-align:left;">
						 Si la nouvelle version vous parait intérrissante n'hésiter pas de donner votre avis à propos de qualité de service et des fonctionnalitées .
						 </p>
						 </div>
						 
						 
						 
						 
						 <div class="fenetre_apps" id="f_apps">
						 <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Vos appareils</div><br><br><br>
					     <hr color="black"></hr><br>
						 <br>
						 <div id="ap" style="height:50%;margin-top:80px;">
						

									<form name="cocher" style="margin-top:10px;">
									<div class="CSSTable">
									<table id="tableau" border=1 >
										<thead>
											<tr>
												<td>Identifiant</td>
												<td>Constructeur</td>
												<td>Modèle</td>
												<td>Version androïde</td>
												

											</tr>
										</thead>
										<tbody>
											
											 
										</tbody>
									</table>
									</div>
									</form>
						 
						 
						 
						 </div>
						 <div style="margin-top:5px;" class="templates_presets templates_presets_cats">
						 <p style="color:#000000 ;text-align:center;">
							Remarque : <br>
							Vous pouvez inscrire jusqu'a 5 appareils mobiles dans votre compte,vus pouvez les gerer simultanement avec une seule compte et les controler à distance.
							les positions de chaque appareil sont indiquées par un marqueur de couleur différent,par defaut l'appareil sélectionné est la première que vous avez inscrit.
							pour supprimer une appareil il faut désinstaller l'application installé sur votre mobile androide,pour plus de renseigements vous pouvez visiter la page d'aide
                            ou l' FAQ.							
						 </p>
						 </div><br>
						
						 </div>
						 
						 
						 
						 
						 
						 <div class="fenetre_aff_msg" id="f_msg_ec">
						 <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Afficher un message sur l'écran du mobile</div><br><br><br><br><br><br>
					     <hr color="black"></hr><br>
						 
						 <div style="margin-top:80px;" class="templates_presets templates_presets_cats">
						 <p style="color:#000000 ;text-align:center;">
							Avertissement : <br>
							Cet option concerne seulement les cas de perte ou de vol de votre smart phone,cesi peut nuir à des utilisateurs<br>
							BeeDroid ne prend pas la responsabilité de ce que vous envoyer.<br>
						 </p>
						 </div>
						 <div id="devices" style="margin-bottom:20px;">
						 <select >
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						</select>
						</div>
						<br>
						 <textarea id="msg" class="msg_ec" name="textarea" rows="10" cols="80" placeholder="Votre Message ici..." onFocus="reset_msg_z();" onkeypress="send_msg_enter(event)"></textarea><br>
						 <div class="button_style" onClick="send_msg();">Envoyer</div><br>
						 <div style="font: normal 10px/1 'Magra', Helvetica, sans-serif;line-height:20px; color:#000000;margin-top:1%;"> 
							Remarque :<br>
							Parfois Le message que vous valider ne sera pas immidiatement envoyé car le client n'est pas connecté au réseau<br>
						    internet,le message sera stocké et envoyé lors de la premiere connexion.
						 </div>
						 </div>
						 
						 
						 
						 <div class="fenetre_verr" id="f_ver">
						 <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Verrouillage du Mobile</div><br><br><br>
					     <hr color="black"></hr><br>
						 <br>
						  <div style="margin-top:135px;" class="templates_presets templates_presets_cats">
						 <p style="color:#000000 ;text-align:center;">
							Avertissement : <br>
							Cet option concerne seulement les cas de perte ou de vol de votre smart phone,cesi peut apporter des changements<br>
							sur votre mobile et il ne sera plus déverouillé qu'avec le code que vous introduiser ci dessous.<br>
						 </p>
						 </div><br>
						   <div id="devices_lock" style="margin-bottom:20px;">
						 <select >
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						</select>
						</div>
						  <br>
						 <input type="text" id="code_verr" placeholder="Votre code ici..." class="c_verr" onFocus="reset_lock();" onkeypress="lock_enter(event)"><br><div id="err" class="err_msg"></div>
						 <div class="button_style"  onClick="lock_screen();" >Verrouiller</div><br>
						 </div>
						 <div class="fenetre_aide" id="f_aide">
						        <div class="templates_presets templates_presets_cats">
								<p style="color:#000000">
								
								C’est quoi BeeDroid ?<br>
								BeeDroid est une application web androide qui garentie a nos client un maximum de sécurité pour vos données personnelles,si le client à perdu son smartphone androide qui contient  ses données personnelles il peut jamais les récupérer de plus qu’il existe un haut risque que ces données seront à la disposition d’un autre individu,pour cesi  et grace à nottre application vous pouvez récuperer votre smartphone avec une méthode simple et rapide.
								<br>Comment fonctionne BeeDroid ?<br>
								BeeDroid est une application web android c'est-à-dire qu’il faut essentiellemnt installer cette application sur votre smartphone android des que vous acheter ce qui vous permet de proteger vos données personnelles,l’installation de l’application sur le mobile permet de fournir un login et un mot de passe,le client utilise son identifiant et son mot de passe pour acceder à son propre espace sur le site web.une fois connecté l’application installé sur le mobile nous permet de controler le smartphone à distance.
								<br>Quels sont les principaux fonctionalités de BeeDroid ?<br>
								BeeDroid offre divers fonctionalités à ces client,il permet la localisation géographique de votre smartphone androide et de consulter ces  dix derniers positions,il vous permet aussi de gerer plusieurs appareils à la fois ce qui lui rend le plus efficace dans son domaine.
								En cas de perte du smartphone BeeDroid vous offre divers options tels que l’affichage d’un message sur l’écran du mobile que vous le préciser,un verrouillage du smartphone à distance avec un code que vous le préciser.
								BeeDroid vous offre aussi un espace de stockage pour récuperer vos données personnelles,ou les supprimer à distance.
								<br>Comment utiliser BeeDroid ?<br>
								Initialement il faut bien configurer les délais d’envoi de votre position car en cas de perte la mise à jour de votre position sera selon les délais que vous avez fixer à partir de votre application androide installé sur votre smartphone.
								Il faut aussi activer l’option de connectivité ce qui permet d’interdir  la connectivité via un cable USB ou l’envoi de vos données par Bluetooth.
								Une fois ces deux options sont bien configurées vous pouvez elimier à 70% le risque de perdre vos données personnelles d’une façon définitive et vous garentie d’eliminer le risque que vos donneés sont à la disposition d’un autre individu et le risque de la disposition de votre vie privé au public.
								<br>Que je peut faire si j’ai un probleme ?<br>
								BeeDroid vous offre un service cient valable 24 heures/24 pour répendre à tout vos questions,vous pouvez utiliser l’option message d’aide  pour contacter l’administrateur pour plus des questions ou bien demander des renseigements.<br>
								Vous pouvez sigaler un probleme en accédent à l’option Avis,puis choisir la fonction signaler la perte,choisissez le type d’erreur que vous azez rencontrer à propos du site ou à propos l’application mobile,votre message sera traité ulterieurement,cesi nous permet d’améliorer le site et garentie la qualité de services.
								<br>On souhaitent etre toujours a la hauteur de votre confiance et nous sommes heureux de vos servir.<br>
								<br>BeeDroid.inc © 2015 </br>

								</p>
								</div>
						 </div>
						 
						 <div class="fenetre_msg_aid" id="f_msg_aid">
						 <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Messages d'aide</div><br><br><br>
					     <hr color="black"></hr>
						 <div id="ms_b" class="box_style1">
							 
						 </div><br>
						 <div class="font4">Répendre :</div><br>
						 <textarea id="msg_ai" class="msg_aid_box" name="textarea" rows="10" cols="80" placeholder="Votre Message ici..." onkeypress="env_msg_enter(event)" onFocus="reset_msg_zone();"></textarea><br>
						 <div class="button_style" onClick="send_msg_admin();">Envoyer</div>
						 
						 </div>
						 
						  <div class="fenetre_cpt" id="f_cpt">
						  <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Gerer votre compte</div><br><br><br>
					     <hr color="black"></hr><br>
						  <div style="margin-top:100px;" id="big_div">
						  <div id="left_div">
						   <a href="#" onClick="f_f_mdp();"><div class="little_menu">Mot de passe</div></a><br>
						    <a href="#" onClick="f_f_infos();"><div class="little_menu">Informations</div></a><br>
							
						  </div>
							  <div id="rigtht_div" >
								  <div id="f_mdp" class="div_mdp">
								  <div style="text-align:center;font: normal 16px/1 'Actor', Helvetica, sans-serif;color:#000000">Changement de Mot de passe</div>
								  <br><br>Dernier changement de mot de passe : pas de changement<br>
										 <br><br>
										 <center>
										 <br><br>
										  <table>
										  <tr><td>Ancien Mot de passe :</td><td><input class="special_inputs" type="password" id="old_mdp" onFocus="rest_mdp_input();"></td></tr>
										  <tr><td>Nouveau Mot de passe :</td><td><input class="special_inputs" type="password" id="new_mdp" onFocus="rest_mdp_input();"></td></tr>
										  <tr><td>Confirmer Mot de passe :</td><td><input  class="special_inputs"type="password" id="retype_new_mdp" onFocus="rest_mdp_input();"></td></tr>
										  </table><br>
										  <div class="button_style"  onClick="chn_mdp();">Valider</div>
										 </center>
								  </div>
								 
								  
								  <div id="f_infos" class="div_info">
								  <div style="text-align:center;font: normal 16px/1 'Actor', Helvetica, sans-serif;color:#000000">Changement des informations personnelles</div>
								  <br><br>
										 <br><br>
										 <center>
										  <table>
										  <tr><td>Nom et Prénom :</td><td><input id="nom_pren" class="special_inputs" type="text" onFocus="reset_name_info();"></td></tr>
										  <tr><td>Email :</td><td><input id="email" class="special_inputs" type="text" onFocus="reset_email_info();"></td></tr>
										  <tr><td>Tel :</td><td><input id="telephone" class="special_inputs" type="text" onFocus="reset_tel_info();"></td></tr>
										  <tr><td>Adresse :</td><td><textarea id="adr" class="special_textareas"  rows="10" cols="30" onFocus="reset_adr_info();"></textarea></td></tr>
										  <tr><td>Mot de passe :</td><td><input id="ch_info_mdp" class="special_inputs"type="password" onFocus="reset_pwd_info();"></td></tr>
										  </table><br>
										  <div class="button_style" onClick="chn_infos();">Valider</div>
										 </center>
								  </div>
								  
								  
								  </div>
								  </div>
							  </div>
				
						  <div class="fenetre_av" id="f_av">
						   <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Donner un avis</div><br><br><br>
					       <hr color="black"></hr><br>
						   <div id="avis_box" class="av_bx">
						   <div id="st1" style="width:17px;"><a href="#" onFocus="star1();"><div id="s1" class="rank"></div></a></div>
						   <div id="st2" style="width:17px;"><a href="#" onFocus="star2();"><div id="s2" class="rank"></div></a></div>
							<div id="st3" style="width:17px;"><a href="#" onFocus="star3();"><div id="s3" class="rank"></div></a></div>
							<div id="st4" style="width:17px;"><a href="#" onFocus="star4();"><div id="s4" class="rank"></div></a></div>
							<div id="st5" style="width:17px;"><a href="#" onFocus="star5();"><div id="s5" class="rank"></div></a></div>	
							</div><br>
						<div class="templates_presets templates_presets_cats">
						 <p style="color:#000000 ;text-align:center;">
							Avis : <br>
							Merci de donner votre avis à propos du site et notre application cesi nous permet de savois comment vous trouvez<br>
							nos services,par conséquent on peut améliorer nos services pour atteindre votre satisfaction.si vous remarquer un<br>
							beug ou un mal fonctionnement vous pouvez le signaler en envoyant un mail d'alerte à l'administrateur ci dessous.
						 </p>
						 </div><br>
						 <div class="font4" style="text-decoration:underline;">Message d'alerte :</div><br>
						  <div style="text-align:left;margin-bottom:30px;margin-top:10px;padding:5px; font: normal 16px/1 'Actor', Helvetica, sans-serif; color: #000000;">
						  Type de probleme : 
								 <select id="prob_type">
								 <option value="0">Aucun</option>
								 <option value="1">Problème lié au fonctionnement du site web</option>
								 <option value="2">Problème lié au fonctionnement de l'application</option><br>
								 </select>
								 
						 </div>
						 <textarea id="msg_alert" class="msg_alert_box" name="textarea" rows="10" cols="80" placeholder="Description ici..."></textarea><br>
						 <div class="button_style" onClick="env_avi();">Envoyer</div>
						 
						  </div>
						 
						 
						 <div class="fenetre_rec" id="f_rec">
						 <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Récupération des données</div><br><br><br>
					     <hr color="black"></hr><br><br><br><br><br>
						 <br>
						 <div class="templates_presets templates_presets_cats">
						 <p style="color:#000000 ;text-align:center;">
							Choisissez votre appareil et le type de media à récuperer : 
						 </p>
						 </div><br>
						  <center>
						   <div id="devices_restore" style="margin-bottom:20px;">
						 <select >
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						</select>
						</div>
						  </center><br>
						 
						 <div id="tot_box" class="big_media_box">
						 <div class="lign1">
						 <div id="mb" class="m_box" onMouseover="reset_cadre(this);"><div class="ic_music"></div><input id="music_box" type="checkbox" onclick="click_diselect(this)"></div>
						  <div id="pb" class="p_box" onMouseover="reset_cadre(this);"><div class="ic_photos"></div><input id="photo_box" type="checkbox" onclick="click_diselect(this)"></div>
						 <div id="vb" class="v_box" onMouseover="reset_cadre(this);"><div class="ic_videos"></div><input id="video_box" type="checkbox" onclick="click_diselect(this)"></div>
						 </div>
						 
						 <div class="lign2">
						 <div id="sb" class="s_box" onMouseover="reset_cadre(this);"><div class="ic_sms"></div><input id="sms_box" type="checkbox" onclick="click_diselect(this)"></div>
						  <div id="cb" class="c_box" onMouseover="reset_cadre(this);"><div class="ic_contacts"></div><input id="cont_box" type="checkbox" onclick="click_diselect(this)"></div>
						 <div id="ab" class="a_box" onMouseover="reset_cadre(this);"><div class="ic_all">Tout</div><input id="check_all" type="checkbox" onclick="OnChangeCheckbox (this)"></div>
						 
						 </div>
						 
						 </div><br>
						 
						 <div style="width:100%;height:30%;text-align:center;margin-top:50px;">
						 <div class="diva_recup"><div class="button_style"  onClick="recup();">Commancer</div></div>
						
						 <div style="font: normal 11px/1 'Magra', Helvetica, sans-serif;line-height:20px; color:#000000;margin-top:1%;text-align:center;"> 
							 Remarque:<br>
						  la récupération de quelques médias volumineux peut prendre plusieurs minutes vous pouvez quitter votre session sans interrempre la récupération<br>
						  une fois la récupération est terminé vous trouvez vos données dans la galerie,votre espace de récupération est limité à 2Go.
						 </div>
						
						 </div>
						 </div>
						 
						 
						
						
						
						<div class="fenetre_app" id="f_app">
						<div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Appel audio-visuel</div><br>
					     <hr color="black"></hr><br>
						 
						 <div id="devices_call" style="margin-bottom:20px;">
						 <select >
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						<option>---- ---- --</option>
						</select>
						</div>
						 <br>
						 <div style="width:100%;height:100%;text-align:center;">
						<div class="cam_box">
											
											<!-- Video Preview -->
							<div class="container">            
								<div id="video_preview">                    
									<div id="player"></div>
								</div>
							</div>
							<!-- ./Video Preview -->
						
						</div><br>
						<div id="call" class="call_btns">
						<a href="#" id="btn_start" ><div class="btn_connect"></div></a>
						<a href="#" id="btn_stop"><div class="btn_disconnect"></div></a>
						</div>
						</div> 
						
						 </div>
						 
						 
						 
						 <div class="fenetre_sms" id="f_sms">
						 <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Sms</div>
					     <hr color="black"></hr>
						 <a href="#" onClick="supp_sms()"><div class="slien">Tout Supprimer</div></a>
						 
						 <div class="box_style2" id="sms_b">
						 
						 </div>
						 </div>
						
						<div class="fenetre_contact" id="f_contact">
						<div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Contacts</div>
					     <hr color="black"></hr>
						 <div id="ap" style="height:90%;margin-top:0px;overflow-y:scroll;">
						 <form method="post" action="">
									<div style="width:100%; height:40px;overflow:hidden;text-align:center;">
										 <a href="#" onClick="delete_all_con();"><div class="slien">Tout Supprimer</div></a>
									</div>
										
									</form>

									<form name="cocher_con" style="margin-top:10px;">
									<div class="CSSTable">
									<table id="tableau1" border=1 >
										<thead>
											<tr>
												<td>Identifiant</td>
												<td>Nom</td>
												<td>Numéro</td>
												<td>Email</td>
											</tr>
										</thead>
										<tbody>
											
											 
										</tbody>
									</table>
									</div>
									</form>
						 
						 </div>
						 
						</div>
						
						
						 <div class="fenetre_pho" id="f_pho">
						 <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Photos</div><br><br><br>
					     <hr color="black"></hr><br>
						 
						 
						 <div class="liens">
						 <a href="#" onClick="delete_photos();"><div class="lien">Tout Supprimer </div ></a>
						 <a href="#" onClick="download_photos();"><div class="lien"> Tout télécharger</div></a> 
						 </div>
						 
						  <div class="photo_box_container" id="pc">
						 
						 
						
						 
						 
						 </div>
						 </div>
						  
						 
						
						 
						 
						 
						 
						 <div class="fenetre_music" id="f_music">
						 <div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Music</div><br><br><br>
					     <hr color="black"></hr><br>
						 <div class="liens">
						 <a href="#" onClick="delete_music();" ><div class="lien">Tout Supprimer </div ></a>
						 <a href="#" onClick="download_music();"><div class="lien"> Tout télécharger</div></a> 
						 </div>
						 <div class="music_box_container" id="mc">
						 
						  
						 
						 
						 
						 </div>
						 </div>
						

						<div class="fenetre_videos" id="f_videos">
						<div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Vidéos</div><br><br><br>
					     <hr color="black"></hr><br>
					     <div class="liens">
						 <a href="#" onClick="delete_video();"><div class="lien">Tout Supprimer </div ></a>
						 <a href="#" onClick="download_video();"><div class="lien"> Tout télécharger</div></a> 
						 </div>
						  <div class="video_box_container" id="vc">
						 
						
						 
						 
						 </div>
						 
						 
						 
						</div>
						 
                     </div>
                     
					 	
 </div>
 
</div>
<div id="bottom_menu" class="fast_menu_bottom">
<center>
<table class="tab2">
<tr><td><div class="in11">Identifiant</div></td><td><div class="in12" id="f_cl_id">0124512</div></td><td><div class="in11">Dernier position</div></td><td><div class="in12" id="m_b_pos">(00.00000,00.00000)</div></td><td><div class="in11">Music</div></td><td><div class="in12" id="nbm">00 fichier</div></td><td><div class="in11">Sms</div></td><td><div class="in12" id="b_nb_sms">00 Sms</div></td></tr>
<tr><td><div class="in11">Email</div></td><td><div class="in12" id="f_cl_mail">Client@gmail.com</div></td><td><div class="in11">Dernier signalement</div></td><td><div class="in12" id="der_sig">Aucun signalement</div></td><td><div class="in11">Vidéos</div></td><td><div class="in12" id="nbv">00 fichier</div></td><td><div class="in11">Contacts</div></td><td><div class="in12" id="b_nb_con">00 Contact</div></td></tr>
<tr><td><div class="in11">Nombre d'appareils</div></td><td><div class="in12" id="f_cl_nb_app">2</div></td><td><div class="in11">Stockage restant</div></td><td><div class="in12" id="stock">2 Go</div></td><td><div class="in11">Photos</div></td><td><div class="in12" id="nbp">00 fichier</div></td><td><div class="in11"><a href="#" onClick="f_f_aide();">Aide</a></div></td></td></tr>
</table></center>
</div>

<div id="footer">
<ul class="social">
			<li class="facebook"><a href="#" onClick="facebook_link();" class="entypo-facebook" ></a></li>
			<li class="twitter"><a href="#" onClick="twitter_link();" class="entypo-twitter"></a></li>
			<li class="dribbble"><a href="#" onClick="google_link();" class="entypo-dribbble"></a></li>
			<li class="behance"><a href="#" onClick="instagram_link();" class="entypo-behance"></a></li>
			<li class="linked-in"><a href="#" onClick="linked_in_link();" class="entypo-linkedin"></a></li>
		</ul>
		<div class="font2">Engagement et confidentialités | Conditions générales | Copyrighted © 2015 BeeDroid inc.Tout les droits réservés.</div>
</div>
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 






 

 


 




<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

<div id="popup1" class="overlay">
							<div class="popup">
								<h2>Avertissement</h2>
								<a class="close" href="#">&times;</a>
								<div >
									<div style="font: normal 20px/normal 'Actor', Helvetica, sans-serif; color:#000000; text-align:left;">Ecrasement des données</div><br><br><br>
									 <hr color="black"></hr><br>
									 <div style="margin-top:5px;" class="templates_presets templates_presets_cats">
									 <p style="color:#000000 ;text-align:center;">
										Attention : <br>
										Cet option Ecrase tout donnée existante sur votre mobile d'une manière définitive,voulez vous vraiment les écraser ?
									 </p>
									 </div><br>
									<center><input type="button" class="btn_ecrasement" value="Proceder" onClick="delete_all_p();"></center>
								</div>
							</div>
						</div>
 
  
  </body>
  
  <?php
  
  function ScanDirectory($Directory){
 $i=0;
 $tableau=array();
  $MyDirectory = opendir($Directory) or die('Erreur');
 while($Entry = @readdir($MyDirectory)) {
   if($Entry!="." && $Entry!="..")
   {
  $tableau[]=$Entry;
    }
    
   
   
   
                
				
				
 }
  closedir($MyDirectory);
 return $tableau;
}

$x=ScanDirectory('slider');


  
  
  
  ?>
  
  
  
  
  <script>
  <?php echo "var tab = '".implode("<>", $x)."'.split('<>');"; ?>
  for (i=0;i<tab.length; i++)
  {
  document.getElementById("slidy").innerHTML+="<img src='/BeeDroid/slider/"+tab[i]+"' alt>";
  }
  
  
  
   
var timeOnSlide = 3,
timeBetweenSlides = 1,
animationstring = 'animation',
animation = false,
keyframeprefix = '',
domPrefixes = 'Webkit Moz O Khtml'.split(' '),
pfx = '',
slidy = document.getElementById("slidy");
if (slidy.style.animationName !== undefined) { animation = true; }
if ( animation === false ) {
for ( var i = 0; i < domPrefixes.length; i++ ) {
if ( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
pfx = domPrefixes[ i ];
animationstring = pfx + 'Animation';
keyframeprefix = '-' + pfx.toLowerCase() + '-';
animation = true;
break;
} } }
if ( animation === false ) {
// animate using a JavaScript fallback, if you wish
} else {
var images = slidy.getElementsByTagName("img"),
firstImg = images[0],
imgWrap = firstImg.cloneNode(false);
slidy.appendChild(imgWrap);
var imgCount = images.length,
totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1),
slideRatio = (timeOnSlide / totalTime)*100,
moveRatio = (timeBetweenSlides / totalTime)*100,
basePercentage = 100/imgCount,
position = 0,
css = document.createElement("style");
css.type = "text/css";
css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%; }";
css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }";
css.innerHTML += "@"+keyframeprefix+"keyframes slidy {";
for (i=0;i<(imgCount-1); i++) {
position+= slideRatio;
css.innerHTML += position+"% { left: -"+(i * 100)+"%; }";
position += moveRatio;
css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }";
}
css.innerHTML += "}";
css.innerHTML += "#slidy { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }";
document.body.appendChild(css);
}
 

</script>


  </html>