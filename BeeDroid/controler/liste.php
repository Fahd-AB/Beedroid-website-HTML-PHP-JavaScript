<?php

require_once 'classes.php';







class noeud
{

    public $contenu;
    public $suivant;
    
    

    function __construct($contenu)
    {
        $this->contenu = $contenu;
        $this->suivant = NULL;
    }
    
    function afficher_noeud()
    {
        return $this->contenu;
    }
}






class liste
{
    private $tete;
    private $queue;
    private $taille;
    
    
   
    function __construct()
    {
        $this->tete = NULL;
        $this->queue = NULL;
        $this->taille = 0;
    }

    public function est_vide()
    {
        return ($this->tete == NULL);
    }
    
    public function inserer_tete($contenu,$c)
    {
        $nouveau = new noeud($contenu);
        $nouveau->suivant = $this->tete;
        $this->tete = &$nouveau;
        
        if($this->queue == NULL)
            $this->queue = &$nouveau;
            
        $this->taille++;
    }
   





 
    public function inserer_queue($contenu,$c,$id)
    {  $table="";
	   $val=Array();
        if($this->tete != NULL)
        {
            $nouveau = new noeud($contenu);
            $this->queue->suivant = $nouveau;
            $nouveau->suivant = NULL;
            $this->queue = &$nouveau;
            $this->taille++;
        }
        else
        {
            $this->inserer_tete($contenu);
        }
 		
if($contenu instanceof client)
{
$table="clients";
 
$cli_id=$contenu->getId_client();

 
$exist=$c->afficher($table,"Id_client=".$cli_id);
 
 
$taille=count($exist);
 
		if($taille==0 )
		{  
		$val[0]="";
		$val[1]=$contenu->getNom_prenom();
		$val[2]=$contenu->getTel();
		$val[3]=$contenu->getEmail();
		$val[4]=$contenu->getAdresse();
		$val[5]=$contenu->getLogin();
		$val[6]=$contenu->getMot_de_passe();
		$val[7]=$contenu->getQuestion_sec1();
		$val[8]=$contenu->getQuestion_sec2();
		$val[9]=$contenu->getQuestion_sec3();
		}
 
}
 
if($contenu instanceof message)
{
$table="messages";
$exist=$c->afficher($table,"Id_message=".$contenu->getId_message());
		if(count($exist)==0)
		{

		$val[0]="";
		$val[1]=$contenu->getContenu();
		$val[2]=$contenu->getDate_Envoi();
		$val[3]=$contenu->getEmetteur();
		$val[4]=$contenu->getRecepteur();
		$val[5]=$contenu->getVu();
		
		}
}

if($contenu instanceof avi)
{
$table="avis";
$exist=$c->afficher($table,"Id_avi=".$contenu->getId_avi());
 
	if(count($exist)==0)
	{
	 

	$val[0]="";
	$val[1]=$contenu->getNote();
	$val[2]=$contenu->getType_alerte();
	$val[3]=$contenu->getMsg_alerte();
	$val[4]=$contenu->getDate_envoi();
	$val[5]=$contenu->getId_client();
 
	 
	
	}
}

if($contenu instanceof commande)
{
$table="commandes";
$exist=$c->afficher($table,"Id_commande=".$contenu->getId_commande());
		if(count($exist)==0)
		{
		$val[0]="";
		$val[1]=$contenu->getCommande();
		$val[2]=$contenu->getDate_lancement();
		$val[3]=$id[0]; 
		$val[4]=$id[1]; 
		} 

}





if(($contenu instanceof demande_recuperation)&&($id[0]=="x"))
{
$table="demandes";

		$val[0]="";
		$val[1]=$contenu->getNom_prenom();
		$val[2]=$contenu->getEmail();
		$val[3]=$contenu->getLogin();
		$val[4]=$contenu->getQestion_sec1();
		$val[5]=$contenu->getQestion_sec2();
		$val[6]=$contenu->getQestion_sec3();
		
}
 if($contenu instanceof publicite)
{
$table="publicitees";
$exist=$c->afficher($table,"Id_publicite=".$contenu->getId_publicite());
	if(count($exist)==0)
	{
	$val[0]="";
	$val[1]=$contenu->getTexte_publicite();
	$val[2]=$contenu->getUrl_image();
	}

} 
        if(count($val)!=0)
		{
		$result=$c->insert($table,$val);	
		}
		
    }
   
	
	
	
    public function supprimer_tete()
    {  
        $temp = $this->tete;
        $this->tete = $this->tete->suivant;
        if($this->tete != NULL)
            $this->taille--;
         $nouveau_tete=$this->tete;
        return $nouveau_tete;
    }
    
    public function supprimer_queue()
    {
        if($this->tete != NULL)
        {
            if($this->tete->suivant == NULL)
            {
                $this->tete = NULL;
                $this->taille--;
            }
            else
            {
                $precedent = $this->tete;
                $courant = $this->tete->suivant;
                
                while($courant->suivant != NULL)
                {
                    $precedent = $courant;
                    $courant = $courant->suivant;
                }
                
                $precedent->suivant = NULL;
                $this->taille--;
            }
        }
    }
    
    public function supprimer_noeud($cle,$tab,$con,$c)
    {
        $courant = $this->tete;
        $precedent = $this->tete;
        $result;
	   
        while($courant->contenu != $cle)
        {
            if($courant->suivant == NULL)
                return NULL;
            else
            {
                $precedent = $courant;
                $courant = $courant->suivant;
            }
        }

        if($courant == $this->tete)
         {
              if($this->taille == 1)
               {
                  $this->queue = $this->tete;
               }
               $this->tete = $this->tete->suivant;
        }
        else
        {
            if($this->queue == $courant)
            {
                 $this->queue = $precedent;
             }
            $precedent->suivant = $courant->suivant;
        }
        $this->taille--;  
		
		$result=$c->supp($tab,$con);
	
		
		return $result;
    }
    
	
	
	
    public function recherche($cle)
    {
        $courant = $this->tete;
        while($courant->contenu != $cle)
        {
            if($courant->suivant == NULL)
                return null;
            else
                $courant = $courant->suivant;
        }
        return $courant->contenu;
    }
    
	
	
	
    public function noeud_contenu($position)
    {
        if($position <= $this->count)
        {
            $courant = $this->tete;
            $pos = 1;
            while($pos != $position)
            {
                if($courant->suivant == NULL)
                    return null;
                else
                    $courant = $courant->suivant;
                    
                $pos++;
            }
            return $courant->contenu;
        }
        else
            return NULL;
    }
    
	
	
    public function liste_taille()
    {
        return $this->taille;
    }
    
	
    public function afficher_liste()
    {
        $l = array();
        $courant = $this->tete;
        
        while($courant != NULL)
        {
            array_push($l, $courant->afficher_noeud());
            $courant = $courant->suivant;
        }
        return $l;
    }
    
  
	public function modifier_objet($tab,$champ,$nv_val,$cond,$c){
	    $result=$c->modifier($tab,$champ,$nv_val,$cond);
	}
	
	
}

 
?>