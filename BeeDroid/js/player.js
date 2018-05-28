
var AdresseMac="";
var data = [];
var jw_width = 640, jw_height = 360;
//var dern_ip="";

// Outputs some logs about jwplayer
function print(t, obj) {
    for (var a in obj) {
        if (typeof obj[a] === "object")
            print(t + '.' + a, obj[a]);
        else
            data[t + '.' + a] = obj[a];
    }
}

$(document).ready(function() {

    jwplayer('player').setup({
        wmode: 'transparent',
        width: jw_width,
        height: jw_height,
        stretching: 'exactfit'
    });

    $('#btn_start').click(function() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //car janvier est 0!
	var yyyy = today.getFullYear();
	var full_date=yyyy+"-"+mm+"-"+dd;
	var comm='{"tab":"commandes","op":"inser","commande":"startcall","dat":"'+full_date+'","id_cl":"'+id_client+'","id_app":"'+xy+'"}';
    $.getJSON("./controler/main.php",{client_com:comm});
	 
	 
	getMac(xy);
	var mc=AdresseMac;
	//var last_ip=dern_ip;
	//alert(mc);
	
        startPlayer("rtmp://192.168.1.11:1935/live/"+mc);
    });

    $('#btn_stop').click(function() {
	var today1 = new Date();
	var dd1 = today1.getDate();
	var mm1 = today1.getMonth()+1; //car janvier est 0!
	var yyyy1 = today1.getFullYear();
	var full_date1=yyyy1+"-"+mm1+"-"+dd1;
	var comm1='{"tab":"commandes","op":"inser","commande":"stopcall","dat":"'+full_date1+'","id_cl":"'+id_client+'","id_app":"'+xy+'"}';
    $.getJSON("./controler/main.php",{client_com:comm1});
        jwplayer('player').stop();
    });



    startPlayer("rtmp://192.168.1.11:1935/live/");
	jwplayer('player').stop();
});

// Starts the flash player
function startPlayer(stream) {

    jwplayer('player').setup({
        height: jw_height,
        width: jw_width,
        stretching: 'exactfit',
        sources: [{
                file: stream
            }],
        rtmp: {
            bufferlength: 3
        }
    });

    jwplayer("player").onMeta(function(event) {
        var info = "";
        for (var key in data) {
            info += key + " = " + data[key] + "<BR>";
        }
        print("event", event);
    });

    jwplayer('player').play();
}


/*
function der_ip(id){
var ap=0;
try{
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
var taille_p=0;
try{
taille_p=tab_pos1.length;
}
catch(e){}
var id1=0;
var i=0;
var ip="";

while(i<taille_p){
var current_pos=tab_pos1[i].Id_position;
if(current_pos>id1){
id1=current_pos;
ip=tab_pos1[i].Adresse_logique;
}
i++;
}
dern_ip=ip;
}

}
*/
function getMac(id){
var ap=0;
try{
ap=appareils.length;
}
catch(e){

}
var j=0;
var mac;
while(j<ap){
if(appareils[j].Id_appareil==id){
mac=appareils[j].Adresse_physique;
}
j++;
}
AdresseMac=mac;

}
