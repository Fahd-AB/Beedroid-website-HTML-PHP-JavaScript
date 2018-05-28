<?php

require_once 'liste.php'; //importation du liste.php
require_once 'classes.php'; //importation du liste.php





$c=new connexion();
$liste_clients=new liste();
$liste_administrateurs=new liste();
$liste_positions=new liste();
$liste_appareils=new liste();
$liste_messages_aide=new liste();
$liste_commandes=new liste();
$liste_contacts=new liste();
$liste_sms=new liste();
$liste_avis=new liste();
$liste_demandes=new liste();
$liste_publicitees=new liste();
$liste_media=new liste();


//obtenir la liste des clients 

$result_clients=$c->afficher("clients","");
$taille_clients=count($result_clients);
$i=0;
while($i<$taille_clients){



$idcl=$result_clients[$i]['Id_client'];







//recherche messages pour ce client
$t_Messages=Array();
$msgs=$c->afficher("messages"," (Emetteur = "."'".$idcl."') OR (Recepteur = '0') OR(Recepteur = "."'".$idcl."') ");
$t_msgs=count($msgs);
if($t_msgs==0){
$t_Messages=null;
}
else{
$e=0;
while($e<$t_msgs){
$m=new message($msgs[$e]['Id_message'],$msgs[$e]['Contenu'],$msgs[$e]['Date_Envoi'],$msgs[$e]['Emetteur'],$msgs[$e]['Recepteur'],$msgs[$e]['Vu']);
$t_Messages[$e]=$m;
$e++;
}
}

//fin du recherche messages pour ce client


//recherche medias pour ce client
$t_Media=Array();
$medias=$c->afficher("donnees"," Id_client = "."'".$idcl."'");
$t_M=count($medias);
if($t_M==0){
$t_Media=null;
}
else{
$hy=0;
while($hy<$t_M){
$media=new Fichier($medias[$hy]['Id_fichier'],$medias[$hy]['Nom_fichier'],$medias[$hy]['Url'],$medias[$hy]['Type'],$medias[$hy]['Taille']);
$t_Media[$hy]=$media;
$hy++;
}
}

//fin du recherche medias pour ce client









//recherche sms pour ce client
$t_Sms=Array();
$les_sms=$c->afficher("sms","Id_client = "."'".$idcl."'");
$t_les_sms=count($les_sms);
if($t_les_sms==0){
$t_Sms=null;
}
else{
$f=0;
while($f<$t_les_sms){
$sm=new sms($les_sms[$f]['Id_sms'],$les_sms[$f]['Num'],$les_sms[$f]['Contenu'],$les_sms[$f]['Date_Envoi']);
$t_Sms[$f]=$sm;
$f++;
}
}

//fin du recherche sms pour ce client

 



//recherche contacts pour ce client
$t_Contacts=Array();
$conts=$c->afficher("contacts","Id_client = "."'".$idcl."'");
$t_conts=count($conts);
if($t_conts==0){
$t_Contacts=null;
}
else{
$g=0;
while($g<$t_conts){
$cn=new contact($conts[$g]['Id_contact'],$conts[$g]['Nom'],$conts[$g]['Num'],$conts[$g]['Email']);
$t_Contacts[$g]=$cn;
$g++;
}
}
 
 
//fin du recherche contacts pour ce client




//recherche avis pour ce client
$t_Avis=Array();
$les_avis=$c->afficher("avis","Id_client = "."'".$idcl."'");
$t_les_avis=count($les_avis);
if($t_les_avis==0){
$t_Avis=null;
}
else{
$av=0;
while($av<$t_les_avis){
$o_Avis=new avi($les_avis[$av]['Id_avi'],$les_avis[$av]['Note'],$les_avis[$av]['Type_alerte'],$les_avis[$av]['Msg_alerte'],$les_avis[$av]['Date_envoi']);
$t_Avis[$av]=$o_Avis;
$av++;

}
}
 

 
//fin du recherche avis pour ce client

//obtenir la liste des appareils pour ce client
$t_Appareils=Array();
$apps=$c->afficher("appareil","Id_client = "."'".$idcl."'");
$t_apps=count($apps); 

$a=0;
while($a<$t_apps){

//chaque appareil possede divers positions on le range dans un tableau 
$li_pos=Array();
$idap=$apps[$a]['Id_appareil'];
$r_pos=$c->afficher("position","Id_appareil = "."'".$idap."'");
$t_p=count($r_pos);
if($t_p==0){
$li_pos=null;
}
else{
$b=0;
while($b<$t_p){
$ap_pos=new position($r_pos[$b]['Id_position'],$r_pos[$b]['Longitude'],$r_pos[$b]['Latitude'],$r_pos[$b]['Id_Appareil'],$r_pos[$b]['Adresse_logique'],$r_pos[$b]['Date_position']);
$li_pos[$b]=$ap_pos;
$b++;
}
}
      
//fin du remplissage de la liste des position de cet appareil

//chaque appareil possede divers commandes on le range dans un tableau 
$li_cmd=Array();
$idap=$apps[$a]['Id_appareil'];
$r_cmd=$c->afficher("commandes","Id_appareil = "."'".$idap."'");
$t_c=count($r_cmd);
if($t_c==0){
$li_cmd=null;
}
else{
$lc=0;
while($lc<$t_c){
$ap_cmd= new commande($r_cmd[$lc]['Id_commande'],$r_cmd[$lc]['Commande'],$r_cmd[$lc]['Date_lancement']);
$li_cmd[$lc]=$ap_cmd;
$lc++;
}
}
      
//fin du remplissage de la liste des commandes de cet appareil


$ap = new appareil($apps[$a]['Id_appareil'],$apps[$a]['Adresse_physique'],$apps[$a]['Type'],$apps[$a]['Modele'],$apps[$a]['Constructeur'],$li_pos,$li_cmd);
$t_Appareils[$a]=$ap;
$a++;
}
    
//fin recherche des appareils pour ce client



//fin du remplissage de la liste des informations de ce client


$client = new client($result_clients[$i]['Id_client'],$result_clients[$i]['Nom_prenom'],$result_clients[$i]['Tel'],$result_clients[$i]['Email'],$result_clients[$i]['Adresse'],$result_clients[$i]['Login'],$result_clients[$i]['Mot_de_passe'],$result_clients[$i]['Question_sec1'],$result_clients[$i]['Question_sec2'],$result_clients[$i]['Question_sec3'],$t_Messages,$t_Appareils,$t_Contacts,$t_Sms,$t_Avis,$t_Media);
$it=Array();
$liste_clients->inserer_queue($client,$c,$it);
$i++;
}
$aff_clients=$liste_clients->afficher_liste();
  
 
   
// liste des clients complete


//obtenir la liste des administrateurs 

$result_administrateur=$c->afficher("administrateur","");
$taille_administrateur=count($result_administrateur);
$j=0;
while($j<$taille_administrateur){
$administrateur = new administrateur($result_administrateur[$j]['Id_admin'],$result_administrateur[$j]['Nom_prenom'],$result_administrateur[$j]['Admin_login'],$result_administrateur[$j]['Admin_mot_de_passe']);
$liste_administrateurs->inserer_queue($administrateur,$c,null);
$j++;
}
$aff_administrateur=$liste_administrateurs->afficher_liste();


// liste des administrateurs complete



//obtenir la liste des positions 

$result_position=$c->afficher("position","");
$taille_position=count($result_position);
$h=0;
while($h<$taille_position){
$position = new position($result_position[$h]['Id_position'],$result_position[$h]['Longitude'],$result_position[$h]['Latitude'],$result_position[$h]['Id_Appareil'],$result_position[$h]['Adresse_logique'],$result_position[$h]['Date_position']);
$liste_positions->inserer_queue($position,$c,null);
$h++;
}
$aff_position=$liste_positions->afficher_liste();


// liste des positions complete

//obtenir la liste des appareils 

$result_appareils=$c->afficher("appareil","");
$taille_appareils=count($result_appareils);
$k=0;
while($k<$taille_appareils){

//chaque appareil possede divers positions on le range dans un tableau 
$liste_pos=Array();
$idApp=$result_appareils[$k]['Id_appareil'];
$pos=$c->afficher("position","Id_appareil = "."'".$idApp."'");
$t_pos=count($pos);
if($t_pos==0){
$liste_pos=null;
}
else{
$v=0;
while($v<$t_pos){
$app_pos=new position($pos[$v]['Id_position'],$pos[$v]['Longitude'],$pos[$v]['Latitude'],$pos[$v]['Id_Appareil'],$pos[$v]['Adresse_logique'],$pos[$v]['Date_position']);
$liste_pos[$v]=$app_pos;
$v++;
}
}
//fin du remplissage de la liste des position de cet appareil



$appareil = new appareil($result_appareils[$k]['Id_appareil'],$result_appareils[$k]['Adresse_physique'],$result_appareils[$k]['Type'],$result_appareils[$k]['Modele'],$result_appareils[$k]['Constructeur'],$liste_pos);
$liste_appareils->inserer_queue($appareil,$c,null);
$k++;
}
$aff_appareil=$liste_appareils->afficher_liste();


// liste des appareils  complete







//obtenir la liste des messages d'aide 


$result_messages=$c->afficher("messages","");
$taille_messages=count($result_messages);
$l=0;
while($l<$taille_messages){
$message12 = new message($result_messages[$l]['Id_message'],$result_messages[$l]['Contenu'],$result_messages[$l]['Date_Envoi'],$result_messages[$l]['Emetteur'],$result_messages[$l]['Recepteur'],$result_messages[$l]['Vu']);
$thi=Array();
$liste_messages_aide->inserer_queue($message12,$c,$thi);
$l++;
}
$aff_messages=$liste_messages_aide->afficher_liste();

// liste des messages d'aide complete


//obtenir la liste des contacts 

$result_contacts=$c->afficher("contacts","");
$taille_contacts=count($result_contacts);
$n=0;
while($n<$taille_contacts){
$contact = new contact($result_contacts[$n]['Id_contact'],$result_contacts[$n]['Nom'],$result_contacts[$n]['Num'],$result_contacts[$n]['Email']);
$liste_contacts->inserer_queue($contact,$c,null);
$n++;
}
$aff_contacts=$liste_contacts->afficher_liste();
// liste des contacts complete

//obtenir la liste des sms

$result_sms=$c->afficher("sms","");
$taille_sms=count($result_sms);
$o=0;
while($o<$taille_sms){
$sms = new sms($result_sms[$o]['Id_sms'],$result_sms[$o]['Num'],$result_sms[$o]['Contenu'],$result_sms[$o]['Date_Envoi']);
$liste_sms->inserer_queue($sms,$c,null);
$o++;
}
$aff_sms=$liste_sms->afficher_liste();

// liste des sms complete

//obtenir la liste des avis

$result_avis=$c->afficher("avis","");
$taille_avis=count($result_avis);
$p=0;
while($p<$taille_avis){
$avi = new avi($result_avis[$p]['Id_avi'],$result_avis[$p]['Note'],$result_avis[$p]['Type_alerte'],$result_avis[$p]['Msg_alerte'],$result_avis[$p]['Date_envoi'],$result_avis[$p]['Id_client']);
$thi124=Array();
$liste_avis->inserer_queue($avi,$c,$thi124);
$p++;
}

$aff_avis=$liste_avis->afficher_liste();

// liste des avis complete
 

//obtenir la liste des Demandes recupération

$result_demandes=$c->afficher("demandes","");
$taille_demandes=count($result_demandes);
$q=0;



while($q<$taille_demandes){
//verification de validite des informations 
$etat="";

$recherche_client=$c->afficher("clients","Login='".$result_demandes[$q]['Login']."'");
if($recherche_client==""){
$etat="PasValide";
}
else{
$nom_prenom=$result_demandes[$q]['Nom_prenom'];
$mail=$result_demandes[$q]['Email'];
$q1=$result_demandes[$q]['Q1'];
$q2=$result_demandes[$q]['Q2'];
$q3=$result_demandes[$q]['Q3'];
$vrai_nom_prenom=$recherche_client[0]['Nom_prenom'];
$vrai_email=$recherche_client[0]['Email'];
$vrai_q1=$recherche_client[0]['Question_sec1'];
$vrai_q2=$recherche_client[0]['Question_sec2'];
$vrai_q3=$recherche_client[0]['Question_sec3'];
if(($nom_prenom==$vrai_nom_prenom)&&($mail==$vrai_email)&&($q1==$vrai_q1)&&($q2==$vrai_q2)&&($q3==$vrai_q3)){
$etat="Valide";
}
else{
$etat="PasValide";
}
}
//fin de la verification


$demande41 = new demande_recuperation($result_demandes[$q]['Id_demande'],$result_demandes[$q]['Nom_prenom'],$result_demandes[$q]['Email'],$result_demandes[$q]['Login'],$result_demandes[$q]['Q1'],$result_demandes[$q]['Q2'],$result_demandes[$q]['Q3'],$etat);
$arr=Array();
$liste_demandes->inserer_queue($demande41,$c,$arr);
$q++;
}




$aff_demandes=$liste_demandes->afficher_liste();

// liste des Demandes recupération complete

//obtenir la liste des publicitées

$result_publicitees=$c->afficher("publicitees","");
$taille_publicitees=count($result_publicitees);
$u=0;

 
while($u<$taille_publicitees){
$publicite = new publicite($result_publicitees[$u]['Id_publicite'],$result_publicitees[$u]['Texte_publicite'],$result_publicitees[$u]['Url_image']);
$rt=Array();
$liste_publicitees->inserer_queue($publicite,$c,$rt);
$u++;
}
$aff_publicitees=$liste_publicitees->afficher_liste();

// liste des publicitées complete





// messages d aide



 

$mess="";
$mess=$_GET['client_msg'];
$msg_aid = json_decode($mess);
 $tab3= $msg_aid->{'table'};
$id_c = $msg_aid->{'emetteur'};
$conten= $msg_aid->{'contenu'};
$de= $msg_aid->{'date_env'};
$recept = $msg_aid->{'recepteur'}; 

 


if($tab3=='messages'){

$ms_ai = new message("",$conten,$de,$id_c,$recept,"0");
$th12=Array($id_c);
$liste_messages_aide->inserer_queue($ms_ai,$c,$th12);

}

// fin messages d aide
// update vu 


$vu_m="";
$vu_m=$_GET['vu_msg'];
$up_vu= json_decode($vu_m);
 $tab65= $up_vu->{'table'};
$id_c65 = $up_vu->{'id'};


 


if($tab65=="messages"){

$liste_messages_aide->modifier_objet($tab65,"1","Vu= CONCAT(Vu, ' ".$id_c65."')","Recepteur='0' AND NOT Vu LIKE '%".$id_c65."%'",$c);
$liste_messages_aide->modifier_objet($tab65,"Vu",$id_c65,"Recepteur='".$id_c65."'",$c);
}



//fin update vu
 //connexion
$req="";
$obj_client;
$req=$_GET['client_req'];
$o = json_decode($req);
$type_main = $o->{'type'};
$log= $o->{'login'};
$mdp= $o->{'mdp'};
/*$type_main = "connect";
$log= "f";
$mdp= "f";*/

if(($type_main=="connect")||($type_main=="reload")){
$obj_client=return_client($log,$mdp,$aff_clients);
$aff_14=$liste_clients->afficher_liste();
print json_encode($obj_client);
 

}


//fin connexion

// commande afficher un message sur l ecran et verrouillage et recuperation
$command_affiche="";
$command_affiche=$_GET['client_com'];
$com_aff = json_decode($command_affiche);
$tab1= $com_aff->{'tab'};
$oper= $com_aff->{'op'};
$comm= $com_aff->{'commande'};  
$date_e= $com_aff->{'dat'};
$id_client= $com_aff->{'id_cl'};
$id_appareil= $com_aff->{'id_app'};

if($tab1=='commandes'){
$comma = new commande("",$comm,$date_e);
$th1=Array($id_client,$id_appareil);
$liste_commandes->inserer_queue($comma,$c,$th1);
 
}
//fin commande afficher un message sur l ecran et verrouillage et recuperation
//ces trois operations sont en commun car ils concerne l'objet appareil



//  avis du client

$ms_av="";
$ms_av=$_GET['client_warn'];
$msg_av = json_decode($ms_av);
 $tab4= $msg_av->{'table'};
$id_c4 = $msg_av->{'id_cli'};
$ms_err= $msg_av->{'message'};
$note= $msg_av->{'note'};
$err_type= $msg_av->{'type'};
$date_av = $msg_av->{'date_env'}; 
 

if($tab4=='avis'){

$msg_aler = new avi("",$note,$err_type,$ms_err,$date_av,$id_c4);
$th13=Array();
$liste_avis->inserer_queue($msg_aler,$c,$th13);

}
// fin avis du client

// supprimer les contacts et les sms

$del="";
$del=$_GET['client_del'];
$op_del = json_decode($del);
$tab5= $op_del->{'table'};
$id_c5 = $op_del->{'id_cli'};
$ope= $op_del->{'op'};


if($tab5=='contacts'){
$o_client=recherch_client_par_id($id_c5,$aff_clients);
$contac=$o_client->getContacts();
$compt=0;
$tail_con=count($contac);
while($compt<$tail_con){
$liste_contacts->supprimer_noeud($contac[$compt],$tab5,"Id_client='"+$id_c5+"'",$c);
$compt++;
}
}
if($tab5=='sms'){
$o_client=recherch_client_par_id($id_c5,$aff_clients);
$sms_c=$o_client->getSms();
$comp=0;
$tail_s=count($sms_c);
while($comp<$tail_s){
$liste_sms->supprimer_noeud($sms_c[$comp],$tab5,"Id_client='"+$id_c5+"'",$c);
$comp++;
}
}



//fin supprimer contacts et sms


//changement de mot de passe

$req_up="";
$req_up=$_GET['client_update'];
$upd = json_decode($req_up);
$tab6= $upd->{'table'};
$id_c6 = $upd->{'id_cli'};
$opera= $upd->{'op'};
$ch=$upd->{'champ'};
$new_val=$upd->{'nv_valeur'};
if($tab6=='clients'){


$liste_clients->modifier_objet($tab6,$ch,$new_val,"Id_client=".$id_c6,$c);



}

// fin changement de mot de passe
 



function return_client($lo,$md,$liste){
$cl;
$cp=0;
$taille_cl=count($liste);
while($cp<$taille_cl){
if(($liste[$cp]->getLogin()==$lo)&&($liste[$cp]->getMot_de_passe()==$md)){
$cl=$liste[$cp];
break;
}
$cp++;     
}
return $cl;
}

function recherch_client_par_id($id,$liste){
$cl;
$cp=0;
$taille_cl=count($liste);
while($cp<$taille_cl){
if($liste[$cp]->getId_client()==$id){
$cl=$liste[$cp];
break;
}
$cp++;     
}
return $cl;
}


function return_appareil($id_app,$liste){
$app1;
$cpt=0;
$taille_app=count($liste);
while($cpt<$taille_app){
if($liste[$cpt]->getId_appareil()==$id_app){
$app1=$liste[$cpt];
break;
}
$cpt++;     
}
return $app1;
}	 


 
/******************************************************** Administrateur ***********************************************************************/ 
/*_________________________connexion administrateur_______________________________________________________________*/

$requete_connect_admin="";
$requete_connect_admin=$_GET['connect_admin'];
$connect_admin = json_decode($requete_connect_admin);
$verif_ad=$connect_admin->{'verif'};
$lg=$connect_admin->{'login_ad'};
$mpd_ad=$connect_admin->{'pass_ad'};
$test_connect_admin="stop";
if($verif_ad=="connect")
  
{       $obj_client1=null;
       $obj_client1=return_client($lg,$mpd_ad,$aff_clients);
		if(  ( ($aff_administrateur[0]->getLogin())==$lg ) && ( ($aff_administrateur[0]->getMot_de_passe())==$mpd_ad)  )
		{
		if( !isset($_SESSION['login'])  )
		{
		
		 $test_connect_admin="start";
		 session_start();
         $_SESSION['_connect_']="start";
		} 
		}
		
		if($obj_client1!=null)
		{
		
		if( !isset($_SESSION['_connect_']) )
		{
		$test_connect_admin="start1";
		session_start();
        $_SESSION['_connect_client']="start1";
		$_SESSION['login']=$lg;
		$_SESSION['pass']=$mpd_ad;
		}
		
	 
		}
echo json_encode($test_connect_admin);
}
if($verif_ad=="dec")
{
session_start ();
session_unset();
session_destroy();
 
}
if($verif_ad=="dec1")
{
session_start ();
session_unset();
session_destroy();
 
}

 



$requete_admin="";
$requete_admin=$_GET['admin_requete'];
$o_requete_admin = json_decode($requete_admin);
 
$table_requete_admin = $o_requete_admin->{'table'};
$op_requete_admin= $o_requete_admin->{'operation'};


$name_administrateur=$o_requete_admin->{'name'};
$login_administrateur=$o_requete_admin->{'login'};
$password_administrateur=$o_requete_admin->{'passe'};
$rrr="";
 
		
          
 
if($table_requete_admin=="administrateur")
{
		if($op_requete_admin=="select")
		 {
		 echo json_encode($aff_administrateur);
		 }
		 if($op_requete_admin=="update")
         {
		 $rrr=" Admin_login='".$login_administrateur."' , Admin_mot_de_passe='".$password_administrateur."' , Nom_prenom='".$name_administrateur."'";
		 
		  $res=$liste_administrateurs->modifier_objet("administrateur","1",$rrr,"Id_admin=0",$c);
		  
		  
		 
		  
		 }

}
 

/*_________________________________________________________________________________________________________________*/

 
 /*__________________________fonction return demande par id _________________________*/
 function return_demande_id($id,$aaa){
 
  
$taille_id=count($aaa);
$nb=0;
$demande_return;
 
 while($nb<$taille_id)
 {
		if($aaa[$nb]->getId_demande()==$id)
		{
		$demande_return=$aaa[$nb];
	  
	 break;
		}
 
 $nb++;
 }
 
 return $demande_return; 
 
 }
 
 
 /*___________________________________________________________________________________*/

/*_________________________________fonction return avis par id___________________________*/
function return_avis_id($id,$list)
{
$av;
$ta=count($list);
$f=0;
		while($f<$ta)
		{
		 if($list[$f]->getId_avi()==$id)
          {
		   $av=$list[$f];
		   break;
		  }		 
		$f++;
		}
return $av;
}


/*________________________________________fonction return message par id_______________________________________________*/

function return_message_id($id,$list)
{
$mess;
$ta=count($list);
$f=0;
		while($f<$ta)
		{
		 if($list[$f]->getId_message()==$id)
          {
		   $mess=$list[$f];
		   break;
		  }		 
		$f++;
		}
return $mess;
}



/*_______________________________________________________________________________________*/
 
 
 
$requete="";
$requete=$_GET['client_requete'];
$o_requete = json_decode($requete);
$table_requete = $o_requete->{'table'};
$op_requete= $o_requete->{'operation'};
$con_requete= $o_requete->{'condition'}; 
$rr=$o_requete->{'valeur'};
/*********** insertion client******************/
$requete_insert="";
$requete_insert=$_GET['client_requete_insert'];
$o_requete_insert = json_decode($requete_insert);

$table_requete_insert = $o_requete_insert->{'table'};
$op_requete_insert= $o_requete_insert->{'operation'};

$nom_prenom_ins=$o_requete_insert->{'nom_prenom'};
$mail_ins=$o_requete_insert->{'mail'};
$tel_ins=$o_requete_insert->{'tel'};
$adresse_ins=$o_requete_insert->{'adresse'};
$q1_ins=$o_requete_insert->{'q1'};
 $q2_ins=$o_requete_insert->{'q2'};
 $q3_ins=$o_requete_insert->{'q3'};
 $login_ins=$o_requete_insert->{'login'};
 $passe_ins=$o_requete_insert->{'passe'};

/*$table_requete ="demandes";
$op_requete="delete"; 
$con_requete="8"; 
$rr="";*/
  
 if($table_requete=="publicitees")
{         if($op_requete=="insert")
			{
			 
			$pub12=new publicite("",$rr,"");
			$ppp=Array();
			$liste_publicitees->inserer_queue($pub12,$c,$ppp);
			}
         

} 
  
  
if($table_requete=="clients")
 {
		 if(($op_requete=="select") && ($con_requete==""))
		 {
		 $aff_clients=$liste_clients->afficher_liste();
		  echo json_encode($aff_clients);
		 }
		 if ($op_requete=="delete")
		 {
		 $client_del=recherch_client_par_id($con_requete,$aff_clients);
		 echo json_encode($client_del);
		 $res=$liste_clients->supprimer_noeud($client_del,$table_requete,"Id_client=".$con_requete,$c);
		 }
		 if(($op_requete="update")&&($rr!=""))
		 {
		 $res=$liste_clients->modifier_objet("clients","1",$rr,$con_requete,$c);
		 }
		 
		 
}
if(($op_requete_insert=="insert")&&($table_requete_insert=="clients"))
		 {
		 $Nouv_client=new client("",$nom_prenom_ins,$tel_ins,$mail_ins,$adresse_ins,$login_ins,$passe_ins,$q1_ins,$q2_ins,$q3_ins,null,null,null,null,null,null);
		 $zaza=Array();
		 $res=$liste_clients->inserer_queue($Nouv_client,$c, $zaza);
		 } 
  
 
	 
 
if($table_requete=="messages")
{ 
		  if(($op_requete=="select") && ($con_requete==""))
		  {
			  echo json_encode($aff_messages);
		  }
		  if($op_requete=="delete")
				{
				$pp=return_message_id($con_requete,$aff_messages);
				$res=$liste_messages_aide->supprimer_noeud($pp,$table_requete,"Id_message=".$con_requete,$c);
				}
           if($op_requete=="insert")
           {
			$date = date("y-m-d");
			$tableau=new message("",$rr,$date,"1",$con_requete,"0");
			$frfr=Array();
			$res=$liste_messages_aide->inserer_queue($tableau,$c,$frfr);
		   }	

			if($op_requete=="insert_all")
					   {
						$date = date("y-m-d");
						$tableau=new message("",$rr,$date,"1",$con_requete,"0");
						$rere=Array();
						$res=$liste_messages_aide->inserer_queue($tableau,$c,$rere);
					   }		   
			if($op_requete=="update")
			{
			$liste_messages_aide->modifier_objet($table_requete,"Vu","1","Recepteur='1'",$c);
			}		

}
 
  
  
if($table_requete=="avis")
{
		if(($op_requete=="select") && ($con_requete==""))
				 {
				  $aff_avis=$liste_avis->afficher_liste();
				  echo json_encode($aff_avis);
				 }
		if($op_requete=="delete")
		{
		$pp=return_avis_id($con_requete,$aff_avis);
		$res=$liste_avis->supprimer_noeud($pp,$table_requete,"Id_avi=".$con_requete,$c);
		}		
		if($op_requete=="update")
		{
	     $xdr="Vu";
 
	$res=$liste_avis->modifier_objet($table_requete,"1","Msg_alerte= CONCAT(Msg_alerte, '  ".$xdr."')"," NOT Msg_alerte LIKE '' AND NOT Msg_alerte LIKE '%".$xdr."%'",$c);
		}	
} 
 
 
if($table_requete=="demandes") 
 { 
		if(($op_requete=="select")&&($con_requete==""))
		  {
		  echo json_encode ($aff_demandes);
		  }
        if($op_requete=="delete")
		{
		 $zzz=return_demande_id($con_requete,$aff_demandes);
		$rex=$liste_demandes->supprimer_noeud($zzz,$table_requete,"Id_demande = ".$con_requete,$c);
		
		}
		 
 
 }
 
 
 
 /*****************************demandes de recup*******************/

$dem_r="";
$dem_r=$_GET['client_request'];
$d_r = json_decode($dem_r);
$tab78= $d_r->{'table'};
$operation= $d_r->{'op'};
$log_re = $d_r->{'login'};
$nom_p=$d_r->{'name'};
$mai=$d_r->{'email'};
$ques1=$d_r->{'q1'};
$ques2=$d_r->{'q2'};
$ques3=$d_r->{'q3'};
$cpktn=0;
if($tab78=='demandes'){

$new_req = new demande_recuperation("",$nom_p,$mai,$log_re,$ques1,$ques2,$ques3,"N");
$dememe=Array("x");
$liste_demandes->inserer_queue($new_req,$c,$dememe);

}

 
 
 
 
 
?>