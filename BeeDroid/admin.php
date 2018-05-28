<?php
session_start ();
if(! isset($_SESSION['_connect_'])){
 header('Location: load.php');
 
}


?> 
<html>

<head>
<link rel="icon" 
      type="image/ico" 
      href="favicon.ico">
 


<link rel="stylesheet" href="css/admin.css">
<link async href="http://fonts.googleapis.com/css?family=Aguafina%20Script"  rel="stylesheet" type="text/css"/>
  <script src="js/main.js"> </script>
   
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
 <link async href="http://fonts.googleapis.com/css?family=Actor"  rel="stylesheet" type="text/css"/>
 
  

<link rel="stylesheet" href="popup/example.css">
  <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>

  <!-- This is what you need -->
  <script src="popup/lib/sweet-alert.min.js"></script>
  <link rel="stylesheet" href="popup/lib/sweet-alert.css">
  <!--.......................-->
 
  
  
 
</head>
<script>
 
 $(window).load(function(){
run();
 
 
 
 
});
 	
</script>
  

<body  class="wall1">
  

 <img alt="full screen background image" src="/BeeDroid/admin-bg.jpg" id="full-screen-background-image" /> 
<div id="entete">


<nav >
    <ul>
       
		 <div style="float:left;margin-top:2px;margin-left:20px;">
		 <a href="#" onClick="hide_accueil();"> <img src="/BeeDroid/bee1.png"></a>
		 </div>
		 <div style="float:left;margin-top:15px;margin-left:25px;font: normal 30px/1 'Aguafina Script', Helvetica, sans-serif; color:rgba(152,214,72,1);">
		   <a onClick="hide_accueil();" style="cursor:pointer;" >BeeDroid </a>
		 </div>
		 
        
		
		
      
		
        
		 
		<li style="float:right; ">
		<a href="#">Compte</a>
		 <div>
                <ul>
                    <li><a style="color:rgba(0,0,0,1);" href="#" onClick="show_param();"><img style="margin-right:5px;" src="/BeeDroid/icons/Icons/small/row 3/12.png"><span class="font2"> Paramètre</span></a></li>
					 
       <li ><a  onClick="dec();" style="color:rgba(0,0,0,1);" href="#"><img style="margin-right:5px;" src="/BeeDroid/icons/Icons/small/row1/8.png">  <span class="font2"> Déconnexion</span></a></li>

                </ul>
            </div>
		</li>
		
									<div style="float:right;margin-top:0px;margin-right:20px;margin-left:0px; cursor:pointer;" onClick="hide_aide();">
								 <div  id="id_aide" class="circle" style="margin-top:36.5px;"></div>
								 <img src="/BeeDroid/icons/Icons/4.png" style="margin-top:21px;">
							 
							 </div>	
		
		
								 <div style="float:right;margin-top:0px;margin-right:20px;margin-left:0px; cursor:pointer;" onClick="hide_alert();">
									 <div id="id_ms" class="circle" style="margin-top:37px;"></div>
									 <img src="/BeeDroid/icons/Icons/small/row 8/1.png" style="margin-top:21px;">
							 
									</div>	
		
		<div id="search"> <input id="cherche" name="q" type="text" size="40" placeholder="Recherche..." onFocus="returncolor_search();" onkeypress="recherche_general(event);" /> </div>
							 
		
    </ul>
</nav>

 </div>
 
<div id="main">
 

 <div id="contenu1">
                     
					 
                     <div id="menu">
                        <div id='cssmenu'>
											<ul>
									 <li><a href="#" onClick="hide_accueil();"><img src="/BeeDroid/icons/Icons/3.png"><span class="font2"> Acceuil</span></a></li>
									 <li><a href='#' onClick="hide_client();"><img src="/BeeDroid/icons/Icons/5.png"><span class="font2"> Clients</span></a></li>
								<li class='active has-sub'><a href='#'><img src="/BeeDroid/icons/Icons/7.png"><span class="font2">  Messages</span></a>
												  <ul>
									<li class='has-sub' onClick="hide_aide();"><a href='#'><img src="/BeeDroid/icons/Icons/4.png"><span class="font2"> Meassages d'Aide</span></a>
													 </li>
									<li class='has-sub' onClick="hide_alert();"><a href='#'><img src="/BeeDroid/icons/Icons/small/row 8/1.png"><span class="font2"> Messages d'alerte</span></a>
													 </li>
												  </ul>
											   </li>
											   <li><a href='#' onClick="hide_demande();"><img src="/BeeDroid/icons/Icons/8.png"><span class="font2"> Demandes de récupération</span></a></li>
											  
											   <li><a href='#' onClick="hide_avis();"><img src="/BeeDroid/icons/Icons/9.png"><span class="font2"> Avis</span></a></li>
											   <li class='last'><a href='#' onClick="hide_pub();"><img src="/BeeDroid/icons/Icons/11.png"><span class="font2"> Publicité</span></a></li>
											</ul>
										 
						</div>
						<div style="margin-top:1%;">
						
						<iframe src="/BeeDroid/calend/index.html" width="250px" height="300px" frameborder="0" style="border:0 ;overflow:hidden;margin-top:0px" ></iframe>
						
						</div>						
											
                     </div>

                     <div id="contenu">
					 
							

            
 		  


 







							
							  
							<div id="client" class="fenetrecl-container"  >	 
							  <div class="fnt1">Clients</div><hr>
	
							 
							 
							<br> <br> 
							 
		                     
								 <div class="table_client">
													<div class="control">
													<div style="float:left;padding-top:3px;"><input type="button" onclick="showpopup1();"   class="btn_add"/> 
													<input type="button"  class="btn_all" onClick="tout();"/></div>
													<div style="float:right;">
													<input id ="rechercheclient" name="q" type="text" onkeypress="parcour(event);" class="search_cl" placeholder="Rechercher client..." /> 
													</div>
													</div>
													
													<form name="cocher">

													<div class="CSSTable">
													 
													<table id="tableau"  >
														<thead>
															<tr>
																<td>Identifiant</td>
																<td>Nom et Prénom</td>
																<td>E-mail</td>
																<td>Login</td>
																<td></td>
																<td></td>
																<td></td>
															</tr>
														</thead>
														 
														 
													</table>

													</div>
													</form>
								 </div>
				<input type="button" class="coolbutton" value="Enregistrer" onClick="sauvegarde_client();"> <input type="button" class="coolbutton" onClick="cancel_client_mise();" value="Annuler">
					


							   
                            </div>
							
						 
							
							
							
							<div id="acc" class="fenetreacc-container"  >
						
                             <div class="fnt1">Statistiques</div><hr>							
					            
								
								
								<div style="margin-left:auto; margin-right:auto; height:40%;width:100%;" >
								<iframe src="/BeeDroid/chart/photo/index.html" width="100%" height="100%" frameborder="0" style="border:0 ;overflow:hidden;" ></iframe>
								 </div>
								 
								 
							 <div  style="margin-left:auto; margin-right:auto; height:55%;width:100%;">	 
						<iframe src="/BeeDroid/chart/graphvisitor/index.html" width="100%" height="100%" frameborder="0" style="border:0 ;overflow:hidden;" ></iframe>
                              </div>
							  <div style="margin-left:auto; margin-right:auto; height:55%;width:100%;">
			  		<iframe src="/BeeDroid/chart/nbclient/index.html" width="100%" height="100%" frameborder="0" style="border:0 ;overflow:hidden;" ></iframe>
								</div>
								
								 
								  
								   

								
	 
                            </div>
							
							
	 	
							<div id="aide" class="fenetreaide-container" >	
							<br>
							 
			 
 	     
           
			 
		     
							 
							 
							 <div class="fnt2">Messages d'aide</div><hr>
						  <div class="zone_del_aide">
							
							 <input type="button" class="coolbutton" onClick="tout_aide();" value="Effacer" style="float:left;margin-left:20px;"></div>
							<div id="scroll_ms" class="msg"> 
								<form name="coche_aid">
								<table id="tableauaide" style="margin-left:auto;margin-right:auto;">
							 
								</table>
								</form>


							</div>
							<div class="input_msg12" >
						 <div class="fnt3">Poster un message</div>
							<textarea id="msg" name="textarea" rows="10" cols="50" class="msg_rep" placeholder="Ecrire un message..." onFocus="msg_reset();"></textarea>
							<div class="pub_b">
						 <input type="button"  id="join_pop" class="coolbutton" value="Répondre" onClick="verif_msg_aide();"></div>
							</div>
							
							 </div>
							
							
							
							<div id="alert" class="fenetrealert-container" >
							
							
							 <div class="fnt1">Messages d'alerte</div><hr>
							 <div class="zone_del_alert">
							 <input type="button" class="coolbutton" onClick="tout_alert();" value="Effacer" style="float:left;margin-left:21px;"></div>
							<div id="scroll_alert" class="alerte_box">
							<form name="cocheralert">
							 	<table id="tableaualert" style="margin-left:auto;margin-right:auto;"></table>
							 </form>
							</div>
							</div>	
							
							
							
							
							
							
                            <div id="demande" class="fenetredemande-container" >
							<div class="fnt1">Demandes de récupération de mot de passe</div><hr>

								 <div class="table_client">
													
													
													<div class="control">
													 
													<div style="float:right;">
													<input id="recherchedemande" name="q" type="text"  onkeypress="parcourdemande(event)" class="search_cl" placeholder="Rechercher ..." /> 
													</div>
													</div>
													
													
													<form name="cocherdemande">

													<div class="CSSTable">
													 
													<table id="tableaudemande"  >
														<thead>
															<tr>
																<td>Nom et Prénom </td>
																<td>E-mail</td>
																<td>Login</td>
																<td>Qestion securité 1</td>
																<td>Qestion securité 2</td>
																<td>Qestion securité 3</td>
																<td>Etat</td>
																 
															</tr>
														</thead>
														 
														 
													</table>

													</div>
													</form>
								 </div>
				<input type="button" class="coolbutton" value="Enregistrer" onClick="repondre_demande();"> <input type="button" class="coolbutton" value="Annuler">
					
							</div>
							
							 
							
							
							
							
							
							<div id="avis" class="fenetreavis-container" >
							<div id="id_avis" class="fnt1">Avis</div>
							</div>	
							
							
							
                            <div id="pub" class="fenetrepub-container" >
							<div class="fnt1">Publicité</div><hr>
								 
							<div style="width:100% ;height:65%;">
            
                           <iframe src="/BeeDroid/index1.php" width="100%" height="100%" frameborder="0" style="border:0 ;overflow:hidden;" ></iframe>
							</div>
							

								<div class="input_msg" >
							<div class="fnt3">Publier un texte</div>
							<textarea id="msgpub" name="textarea" rows="10" cols="50" class="msg_rep" placeholder="Ecrire un message..." onFocus="msg_reset_pub();"></textarea>
							<div class="pub_b">
						 <input type="button"  id="join_pop1" class="coolbutton" value="Publier" onClick="verif_msg_pub();"></div>
							</div>
								
								
							
							</div>	
							
							
							
							
							
							
							
							
							
							<div id="param" class="fenetreparam-container" >
							<div class="fnt1">Paramètres</div><hr>
							<div class="param_box" style="color:#000000;" >
							<br>
							 
							<center>
							
							
							<table>
							<tr>
							<td>Nom administrateur :</td><td><input id="name_admin" type="text" class="special_inputs" onFocus="returncolor(this);" ></td> 
							</tr>
							<tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr>
							
							
							<tr>
							<td>Login :</td><td><input id="login" type="text" class="special_inputs" onFocus="returncolor(this);" ></td> 
							</tr>
							<tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr>
							
							<tr>
							<td> Ancien mot de passe :</td><td> <input id="Apass" type="password" class="special_inputs" onFocus="returncolor(this);">    <input type="button" id="show_hide_dtn1"   onClick="btn_show1();"></td>
							</tr>
							<tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr>
							<tr>
							<td> Nouveau mot de passe :</td><td> <input id="pass" type="password" class="special_inputs" onFocus="returncolor(this);">
							<input type="button" id="show_hide_dtn2" onClick="btn_show2();">
							</td>
							</tr>
							<tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>
							 <tr>
							 <td>Confirmer mot de passe :</td><td><input id="passconf" type="password" class="special_inputs" onFocus="returncolor(this);"> <input type="button" id="show_hide_dtn3" onClick="btn_show3();"></td>
							 </tr>
							 
							 
							<tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr>
							 
							 
							<tr>
							<td>Effacer tout Message : </td>
							<td> 
							
							<div class="efface_msgs">
							<label> <input id="msg_alert" type="checkbox" class="option-input checkbox" ><a style="padding-top:-50px;">Message d'alerte</a></label>
							<label> <input id="msg_aide" type="checkbox" class="option-input checkbox" >Message de l'aide</label>
							</div>
							</td>
							
							</tr>
							<tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>	<tr></tr>	<tr></tr><tr></tr><tr></tr><tr></tr>
							<tr> 
							<td>Etat de Site :</td>
							<td> 
										<div class="onoffswitch">
											<input   type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
											<label class="onoffswitch-label" for="myonoffswitch">
												<span class="onoffswitch-inner"></span>
												<span class="onoffswitch-switch"></span>
											</label>
										</div>
							
							</td>  
							</tr>
							</table>
							 
	<div style="margin-top:70px;">						
<input type="button" class="coolbutton" name="submit" value="Enregistrer" onClick="verif_parametre();"> <input type="button" class="coolbutton" value="Annuler" onClick="reset_parametre();" >
						</div>	
							</center>
							 
							</div>
						 
							
							</div>	

							
							
							
							
							
							
							
							
							<div id="recherchegeneral" class="recherchegeneral-container" >
					         <div id="calcul_time_result"></div>
					
					 
							</div>
							
							
							
							
							
							
    </div>
				
		  
 </div>
</div>

<div id="footer">
<center>
 <table class="tab2">
 <tr><td>Nombre total des clients :</td><td><div id="nbclient">0000</div></td><td>Nombre total des appareils :</td><td><div id="nbapp">0000</div></td><td>Stockage utilisé :</td><td><div id="stock">00 Go</div></td></tr>
 <tr></tr><tr></tr>
 <tr><td>Nombre total des visiteurs :</td><td><div id="visitor">0000</div></td><td>Nombre messages d'aide :</td><td><div id="nbaide">0000</div></td><td>Nombre messages d'alerte :</td><td><div id="nbalert">0000</div></td></tr>
 </table>
 </center>
</div>
  
  


 </body>




  
  </html>