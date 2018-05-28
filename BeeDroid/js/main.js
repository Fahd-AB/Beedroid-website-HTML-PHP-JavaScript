 
 
 
 var table_avis=new Array();
 var table_message=new Array();
 var table_client=new Array();
 var table_demande=new Array();
 var table_admin=new Array();
 var emeteur=-1;
 /***************************************Connexion administrateur ****************************************************/
 function showadmin(json)
{
 
 table_admin=json;
document.getElementById("login").value=table_admin[0].Login;
document.getElementById("name_admin").value=table_admin[0].Nom_prenom;
 document.getElementById("Apass").value=table_admin[0].Mot_de_passe;
}
 function connect_admin()
 {
 var main3='{"table":"administrateur","operation":"select","login":"","passe":""}';
$.getJSON("./controler/main.php",{admin_requete:main3},showadmin);  
 
 }
 
 var g=0;
 function btn_show1()
 { var jk=document.getElementById("show_hide_dtn1");
 if(g==0)
 {
 jk.style.background=" url('./icons/Icons/15.png') no-repeat 0px 7px";
document.getElementById("Apass").type="text";
 
 g=1;
 }
 else{
 jk.style.background=" url('./icons/Icons/16.png') no-repeat 0px 7px";
 document.getElementById("Apass").type="password";
 g=0;
 }
 
 }
 var g1=0;
 function btn_show2()
 { var jk=document.getElementById("show_hide_dtn2");
 if(g1==0)
 {
 jk.style.background=" url('./icons/Icons/15.png') no-repeat 0px 7px";
document.getElementById("pass").type="text";
 g1=1;
 }
 else{
 jk.style.background=" url('./icons/Icons/16.png') no-repeat 0px 7px";
 document.getElementById("pass").type="password";
 g1=0;
 }
 
 }
 var g2=0;
 function btn_show3()
 { var jk=document.getElementById("show_hide_dtn3");
 if(g2==0)
 {
 jk.style.background=" url('./icons/Icons/15.png') no-repeat 0px 7px";
document.getElementById("passconf").type="text";
 g2=1;
 }
 else{
 jk.style.background=" url('./icons/Icons/16.png') no-repeat 0px 7px";
  document.getElementById("passconf").type="password";
 g2=0;
 }
 
 }
 
 
 /****************************fonctions hide/show panel*****************/
  function show_general(){
document.getElementById("avis").style.display="none";
document.getElementById("pub").style.display="none"; 
document.getElementById("alert").style.display="none";
document.getElementById("demande").style.display="none";
document.getElementById("client").style.display="none";
document.getElementById("aide").style.display="none";
document.getElementById("acc").style.display="none"; 
document.getElementById("param").style.display="none"; 
document.getElementById("recherchegeneral").style.display="block"; 
 }
 
 function siteEtat(json)
{
 
if(json.indexOf("on")>-1)
{
document.getElementById("myonoffswitch").checked=true;
}
if(json.indexOf("off")>-1)
{
document.getElementById("myonoffswitch").checked=false;
}

}
 
 function show_param(){
 connect_admin();
 
 var mai1='{"et":"select"}';
$.getJSON("./etat.php",{etat:mai1},siteEtat);

 
 
 
 
document.getElementById("avis").style.display="none";
document.getElementById("pub").style.display="none"; 
document.getElementById("alert").style.display="none";
document.getElementById("demande").style.display="none";
document.getElementById("client").style.display="none";
document.getElementById("aide").style.display="none";
document.getElementById("acc").style.display="none"; 
document.getElementById("param").style.display="block"; 
document.getElementById("recherchegeneral").style.display="none"; 
 }
 
 function hide_accueil(){
 document.getElementById("acc").style.display="block"; 
  document.getElementById("avis").style.display="none";
document.getElementById("pub").style.display="none"; 
document.getElementById("alert").style.display="none";
document.getElementById("demande").style.display="none";
document.getElementById("client").style.display="none";
document.getElementById("aide").style.display="none";
document.getElementById("recherchegeneral").style.display="none"; 

document.getElementById("param").style.display="none"; 
 }
 
 function hide_client(){
 //run();
   document.getElementById("avis").style.display="none";
document.getElementById("pub").style.display="none"; 
document.getElementById("alert").style.display="none";
document.getElementById("demande").style.display="none";
document.getElementById("client").style.display="block";
document.getElementById("aide").style.display="none";
document.getElementById("acc").style.display="none"; 
document.getElementById("param").style.display="none"; 
document.getElementById("recherchegeneral").style.display="none"; 
 }
 
 function hide_aide(){
 
var main1='{"table":"messages","operation":"update","condition":"","valeur":""}';
$.getJSON("./controler/main.php",{client_requete:main1},showmessage); 
 
document.getElementById("id_aide").style.background="#f6f6f6";
ancien=0; 
  
 document.getElementById("avis").style.display="none";
document.getElementById("pub").style.display="none"; 
document.getElementById("alert").style.display="none";
document.getElementById("demande").style.display="none";
document.getElementById("client").style.display="none";
document.getElementById("aide").style.display="block";
document.getElementById("acc").style.display="none"; 
document.getElementById("param").style.display="none"; 
document.getElementById("recherchegeneral").style.display="none"; 
document.getElementById("id_aide").style.background="#f6f6f6";
 }
 function hide_alert(){
 //run();
 
 document.getElementById("id_ms").style.background="#f6f6f6";
 var main2='{"table":"avis","operation":"update","condition":"","valeur":""}';
 $.getJSON("./controler/main.php",{client_requete:main2});
 
 document.getElementById("avis").style.display="none";
document.getElementById("pub").style.display="none"; 
document.getElementById("alert").style.display="block";
document.getElementById("demande").style.display="none";
document.getElementById("client").style.display="none";
document.getElementById("aide").style.display="none";
document.getElementById("acc").style.display="none"; 
document.getElementById("param").style.display="none"; 
document.getElementById("recherchegeneral").style.display="none"; 
 }
  function hide_demande(){
  //run();
   document.getElementById("avis").style.display="none";
document.getElementById("pub").style.display="none"; 
document.getElementById("alert").style.display="none";
document.getElementById("demande").style.display="block";
document.getElementById("client").style.display="none";
document.getElementById("aide").style.display="none";
document.getElementById("acc").style.display="none"; 
document.getElementById("param").style.display="none"; 
document.getElementById("recherchegeneral").style.display="none"; 
 }
 
 function hide_avis(){
  document.getElementById("avis").style.display="block";
document.getElementById("pub").style.display="none"; 
document.getElementById("alert").style.display="none";
document.getElementById("demande").style.display="none";
document.getElementById("client").style.display="none";
document.getElementById("aide").style.display="none";
document.getElementById("acc").style.display="none"; 
document.getElementById("param").style.display="none"; 
document.getElementById("recherchegeneral").style.display="none"; 
document.getElementById("id_avis").innerHTML="<iframe src='/BeeDroid/chart/avis/index.html' width='100%' height='100%' frameborder='0' style='border:0  ;margin-left:0%' ></iframe>";
 }
 function hide_pub(){
  document.getElementById("avis").style.display="none";
document.getElementById("pub").style.display="block"; 
document.getElementById("alert").style.display="none";
document.getElementById("demande").style.display="none";
document.getElementById("client").style.display="none";
document.getElementById("aide").style.display="none";
document.getElementById("acc").style.display="none"; 
document.getElementById("param").style.display="none"; 
document.getElementById("recherchegeneral").style.display="none"; 
 }
/**************************************fonction deconnexion******************************/ 
function dec(){
     var main3='{"verif":"dec","login_ad":"" , "pass_ad":""}';
 
	 $.getJSON("./controler/main.php",{connect_admin:main3}); 
	 setTimeout(function(){document.location.href="./load.php";},500);
	 }
	 
	 
 /*************************************fonctions de parametre *************************/
function verif_parametre()
{
var name=document.getElementById("name_admin").value;
var login=document.getElementById("login").value;
var Apass=document.getElementById("Apass").value;
var pass=document.getElementById("pass").value;
var passconf=document.getElementById("passconf").value;
 
var msg_alert=document.getElementById("msg_alert").checked;
var msg_aide=document.getElementById("msg_aide").checked;
var swit=document.getElementById("myonoffswitch").checked;
 
if(name.trim()=="")
{
document.getElementById("name_admin").style.background="#EF7F7F";
swal({   title: "Attention !",   text: "Votre Administrateur  est vide .",   timer: 5000,   showConfirmButton: false });
}
else if(login=="")
{
document.getElementById("login").style.background="#EF7F7F";
swal({   title: "Attention !",   text: "Votre login est vide.",   timer: 5000,   showConfirmButton: false });

}
else if(Apass==""){
document.getElementById("Apass").style.background="#EF7F7F";
swal({   title: "Attention !",   text: "Votre ancien mot de passe est incorrect .",   timer: 5000,   showConfirmButton: false });
}
else if(pass==""){
document.getElementById("pass").style.background="#EF7F7F";
swal({   title: "Attention !",   text: "Votre mot de passe est vide.",   timer: 5000,   showConfirmButton: false });
}else if(pass!=passconf)
{

document.getElementById("passconf").style.background="#EF7F7F";
swal({   title: "Attention !",   text: "confirmation incorrect de mot de passe.",   timer: 5000,   showConfirmButton: false });
} 
 
else {

   

swal({   title: "voulez vous sauvegarder les paramètres ?",   text: "Attention ! Pour appliquer le changement il faut reconnecter",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, Appliquer!",   cancelButtonText: "Non, Annuler!",   closeOnConfirm: false,   closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

  swal("Sauvegarde!", "Le changement est effectué .", "success"); 
var main3='{"table":"administrateur","operation":"update","login":"'+login+'","passe":"'+passconf+'","name":"'+name+'"}';
$.getJSON("./controler/main.php",{admin_requete:main3});
if(swit==true)
{
var mai1='{"et":"on"}';
$.getJSON("./etat.php",{etat:mai1});
}
if(swit==false)
{
var mai1='{"et":"off"}';
$.getJSON("./etat.php",{etat:mai1});
}


  } 
 else 
 {  
  swal("Annulation", "Pas de changement", "error");  

  } 
  });

if(msg_aide==true)
 {
  var tab=[];
	 
	  form = document.all("coche_aid");
	  inputs = form.getElementsByTagName("input");
	  count = 0;
	  var j=0;
	  for(j=0 ; j<inputs.length ; j++){
	    if(inputs[j].type=="checkbox"){
		  
		  tab[count]=inputs[j];
		  count+=1;
		 
		 
		}
	  }
	  
	  
	  
	 
	 for(j=0 ; j<tab.length ; j++){
	      
		  var main0='{"table":"messages","operation":"delete","condition":"'+tab[j].name+'","valeur":""}';
			$.getJSON("./controler/main.php",{client_requete:main0});
	 
		  
	     supprimerLigne_aide(tab[j]) ;
		 
		 }
	
	
 
	  
	  
  
  
  
   
  
  
  
  
  
  
  
  
  
  
  
 }
 if(msg_alert==true)
 {  
 
 var tab=[];
	 
	  form = document.all("cocheralert");
	  inputs = form.getElementsByTagName("input");
	  count = 0;
	  var j=0;
	  for(j=0 ; j<inputs.length ; j++){
	    if(inputs[j].type=="checkbox"  ){
		  
		  tab[count]=inputs[j];
		  count+=1;
		 
		 
		}
	  }
	  
	  
	  
	 
	 for(j=0 ; j<tab.length ; j++){
	      
		  var main0='{"table":"avis","operation":"delete","condition":"'+tab[j].name+'","valeur":""}';
			$.getJSON("./controler/main.php",{client_requete:main0});
		 
		  
	     supprimerLigne_alert(tab[j]) ;
		 
		 }
 
 
 }
 
 
 
 

}



}



/***********************************************/	 
function reset_parametre(){
 connect_admin();
document.getElementById("pass").value="";
document.getElementById("passconf").value="";
}
  
 /*************************/ 
function returncolor(r)
{
r.style.background="#ffffff";
document.getElementById("id_log").innerHTML=" ";
}  
 
 /*********************Message aide********************************************/
 

function addline(emetteur,date,message,id)
{       
     if(emetteur!=1)
	 {
 	var tableau = document.getElementById("tableauaide");

	var ligne = tableau.insertRow(-1);

	
	var colonne1 = ligne.insertCell(0);
	colonne1.innerHTML += "<div style='background:#ffffff; width:800px;height:180px;position:relative;text-align:center;'><div style='width:100%;height:15%;background:#ffffff;'><div style='background:#ffffff; width:50%;height:30px; float:left;text-align: justify;'>"+retun_client(emetteur)+" </div><div style='background:#ffffff; width:30%;height:30px;float:right' ;text-align:right;>Date :  "+date+" </div></div><div style='background:#ffffff; width:100%;height:70%;margin-left:auto;margin-right:auto'><textarea id='"+emetteur+"' class='area' readonly>"+message+"</textarea> </div><div style='background:#ffffff ;float:right;width:20%;height:20%;margin-top:5px;'>	 <a href='#' id='join_pop'>	<input   type='button' id='"+emetteur+"' onclick='showpopup(this.id);' style='float:right ; width:33px;height:22px;cursor:pointer;border:0px none;outline:none;    background: url(icons/Icons/22.png)no-repeat 0px 0px;'> </a></div> </div>"
    var colonne2 = ligne.insertCell(1);
	colonne2.innerHTML +="<input  name='"+id+"' type='checkbox'>";

	}
	
	
}

function reset_data_aide()
{
var tab=[];
	 
	  form = document.all("coche_aid");
	  inputs = form.getElementsByTagName("input");
	  count = 0;
	  var j=0;
	  for(j=0 ; j<inputs.length ; j++){
	    if(inputs[j].type=="checkbox" ){
		  
		  tab[count]=inputs[j];
		  count+=1;
		 
		 
		}
	  }
	   for(j=0 ; j<tab.length ; j++){
	   supprimerLigne_aide(tab[j]) ;
	   }

}

function tout_aide(){

var te=false;
 
var tab=[];
	 
	  form = document.all("coche_aid");
	  inputs = form.getElementsByTagName("input");
	  count = 0;
	  var j=0;
	  for(j=0 ; j<inputs.length ; j++){
	    if(inputs[j].type=="checkbox" && inputs[j].checked==true){
		  
		  tab[count]=inputs[j];
		  count+=1;
		 te=true;
		 
		}
	  }
	  
	  
	  if(te==true)
	  {
	swal({   title: "Etes-vous sur ?",   text: "Les messages sélectionnées seronts supprimées définitivement .",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui,supprimer !",   closeOnConfirm: false }, function(){   
	 for(j=0 ; j<tab.length ; j++){
	      
		  var main0='{"table":"messages","operation":"delete","condition":"'+tab[j].name+'","valeur":""}';
			$.getJSON("./controler/main.php",{client_requete:main0});
		  
		  
	     supprimerLigne_aide(tab[j]) ;
		 
		 }
	
	
	swal("Suppression terminé !", "", "success"); });  
	  }
	  else{
	   swal("Suppression", "Pas de message à supprimer !", "error");
	  }
	
}


function supprimerLigne_aide(r)
{        var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("tableauaide").deleteRow(i);

	 
}

/*******************************exit popup message aide ************************/  
 function exitpopup(){
 /*document.getElementById("textarea_send").value="";
  document.getElementById("textarea_send").style.background="#ffffff";
 document.getElementById("join_form").style.visibility = "hidden";
  document.getElementById("popupexit").style.display = "none";*/
 emeteur=-1;
 
 
 }
 
 function showpopup(emm){

emetteur=emm;
  swal({   title: "Répondre",   text: "  <textarea placeholder='votre message ici ...' id='textarea_send' class='Rep_msg' onFocus='returncolor_send();' ></textarea> <div    class='coolbutton1'  onClick='send_message_aide();'>Répondre</div>",  html: true ,showConfirmButton:false   },function(){   });
  
 
 /*
 document.getElementById("join_form").style.visibility = "visible";
  document.getElementById("popupexit").style.display = "inline-block";*/
 }
 
 /*************************** verifivation de message de l aide*************************************************/ 
  
function verif_msg_aide(){
var area=document.getElementById("msg").value;
if(area.trim()==""){
document.getElementById("msg").style.borderColor="FD0000";
}
else{

var main3='{"table":"messages","operation":"insert_all","condition":"0","valeur":"'+area+'"}';
$.getJSON("./controler/main.php",{client_requete:main3}); 

swal("Message Envoyé", "", "success");
document.getElementById("msg").value="";
}


}  
function msg_reset(){
document.getElementById("msg").style.borderColor="rgba(36,48,64,1)";
 
}  
 






 

/******************************* send message aide one client ***************************************************/

function returncolor_send(){
document.getElementById("textarea_send").style.borderColor="rgba(36,48,64,1)";
}


function send_message_aide()
{
 
var contenu=document.getElementById("textarea_send").value;
if(contenu=="" ||contenu.trim()=="")
{

document.getElementById("textarea_send").style.borderColor="FD0000";
 document.getElementById("textarea_send").value="";
}
else
{
 
var main3='{"table":"messages","operation":"insert","condition":"'+emetteur+'","valeur":"'+contenu+'"}';
$.getJSON("./controler/main.php",{client_requete:main3}); 
swal("Succès !", "votre message a été envoyé .", "success");
 
}

}
/**************************************************Message d'alert*****************************************************/
function addline_alert(emetteur,date,message,id_avis)
{
  if(message!=""){
 	var tableau = document.getElementById("tableaualert");

	var ligne = tableau.insertRow(-1);
    var mess=message.substring(0,message.length-3);
	
	var colonne1 = ligne.insertCell(0);
	colonne1.innerHTML += "<div  style='background:#ffffff; width:800px;height:180px;position:relative;text-align:center;'><div style='width:100%;height:15%;background:#ffffff;'><div style='background:#ffffff; width:50%;height:30px; float:left;text-align: justify;'>"+retun_client(emetteur)+" </div><div style='background:#ffffff; width:30%;height:30px;float:right' ;text-align:right;>Date :  "+date+" </div></div><div style='background:#ffffff; width:100%;height:70%;margin-left:auto;margin-right:auto'><textarea  class='area' readonly>"+mess+"</textarea> </div> </div>"
    
	var colonne2 = ligne.insertCell(1);
	colonne2.innerHTML +="<input  name='"+id_avis+"' type='checkbox'>";

	}
}
function reset_data_alert()
{
var tab=[];
	 
	  form = document.all("cocheralert");
	  inputs = form.getElementsByTagName("input");
	  count = 0;
	  var j=0;
	  for(j=0 ; j<inputs.length ; j++){
	    if(inputs[j].type=="checkbox" ){
		  
		  tab[count]=inputs[j];
		  count+=1;
		 
		 
		}
	  }
	   for(j=0 ; j<tab.length ; j++){
	   supprimerLigne_alert(tab[j]) ;
	   }
}

function supprimerLigne_alert(r)
{        var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("tableaualert").deleteRow(i);

	 
}
function tout_alert(){
     var tab=[];
	 var foki=false;
	  form = document.all("cocheralert");
	  inputs = form.getElementsByTagName("input");
	  count = 0;
	  var j=0;
	  for(j=0 ; j<inputs.length ; j++){
	    if(inputs[j].type=="checkbox" && inputs[j].checked==true){
		  
		  tab[count]=inputs[j];
		  count+=1;
		 foki=true;
		 
		}
	  }
	  
	  
	  if(foki==true)
	  {
	swal({   title: "Etes-vous sur ?",   text: "",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   closeOnConfirm: false }, function(){   
	 for(j=0 ; j<tab.length ; j++){
	      
		  var main0='{"table":"avis","operation":"delete","condition":"'+tab[j].name+'","valeur":""}';
			$.getJSON("./controler/main.php",{client_requete:main0});
		 
		  
	     supprimerLigne_alert(tab[j]) ;
		 
		 }
	
	
	
	swal("Suppression", "", "success"); });  
	  }
	  else{
	 
	   swal("Suppression", "Pas de message à supprimer !", "error");
	  }
	  
	  
	  
	  }
	    


/*************************** verifivation de message publier *************************************************/  
function verif_msg_pub(){
var area=document.getElementById("msgpub").value;
if(area==""){
document.getElementById("msgpub").style.borderColor="FD0000";
}
else{
var main0='{"table":"publicitees","operation":"insert","condition":"","valeur":"'+area+'"}';
$.getJSON("./controler/main.php",{client_requete:main0},showclient);
document.getElementById("msgpub").value="";
swal("Message Publié", "Votre message a été publié .", "success");
}


}  
function msg_reset_pub(){
document.getElementById("msgpub").style.borderColor="rgba(36,48,64,1)";
}  


  
/***************************table client  json ******************************************************************************************************/
 
function showdemande(json)
{
table_demande=json;
 reset_data_demande();
var taille=table_demande.length;
var i=0;
while(i<taille)
{
ajouterLignedemande(table_demande[i].Id_demande,table_demande[i].Nom_prenom,table_demande[i].Email,table_demande[i].Login,table_demande[i].Qestion_sec1,table_demande[i].Qestion_sec2,table_demande[i].Qestion_sec3,table_demande[i].Verif);
i++;
}

}

 function showclient(json){

  table_client=json;
reset_data_client();

var taille_stockage=0;
 var taille;
  try
  {
  taille=table_client.length;
 }catch(ed){}
 
 document.getElementById("nbclient").innerHTML=""+taille;
 var taille_app=0;
 var i=0;
var media=new Array();
 while(i<taille)
 {
		 try
		 {
		 media=table_client[i].Medias;
		 var xtr=media.length;
		 var drt=0;
		 while(drt<xtr)
		 {
		 taille_stockage+=Math.floor((media[drt].Taille/1024)/1024);
		 drt++;
		 }
		  taille_app+=table_client[i].Appareils.length;
		 }
		 catch(ee){}


 ajouterLigne(table_client[i].Id_client,table_client[i].Nom_prenom,table_client[i].Email,table_client[i].Login);
 
 i++;
 }
 
  document.getElementById("nbapp").innerHTML=""+taille_app;
  document.getElementById("stock").innerHTML=""+taille_stockage+" Go";
 }
 
 
 function retun_client(id){
 var taille=table_client.length;
 var client;
 var i=0;
 while(i<taille)
 {
if(table_client[i].Id_client==id)  
{client=table_client[i].Nom_prenom;break;}
 i++;
 }
 return client;
 }

/********************************** table message json ******************************************************************************************/ 
var ancien=0;

function showmessage(json)
{

table_message=json;
 reset_data_aide();
 
var taille=table_message.length;
document.getElementById("nbaide").innerHTML=""+taille;
 var i=0;
 var nb_msg=0;
 
 while(i<taille)
 { 
 
 if(table_message[i].Emetteur!=1)
 {
  if(table_message[i].Vu=="0" )
  {nb_msg++;}  
 
 addline(table_message[i].Emetteur,table_message[i].Date_Envoi,table_message[i].Contenu,table_message[i].Id_message);

 }
  
 i++;
 
 }
    
	var objDiv = document.getElementById("scroll_ms");
	objDiv.scrollTop = objDiv.scrollHeight;
	
	if((nb_msg!=ancien)&&(nb_msg!=0))
	{
	 document.getElementById("id_aide").style.background="red";
	 var audio = new Audio('30.mp3');
	 audio.play();
	 document.getElementById("id_aide").innerHTML=nb_msg;
	  
	  ancien=nb_msg;
	  nb_msg=0;
	}
	
}
/***************************************************message alert/avis json*********************************************/

function showavis(json){
table_avis=json;
reset_data_alert();
var taille=table_avis.length;
 document.getElementById("nbalert").innerHTML=""+taille;
 var nb_msg_alert=0;
 var i=0;
 while(i<taille)
 {
 var ms=table_avis[i].Msg_alerte;
 if(ms.substring(ms.length-2,ms.length).indexOf("Vu")==-1 && ms.trim()!="")
 {
 nb_msg_alert++;
 }
 addline_alert(table_avis[i].Id_client,json[i].Date_envoi,table_avis[i].Msg_alerte,table_avis[i].Id_avi);
 
 i++;
 }

 
 
 
	
	if(nb_msg_alert!=0)
	{ 
	 document.getElementById("id_ms").style.background="red";
	 var audio = new Audio('30.mp3');
	 audio.play();
	 document.getElementById("id_ms").innerHTML=nb_msg_alert;
	  
	 
	  nb_msg_alert=0;
 }
 
 var objDiv = document.getElementById("scroll_alert");
	objDiv.scrollTop = objDiv.scrollHeight;
}



/******************************************************nombre de visiteur***************************************************************/

   function nbVisitor(json)
	{
	 
	 var t=json.length;
	 document.getElementById("visitor").innerHTML=""+t;
	 }

/*******************************************fonction run *****************************************************************************************/
function run(){
 
connect_admin();
 var main0='{"table":"clients","operation":"select","condition":"","valeur":""}';
$.getJSON("./controler/main.php",{client_requete:main0},showclient);
 
setTimeout(function(){var main1='{"table":"messages","operation":"select","condition":"","valeur":""}';$.getJSON("./controler/main.php",{client_requete:main1},showmessage);},1000);

setTimeout(function(){var main2='{"table":"avis","operation":"select","condition":"","valeur":""}';$.getJSON("./controler/main.php",{client_requete:main2},showavis);},2000);

setTimeout(function(){var main3='{"table":"demandes","operation":"select","condition":"","valeur":""}';$.getJSON("./controler/main.php",{client_requete:main3},showdemande);},1000); 


var main112='{"visite":"nb"}';
$.getJSON("./chart/graphvisitor/nbvisite.php",{visitor:main112},nbVisitor);
 


 

} 

/*try
{
ancien=table_message.length;
}
catch(errr)
{
ancien=0;
}*/
setInterval(function(){ 

run();


 }, 600000); 
 
/*************************************table client *********************************************************************************************/
function cancel_client_mise()

{               var tab1=[];
				var count1=0;
                form = document.all("cocher");
	            inputs = form.getElementsByTagName("input");
				for(j=0 ; j<inputs.length ; j++)
				{
				if(inputs[j].type=="checkbox" )
				{ tab1[count1]=inputs[j];count1++;}
				}
				 
				for(j=0 ; j<tab1.length ; j++)
				{supprimerLigne(tab1[j],3) ;}



run();
}

function verifiermail(mail) {
      if ((mail.indexOf("@")>=0)&&(mail.indexOf(".")>=0)) {
         return true 
      } else {
         
         return false
      }
   }

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function verif_login(login)
{

var taille=table_client.length;
var i=0;
while(i<taille)
{
if(table_client[i].Login==login)
{
return true;
break;
}
i++;
}
return false;
}

function return_last_id_client()
{
 var taille=table_client.length;
 var max=parseInt(table_client[0].Id_client);
 var i=1;
 while(i<taille)
 {
if(parseInt(table_client[i].Id_client)>max)  
{max=parseInt(table_client[i].Id_client);}
 i++;
 }
 max++;
  
return max;
}
var yes_oki=true;

function test_null_case()
{ try {
       var tab=[];
	   var   form = document.all("cocher");
	   var  inputs = form.getElementsByTagName("input");
	   var ln = 0;
	   var cl=0;
	   var j=0;
	   var nb=1;
	   var count=1;
	   var tel=((inputs.length)/5);
	   
	 var matrix = [];
		for(var i=0; i<tel; i++) {
			matrix[i] = [];
			for(var j=0; j<4; j++) {
				matrix[i][j] = undefined;
				
			}
		}  
	   
	   
	 
	    
for(j=0 ; j<inputs.length ; j++)
{                

				if(inputs[j].type=="text")
				
				{ 
				
				 matrix[ln][cl]=inputs[j];
				 
				 count++;
				 cl++; 
				 
					 if(count==4)
						{
						 ln++;
						 cl=0;
						 count=1;
						}

					
				}
				
				
				
}


				
for(var i=0; i<tel; i++) {
			 
			 
			
                       
                     if(matrix[i][1].value=="")
							{
							swal({   title: " <small> Avertissement !!! </small>!",   text: "<span style='color:#F8BB86'> Nom et Prénom sont vide ??? <span>",   html: true });
							matrix[i][1].style.background="#EF7F7F";yes_oki=false;break;
							}
							
                       else if ((matrix[i][2].value.indexOf("@")==-1) || (matrix[i][2].value.indexOf(".")==-1) )
						{yes_oki=false;
						swal({   title: " <small> Avertissement !!! </small>!",   text: "<span style='color:#F8BB86'> E-mail non valide (exemple@domaine) ? <span>",   html: true });
                         matrix[i][2].style.background="#EF7F7F"; 
						  
						} 
                        
						
						else if(matrix[i][3].value=="" )
						{
						swal({   title: " <small> Avertissement !!! </small>!",   text: "<span style='color:#F8BB86'> login  est vide  ? <span>",   html: true });
						matrix[i][3].style.background="#EF7F7F"; yes_oki=false;break;
						}
						else
						{
						yes_oki=true;
						}

						
						
						 






			
			 
		}   
 } catch (err) {
  // Erreur
  console.log('FAIL: ' + err.message);
}
			
}
 
 
 
 /*******************************************************************************/
 function ajouter_client()
 {  var np=document.getElementById("np_client");
	var mail=document.getElementById("mail_client");
	var addresse=document.getElementById("adresse_client");
	var tel=document.getElementById("tel_client");
	var q1=document.getElementById("q1_client");
	var q2=document.getElementById("q2_client");
	var q3=document.getElementById("q3_client");
	var log=document.getElementById("login_client");
	var pass=document.getElementById("password_client");
 
	
					   if(np.value=="")
							{
							 
							np.style.background="#EF7F7F"; 
							}
                       else if (verifiermail(mail.value)==false)
						{
						 
                         mail.style.background="#EF7F7F"; 
						}
                        else if ((addresse.value).trim()=="" )
						{
						 
						addresse.style.background="#EF7F7F";  
						}else if (isNumeric(tel.value)==false)
						{
						 
                        tel.style.background="#EF7F7F"; 
						}
						else if (q1.value=="" )
						{
						 
						q1.style.background="#EF7F7F"; 
						}

						else if (q2.value=="" )
						{
						 
						q2.style.background="#EF7F7F"; 
						}
						else if(q3.value=="" )
						{
						 
						q3.style.background="#EF7F7F"; 
						}else if((log.value).trim()=="" )
						{
						 
						log.style.background="#EF7F7F";  
						}else if(verif_login(log.value))
						{
						 
						log.style.background="#EF7F7F";  
						} else if(pass.value=="" )
						{
						 
						pass.style.background="#EF7F7F";  
						}
						else
						{
						var main123='{"table":"clients","operation":"insert","nom_prenom":"'+np.value+'","tel":"'+tel.value+'","mail":"'+mail.value+'","adresse":"'+addresse.value+'","login":"'+log.value+'","passe":"'+pass.value+'","q1":"'+"Quel est le nom de votre meilleur ami ?"+q1.value+'","q2":"'+"Quel est votre langue prefere ?"+q2.value+'","q3":"'+"Quel est votre lieu de naissance ?"+q3.value+'"}';
				           
						$.getJSON("./controler/main.php",{client_requete_insert:main123});		
						 
						np.value="";
						mail.value="";
						addresse.value="";
						tel.value="";
						log.value="";
						pass.value="";
						q1.value="";
						q2.value="";
						q3.value="";
						setTimeout(function(){run();}, 2000);	
						swal("Succès !", "Insertion du client "+return_last_id_client()+" effectué .", "success");
						  
						}
	
	
	
	
	
	
	
	
	
	
	
 }
 
 
 /*******************************************************************************/
function sauvegarde_client(){



var tab=[];
var tab1=[];
	   form = document.all("cocher");
	   inputs = form.getElementsByTagName("input");
	   count = 0; 
	   count1 = 0;
	   var nb=0;
	   var j=0;
	   var valeur="";
	   yes_oki=true;
	test_null_case(); 
	     
		 
 
 if(yes_oki )
 { 
  
		for(j=0 ; j<inputs.length ; j++)
			{
				if(inputs[j].type=="text" )
                 {
				 if(nb==0)
				 valeur+="Id_client="+"'"+inputs[j].value+"' ,";
				 if(nb==1)
				 valeur+="Nom_prenom="+"'"+inputs[j].value+"' ,";
				  if(nb==2)
				 valeur+="Email="+"'"+inputs[j].value+"' ,";
				  
				 if(nb==3)
				 valeur+="Login="+"'"+inputs[j].value+"' ,";
				  
				 nb++;
				 
				 if(nb==4)
				 {
				  valeur = valeur.substr(0, valeur.length-1); 
				  valeur=valeur.substr(valeur.indexOf(",")+1,valeur.length ); 
				  
				var main='{"table":"clients","operation":"update","condition":"Id_client='+inputs[j-3].value+'","valeur":"'+valeur+'"}';
					
				$.getJSON("./controler/main.php",{client_requete:main});
				 
				 valeur="";nb=0;
				 
				 }
			
				 }
				
			}	
 	
/*swal({   title: " <small>Mise à jour est effectué les clients </small>!",   text: "<span style='color:#F8BB86'>  Attention !!! Les données  des votre client sont modifiés maintenant <span>",   html: true });*/
		 swal("Succès !", "Mise à jour effectué .", "success");
}


 
}


function deplacerLigne(source, cible)
{
	 
	var ligne = document.getElementById("tableau").rows[source]; 
	var nouvelle = document.getElementById("tableau").insertRow(cible); 
	var cellules = ligne.cells;

	 
	for(var i=0; i<cellules.length; i++)
	{
		nouvelle.insertCell(-1).innerHTML += cellules[i].innerHTML; 
	}

 
	document.getElementById("tableau").deleteRow(ligne.rowIndex);
}

function selectcolor(color,taille){
 
		form = document.all("cocher");
		inputs = form.getElementsByTagName("input");
		
	 for(j=0 ; j<taille ; j++){
	 if(inputs[j].type=="text"){
	 if(color==1)
	 inputs[j].style.background="#C4C4C4";
	 else
	  inputs[j].style.background="#ffffff";
	 }
     }
}

function parcour(e)
{
var val=document.getElementById("rechercheclient").value;
      var xx=1;
	  form = document.all("cocher");
	  inputs = form.getElementsByTagName("input");
 selectcolor(0,inputs.length);
var nb=0;
 
 if(e.keyCode === 13)
    {
      
	 var sea=false;
	  var j=0;
						for(j=0 ; j<inputs.length ; j++)
						{
									if(inputs[j].type=="text")
									{ 
											
											  if(nb==4)
											  {nb=0;xx++; }
											  
											  
											  if(inputs[j].value==val)
											   {
												
												 
												 //if((inputs.length-j)==4){xx1++;} 
												 //xx1++;
												 sea=true;
												 //inputs[j].style.background="#C4C4C4";
												 deplacerLigne(xx,1);
												 break;
												   
											   }
									  nb++;
									}
						}
						
if(sea)
{						
selectcolor(1,4);
}	    
	    
	   
    }
 	
}   
  
 
  
 function couleurback(r)
 {
 r.style.background="#ffffff";
 }
 function reset_data_client()
 {
			 var tab=[];
	  form = document.all("cocher");
	  inputs = form.getElementsByTagName("input");
	  count = 0;
	  var j=0;
	  for(j=0 ; j<inputs.length ; j++){
	    if(inputs[j].type=="checkbox" && inputs[j].name=="sup"){
		  
		  tab[count]=inputs[j];
		  count+=1;
		 
		 
		}
	  }
 for(j=0 ; j<tab.length ; j++){
     var i = tab[j].parentNode.parentNode.rowIndex;
	 document.getElementById("tableau").deleteRow(i);
		 
		 }  
 
 
 
 }
 
 /*******************************exit popup message aide ************************/  
  
 
 function showpopup1(){
 
 swal({   title: "Nouveau client",   text: " <div name='addd_cl' id='addd_cl' class='more_info'> </div>  <div class='coolbutton1'  onClick='ajouter_client();'>Ajouter</div>",showConfirmButton:false,   html: true });
 
 document.getElementById("addd_cl").innerHTML=" <table> <tr><td>Nom et Prénom * :</td><td><textarea id='np_client' type='text' class='special_ar' onFocus='returncolor(this);' ></textarea></td></tr><tr><td>E-mail * :</td><td><textarea id='mail_client' type='text' class='special_ar' onFocus='returncolor(this);' ></textarea></td></tr><tr><td>Adresse * :</td><td><textarea id='adresse_client' class='classarea' onFocus='returncolor(this);' > </textarea></td></tr><tr style='height:70px;'><td>Téléphone * :</td><td><textarea id='tel_client' type='text' class='special_ar' onFocus='returncolor(this);' ></textarea></td></tr>  <tr><td style='font-size:13px;'>Quel est le nom de votre meilleur ami ? * :</td><td ><textarea id='q1_client' type='text' class='special_ar' onFocus='returncolor(this);' ></textarea></td><tr><td style='font-size:13px;'>Quel est votre langue prèféré ? * :</td><td><textarea id='q2_client' type='text' class='special_ar' onFocus='returncolor(this);' ></textarea></td></tr></tr> <tr>	<td style='font-size:13px;'>Quel est votre lieu de naissance ? * :</td><td><textarea id='q3_client' type='text' class='special_ar' onFocus='returncolor(this);' ></textarea></td></tr><tr style='height:70px;'>		<td>Login * :</td><td><textarea id='login_client' type='text' class='special_ar' onFocus='returncolor(this);' ></textarea></td><td><div id='id_log' style='font-size:12px; color: rgb(0,0,255);'></div></td></tr><tr >	<td>Mot de passe * :</td><td><textarea id='password_client' type='text' class='special_ar' onFocus='returncolor(this);' ></textarea></td></tr></table>";
 
 
 
 
 
 
 
 /*
swal({   title: "Nouveau client",   text: " <div id='add_client' class='div_ajout' >  <div    class='coolbutton1'  onClick='ajouter_client();'>Ajouter</div> </div>",  html: true ,showConfirmButton:false   },function(){   });
  
 

swal({   
title: "Nouveau client", text: "   <div id='add_client' > </div> <div    class='coolbutton1'  onClick='ajouter_client();'>Ajouter</div>", html: true ,showConfirmButton:false   }, function(){   } );
 
 document.getElementById("add_client").innerHTML=" <table> <tr>	<td>Nom et Prénom * :</td><td><textarea id='np_client' type='text' class='special_ar' onFocus='returncolor(this);' ></textarea></td></tr><tr><td>E-mail * :</td><td><textarea id='mail_client' type='text' class='special_ar' onFocus='returncolor(this);' ></textarea></td></tr><tr><td>Adresse * :</td><td><textarea id='adresse_client' class='classarea' onFocus='returncolor(this);' > </textarea></td></tr></table>";
 
 */
 
 
 
 
 
 

  /*
document.getElementById("client").innerHTML+="<a href='#x' class='overlay' id='join_form'> </a>";
 document.getElementById("popupexit1").style.visibility ="visible";
 document.getElementById("join_form1").style.visibility ="visible";
 document.getElementById("popupexit1").style.display ="inline-block";
   */
   
   
 }
 /*******************************exit popup more info client ************************/  
 function exitpopup2(){
 /*
 document.getElementById("join_form2").style.visibility = "hidden";
  document.getElementById("popupexit2").style.display = "none";
*/
 
 
 }
 
 function showpopup2(id){


   
swal({   title: "Informations",   text: " <div name='h_client' id='h_client' class='more_info'> </div>",   html: true });
 
 
 
 var taille=table_client.length;
 var k=0;
 var client;
 
 while(k<taille)
	 {
		 if(table_client[k].Id_client==id)
			{
			client=table_client[k];
			break;
			}
	 k++;
	 }

  
 document.getElementById("h_client").innerHTML="Plus des informations sur client ";
 
 
 document.getElementById("h_client").innerHTML+="<table align='center'><tr><td height='50px'></td></tr> <tr> <td>Adresse  :</td> <td>"+client.Adresse+"</td> </tr> <tr><td height='5px'></td></tr>   <tr> <td>Qestion securité 1 :</td><td>"+client.Question_sec1+"</td> </tr>  <tr><td height='5px'></td></tr> <tr><td>Qestion securité 2 :</td><td>"+client.Question_sec2+" </td></tr> <tr><td height='5px'></td></tr>  <tr> <td>Qestion securité 3</td><td>"+client.Question_sec3+"</td></tr> <tr><td height='5px'></td></tr> </table> <u><p>Appareils :</p></u> ";
 var len=client.Appareils.length;
 var l=0;
 while(l<len)
 {
  

 document.getElementById("h_client").innerHTML+="<table align='center' >  <tr><td height='50px'></td></tr>  <tr><td> Id appareil :</td>   <td>"+ client.Appareils[l].Id_appareil+"  </td> </tr>   <tr> <td>Adresse physique :</td><td>"+client.Appareils[l].Adresse_physique+"</td></tr> <tr><td> Type :</td><td>"+client.Appareils[l].Type+" </td></tr> <tr><td>Modele :</td><td>"+client.Appareils[l].Modele+"</td></tr> <tr><td>Constructeur :</td><td>"+client.Appareils[l].Constructeur+"</td></tr>   </table>";
 
 l++;
 }
  
  
  
 }
 
  
function ajouterLigne(id,nom_prenom,mail,login)
{     
   
   
    var tableau = document.getElementById("tableau");
    var ligne = tableau.insertRow(-1); 
	var colonne1 = ligne.insertCell(0); 
	 
	colonne1.innerHTML += "<input class='inputtable' readonly='readonly' onfocus='selectcolor(2);' type='text' value='"+id+"'>" ;    

	var colonne2 = ligne.insertCell(1); 
	 
	colonne2.innerHTML += "<input  class='inputtable' onfocus='couleurback(this);' type='text' value='"+nom_prenom+"'>"; 

 
	var colonne3 = ligne.insertCell(2);
 
	colonne3.innerHTML += "<input class='inputtable' onfocus='couleurback(this);'  type='text' value='"+mail+"'>";  

	var colonne4 = ligne.insertCell(3);
	colonne4.innerHTML += "<input class='inputtable' onfocus='couleurback(this);'  type='text' value='"+login+"'>";   
     
	var colonne5 = ligne.insertCell(4);
	colonne5.innerHTML += "<img id='"+id+"' src='./icons/Icons/17.png' style='cursor:pointer' name='info' onClick='showpopup2(this.id);'>";
  
	 
	var colonne6 = ligne.insertCell(5);
	colonne6.innerHTML += "<img src='./icons/Icons/1.png'  style='cursor:pointer'  onClick='supprimerLigne(this,1)'>";
	
	var colonne7 = ligne.insertCell(6);
	colonne7.innerHTML +="<input name='sup' type='checkbox'>";
	
	 
}
/**************************************************************/
function supprimerLigne(r,commande)
{      

       var i = r.parentNode.parentNode.rowIndex;
       var tab=[];
	   form = document.all("cocher");
	   inputs = form.getElementsByTagName("input");
	   count = 0;
	   var j=0;
	  
	for(j=0 ; j<inputs.length ; j++)
			{
				if(inputs[j].type=="text" )
				
				{   
				  tab[count]=inputs[j];
				  count+=1;
				}
			}
	  
		var id_cl=tab[(i*4)-4].value;
	 
   
if(commande==1)
 {
  swal(
  { 
  title: "Etes-vous sur ?", 
  text: "Le client "+tab[((i*4)-4)+1].value+" sera  supprimé ?", 
  type: "warning", 
  showCancelButton: true, 
  confirmButtonColor: "#DD6B55",  
  confirmButtonText: "Oui, Supprimer !", 
  cancelButtonText: "Non, Annuler !", 
  closeOnConfirm: false,  
  closeOnCancel: false }
  , function(isConfirm)
  {   if (isConfirm) 
      {    
	  swal("Suppression!", "Le client   "+tab[((i*4)-4)+1].value+"    est  supprimé?", "success"); 
	   var main2='{"table":"clients","operation":"delete","condition":"'+id_cl+'"}';
      $.getJSON("./controler/main.php",{client_requete:main2});
	  	document.getElementById("tableau").deleteRow(i);
	  } 
	  else 
	  {    
	  swal("Annulation", "", "error");   
	  }

 });
  }
if(commande==2)
{
var main2='{"table":"clients","operation":"delete","condition":"'+id_cl+'"}';
      $.getJSON("./controler/main.php",{client_requete:main2});
	  	document.getElementById("tableau").deleteRow(i);
}
if(commande==3)
{
document.getElementById("tableau").deleteRow(i);
}



	 
}
function tout()
{
     var tab=[];
	  form = document.all("cocher");
	  inputs = form.getElementsByTagName("input");
	  count = 0;
	  var j=0;
	  for(j=0 ; j<inputs.length ; j++){
	    if(inputs[j].type=="checkbox" && inputs[j].checked==true){
		  
		  tab[count]=inputs[j];
		  count+=1;
		 
		 
		}
	  }
	
if(tab.length==0)
{
swal({   title: " <small>Aucun client séléctionné ! </small>",   text: "<span style='color:#F8BB86'> Choisissez-vous au moin un client à supprimer <span>",   html: true });
}
else{	
	
	   
if(tab.length>1){

swal(
  { 
  title: "Etes-vous sur ?", 
  text: (tab.length)+" clients seront  supprimées ", 
  type: "warning", 
  showCancelButton: true, 
  confirmButtonColor: "#DD6B55",  
  confirmButtonText: "Oui, Supprimer !", 
  cancelButtonText: "Non, Annuler !", 
  closeOnConfirm: false,  
  closeOnCancel: false }
  , function(isConfirm)
  {   if (isConfirm) 
      {    
	  swal("Suppression!", "", "success"); 
	  for(j=0 ; j<tab.length ; j++){
	     supprimerLigne(tab[j],2) ;
		 
		 }  
	    
	  } 
	  else 
	  {    
	  swal("Annulation", "", "error");   
	  }

	  });

}
else{
swal(
  { 
  title: "Etes-vous sur ?", 
  text:  "Ce clients sera  supprimé définitivement ", 
  type: "warning", 
  showCancelButton: true, 
  confirmButtonColor: "#DD6B55",  
  confirmButtonText: "Oui, Supprimer !", 
  cancelButtonText: "Non, Annuler !", 
  closeOnConfirm: false,  
  closeOnCancel: false }
  , function(isConfirm)
  {   if (isConfirm) 
      {    
	  swal("Suppression!", "", "success"); 
	  for(j=0 ; j<tab.length ; j++){
	     supprimerLigne(tab[j],2) ;
		 
		 }  
	    
	  } 
	  else 
	  {    
	  swal("Annulation", "", "error");   
	  }

	  });

}



	   
	   
}

 
		 
}
	  
	 
  
  /*****************************************demande de recuperation *****************************/
  
  
  function deplacerLignedemande(source, cible)
{
	 
	var ligne = document.getElementById("tableaudemande").rows[source]; 
	var nouvelle = document.getElementById("tableaudemande").insertRow(cible); 
	var cellules = ligne.cells;

	 
	for(var i=0; i<cellules.length; i++)
	{
		nouvelle.insertCell(-1).innerHTML += cellules[i].innerHTML; 
	}

 
	document.getElementById("tableaudemande").deleteRow(ligne.rowIndex);
}

function selectcolordemande(color,taille){
 
		form = document.all("cocherdemande");
		inputs = form.getElementsByTagName("input");
		
	 for(j=0 ; j<taille ; j++){
	 if(inputs[j].type=="text"){
	 if(color==1)
	 inputs[j].style.background="#C4C4C4";
	 else
	  inputs[j].style.background="#ffffff";
	 }
     }
}




 
function parcourdemande(e)
{

 var val=document.getElementById("recherchedemande").value;
	   
      var xx=1;
      var xx1=0;
	  formdemande = document.all("cocherdemande");
	  
	  inputs = formdemande.getElementsByTagName("input");
 selectcolordemande(0,inputs.length);
var nb=1;
 if(e.keyCode === 13)
    {
     
	  
	  var j=0;
						for(j=0 ; j<inputs.length ; j++)
						{   
							if(inputs[j].type=="text")
							{  
							   
							  if(inputs[j].value==val)
							   {  
								xx1= Math.floor((j+1)/9);
								 
									if((inputs.length-j)==9)
									{xx1++;}
								 xx1++;
								 
								 
								//if(xx==0){xx=1;}
								inputs[j].style.background="#C4C4C4";
								 deplacerLignedemande(xx1,1);
							     
								 
							   }
							}
						}
	   
	   
	    
	   
    }
 	
}   
  
  
  function reset_data_demande()
  {
  var tab=[];
	  form = document.all("cocherdemande");
	  inputs = form.getElementsByTagName("input");
	  count = 0;
	  var j=0;
	  for(j=0 ; j<inputs.length ; j++){
 
	    if(inputs[j].type=="checkbox"  && inputs[j].name=="etat"){
		  
		  tab[count]=inputs[j];
		  count+=1;
		 
	 
		}
	  }
	   for(j=0 ; j<tab.length ; j++){
	      var i = tab[j].parentNode.parentNode.rowIndex;
	     document.getElementById("tableaudemande").deleteRow(i);
		 
		 }
  
  
  
  
  }
  
  
  function ajouterLignedemande(id_demande,nom_prenom,mail,login,q1,q2,q3,verif)
{  
 	var tableau = document.getElementById("tableaudemande");

	var ligne = tableau.insertRow(-1); 

	var colonne1 = ligne.insertCell(0); 
	colonne1.innerHTML += "<input class='inputtable' id='"+id_demande+"' type='text' value='"+nom_prenom+"' disabled >" ; 
 
	var colonne2 = ligne.insertCell(1); 
	colonne2.innerHTML += "<input  class='inputtable' id='"+id_demande+"' type='text' value='"+mail+"' disabled >";
	
    var colonne3 = ligne.insertCell(2); 
	colonne3.innerHTML += "<input  class='inputtable' id='"+id_demande+"' type='text' value='"+login+"' disabled >";
	
    var colonne4 = ligne.insertCell(3); 
	colonne4.innerHTML += "<input  class='inputtable' id='"+id_demande+"' type='text' value='"+q1+"' disabled >";
	
    var colonne5 = ligne.insertCell(4); 
	colonne5.innerHTML += "<input  class='inputtable' id='"+id_demande+"' type='text' value='"+q2+"' disabled >";
    var colonne6 = ligne.insertCell(5); 
	colonne6.innerHTML += "<input  class='inputtable' id='"+id_demande+"' type='text' value='"+q3+"' disabled >";
 
	var colonne7 = ligne.insertCell(6);
	if(verif=="PasValide")
	{colonne7.innerHTML += "<input id='"+id_demande+"' name='etat'  type='checkbox' >";}
	else{
	colonne7.innerHTML += "<input id='"+id_demande+"' type='checkbox' name='etat' checked='checked' >";
	}

	 
	
	 
	
	 
	
	
}
/* *************************************************************/
function supprimerLignedemande(r)
{        var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("tableaudemande").deleteRow(i);
    
		var main0='{"table":"demandes","operation":"delete","condition":"'+r.id+'","valeur":""}';
		 
		$.getJSON("./controler/main.php",{client_requete:main0}); 
}
function toutdemande(){
     var tab=[];
	  form = document.all("cocherdemande");
	  inputs = form.getElementsByTagName("input");
	  count = 0;
	  var j=0;
	  for(j=0 ; j<inputs.length ; j++){
 
	    if(inputs[j].type=="checkbox"   && inputs[j].name=="etat"){
		  
		  tab[count]=inputs[j];
		  count+=1;
		 
		   
		}
	  }
	   for(j=0 ; j<tab.length ; j++){
	     supprimerLignedemande(tab[j]) ;
		 
		 }
	  
	  }
 /**********************************************send mail recuperation**********************************************************************/
 function sendMail(adress,text) {
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'U_caYnCYNKwJMxgAaMEM3g',
        'message': {
          'from_email': 'beedroid.service@gmail.com',
          'to': [
              {
                'email': adress,
                'name': 'BeeDroid',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Récuperation de mot de passe',
          'html': text
        }
      }
     }).done(function(response) {
      //alert(adress+" "+text);  console.log(response);  if you're into that sorta thing
     });
}

 /*********************************************************************************************************************************************/
 function repondre_demande(){
  
  
  swal({   title: "Est ce que vous ete sur ?",   text: "Les réponses seront envoyées aux clients séléctionnées par email .",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui",   cancelButtonText: "Non",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   
  if (isConfirm) 
  {     swal("Succès !", "Réponses envoyées .", "success");   
  
  
  
  
  
  
	  form = document.all("cocherdemande");
	  inputs = form.getElementsByTagName("input");
 
	  var j=0;
	for(j=0 ; j<inputs.length ; j++){
	  
	    if(inputs[j].type=="checkbox" )
		{
		   //alert(inputs[j-4].value);
		    if(inputs[j].checked==true && inputs[j].name=="etat")
		    { 
			var i12=0;
			var taille_c1;
			var mdp1="";
			try{
			taille_c1=table_client.length;
			}catch(e){}
			while(i12<taille_c1){
			if(table_client[i12].Login==inputs[j-4].value){
			mdp1=table_client[i12].Mot_de_passe;
			}
			
			i12++;
			}
			
			
			var text="Bienvenu sur BeeDroid "+inputs[j-5].value+" ,suite à votre demande de récupération de mot de passe ,les informations que vous avez introduisez semble correctes ,Votre mot de passe est : <br><br> "+mdp1+" <br><br> merci de votre patience , nous sommes toujours heureux de vous servir .<br><br> BeeDroid.inc 2015";
			  //alert(inputs[j-5].value);
			  sendMail(inputs[j-5].value,text);
			   supprimerLignedemande(inputs[j]);
			 
			}
			
			if(inputs[j].checked==false && inputs[j].name=="etat")
		    {  var text="Bienvenu sur BeeDroid "+inputs[j-5].value+" ,suite à votre demande de récupération de mot de passe ,les informations que vous avez introduisez semble incorrectes ou mals saisites vous devez verifier vos informations ou demandez l'aide de l'administareur , nous sommes toujours heureux de vous servir .<br><br> BeeDroid.inc 2015";
			//alert(inputs[j-5].value);
			  sendMail(inputs[j-5].value,text);
			   supprimerLignedemande(inputs[j]);
				 
			} 
		 
		 
		}
	}
 
 
  
  
  
  
  
  } 
  
  else 
  {     swal("Annulation", "Demandes non envoyées ", "error");   
  
  } });
  
  
  
  
  
  
  
  
  
 
 
 
 
 }
 
 
 
 
 
 

 
 
 
 
 
 
 /***********************************fonction recherche général***********************************************/
 function recherche_all_client(cherch)
{
var test=false;
if(table_client==null)
return false ;
var l=0;
while(l<table_client.length)
{
if(table_client[l].Id_client==cherch ||table_client[l].Nom_prenom==cherch || table_client[l].Email==cherch || table_client[l].Tel==cherch || table_client[l].Adresse==cherch || table_client[l].Question_sec1==cherch || table_client[l].Question_sec2==cherch || table_client[l].Question_sec3==cherch || table_client[l].Login==cherch || table_client[l].Mot_de_passe==cherch )
test=true;
l++;
}
return test;
} 
 
function recherche_all_avis(cherch)
{
var test=false;
if(table_avis==null)
return false ;
var l=0;
while(l<table_avis.length)
{
if(retun_client(table_avis[l].Id_client)==cherch || table_avis[l].Date_envoi==cherch || table_avis[l].Msg_alerte==cherch)
{
test=true;
}
l++;
}
return test;

} 
 
 
function recherche_all_message(cherch)
{
var test=false;
var l=0;
if(table_message==null)
return false ;
while(l<table_message.length)
{
if(retun_client(retun_client(table_message[l].Emetteur))==cherch || table_message[l].Date_Envoi==cherch || table_message[l].Contenu==cherch)
{
test=true;
}
l++;
}
return test;

}  
 
 function returncolor_search()
 {
 document.getElementById("cherche").style.borderColor="#ffffff";
 
 }
 
 function recherche_general(ev)
 {
 var cherch=document.getElementById("cherche").value;
 if(ev.keyCode === 13){
 if(cherch=="")
 {
 document.getElementById("cherche").style.borderColor="red";
 }
 else
 {
 show_general();
    $('#search_general_id').remove();
    document.getElementById("recherchegeneral").innerHTML+= "<div id='search_general_id' class='search_general_container' >  </div> ";

 var oki=false;
 var oki1=false;
 var oki2=false;
 var nb=0;
 var tab=new Array();
 var tab1=new Array();
 var tab2=new Array();
 
 var i=0;
 var j=0;
 var k=0;
while(j<table_client.length)
{  


oki=false;
if(table_client[j].Id_client==cherch )
{
 
tab[0]="<font style='background-color:LightGray  ; '>"+table_client[j].Id_client +"</font>";
oki=true;
nb++;
} 
else{tab[0]=table_client[j].Id_client ;}

if(table_client[j].Nom_prenom==cherch)
{
tab[1]="<font style='background-color:LightGray  ; '>"+table_client[j].Nom_prenom +"</font>";
oki=true;
nb++;
}else{tab[1]= table_client[j].Nom_prenom ;}

if(table_client[j].Email==cherch)
{
tab[2]="<font style='background-color:LightGray  ; '>"+table_client[j].Email +"</font>";
oki=true;
nb++;
}else{tab[2]= table_client[j].Email  ;}

if(table_client[j].Tel==cherch)
{
tab[3]="<font style='background-color:LightGray  ; '>"+table_client[j].Tel +"</font>";
oki=true;
nb++;
}else{tab[3]= table_client[j].Tel ;}

if(table_client[j].Adresse==cherch)
{
tab[4]="<font style='background-color:LightGray  ; '>"+table_client[j].Adresse +"</font>";
oki=true;
nb++;
}else{tab[4]= table_client[j].Adresse ;}

if(table_client[j].Question_sec1==cherch)
{
tab[5]="<font style='background-color:LightGray  ; '>"+table_client[j].Question_sec1 +"</font>";
oki=true;
nb++;
}else{tab[5]= table_client[j].Question_sec1 ;}



if(table_client[j].Question_sec2==cherch)
{
tab[6]="<font style='background-color:LightGray  ; '>"+table_client[j].Question_sec2 +"</font>";
oki=true;
nb++;
}else{tab[6]= table_client[j].Question_sec2 ;}


if(table_client[j].Question_sec3==cherch)
{
tab[7]="<font style='background-color:LightGray  ; '>"+table_client[j].Question_sec3 +"</font>";
oki=true;
nb++;
}else{tab[7]= table_client[j].Question_sec3 ;}


if(table_client[j].Login==cherch)
{
tab[8]="<font style='background-color:LightGray  ; '>"+table_client[j].Login +"</font>";
oki=true;
nb++;
}else{tab[8]= table_client[j].Login ;}


/*if(table_client[j].Mot_de_passe==cherch)
{
tab[9]="<font style='background-color:LightGray  ; '>"+table_client[j].Mot_de_passe +"</font>";
oki=true;
nb++;
}else{tab[9]= table_client[j].Mot_de_passe ;}*/


 


if(oki==true){
 

document.getElementById("search_general_id").innerHTML+= "   <table > <tr><td height='5px'></td></tr> <tr> <td> Id client :</td><td>  "+tab[0]+" </td> </tr>  <tr><td height='5px'></td></tr> <tr><td> Nom et Pr&eacute;nom :</td><td> "+tab[1]+"</td></td>  <tr><td height='5px'></td></tr>     <tr><td>E-mail :</td><td> "+tab[2]+"</td></tr>  <tr><td height='5px'></td></tr>      <tr><td> T&eacute;l&eacute;phone :</td><td>"+tab[3]+"</td></tr>    <tr><td height='5px'></td></tr>    <tr> <td> Adresse : </td><td>"+tab[4]+"</td></tr>  <tr><td height='5px'></td></tr>     <tr><td> Question securit&eacute; 1 :</td><td>"+tab[5]+"</td></tr>   <tr><td height='5px'></td></tr>     <tr><td> Question securit&eacute; 2 :</td><td>"+tab[6]+"</td></tr>   <tr><td height='5px'></td></tr>     <tr><td>  Question securit&eacute; 3 :</td><td>"+tab[7]+"</td></tr>   <tr><td height='5px'></td></tr>      <tr><td>  Login : </td><td>"+tab[8]+"</td></tr>  <tr><td height='5px'></td></tr>       <tr><td height='5px'></td></tr> </table> <br><br><br><hr>";
}
j++;
} 
 
					 
 
while(i<table_avis.length )
{ oki1=false;
			if(retun_client(table_avis[i].Id_client)==cherch )
			{
			
			tab1[0]="<font style='background-color:LightGray  ; '>"+retun_client(table_avis[i].Id_client) +"</font>";
			oki1=true;
			nb++;
			} 
			else{tab1[0]=retun_client(table_avis[i].Id_client) ;}

			
			if(table_avis[i].Date_envoi==cherch)
			{
			tab1[1]="<font style='background-color:LightGray  ; '>"+table_avis[i].Date_envoi +"</font>";
            nb++;
			oki1=true;
			}
			else
			{
			tab1[1]=table_avis[i].Date_envoi;
			}
			if(table_avis[i].Msg_alerte==cherch)
			{
			tab1[2]="<font style='background-color:LightGray  ; '>"+table_avis[i].Msg_alerte +"</font>";
            nb++;
			oki1=true;
			}
			else
			{
			tab1[2]= table_avis[i].Msg_alerte ;
             
			}
	
if((tab1.length != 0) && (oki1==true)){
 

document.getElementById("search_general_id").innerHTML+= "   <table > <tr><td height='5px'></td></tr> <tr> <td> Emetteur :</td><td>  "+tab1[0]+" </td> </tr>  <tr><td height='5px'></td></tr> <tr><td> Date d'envoie:</td><td> "+tab1[1]+"</td></td>  <tr><td height='5px'></td></tr>     <tr><td>Message d'alert :</td><td> "+tab1[2]+"</td></tr>  <tr><td height='5px'></td></tr>    <tr><td height='5px'></td></tr> </table> <br><br><br><hr>";
}	
i++;			
} 
 
 
 
while(k<table_message.length)
{ oki2=false;
			if(retun_client(table_message[k].Emetteur)==cherch )
			{
			tab2[0]="<font style='background-color:LightGray  ; '>"+retun_client(table_message[k].Emetteur) +"</font>";
			oki2=true;
			nb++;
			} 
			else{tab2[0]=retun_client(table_message[k].Emetteur) ;}

			
			if(table_message[k].Date_Envoi==cherch)
			{
			tab2[1]="<font style='background-color:LightGray  ; '>"+table_message[k].Date_Envoi +"</font>";
            nb++;
			oki2=true;
			}
			else
			{
			tab2[1]=table_message[k].Date_Envoi;
			}
			if(table_message[k].Contenu==cherch)
			{
			tab2[2]="<font style='background-color:LightGray  ; '>"+table_message[k].Contenu +"</font>";
            nb++;
			oki2=true;
			}
			else
			{
			tab2[2]= table_message[k].Contenu ;
             
			}
	
if((tab2.length != 0) && (oki2==true)){
 

document.getElementById("search_general_id").innerHTML+= "   <table > <tr><td height='5px'></td></tr> <tr> <td> Emetteur :</td><td>  "+tab2[0]+" </td> </tr>  <tr><td height='5px'></td></tr> <tr><td> Date d'envoie:</td><td> "+tab2[1]+"</td></td>  <tr><td height='5px'></td></tr>     <tr><td>Message d'aide  :</td><td> "+tab2[2]+"</td></tr>  <tr><td height='5px'></td></tr>    <tr><td height='5px'></td></tr> </table> <br><br><br><hr>";
}	

k++;	
		
} 
  
 
 if(recherche_all_client(cherch)==false && recherche_all_avis(cherch)==false && recherche_all_message(cherch)==false )
	 {
				document.getElementById("search_general_id").innerHTML="<div style='background :back'> Aucun r&eacute;sultat  correspond aux termes de recherche sp&eacute;cifi&eacute;s pour ( "+cherch+" )  <br> <br> <br> <h3>  Essayez d'autres mots s'il vous plait.</h3> </div>";
				document.getElementById("search_general_id").innerHTML+="<br><br><br><img src='./icons/Icons/icone_search.png'>";
	 }
 
 
  
	 
	document.getElementById("calcul_time_result").innerHTML= "<h2>Environ "+nb+" r&eacute;sultats ("+((nb+2)*0.01)+" secondes)</h2>";

		
		
 } //fin de else big
 
 }//if encode=13
 
 
 }
 
 
 
 
 
 /*****************************************************************/
 
 
 
 
 
 
 