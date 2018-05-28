<?php




/*************classe connexion********************************/
class connexion{
var $db;
function connexion(){
error_reporting(0);
/*$db=mysql_connect("mysql.hostinger.fr", "u788488735_bee", "beedroid");
mysql_select_db("u788488735_bee");*/
$db=mysql_connect("localhost", "root", "");
mysql_select_db("android");

}



function supp($table,$condition){
if($condition==""){
$sql="DELETE FROM $table";
}
else{
$sql="DELETE FROM $table WHERE $condition";
}

$res=mysql_query($sql);
return $res;
}

function insert($table,$valeurs){
$vals="";
$i=0; 
//print_r($valeurs);
$taille=count($valeurs);
$almost=$taille-1;
while($i<$taille){
if($i==$almost){
$vals = $vals."'".$valeurs[$i]."'";
}
else{
$vals = $vals."'".$valeurs[$i]."'".",";
}
$i++;

}
mysql_query('SET CHARACTER SET utf8mb4');
$sql="INSERT INTO $table values($vals)";
$res=mysql_query($sql);
return $res;
}





function afficher($table,$condition){
$rows = array();

if($condition==""){
mysql_query('SET CHARACTER SET utf8');
$sqldata = mysql_query("SELECT * FROM $table");
while($r = mysql_fetch_assoc($sqldata)) {
  $rows[] = $r;
}
}
else{
mysql_query('SET CHARACTER SET utf8');
$sqldata = mysql_query("SELECT * FROM $table WHERE $condition");
while($r = mysql_fetch_assoc($sqldata)) {
  $rows[] = $r;
}
}

return $rows;
}





function modifier($table,$champ,$valeur,$condition){

 if($champ=="1")
{
$sql="UPDATE $table SET  $valeur  WHERE $condition";
}
else if($condition==""){
$sql="UPDATE $table SET $champ = '$valeur' ";
}
else{
$sql="UPDATE $table SET $champ = '$valeur' WHERE $condition";
}
$res=mysql_query($sql);
return $res;
}


function fermer(){
mysql_close($db);
}

}







/*************************classe contact *********************/
 class contact{
var $Id_contact;
var $Nom;
var $Num;
var $Email;


function contact($id_contact,$nom,$num,$email){
$this->Id_contact = $id_contact;
$this->Nom = $nom;
$this->Num = $num;
$this->Email = $email;
}

 public function getNom() {
        return $this->Nom;
    }

    public function setNom($nom) {
        $this->Nom = $nom;
    }
public function getNum() {
        return $this->Num;
    }

    public function setNum($num) {
        $this->Num = $num;
    }
public function getEmail() {
        return $this->Email;
    }

    public function setEmail($email) {
        $this->Email = $email;
    }
public function getId_contact() {
        return $this->Id_contact;
    }

    public function setId_contact($id_contact) {
        $this->Id_contact = $id_contact;
    }
}
/****************************************************************/

/*************************classe sms *********************/
 class sms{
var $Id_sms;
var $Num;
var $Contenu;
var $Date_Envoi;

function sms($id_sms,$num,$contenu,$date){
$this->Id_sms = $id_sms;
$this->Num = $num;
$this->Contenu = $contenu;
$this->Date_Envoi = $date;
}
 public function getId_sms() {
        return $this->Id_sms;
    }

    public function setId_sms($id_sms) {
        $this->Id_sms = $id_sms;
    }

 public function getNum() {
        return $this->Num;
    }

    public function setNum($num) {
        $this->Num = $num;
    }
public function getContenu() {
        return $this->Contenu;
    }

    public function setContenu($contenu) {
        $this->Contenu = $contenu;
    }
public function getDate_Envoi() {
        return $this->Date_Envoi;
    }

    public function setDate_Envoi($date) {
        $this->Date_Envoi = $date;
    }

}
/****************************************************************/
/*************************classe position *********************/
 class position{
var $Id_position;
var $Longitude;
var $Latitude;
var $Id_Appareil;
var $Adresse_logique;
var $Date_position;

function position($id_pos,$long,$lat,$id_ap,$ip,$date){
$this->Id_position = $id_pos;
$this->Longitude = $long;
$this->Latitude = $lat;
$this->Id_Appareil = $id_ap;
$this->Adresse_logique = $ip;
$this->Date_position = $date;
}

public function getId_position() {
        return $this->Id_position;
    }

    public function setId_position($id_pos) {
        $this->Id_position = $id_pos;
    }

 public function getLongitude() {
        return $this->Longitude;
    }

    public function setLongitude($long) {
        $this->Longitude = $long;
    }
public function getLatitude() {
        return $this->Latitude;
    }

    public function setLatitude($lat) {
        $this->Latitude = $lat;
    }
	
	public function getId_Appareil() {
        return $this->Id_Appareil;
    }

    public function setId_Appareil($id_ap) {
        $this->Id_Appareil = $id_ap;
    }
	
	public function getAdresse_logique() {
        return $this->Adresse_logique;
    }

    public function setAdresse_logique($ip) {
        $this->Adresse_logique = $ip;
    }
	
	
public function getDate_position() {
        return $this->Date_position;
    }

    public function setDate_position($date) {
        $this->Date_position = $date;
    }

}
/****************************************************************/
/*************************classe appareil *********************/
 class appareil{
var $Id_appareil;
var $Adresse_physique;//adresse MAC
var $Type;
var $Modele;
var $Constructeur;
var $Positions;// liste des positions associées à cet appareil
var $Commandes;// liste des commandes associées à cet appareil

function appareil($id_app,$mac,$type,$modele,$constructeur,$positions,$commandes){
$this->Id_appareil = $id_app;
$this->Adresse_physique = $mac;
$this->Type = $type;
$this->Modele = $modele;
$this->Constructeur = $constructeur;
$this->Positions = $positions;
$this->Commandes = $commandes;
}
 public function getId_appareil() {
        return $this->Id_appareil;
    }

    public function setId_appareil($id_app) {
        $this->Id_appareil = $id_app;
    }

 public function getAdresse_physique() {
        return $this->Adresse_physique;
    }

    public function setAdresse_physique($mac) {
        $this->Adresse_physique = $mac;
    }
public function getType() {
        return $this->Type;
    }

    public function setType($type) {
        $this->Type = $type;
    }
public function getConstructeur() {
        return $this->Constructeur;
    }

    public function setConstructeur($constructeur) {
        $this->Constructeur = $constructeur;
    }
public function getPositions() {
        return $this->Positions;
    }

    public function setPositions($positions) {
        $this->Positions = $positions;  //ici positions est une liste des positions passé en parametre
    }

public function getCommandes() {
        return $this->Commandes;
    }

    public function setCommandes($commandes) {
        $this->Commandes = $commandes;  //ici commandes est une liste des commandes passé en parametre
    }		

}
/****************************************************************/
/*************************classe message *********************/
 class message{
var $Id_message;
var $Contenu;
var $Date_Envoi;
var $Emetteur;
var $Recepteur;
var $Vu;

function message($id_message,$contenu,$date,$emetteur,$recepteur,$vu){
$this->Id_message = $id_message;
$this->Contenu = $contenu;
$this->Date_Envoi = $date;
$this->Emetteur = $emetteur;
$this->Recepteur = $recepteur;
$this->Vu = $vu;
}
 public function getId_message() {
        return $this->Id_message;
    }

    public function setId_message($id_message) {
        $this->Id_message = $id_message;
    }
public function getContenu() {
        return $this->Contenu;
    }

    public function setContenu($contenu) {
        $this->Contenu = $contenu;
    }
public function getDate_Envoi() {
        return $this->Date_Envoi;
    }

    public function setDate_Envoi($date) {
        $this->Date_Envoi = $date;
    }
 public function getEmetteur() {
        return $this->Emetteur;
    }

    public function setEmetteur($emetteur) {
        $this->Emetteur = $emetteur;
    }
public function getRecepteur() {
        return $this->Recepteur;
    }

    public function setRecepteur($recepteur) {
        $this->Recepteur = $recepteur;
    }
	public function getVu() {
        return $this->Vu;
    }

    public function setVu($vu) {
        $this->Vu = $vu;
    }
	
}
/****************************************************************/

/*************************classe client *********************/
 class client{
var $Id_client;
var $Nom_prenom;
var $Tel;
var $Email;
var $Adresse;
var $Login;
var $Mot_de_passe;
var $Question_sec1;
var $Question_sec2;
var $Question_sec3;
var $Messages;  //liste de type message
var $Appareils; //liste de type appareil
var $Contacts;  //liste de type contact
var $Sms;       // liste de type sms
var $Avis;      // liste de type avi 
var $Medias;

function client($id_client,$nom_prenom,$tel,$email,$adr,$login,$mdp,$q1,$q2,$q3,$messages,$appareils,$contacts,$sms,$avis,$medias){
$this->Id_client = $id_client;
$this->Nom_prenom = $nom_prenom;
$this->Tel = $tel;
$this->Email = $email;
$this->Adresse = $adr;
$this->Login = $login;
$this->Mot_de_passe = $mdp;
$this->Question_sec1 = $q1;
$this->Question_sec2 = $q2;
$this->Question_sec3 = $q3;
$this->Messages = $messages;
$this->Appareils = $appareils;
$this->Contacts = $contacts;
$this->Sms = $sms;
$this->Avis = $avis;
$this->Medias = $medias;
}
 public function getId_client() {
        return $this->Id_client;
    }

    public function setId_client($id_client) {
        $this->Id_client = $id_client;
    }
public function getNom_prenom() {
        return $this->Nom_prenom;
    }

    public function setNom_prenom($nom_prenom) {
        $this->Nom_prenom = $nom_prenom;
    }
public function getTel() {
        return $this->Tel;
    }

    public function setTel($tel) {
        $this->Tel = $tel;
    }	
public function getEmail() {
        return $this->Email;
    }

    public function setEmail($email) {
        $this->Email = $email;
    }		
public function getAdresse() {
        return $this->Adresse;
    }

    public function setAdresse($adr) {
        $this->Adresse = $adr;
    }	
public function getLogin() {
        return $this->Login;
    }

    public function setLogin($login) {
        $this->Login = $login;
    }	
public function getMot_de_passe() {
        return $this->Mot_de_passe;
    }

    public function setMot_de_passe($mdp) {
        $this->Mot_de_passe = $mdp;
    }	
public function getQuestion_sec1() {
        return $this->Question_sec1;
    }

    public function setQuestion_sec1($q1) {
        $this->Question_sec1 = $q1;
    }		
public function getQuestion_sec2() {
        return $this->Question_sec2;
    }

    public function setQuestion_sec2($q2) {
        $this->Question_sec2 = $q2;
    }	
public function getQuestion_sec3() {
        return $this->Question_sec3;
    }

    public function setQuestion_sec3($q3) {
        $this->Question_sec3 = $q3;
    }	
public function getMessages() {
        return $this->Messages;
    }

    public function setMessages($messages) {
        $this->Messages = $messages;
    }	




	
public function getAppareils() {
        return $this->Appareils;
    }

    public function setAppareils($appareils) {
        $this->Appareils = $appareils;
    }	
public function getContacts() {
        return $this->Contacts;
    }

    public function setContacts($contacts) {
        $this->Contacts = $contacts;
    }	
public function getSms() {
        return $this->Sms;
    }

    public function setSms($sms) {
        $this->Sms = $sms;
    }	

public function getAvis() {
        return $this->Avis;
    }

    public function setAvis($avis) {
        $this->Avis = $avis;
    }		
public function getMedias() {
        return $this->Medias;
    }

    public function setMedias($medias) {
        $this->Medias = $medias;
    }			
}
/****************************************************************/
/*************************classe commande *********************/
 class commande{
var $Id_commande;
var $Commande;
var $Date_lancement;

function commande($id_com,$commande,$date){
$this->Id_commande = $id_com;
$this->Commande = $commande;
$this->Date_lancement = $date;
}

 public function getId_commande() {
        return $this->Id_commande;
    }

    public function setId_commande($id_com) {
        $this->Id_commande = $id_com;
    }
public function getCommande() {
        return $this->Commande;
    }

    public function setCommande($commande) {
        $this->Commande = $commande;
    }
public function getDate_lancement() {
        return $this->Date_lancement;
    }

    public function setDate_lancement($date) {
        $this->Date_lancement = $date;
    }

}
/****************************************************************/
/*************************classe avi *********************/
 class avi{
var $Id_avi;
var $Note;
var $Type_alerte;
var $Msg_alerte;
var $Date_envoi;
var $Id_client;

function avi($id_avi,$note,$type_alert,$msg_alert,$date_envoi,$id_client){
$this->Id_avi = $id_avi;
$this->Note = $note;
$this->Type_alerte = $type_alert;
$this->Msg_alerte = $msg_alert;
$this->Date_envoi = $date_envoi;
$this->Id_client = $id_client;
}

 public function getId_avi() {
        return $this->Id_avi;
    }

    public function setId_avi($id_avi) {
        $this->Id_avi = $id_avi;
    }
public function getNote() {
        return $this->Note;
    }

    public function setNote($note) {
        $this->Note = $note;
    }
public function getType_alerte() {
        return $this->Type_alerte;
    }

    public function setType_alerte($type_alerte) {
        $this->Type_alerte = $type_alerte;
    }
public function getMsg_alerte() {
        return $this->Msg_alerte;
    }

    public function setMsg_alerte($msg_alerte) {
        $this->Msg_alerte = $msg_alerte;
    }
public function getDate_envoi() {
        return $this->Date_envoi;
    }

    public function setDate_envoi($date_envoi) {
        $this->Date_envoi = $date_envoi;
    }
	
public function getId_client() {
        return $this->Id_client;
    }

    public function setId_client($id_client) {
        $this->Id_client = $id_client;
    }
}
/****************************************************************/

/*************************classe admin *********************/
 class administrateur{
var $Id_admin;
var $Nom_prenom;
var $Login;
var $Mot_de_passe;


function administrateur($id_admin,$nom_prenom,$login,$mdp){
$this->Id_admin = $id_admin;
$this->Nom_prenom = $nom_prenom;
$this->Login = $login;
$this->Mot_de_passe = $mdp;

}
 public function getId_admin() {
        return $this->Id_admin;
    }

    public function setId_admin($id_admin) {
        $this->Id_admin = $id_admin;
    }
public function getNom_prenom() {
        return $this->Nom_prenom;
    }

    public function setNom_prenom($nom_prenom) {
        $this->Nom_prenom = $nom_prenom;
    }
	
 public function getLogin() {
        return $this->Login;
    }

    public function setLogin($login) {
        $this->Login = $login;
    }
public function getMot_de_passe() {
        return $this->Mot_de_passe;
    }

    public function setMot_de_passe($mdp) {
        $this->Mot_de_passe = $mdp;
    }


}
/****************************************************************/
/*************************classe publicite *********************/
 class publicite{
var $Id_publicite;
var $Texte_publicite;
var $Url_image;


function publicite($id_pub,$texte_pub,$url_im){
$this->Id_publicite = $id_pub;
$this->Texte_publicite = $texte_pub;
$this->Url_image = $url_im;

}
 public function getId_publicite() {
        return $this->Id_publicite;
    }

    public function setId_publicite($id_pub) {
        $this->Id_publicite = $id_pub;
    }

 public function getTexte_publicite() {
        return $this->Texte_publicite;
    }

    public function setTexte_publicite($texte_pub) {
        $this->Texte_publicite = $texte_pub;
    }
public function getUrl_image() {
        return $this->Url_image;
    }

    public function setUrl_image($url_im) {
        $this->Url_image = $url_im;
    }


}
/****************************************************************/
/*************************classe demande de récupération *********************/
 class demande_recuperation{
var $Id_demande;
var $Nom_prenom;
var $Email; //adresse mail pour récuperer le mot de passe ulterieurement
var $Login;
var $Qestion_sec1; //questions de sécurité pour vérifier l'identité du client
var $Qestion_sec2;
var $Qestion_sec3;
var $Verif; //si le client à bien répondu au question de sécurité l etat de la demande sera valide 
function demande_recuperation($id_demande,$nom_prenom,$email,$login,$q1,$q2,$q3,$verif){
$this->Id_demande = $id_demande;
$this->Nom_prenom = $nom_prenom;
$this->Email = $email;
$this->Login = $login;
$this->Qestion_sec1 = $q1;
$this->Qestion_sec2 = $q2;
$this->Qestion_sec3 = $q3;
$this->Verif = $verif;
}
 public function getId_demande() {
        return $this->Id_demande;
    }

    public function setId_demande($id_demande) {
        $this->Id_demande = $id_demande;
    }
public function getNom_prenom() {
        return $this->Nom_prenom;
    }

    public function setNom_prenom($nom_prenom) {
        $this->Nom_prenom = $nom_prenom;
    }
 public function getEmail() {
        return $this->Email;
    }

    public function setEmail($email) {
        $this->Email = $email;
    }
public function getLogin() {
        return $this->Login;
    }

    public function setLogin($login) {
        $this->Login = $login;
    }
public function getQestion_sec1() {
        return $this->Qestion_sec1;
    }

    public function setQestion_sec1($q1) {
        $this->Qestion_sec1 = $q1;
    }	
public function getQestion_sec2() {
        return $this->Qestion_sec2;
    }

    public function setQestion_sec2($q2) {
        $this->Qestion_sec2 = $q2;
    }	
public function getQestion_sec3() {
        return $this->Qestion_sec3;
    }

    public function setQestion_sec3($q3) {
        $this->Qestion_sec3 = $q3;
    }		
public function getVerif() {
        return $this->Verif;
    }

    public function setVerif($verif) {
        $this->Verif = $verif;
    }		
	
	
}
/****************************************************************/


/* ***************************classe fichier ******************/

 class Fichier{
var $Id_fichier;
var $Nom_fichier;
var $Url; 
var $Type;
var $Taille; 
 
function Fichier($id_fichier,$nom_fichier,$url,$type,$taille){
$this->Id_fichier = $id_fichier;
$this->Nom_fichier = $nom_fichier;
$this->Url = $url;
$this->Type = $type;
$this->Taille = $taille;

}
 public function getId_fichier() {
        return $this->Id_fichier;
    }

    public function setId_fichier($id_fichier) {
        $this->Id_fichier = $id_fichier;
    }
public function getNom_fichier() {
        return $this->Nom_fichier;
    }

    public function setNom_fichier($nom_fichier) {
        $this->Nom_fichier = $nom_fichier;
    }
 public function getUrl() {
        return $this->Url;
    }

    public function setUrl($url) {
        $this->Url = $url;
    }
public function getType() {
        return $this->Type;
    }

    public function setType($type) {
        $this->Type = $type;
    }
public function getTaille() {
        return $this->Taille;
    }

    public function setTaille($taille) {
        $this->Taille = $taille;
    }	
	
}








 



?>