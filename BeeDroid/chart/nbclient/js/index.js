
 var nb_Tunisie=0;
 var nb_Algerie=0;
 var nb_Maroc=0;
 var nb_Qatar=0;
 var nb_Turquie=0;
 var nb_France=0;
 var nb_Allemagne=0;
 var nb_Italie=0;
 var nb_Russie=0;
 var nb_Australie=0;
 var nb_Bresil=0;
 var nb_Chine=0;
 var nb_Etats_Unis=0;
 var nb_Portogual=0;
 var nb_Belqique=0;
 var nb_Espagne=0;
 var nb_Finlande=0;
var table_client=new Array();
function showclient(json){
 
  table_client=json;
 var adresse="";
 var taille=table_client.length;
 var i=0;
 
 while(i<taille)
 {
adresse=table_client[i].Adresse.toLowerCase();
 if(adresse.includes("tunisie"))
	 {
	 nb_Tunisie++;
	 }
 if(adresse.includes("algerie"))
	 {
	 nb_Algerie++;
	 }	  
 if(adresse.includes("maroc"))
	 {
	 nb_Maroc++;
	 }	  
if(adresse.includes("qatar"))
	 {
	 nb_Qatar++;
	 }
if(adresse.includes("turquie"))
	 {
	 nb_Turquie++;
	 }
	 
if(adresse.includes("france"))
	 {
	 nb_France++;
	 }
if(adresse.includes("allemagne"))
	 {
	 nb_Allemagne++;
	 }
if(adresse.includes("italie"))
	 {
	 nb_Italie++;
	 }
if(adresse.includes("russie"))
	 {
	 nb_Russie++;
	 }
if(adresse.includes("australie"))
	 {
	 nb_Australie++;
	 }
if(adresse.includes("bresil"))
	 {
	 nb_Bresil++;
	 }
if(adresse.includes("chine"))
	 {
	 nb_Chine++;
	 }
if(adresse.includes("chine"))
	 {
	 nb_Chine++;
	 }
if(adresse.includes("etats unis"))
	 {
	 nb_Etats_Unis++;
	 }
if(adresse.includes("portogual"))
	 {
	 nb_Portogual++;
	 }
if(adresse.includes("belgique"))
	 {
	 nb_Belqique++;
	 }
if(adresse.includes("espagne"))
	 {
	 nb_Espagne++;
	 }

if(adresse.includes("finlande"))
	 {
	 nb_Finlande++;
	 }



	 
 i++;
 }
  
  afficher();
 }
 
 
var main0='{"table":"clients","operation":"select","condition":"","valeur":""}';
$.getJSON("../../controler/main.php",{client_requete:main0},showclient);
 
 
 
 
 
 

 
function afficher(){



var chart;
var graph;
var categoryAxis;

var chartData = 
[
  {
	  "country": "Tunisie",
		"visits": nb_Tunisie,
    "color": "#FF0F00"
	},
	{
		"country": "Algérie",
		"visits": nb_Algerie,
    "color": "#FF6600"
	}, 
	{
		"country": "Maroc",
		"visits": nb_Maroc,
    "color": "#FF9E01"
	}, 
	{
	  "country": "Qatar",
		"visits": nb_Qatar,
    "color": "#FCD202"
	}, 
	{
		"country": "Turquie",
		"visits": nb_Turquie,
    "color": "#F8FF01"
	}, 
	{
		"country": "France",
		"visits": nb_France,
    "color": "#B0DE09"
	}, 
	{
		"country": "Allemagne",
		"visits": nb_Allemagne,
    "color": "#04D215"
    
	}, 
	{
		"country": "Italie",
		"visits": nb_Italie,
    "color": "#0D8ECF"
	}, 
	{
		"country": "Russie",
		"visits": nb_Russie,
    "color": "#0D52D1"
	}, 
	{
		"country": "Australie",
		"visits": nb_Australie,
    "color": "#2A0CD0"
	}, 
	{
		"country": "Brésil",
		"visits": nb_Bresil,
    "color": "#8A0CCF"
	}, 
	{
		"country": "Chine",
		"visits": nb_Chine,
    "color": "#CD0D74"
	}, 
	{
		"country": "États-Unis",
		"visits": nb_Etats_Unis,
    "color": "#754DEB"
	}, 
	{
	  "country": "Portogual",
		"visits": nb_Portogual,
    "color": "#DDDDDD"
	}, 
	{
		"country": "Belqique",
		"visits": nb_Belqique,
    "color": "#999999"
	}, 
	{
		"country": "Espagne",
		"visits": nb_Espagne,
    "color": "#333333"
	}, 
	{
		"country": "Finlande",
		"visits": nb_Finlande,
    "color": "#000000"
	}
];


 
  chart = new AmCharts.AmSerialChart();
	chart.dataProvider = chartData;
	chart.categoryField = "country";
  chart.position = "left";
  chart.angle = 30;
	chart.depth3D = 15;
  chart.startDuration = 1;
  
  categoryAxis = chart.categoryAxis;
	categoryAxis.labelRotation = 45;
  categoryAxis.dashLength = 5; //
  categoryAxis.gridPosition = "start";
  categoryAxis.autoGridCount = false;
	categoryAxis.gridCount = chartData.length;
  
    
	graph = new AmCharts.AmGraph();
	graph.valueField = "visits";
	graph.type = "column";	
  graph.colorField = "color";
	graph.lineAlpha = 0;
  graph.fillAlphas = 0.8;
  graph.balloonText = "[[category]]: <b>[[value]]</b>";
  
  chart.addGraph(graph);
  
  chart.write('chartdiv');
 

}

 

 