


 var table_avis=[];
 Date.prototype.getDayName = function() {
var d = ['Sunday','Monday','Tuesday','Wednesday',
'Thursday','Friday','Saturday'];
return d[this.getDay()];
}


var today = new Date();
 
document.getElementById("tit").innerHTML="Meilleur notes :"+"<br><br>"+today;

function showavis(json){
table_avis=json;
 
}

function avi(){
 
var aa_min,aa_max;
var mm_min,mm_max;
var jj_min,jj_max;
var min,max;

if(today.getDayName()=="Sunday")
{
 
today.setDate(today.getDate()-6);
jj_min=today.getDate();
mm_min=today.getMonth();
 

today = new Date();
today.setDate(today.getDate());
jj_max=today.getDate();
mm_max=today.getMonth();
 
 
}
else if(today.getDayName()=="Monday")
{
 
today.setDate(today.getDate());
jj_min=today.getDate();
mm_min=today.getMonth();
today = new Date();
today.setDate(today.getDate()+6);
jj_max=today.getDate();
mm_max=today.getMonth();
 
}
else if(today.getDayName()=="Tuesday")
{
 
today.setDate(today.getDate()-1);
jj_min=today.getDate();
mm_min=today.getMonth();
today = new Date();
today.setDate(today.getDate()+6);
jj_max=today.getDate();
mm_max=today.getMonth();
 
}
else if(today.getDayName()=="Wednesday")
{
 
today.setDate(today.getDate()-2);
jj_min=today.getDate();
mm_min=today.getMonth();
today = new Date();
today.setDate(today.getDate()+6);
jj_max=today.getDate();
mm_max=today.getMonth();
 
}
else if(today.getDayName()=="Thursday")
{
 
today.setDate(today.getDate()-3);
jj_min=today.getDate();
mm_min=today.getMonth();
today = new Date();
today.setDate(today.getDate()+6);
jj_max=today.getDate();
mm_max=today.getMonth();
 
}
else if(today.getDayName()=="Friday")
{

 
today.setDate(today.getDate()-4);
jj_min=today.getDate();
mm_min=today.getMonth();
today = new Date();
today.setDate(today.getDate()+6);
jj_max=today.getDate();
mm_max=today.getMonth();

 
}

else if(today.getDayName()=="Saturday")
{
 
today.setDate(today.getDate()-5);
jj_min=today.getDate();
mm_min=today.getMonth();
today = new Date();
today.setDate(today.getDate()+6);
jj_max=today.getDate();
mm_max=today.getMonth();
}


mm_max++;
mm_min++;
 
 
 
 
 var  main2='{"table":"avis","operation":"select","condition":"","valeur":""}';
 $.getJSON("../../controler/main.php",{client_requete:main2},showavis);
 
 
 
 var lun=0; var mar=0; var merc=0; var jeu=0; var vend=0; var sam=0; var dim=0;
setTimeout(function(){ 
var jj;
var mm; 
var i=0;
while(i<table_avis.length)
{
var str=new Date(table_avis[i].Date_envoi);
jj=parseInt(str.getDate());
 
mm=parseInt(str.getMonth()+1);
  

	if( (mm >= mm_min) && (mm <= mm_max)  )
	{         //alert("jj_min:"+jj_min+"  jj_max"+jj_max);
			if((jj>=jj_min) || (jj<=jj_max))
			{  if(parseInt(table_avis[i].Note)>3)
				{
			  if(str.getDayName()=="Sunday")
			   {dim++;  }
			if(str.getDayName()=="Monday")
			   {lun++;  }
			if(str.getDayName()=="Tuesday")
			   {mar++; }
			if(str.getDayName()=="Wednesday")
			   {merc++; }
			if(str.getDayName()=="Thursday")
			   {jeu++; }
			if(str.getDayName()=="Friday")
			   {vend++; }
			if(str.getDayName()=="Saturday")
			   {sam++; }
				}
			 
			}
	
	
		
	}
i++;
} 
//alert(lun+" "+mar+" "+merc+" "+jeu+" "+vend+" "+sam+" "+dim);  
},500); 
 
 
 
 
 
 
 
 
 
 
var c1 = document.getElementById("c1");
var parent = document.getElementById("p1");
c1.width = parent.offsetWidth - 40;
c1.height = parent.offsetHeight - 40;


setTimeout(function(){
var data1 = {
  labels : ["L","M","M","J","V","S","D"],
  datasets : [
    {
      fillColor : "rgba(255,255,255,.1)",
      strokeColor : "rgba(255,255,255,1)",
      pointColor : "#123",
      pointStrokeColor : "rgba(255,255,255,1)",
      data : [lun,mar,merc,jeu,vend,sam,dim]
    }
  ]
}

var options1 = {
  scaleFontColor : "rgba(255,255,255,1)",
  scaleLineColor : "rgba(255,255,255,1)",
  scaleGridLineColor : "transparent",
  bezierCurve : false,
  scaleOverride : true,
  scaleSteps : 5,
  scaleStepWidth : 100,
  scaleStartValue : 0
}

new Chart(c1.getContext("2d")).Line(data1,options1);


},1000);
}

avi();