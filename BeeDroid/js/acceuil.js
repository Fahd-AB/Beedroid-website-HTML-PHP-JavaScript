function test(){
setTimeout(function(){document.getElementById("f_map").style.display = 'none';},500); 
run();
}

  


var main='{"type":"connect","login":"'+login+'","mdp":"'+pass+'"}';
var appareils=[]; //liste des appareils du client 
var contacts=[]; //liste des contact du client
var sms=[]; //liste des sms du client
var messages=[]; //liste des messages d'aide du client
var avis=[]; //liste des avis du client
var media=[];//liste des medias

var id_client;
var nom_prenom;
var Email;
var Adresse;
var pos_tab;
var xy; //id de l'appareil en cours d'utilisation (sélectionneé pour effectuer le signalement)
var note;
var mdp_cl;
var tel;
function show(json) {

   nom_prenom=json.Nom_prenom;
   document.getElementById("nom_pren").value = nom_prenom;
   
   Email=json.Email;
   document.getElementById("email").value = Email;
   document.getElementById("f_cl_mail").innerHTML =Email;
   document.getElementById("l_m_id_mail").innerHTML =Email;
   tel=json.Tel;
   document.getElementById("telephone").value = tel;
   
   Adresse=json.Adresse;
   document.getElementById("adr").value = Adresse;
   
   id_client=json.Id_client;
   document.getElementById("f_cl_id").innerHTML = id_client;
    document.getElementById("l_m_id_cl").innerHTML = id_client;
   mdp_cl=json.Mot_de_passe;
   appareils=json.Appareils;
     xy=appareils[0].Id_appareil;
   document.getElementById("f_cl_nb_app").innerHTML = appareils.length;
   document.getElementById("l_m_nb_app").innerHTML = appareils.length;
   
   
   contacts=json.Contacts;  
   sms=json.Sms;
   messages=json.Messages;
   media=json.Medias;
   //lister_photos();
   //lister_videos();
   lister_messages();
   avis=json.Avis;
   
   nb_media();
   calcul_taille();



 
  
   nb_con();
 nb_sms();
  
   der_pos(xy); //dernier position pour cet appareil

 dernier_sig(xy);//dernier signalement pour cet appareil
    
   }
   
   
   
function run() {
   $.getJSON("controler/main.php",{client_req:main},show);
}


setInterval(function(){ 

run();


 }, 60000); 






























var clic=0;

function trans(){
if(clic==0){
document.getElementById("f_m").style.height='50%';

clic=1;
}
else{
document.getElementById("f_m").style.height='0%';
clic=0;
}

}
function leave_trans(){
document.getElementById("f_m").style.display = 'none';

}
function reset_trans(){
document.getElementById("more_info").style.display = 'block';
if(clic==1){
document.getElementById("f_m").style.display = 'block';
document.getElementById("f_m").style.height='50%';
clic=1;
}
else{
document.getElementById("f_m").style.display = 'block';
document.getElementById("f_m").style.height='0%';
clic=0;
}

}
function setup_buttom_menu(){

document.getElementById("bottom_menu").style.display = 'block';
document.getElementById("menu").style.height='730px';
document.getElementById("contenu").style.height='730px';
document.getElementById("menu1").style.height='730px';
document.getElementById("contenu1").style.height='730px';
document.getElementById("main").style.height='730px';
}
function back_normal(){
document.getElementById("bottom_menu").style.display = 'none';
document.getElementById("menu").style.height='900px';
document.getElementById("contenu").style.height='900px';
document.getElementById("menu1").style.height='900px';
document.getElementById("contenu1").style.height='900px';
document.getElementById("main").style.height='900px';
}



function star1(){
document.getElementById("s1").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s2").style.background='url("/BeeDroid/icons/Icons/small/star1.png")';
document.getElementById("s3").style.background='url("/BeeDroid/icons/Icons/small/star1.png")';
document.getElementById("s4").style.background='url("/BeeDroid/icons/Icons/small/star1.png")';
document.getElementById("s5").style.background='url("/BeeDroid/icons/Icons/small/star1.png")';
note=1;
}
function star2(){
document.getElementById("s2").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s1").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s3").style.background='url("/BeeDroid/icons/Icons/small/star1.png")';
document.getElementById("s4").style.background='url("/BeeDroid/icons/Icons/small/star1.png")';
document.getElementById("s5").style.background='url("/BeeDroid/icons/Icons/small/star1.png")';
note=2;
}
function star3(){
document.getElementById("s3").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s2").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s1").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s4").style.background='url("/BeeDroid/icons/Icons/small/star1.png")';
document.getElementById("s5").style.background='url("/BeeDroid/icons/Icons/small/star1.png")';
note=3;
}
function star4(){
document.getElementById("s4").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s3").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s2").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s1").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s5").style.background='url("/BeeDroid/icons/Icons/small/star1.png")';
note=4;
}
function star5(){
document.getElementById("s5").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s4").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s3").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s2").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
document.getElementById("s1").style.background='url("/BeeDroid/icons/Icons/small/star2.png")';
note=5;
}



function reset(){
document.getElementById("search").style.background='url("/BeeDroid/icons/Icons/small/row1/6.png") no-repeat 8px 6px #fcfcfc';
} 
function uniCharCode(event) {
    var char = event.which || event.keyCode;
  if(char==13){
   var searchTag=document.getElementById("search").value;  /*obtenir la valeur du zone de recherche*/
	if(searchTag==""){
	document.getElementById("search").style.background='#EF7F7F'; /*changement couleur de background*/
	}
	else{
    window.open("https://play.google.com/store/search?q="+searchTag);}
  }
}
function play(){
    window.open("https://play.google.com/store/");
}
function facebook_link(){
    window.open("https://www.facebook.com/");
}
function google_link(){
    window.open("https://plus.google.com/104868417430006939754/");
}
function twitter_link(){
    window.open("https://twitter.com/?lang=fr");
}
function instagram_link(){
    window.open("https://instagram.com/");
}
function linked_in_link(){
    window.open("https://www.linkedin.com/uas/login");
}

/* ************************************************* Position************************************************ */



var map;
 var marker;
 var initlon;
 var initlat;
 
 
 function initmap(){
var taille_app=appareils.length;
var j=0;
var init_app_pos_taille=appareils[0].Positions.length;
var init_pos= appareils[0].Positions[init_app_pos_taille-1];
initlon=init_pos.Longitude;
initlat=init_pos.Latitude;
var color=new Array('http://maps.google.com/mapfiles/ms/icons/green-dot.png','http://maps.google.com/mapfiles/ms/icons/red-dot.png','http://maps.google.com/mapfiles/ms/icons/blue-dot.png','http://maps.google.com/mapfiles/ms/icons/yellow-dot.png','http://maps.google.com/mapfiles/ms/icons/purple-dot.png');

 var mapOptions = {
 center: new google.maps.LatLng(initlon,initlat),
zoom: 8,
 mapsTypeId: google.maps.MapTypeId.ROADMAP
 }
 map= new google.maps.Map(document.getElementById("f_pos"),mapOptions);

var i=0; 
while(i<taille_app){ 

var posi=appareils[i].Positions;
var taille=posi.length;
var j=0;

while(j<taille){
var lon=posi[j].Longitude;
var lat=posi[j].Latitude;
var titre= "Num : "+appareils[i].Id_appareil+" "+appareils[i].Constructeur+" "+appareils[i].Modele+" "+appareils[i].Type+" Position : "+posi[j].Id_position+" Le "+posi[j].Date_position;
var place=new google.maps.LatLng(lon,lat);
 marker= new google.maps.Marker({
 position: place,
 title: titre,
 map: map
 });
 marker.setIcon(color[i]);
 j++;
 }
 
 i++;
 }
 
}


/* ***************************************************fin position*********************************************** */
function f_f_acceuil(){
back_normal();
reset_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'block';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
}
function f_f_pos(){
document.getElementById("more_info").style.display = 'none';
leave_trans();
setup_buttom_menu();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'block';
initmap();
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
}


function decon(){

	 var main3='{"verif":"dec1","login_ad":"" , "pass_ad":""}';
	 
	 $.getJSON("./controler/main.php",{connect_admin:main3}); 
	 setTimeout(function(){document.location.href="./load.php";},500);

		
     
}

function f_f_msg_ec(){
xy=appareils[0].Id_appareil;
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'block';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
load_devices_msg();

}

function f_f_ver(){
xy=appareils[0].Id_appareil;
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'block';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
load_devices_lock();
}
function f_f_rec(){
xy=appareils[0].Id_appareil;
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'block';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
load_devices_restore();
}





function f_f_app(){
xy=appareils[0].Id_appareil;
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'block';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
load_devices_call();
}



function f_f_tel(){
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'block';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
}



function f_f_apps(){
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'block';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
remplir_apps();
//mobi();


}



function f_f_map(){
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'block';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
}



function f_f_about(){

swal({ title: "<small>À propos de BeeDroid</small>",   text: "<div class='about'><div class='headabout'><img src='/BeeDroid/aboutlogo.png' style='height:100px;width:150px;float:left;'></div><br>BeeDroid est la nouvelle application de géolocalisation des smartphones ,notre application vous aide à récuperer facilement votre téléphone mobile et même de le contrôler à distance et récuperer vos données personnelles même après la perte du mobile ,aujourd'hui et grace à notre application votre vie privé est plus sécurisé .<br><br>Ce travail est réalisé dans le cadre du projet de fin d'étude à ISIMM <br><br>Ce projet est réalisé graçe à l'assistance de :<br><br>Mr Lazhar Hamel <br>Maitre assistant à ISIMM<br><br> Réalisé par :<br><br>Abdellaoui Fahed et Azlouk Mohammed</div>",   html: true });
}



function f_f_msg_aid(){

setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'block';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
lister_messages();


var vu_no='{"table":"messages","id":"'+id_client+'"}';
$.getJSON("controler/main.php",{vu_msg:vu_no});
document.getElementById("notif_ms").style.background = 'none';
document.getElementById("notif_ms").innerHTML="";
var objDiv = document.getElementById("ms_b");
objDiv.scrollTop = objDiv.scrollHeight;
}



function f_f_av(){
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'block';
document.getElementById("f_pho").style.display = 'none';
dernier_avi();
}










function f_f_cpt(){
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'block';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
}
function f_f_aide(){
back_normal();
reset_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'block';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
} 





function f_f_sms(){
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'block';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
 lister_sms();
var objDiv = document.getElementById("sms_b");
objDiv.scrollTop = objDiv.scrollHeight;

}
function f_f_contact(){
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'block';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
remplir_con();
}
function f_f_music(){
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'block';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
lister_music();
}
function f_f_videos(){
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'block';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
document.getElementById("f_pho").style.display = 'none';
lister_videos();
}
function f_f_photos(){
setup_buttom_menu();
document.getElementById("more_info").style.display = 'none';
leave_trans();
document.getElementById("f_pho").style.display = 'block';
document.getElementById("f_sms").style.display = 'none';
document.getElementById("f_contact").style.display = 'none';
document.getElementById("f_music").style.display = 'none';
document.getElementById("f_videos").style.display = 'none';
document.getElementById("f_cpt").style.display = 'none';
document.getElementById("f_aide").style.display = 'none';
document.getElementById("f_acceil").style.display = 'none';
document.getElementById("f_pos").style.display = 'none';
document.getElementById("f_msg_ec").style.display = 'none';
document.getElementById("f_ver").style.display = 'none';
document.getElementById("f_rec").style.display = 'none';
document.getElementById("f_app").style.display = 'none';
document.getElementById("f_tel").style.display = 'none';
document.getElementById("f_map").style.display = 'none';
document.getElementById("f_apps").style.display = 'none';
document.getElementById("f_msg_aid").style.display = 'none';
document.getElementById("f_av").style.display = 'none';
lister_photos();
}

function f_f_mdp(){
document.getElementById("f_mdp").style.display = 'block';
document.getElementById("f_infos").style.display = 'none';
}
function f_f_infos(){
document.getElementById("f_mdp").style.display = 'none';
document.getElementById("f_infos").style.display = 'block';
}

/* ********************************************liste des appareils***************************** */
function delete_app(){
var tail=appareils.length;
var arrayLignes = document.getElementById("tableau").rows;

var j=0;
var tel=tail-1;
while(j<tail){
document.getElementById("tableau").deleteRow(-1);
tel--;
j++;
}
}

function remplir_apps(){

var arrayLignes = document.getElementById("tableau").rows;
var taille=arrayLignes.length;
if(taille==1){
ajouterLigne_app();
}
else{
delete_app();
ajouterLigne_app();
}
}




 

function ajouterLigne_app()
{ 
var taille=appareils.length;
var i=0;
 while(i<taille){

 	var tableau = document.getElementById("tableau");

	var ligne = tableau.insertRow(-1);

	var colonne1 = ligne.insertCell(0);
	colonne1.innerHTML += "<div>"+appareils[i].Id_appareil+"</div>";//on y met le contenu de titre

	var colonne2 = ligne.insertCell(1);
	colonne2.innerHTML += "<div>"+appareils[i].Constructeur+"</div>";

	var date = new Date();
	var colonne3 = ligne.insertCell(2);
	colonne3.innerHTML += "<div>"+appareils[i].Modele+"</div>";

	var colonne4 = ligne.insertCell(3);
	colonne4.innerHTML += "<div>"+appareils[i].Type+"</div>";


	
	i++;
	}
}

/* *****************************************table contacts*********************************************/



function delete_all_con(){
var ta=0;
try{
ta=contacts.length;
}
catch(e){

}

if(ta>0){
var arrayLignes = document.getElementById("tableau1").rows;
var j=0;
var tel=ta-1;
while(j<ta){
document.getElementById("tableau1").deleteRow(-1);
tel--;
j++;
}
var d1='{"table":"contacts","id_cli":"'+id_client+'","op":"delete"}';

$.getJSON("controler/main.php",{client_del:d1});
swal("Succées!", "Vos contacts sont supprimées avec succées !", "success");
}
else{
swal("Erreur!", "Pas de contacts à supprimer  !", "error");
}
}



function delete_con(){
var ta=contacts.length;
var arrayLignes = document.getElementById("tableau1").rows;

var j=0;
var tel=ta-1;
while(j<ta){
document.getElementById("tableau1").deleteRow(-1);
tel--;
j++;
}
}

function remplir_con(){
var arrayLignes = document.getElementById("tableau1").rows;
var taille=arrayLignes.length;
if(taille==1){
ajouterLigne_con();
}
else{
delete_con();
ajouterLigne_con();
}
}


function ajouterLigne_con()
{ 
var ta=contacts.length;
var i=0;

 while(i<ta){

 
 	var tableau = document.getElementById("tableau1");

	var ligne = tableau.insertRow(-1);

	var colonne1 = ligne.insertCell(0);
	colonne1.innerHTML += "<div>"+contacts[i].Id_contact+"</div>";//on y met le contenu de titre

	var colonne2 = ligne.insertCell(1);
	colonne2.innerHTML += "<div>"+contacts[i].Nom+"</div>";

	var date = new Date();
	var colonne3 = ligne.insertCell(2);
	colonne3.innerHTML += "<div>"+contacts[i].Num+"</div>";

	var colonne4 = ligne.insertCell(3);
	colonne4.innerHTML += "<div>"+contacts[i].Email+"</div>";

	
	i++;
	}
}





	  
	  
	  
/* ***************************************lister les sms***************************/

function lister_sms(){
document.getElementById("sms_b").innerHTML="<div></div>";
var taille=sms.length;
var i=0;
while(i<taille){
$( ".box_style2" ).append( " <div><div class='titre_msg'> De : "+sms[i].Num+" . Le : "+sms[i].Date_Envoi+"</div><textarea readonly id='sm"+i+"' class='msg_speech1'>"+sms[i].Contenu+"</textarea></div>" );
var l=sms[i].Contenu.length;
var nb_l;
var height=0;
var width=0;

if(l<38){
width=(l*9.5)+8;
height=30;
}
else{
width=300;
height=((l/70)*30)+20;
}
document.getElementById("sm"+i).style.height = height+"px";
document.getElementById("sm"+i).style.width = width+"px";
i++;
}


}

/* ***************************************lister les messages***************************/
var ancien=0;

function lister_messages(){
document.getElementById("ms_b").innerHTML="<div></div>";
var tail_msg_ad=0;

var nb_msg=0;

try{
tail_msg_ad=messages.length;
}
catch(e){
tail_msg_ad=0;
}

var i=0;
var admin_ms=false;
var contain_id=false;

while(i<tail_msg_ad){
//alert("enter->>               nb_msg: "+nb_msg+"  ancien: "+ancien+"   contain_id: "+contain_id);
if ((messages[i].Recepteur=="0")||(messages[i].Recepteur==id_client))
{
var xyu=messages[i].Vu;
//alert("index client : "+xyu.indexOf(id_client));
if( xyu.indexOf(id_client)!=-1  ){//existe
contain_id=true;
 
}

if((messages[i].Vu=="0" )||(contain_id==false))
  {nb_msg++;

  }
else{
contain_id=true;
}  

 
$( ".box_style1" ).append( "<div id='adx"+i+"' style='width:98%;padding-right:5px;'><div style='float:right;'><div class='titre_msg'>  De : l'Administrateur . Le : "+messages[i].Date_Envoi+"</div><textarea readonly id='t"+i+"' class='msg_speech1'>"+messages[i].Contenu+"</textarea></div></div>" );
 
admin_ms=true;


}
else
{

$( ".box_style1" ).append( "<div><div class='titre_msg'> De Vous . Le : "+messages[i].Date_Envoi+"</div><textarea readonly id='t"+i+"' class='msg_speech'>"+messages[i].Contenu+"</textarea></div>" );

}








var l=messages[i].Contenu.length;
var nb_l;
var height=0;
var width=0;

if(l<38){
width=(l*9.5)+8;
height=30;
}
else{
width=300;
height=((l/70)*30)+20;


}
document.getElementById("t"+i).style.height = height+"px";
document.getElementById("t"+i).style.width = width+"px";
if(admin_ms==true)
{
document.getElementById("adx"+i).style.height = (height+40)+"px";
admin_ms=false;
}
   contain_id=false;
i++;
//alert("sortie->>            nb_msg: "+nb_msg+"  ancien: "+ancien+"   contain_id: "+contain_id);
}

if((nb_msg!=ancien)&&(nb_msg!=0))
	{
	 document.getElementById("notif_ms").style.background="red";
	 var audio = new Audio('30.mp3');
	 audio.play();
	 document.getElementById("notif_ms").innerHTML=nb_msg;
	  
	  ancien=nb_msg;
	  nb_msg=0;
	 
	}
	
var objDiv = document.getElementById("ms_b");
objDiv.scrollTop = objDiv.scrollHeight;

}
/* *******************************************calcul des positions********************************** */


function find_positions(id_app){
var taille_app=appareils.length;
var i=0;

var pos=new Array;
while(i<taille_app){
if(appareils[i].Id_appareil==id_app){
var j=0;
var taille_pos=appareils[i].Positions.length;
while(j<taille_pos){
pos[j]=appareils[i].Positions[j];
j++;
}

}
i++;
}
return pos;
}
/* ****************************************** avis ************************************************** */


function dernier_avi(){
var taille=avis.length;
var dernier_note=avis[taille-1].Note;
if(dernier_note==1){
star1();
}
if(dernier_note==2){
star2();
}
if(dernier_note==3){
star3();
}
if(dernier_note==4){
star4();
}
if(dernier_note==5){
star5();
}

}
/* ******************************************dernier signalement ********************************** */
function dernier_sig(id){
 var taille=0;
 try{
taille=appareils.length;
}
catch(e){
}
var i=0;
var der;

for(i=0; i<taille; i++){
if(appareils[i].Id_appareil==id){
var longeur=appareils[i].Commandes.length;
der=appareils[i].Commandes[longeur-1].Date_lancement;

}
}
document.getElementById("der_sig").innerHTML=der;
document.getElementById("f_m_sig").innerHTML=der;
}
/* *********************************************** dernier position *************************************** */
function der_pos(id){
var ap=0;
try
{
ap=appareils.length;
}
catch(e){

}
var j=0;
var tab_pos1;
while(j<ap){
if(appareils[j].Id_appareil==id){
tab_pos1=appareils[j].Positions;

}
j++;
}
if(tab_pos1!=null)
{
var taille_p=tab_pos1.length;
var id=0;
var i=0;
var lon;
var lat;
while(i<taille_p){
var current_pos=tab_pos1[i].Id_position;
if(current_pos>id){
id=current_pos;
lon=tab_pos1[i].Longitude;
lat=tab_pos1[i].Latitude;
}
i++;
}

var d_position="("+lon+","+lat+")";
document.getElementById("m_b_pos").innerHTML ="<a href='#' onClick='f_f_pos();'>"+d_position+"</a>";
document.getElementById("l_m_pos").innerHTML = "<a href='#' onClick='f_f_pos();'>"+d_position+"</a>";
}
}
/* *********************************************check recupereation ********************************** */
 function OnChangeCheckbox (checkbox) {
            if (checkbox.checked) {
            document.getElementById("sms_box").checked=true;
			document.getElementById("cont_box").checked=true;
			document.getElementById("video_box").checked=true;
			document.getElementById("photo_box").checked=true;
			document.getElementById("music_box").checked=true;	
            }
            else {
            document.getElementById("sms_box").checked=false;
			document.getElementById("cont_box").checked=false;
			document.getElementById("video_box").checked=false;
			document.getElementById("photo_box").checked=false;
			document.getElementById("music_box").checked=false;
            }
        }
		
function click_diselect(checkbox){
 if (checkbox.checked==false) {
 document.getElementById("check_all").checked=false;
 }
}


/* ********************************************load devices **************************************** */

function load_devices_msg(){

var nb_appareils;
nb_appareils=appareils.length;
var menu_option="<select name='dev1' id='dev1' onchange='selected_device_msg();'>";
var i=0;
var result;
while(i<nb_appareils){


menu_option+="<option value='"+appareils[i].Id_appareil+"'>"+appareils[i].Constructeur+" "+appareils[i].Modele+" "+appareils[i].Type+"</option>";


i++;
}
result=menu_option+"</select>";
document.getElementById("devices").innerHTML =result;


}

function load_devices_lock(){

var nb_appareils;
nb_appareils=appareils.length;
var menu_option="<select name='dev2' id='dev2' onchange='selected_device_lock();'>";
var i=0;
var result;
while(i<nb_appareils){


menu_option+="<option value='"+appareils[i].Id_appareil+"'>"+appareils[i].Constructeur+" "+appareils[i].Modele+" "+appareils[i].Type+"</option>";


i++;
}
result=menu_option+"</select>";
document.getElementById("devices_lock").innerHTML =result;
}

function load_devices_restore(){

var nb_appareils;
nb_appareils=appareils.length;
var menu_option="<select name='dev3' id='dev3' onchange='selected_device_restore();'>";
var i=0;
var result;
while(i<nb_appareils){


menu_option+="<option value='"+appareils[i].Id_appareil+"'>"+appareils[i].Constructeur+" "+appareils[i].Modele+" "+appareils[i].Type+"</option>";


i++;
}
result=menu_option+"</select>";

document.getElementById("devices_restore").innerHTML =result;


}
function load_devices_call(){

var nb_appareils;
nb_appareils=appareils.length;
var menu_option="<select name='dev4' id='dev4' onchange='selected_device_call();'>";
var i=0;
var result;
while(i<nb_appareils){


menu_option+="<option value='"+appareils[i].Id_appareil+"'>"+appareils[i].Constructeur+" "+appareils[i].Modele+" "+appareils[i].Type+"</option>";


i++;
}
result=menu_option+"</select>";
document.getElementById("devices_call").innerHTML =result;

}

function load_devices_del(){

var nb_appareils;
nb_appareils=appareils.length;
var menu_option="<select name='dev5' id='dev5' onchange='selected_device_del();'>";
var i=0;
var result;
while(i<nb_appareils){


menu_option+="<option value='"+appareils[i].Id_appareil+"'>"+appareils[i].Constructeur+" "+appareils[i].Modele+" "+appareils[i].Type+"</option>";


i++;
}
result=menu_option+"</select>";
document.getElementById("devices_del").innerHTML =result;

}

/* *******************************************return selected device *********************************** */



function selected_device_msg(){
xy=document.getElementById("dev1").value;
dernier_sig(xy);
der_pos(xy);
}
 function selected_device_del(){
xy=document.getElementById("dev5").value;
dernier_sig(xy);
der_pos(xy);
}

function selected_device_lock(){
xy=document.getElementById("dev2").value;
dernier_sig(xy);
der_pos(xy);
}
function selected_device_restore(){
xy=document.getElementById("dev3").value;
dernier_sig(xy);
der_pos(xy);
}
function selected_device_call(){
xy=document.getElementById("dev4").value;
dernier_sig(xy);
der_pos(xy);
}

/* ******************************************send msg******************************* */
function send_msg_enter(event) {
reset_msg_z();
    var char = event.which || event.keyCode;
  if(char==13){
   var msg_zone=document.getElementById("msg").value;  /*obtenir la valeur du zone de message*/
	if(msg_zone==""){
	document.getElementById("msg").style.background='#EF7F7F'; /*changement couleur de background*/
	event.preventDefault();
	}
	else{
	event.preventDefault();
    send_msg();
	}
  }
}
function reset_msg_z(){
document.getElementById("msg").style.background='#ecf0f1';
}
function send_msg(){
var mess=document.getElementById("msg").value;
var l_s_esp=mess.trim();
var lon=l_s_esp.length;
if((lon==0)||(mess=="")){
document.getElementById("msg").style.background='#EF7F7F';
document.getElementById("msg").value="";
}
else{
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //car janvier est 0!
var yyyy = today.getFullYear();
var full_date=yyyy+"-"+mm+"-"+dd;


var comm='{"tab":"commandes","op":"inser","commande":"afficher :'+mess+'","dat":"'+full_date+'","id_cl":"'+id_client+'","id_app":"'+xy+'"}';

$.getJSON("controler/main.php",{client_com:comm},show);
var mess=document.getElementById("msg").value="";
swal("Succées!", "Votre message est envoyé !", "success");
}
}
/* ********************************************************************************* */


/* *****************************************lock ******************************** */
function lock_enter(event) {
reset_lock();
    var char = event.which || event.keyCode;
  if(char==13){
   var msg_zone=document.getElementById("code_verr").value;  /*obtenir la valeur du zone de message*/
	if(msg_zone==""){
	document.getElementById("code_verr").style.background='#EF7F7F'; /*changement couleur de background*/
	event.preventDefault();
	}
	else{
	event.preventDefault();
    lock_screen();
	}
  }
}
function reset_lock(){
document.getElementById("code_verr").style.background='#ecf0f1';
document.getElementById("err").innerHTML ="";
}
function lock_screen(){
var today = new Date();
var app_cd1=document.getElementById("dev2").value;
var dd = today.getDate();
var mm = today.getMonth()+1; //car janvier est 0!
var yyyy = today.getFullYear();
var full_date=yyyy+"-"+mm+"-"+dd;
var cd=document.getElementById("code_verr").value;
var esp=cd.indexOf(' ');
var l_s_esp=cd.trim();
var lon=l_s_esp.length;
if((lon==0)||(cd=="")||(esp!=-1)){
document.getElementById("code_verr").style.background='#EF7F7F';
document.getElementById("code_verr").value="";
}
else{
if((cd.length>16)||(cd.length<4)){
//alert('longeur superieur � 16 ou inferieur � 4');
document.getElementById("err").innerHTML ="Le longeur du code doit etre entre 4 et 16 caract�res !";
document.getElementById("code_verr").style.background='#EF7F7F';
document.getElementById("code_verr").value="";
}
else{
var comm='{"tab":"commandes","op":"inser","commande":"verrouillage :'+cd+'","dat":"'+full_date+'","id_cl":"'+id_client+'","id_app":"'+app_cd1+'"}';
$.getJSON("controler/main.php",{client_com:comm},show);
document.getElementById("code_verr").value="";
swal("Succées!", "Votre commande est envoyé avec succées, le téléphone sera verrouillé !", "success");


}
}
}

/* ******************************************************************************* */ 
/* *****************************************delete all (dangreous)******************************** */









/* *****************************************recupereation ******************************** */
function reset_cadre(x){
x.style.border=" 1px solid #BFE5FF";
}
function recup(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //car janvier est 0!
var yyyy = today.getFullYear();
var full_date=yyyy+"-"+mm+"-"+dd;
var verif=false;
var type_media="";
var sms=document.getElementById("sms_box").checked==true;
var con=document.getElementById("cont_box").checked==true;
var vid=document.getElementById("video_box").checked==true;
var pho=document.getElementById("photo_box").checked==true;
var mus=document.getElementById("music_box").checked==true;
var all=document.getElementById("check_all").checked==true;
if(all==true){
type_media="tout";
verif=true;
}
else{
if(sms==true){
if(type_media==""){
type_media+="sms";
}
else{
type_media+=",sms";
}
verif=true;
}
if(con==true){
if(type_media==""){
type_media+="contacts";
}
else{
type_media+=",contacts";
}
verif=true;
}
if(vid==true){
if(type_media==""){
type_media+="videos";
}
else{
type_media+=",videos";
}
verif=true;
}
if(pho==true){
if(type_media==""){
type_media+="photos";
}
else{
type_media+=",photos";
}
verif=true;
}
if(mus==true){
if(type_media==""){
type_media+="music";
}
else{
type_media+=",music";
}
verif=true;
}
}
if(verif==false){
document.getElementById("mb").style.border=" 1px solid #EF7F7F";
document.getElementById("pb").style.border=" 1px solid #EF7F7F";
document.getElementById("vb").style.border=" 1px solid #EF7F7F";
document.getElementById("sb").style.border=" 1px solid #EF7F7F";
document.getElementById("cb").style.border=" 1px solid #EF7F7F";
document.getElementById("ab").style.border=" 1px solid #EF7F7F";
}
else{

var comm='{"tab":"commandes","op":"inser","commande":"recuperation :'+type_media+'","dat":"'+full_date+'","id_cl":"'+id_client+'","id_app":"'+xy+'"}';

$.getJSON("controler/main.php",{client_com:comm},show);
document.getElementById("tot_box").style.border=" 2px solid #BFE5FF";
swal("Succées!", "Votre commande est envoyé avec succées, les données sélectionnées seront récuperées ! consulter votre galerie plus tard pour les télécharger .", "success");
}


}

/* ******************************************************************************* */ 

/* ******************************* envoyer message ******************************** */

function env_msg_enter(event) {
reset_msg_zone();
    var char = event.which || event.keyCode;
  if(char==13){
   var msg_zone=document.getElementById("msg_ai").value;  /*obtenir la valeur du zone de message*/
	if(msg_zone==""){
	document.getElementById("msg_ai").style.background='#EF7F7F'; /*changement couleur de background*/
	event.preventDefault();
	}
	else{
	event.preventDefault();
    send_msg_admin();
	}
  }
}



function reset_msg_zone(){
document.getElementById("msg_ai").style.background='#ecf0f1';
}

function send_msg_admin(){

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //car janvier est 0!
var yyyy = today.getFullYear();
var full_date=yyyy+"-"+mm+"-"+dd;
var msg_cont=document.getElementById("msg_ai").value;
var msg_tail=msg_cont.length;
var i=0;
var x=msg_cont;
var nb_cote=0;
var nb_backslash=0;
var nb_d_cote=0;
var nb_point=0;
var nb_plus=0;
var long_sans_esp=msg_cont.trim();
var longu=long_sans_esp.length;
if((longu==0)||(msg_cont=="")){
document.getElementById("msg_ai").style.background='#EF7F7F';
document.getElementById("msg_ai").value="";
}
else{
while(i<msg_tail){
if(msg_cont[i]=="'"){
nb_cote++;
}
if(msg_cont[i]=="\\"){
nb_backslash++;
}
if(msg_cont[i]=='"'){
nb_d_cote++;
}
if(msg_cont[i]=='.'){
nb_point++;
}
if(msg_cont[i]=='+'){
nb_plus++;
}
i++;
}
var j=0;
var k=0;
var q=0;
var l=0;
var s=0;
while(j<nb_cote){
x=msg_cont.replace("'","&#39;");
msg_cont=x;
j++;
}
while(k<nb_backslash){
x=msg_cont.replace("\\","&#92;");
msg_cont=x;
k++;
}
while(q<nb_d_cote){
x=msg_cont.replace('"',"&#34;");
msg_cont=x;
q++;
}
while(l<nb_point){
x=msg_cont.replace('.',"&#46;");
msg_cont=x;
l++;
}
while(s<nb_plus){
x=msg_cont.replace('+',"&#43;");
msg_cont=x;
s++;
}


var ms='{"table":"messages","contenu":"'+x+'","date_env":"'+full_date+'","emetteur":"'+id_client+'","recepteur":"1"}';

$.getJSON("controler/main.php",{client_msg:ms});
document.getElementById("msg_ai").value="";
//alert('done');

run();
run();
run();






}
}
/* ********************************nombre contacts ************************* */
function nb_con(){
var taille=0;
try{
taille=contacts.length;
}catch(e){

}
document.getElementById("b_nb_con").innerHTML = taille+" Contact";
document.getElementById("f_nb_con").innerHTML = taille+" Contact";
 
}

/* ******************************* */
function nb_sms(){
 var taille=0;
 try{
 taille=sms.length;
}
catch(e){
}
document.getElementById("b_nb_sms").innerHTML = taille+" Sms";
document.getElementById("f_nb_sms").innerHTML = taille+" Sms";
 


}

/* ***********************************************envoyer un avi**************************** */

function env_avi(){

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //car janvier est 0!
var yyyy = today.getFullYear();
var full_date=yyyy+"-"+mm+"-"+dd;
var msg_al=document.getElementById("msg_alert").value;

var prob=document.getElementById("prob_type").value;
var ms_alert;
if(prob==0){
ms_alert='{"table":"avis","note":"'+note+'","type":"","message":"","date_env":"'+full_date+'","id_cli":"'+id_client+'"}';
}
if(prob==1){
ms_alert='{"table":"avis","note":"'+note+'","type":"Probleme de fonctionnement du site web","message":"'+msg_al+'","date_env":"'+full_date+'","id_cli":"'+id_client+'"}';
}
if(prob==2){
ms_alert='{"table":"avis","note":"'+note+'","type":"Probleme de fonctionnement de l application","message":"'+msg_al+'","date_env":"'+full_date+'","id_cli":"'+id_client+'"}';
}
$.getJSON("controler/main.php",{client_warn:ms_alert},show);


swal("Succées!", "Votre avi est envoyé avec succées, merci de donner un avi ,cesi peut nous aider à améliorer nos services !", "success");



}

/* ************************************************supp les contacts*********************************** */


function supp_sms(){
var tsm=0;
try{
tsm=sms.length;
}
catch(e){

}

if(tsm>0){


var d2='{"table":"sms","id_cli":"'+id_client+'","op":"delete"}';

$.getJSON("controler/main.php",{client_del:d2});
run();
run();
setTimeout(function(){lister_sms();},1000);
swal("Succées!", "Vos sms sont supprimées avec succées !", "success");
}
else{
swal("Erreur!", "Pas des sms à supprimer !", "error");
}

}

/* ***********************************changer le mot de passe *************************************** */

function chn_mdp(){
var an_mdp=mdp_cl;
var anc_mdp=document.getElementById("old_mdp").value;
var tape_new_mdp=document.getElementById("new_mdp").value;
var confirm_nv_mdp=document.getElementById("retype_new_mdp").value;
if((anc_mdp==an_mdp)&&(tape_new_mdp==confirm_nv_mdp)){
var u1='{"table":"clients","id_cli":"'+id_client+'","op":"update","champ":"Mot_de_passe","nv_valeur":"'+tape_new_mdp+'"}';
$.getJSON("controler/main.php",{client_update:u1});
swal("Succées!", "Votre mot de passe a été modifié avec succées, une déconnexion dera mise en place pour valider les modification sur votre compte !", "success");

setTimeout(function(){decon();},4000);
}
else{
document.getElementById("old_mdp").style.background='#EF7F7F';
document.getElementById("new_mdp").style.background='#EF7F7F';
document.getElementById("retype_new_mdp").style.background='#EF7F7F';

}

}
function rest_mdp_input(){
document.getElementById("old_mdp").style.background='#fff';
document.getElementById("new_mdp").style.background='#fff';
document.getElementById("retype_new_mdp").style.background='#fff';
}

/* *********************changer les informations de base du compte client*****************************/
function chn_infos(){
var nom_val=document.getElementById("nom_pren").value;
var email_val=document.getElementById("email").value;
var adress_val=document.getElementById("adr").value;
var mdp_val=document.getElementById("ch_info_mdp").value;
var tel_val=document.getElementById("telephone").value;
var valid=true;
if(mdp_val!=mdp_cl){
document.getElementById("ch_info_mdp").style.background='#EF7F7F';
valid=false;
}
if(nom_val==""){
document.getElementById("nom_pren").style.background='#EF7F7F';
valid=false;
}
if(email_val==""){
document.getElementById("email").style.background='#EF7F7F';
valid=false;
}
if(adress_val==""){
document.getElementById("adr").style.background='#EF7F7F';
valid=false;
}
if(tel_val==""){
document.getElementById("telephone").style.background='#EF7F7F';
valid=false;
}
if((mdp_val==mdp_cl)&&(valid==true)){
var u2='{"table":"clients","id_cli":"'+id_client+'","op":"update","champ":"Nom_prenom","nv_valeur":"'+nom_val+'"}';
$.getJSON("controler/main.php",{client_update:u2});
var u3='{"table":"clients","id_cli":"'+id_client+'","op":"update","champ":"Email","nv_valeur":"'+email_val+'"}';
$.getJSON("controler/main.php",{client_update:u3});
var u4='{"table":"clients","id_cli":"'+id_client+'","op":"update","champ":"Adresse","nv_valeur":"'+adress_val+'"}';
$.getJSON("controler/main.php",{client_update:u4});
var u5='{"table":"clients","id_cli":"'+id_client+'","op":"update","champ":"Tel","nv_valeur":"'+tel_val+'"}';
$.getJSON("controler/main.php",{client_update:u5});
swal("Succées!", "Vos informations personnelles sont modifiées avec succées !", "success");
}
}

function reset_pwd_info(){
document.getElementById("ch_info_mdp").style.background='#fff';
}
function reset_email_info(){
document.getElementById("email").style.background='#fff';
}
function reset_name_info(){
document.getElementById("nom_pren").style.background='#fff';
}
function reset_adr_info(){
document.getElementById("adr").style.background='#fff';
}
function reset_tel_info(){
document.getElementById("telephone").style.background='#fff';
}
/* *************************************************lister les photos*********************************** */
function lister_photos(){
document.getElementById("pc").innerHTML="<div></div>";
var taille_media=0;
var i=0;

try{
taille_media=media.length;
}
catch(e){
taille_media=0;
}
var num=0;

while(i<taille_media){
if((media[i].Type=="jpg")||(media[i].Type=="png")||(media[i].Type=="jpeg")){

document.getElementById("pc").innerHTML+="<div class='pho' style='float:left;'><image src='/BeeDroid/MEDIA/"+media[i].Nom_fichier+"."+media[i].Type+"' style='height:100%;width:100%;'></div>";


}
i++;
}



}
/* *************************************************lister les videos*********************************** */

function lister_videos(){
document.getElementById("vc").innerHTML="<div></div>";
var taille_media=0;
var i=0;

try{
taille_media=media.length;
}
catch(e){
taille_media=0;
}
var num=0;

while(i<taille_media){
if((media[i].Type=="3gp")||(media[i].Type=="mp4")||(media[i].Type=="3GP")||(media[i].Type=="mpeg")||(media[i].Type=="avi")){

document.getElementById("vc").innerHTML+="<div class='vi' style='float:left;'><video controls style='height:100%;width:100%;'><source type='video/"+media[i].Type+"' src='/BeeDroid/MEDIA/"+media[i].Nom_fichier+"."+media[i].Type+"'></video></div>";


}
i++;
}



}
/* *************************************************lister les musiques*********************************** */

function lister_music(){
document.getElementById("mc").innerHTML="<div></div>";
var taille_media=0;
var i=0;

try{
taille_media=media.length;
}
catch(e){
taille_media=0;
}
var num=0;

while(i<taille_media){
if((media[i].Type=="mp3")||(media[i].Type=="amr")||(media[i].Type=="midi")||(media[i].Type=="aac")||(media[i].Type=="wma")){

document.getElementById("mc").innerHTML+="<div class='mus'  style='float:left;'><div class='ctr'><div class='ic_mus'></div><div class='name_mus'>"+media[i].Nom_fichier+"."+media[i].Type+"</div></div><audio controls src='/BeeDroid/MEDIA/"+media[i].Nom_fichier+"."+media[i].Type+"' style='height:35px;width:99%;' /></div>";


}
i++;
}



}

function nb_media(){
var i=0;
var nb_mus=0;
var ta_media=0;
var nb_vid=0;
var nb_pho=0;
try{
ta_media=media.length;
}
catch(e){
ta_media=0;
}


while(i<ta_media){
if((media[i].Type=="mp3")||(media[i].Type=="amr")||(media[i].Type=="midi")||(media[i].Type=="aac")||(media[i].Type=="wma")){
nb_mus++;
}
if((media[i].Type=="3gp")||(media[i].Type=="mp4")||(media[i].Type=="3GP")||(media[i].Type=="mpeg")||(media[i].Type=="avi")){
nb_vid++;
}
if((media[i].Type=="jpg")||(media[i].Type=="png")||(media[i].Type=="jpeg")){
nb_pho++;
}
i++;
}

document.getElementById("nbp").innerHTML=nb_pho+" Fichier";
document.getElementById("nbv").innerHTML=nb_vid+" Fichier";
document.getElementById("nbm").innerHTML=nb_mus+" Fichier";

document.getElementById("fpf").innerHTML=nb_pho+" Fichier";
document.getElementById("fvf").innerHTML=nb_vid+" Fichier";
document.getElementById("fmf").innerHTML=nb_mus+" Fichier";

}

function calcul_taille(){
var alloc=2097152;
var i=0;  
var ta_media=0; 
var total=0;
 try{
ta_medias=media.length;
}
catch(e){
ta_medias=0;
} 
 while(i<ta_medias){
total+=parseInt(media[i].Taille);
i++;
} 

 var dispo=alloc-total;
  var go=(dispo/1024)/1024;
document.getElementById("stock").innerHTML=go.toFixed(2)+" Go";  
 }
/***********************************delete all photos*****************************************************/
var st_photos=false;
function delete_photos(){

var tai=0;
try{
 tai=media.length;
}catch(ex)
{
}
var i=0;
var etat=false;
while(i<tai)
{
if(media[i].Type=="png" ||media[i].Type=="jpeg" || media[i].Type=="jpg")
{
etat=true;
}
i++;
}

if(etat==true && st_photos==false)
{
swal({   title: "Est ce que vous êtes sur ?",   text: "Si vous choisissez cet option vos photos seront écrasées !",   type: "warning",   showCancelButton: true,   confirmButtonColor: "red",   confirmButtonText: "Oui, Ecraser !",   closeOnConfirm: false }, function(){   swal("Données supprimé !", "Vos photos sont supprimé définitivement.", "success"); 
document.getElementById("pc").innerHTML="";

 st_photos=true;
var main3='{"id":"'+id_client+'","type":"image"}';
	 
	 $.getJSON("./deleteall.php",{send:main3}); 

 });
  etat=false;
  
}
else{
swal("Erreur!", "Pas de photos à supprimer  !", "error");
}


}


/***********************************delete all video*****************************************************/
var st_video=false;
function delete_video(){

var tai=0;
try{
 tai=media.length;
}catch(ex)
{
}
var i=0;
var etat=false;
while(i<tai)
{
if(media[i].Type=="mp4" ||media[i].Type=="mpeg" || media[i].Type=="avi" || media[i].Type=="3gp"|| media[i].Type=="3GP")
{
etat=true;
}
i++;
}

if(etat==true && st_video==false)
{
swal({   title: "Est ce que vous êtes sur ?",   text: "Si vous choisissez cet option vos vidéos seront écrasées !",   type: "warning",   showCancelButton: true,   confirmButtonColor: "red",   confirmButtonText: "Oui, Ecraser !",   closeOnConfirm: false }, function(){   swal("Données supprimé !", "Vos vidéos sont supprimé définitivement.", "success"); 
document.getElementById("vc").innerHTML="<div> </div>"

 st_video=true;
var main3='{"id":"'+id_client+'","type":"video"}';
	 
	 $.getJSON("./deleteall.php",{send:main3}); 

 });
  etat=false;
   
 }
else{
swal("Erreur!", "Pas de vidéos à supprimer  !", "error");
}

 
 
 
}
/***********************************delete all music*****************************************************/
var st_music=false;
function delete_music(){

var tai=0;
try{
 tai=media.length;
}catch(ex){}

var i=0;
var etat=false;
while(i<tai)
{
if(media[i].Type=="mp3" ||media[i].Type=="aac" || media[i].Type=="amr")
{
etat=true;
}
i++;
}

if(etat==true && st_music==false)
{
swal({   title: "Est ce que vous êtes sur ?",   text: "Si vous choisissez cet option vos musiques seront écrasées !",   type: "warning",   showCancelButton: true,   confirmButtonColor: "red",   confirmButtonText: "Oui, Ecraser !",   closeOnConfirm: false }, function(){   swal("Données supprimé !", "Vos musiques sont supprimé définitivement.", "success"); 
document.getElementById("mc").innerHTML="<div> </div>"

 st_music=true;
var main3='{"id":"'+id_client+'","type":"music"}';
	 
	 $.getJSON("./deleteall.php",{send:main3}); 

 });
 
 etat=false;
   
 }
else{
swal("Erreur!", "Pas de musiques à supprimer  !", "error");
}

}
/* ****************************************************supp tout les données  ************************ */
function supp_donn(){
xy=appareils[0].Id_appareil;

  
swal( {   title: "Est ce que vous êtes sur ?",   text: "Si vous choisissez cet option vos données présents sur vortre appareil mobile seront écrasées d'une maniere définitive et ne seront jamais récuperé ! <br><br>Choisissez l'appareil <br><br> <div class='dev_test_load' id='devices_del'><select ><option>---- ---- --</option><option>---- ---- --</option><option>---- ---- --</option><option>---- ---- --</option><option>---- ---- --</option></select></div>",html: true ,type: "warning",   showCancelButton: true,   confirmButtonColor: "red",   confirmButtonText: "Oui, Ecraser !",   closeOnConfirm: false }, function(){  swal("Données supprimé !","Vos données présents sur votre appareil mobile sont supprimé définitivement.","success"); send_comm_del();});
load_devices_del();


}
 
function send_comm_del(){
 
var today = new Date();
 
var dd = today.getDate();
var mm = today.getMonth()+1; //car janvier est 0!
var yyyy = today.getFullYear();
var full_date=yyyy+"-"+mm+"-"+dd;
var comm='{"tab":"commandes","op":"inser","commande":"ecraser","dat":"'+full_date+'","id_cl":"'+id_client+'","id_app":"'+xy+'"}';
$.getJSON("controler/main.php",{client_com:comm},show);

}
/* *******************************download photos************************************************************************ */
function download_photos()
{

var comm='{"id":"'+id_client+'","type":"image"}';
$.getJSON("./MEDIA/downloadfiles.php",{download:comm});
 
 

}




/* *******************************download video************************************************************************ */
function download_video()
{

var comm='{"id":"'+id_client+'","type":"video"}';
$.getJSON("./MEDIA/downloadfiles.php",{download:comm});
 
 

}


/* *******************************download music************************************************************************ */
function download_music()
{

var comm='{"id":"'+id_client+'","type":"music"}';
$.getJSON("./MEDIA/downloadfiles.php",{download:comm});
 

}








