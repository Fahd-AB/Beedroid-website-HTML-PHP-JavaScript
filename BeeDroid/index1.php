<?php
/**
* Multi file upload example
* @author Resalat Haque
* @link http://www.w3bees.com/2013/02/multiple-file-upload-with-php.html
**/

$valid_formats = array("jpg", "png", "gif", "bmp","jpeg","JPG","PNG","GIF","BMP","JPEG");
$max_file_size = 2048*1000; //100 kb
$path = "slider/"; // Upload directory
$count = 0;

if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST"){
	// Loop $_FILES to execute all files
	foreach ($_FILES['files']['name'] as $f => $name) {     
	    if ($_FILES['files']['error'][$f] == 4) {
	        continue; // Skip file if any error found
	    }	       
	    if ($_FILES['files']['error'][$f] == 0) {	           
	        if ($_FILES['files']['size'][$f] > $max_file_size) {
	            $message[] = "$name is too large!.";
	            continue; // Skip large files
	        }
			elseif( ! in_array(pathinfo($name, PATHINFO_EXTENSION), $valid_formats) ){
				$message[] = "$name is not a valid format";
				continue; // Skip invalid file formats
			}
	        else{ // No error found! Move uploaded files 
	            if(move_uploaded_file($_FILES["files"]["tmp_name"][$f], $path.$name)) {
	            	$count++; // Number of successfully uploaded files
	            }
	        }
	    }
	}
}








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

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Multiple File Upload with PHP - Demo</title>
<style type="text/css">
a{ text-decoration: none; color: #333}
h1{ font-size: 1.9em; margin: 10px 0}
p{ margin: 8px 0}
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-font-smoothing: antialiased;
	-o-font-smoothing: antialiased;
	font-smoothing: antialiased;
	text-rendering: optimizeLegibility;
}
body{
 
	 
	 
	width: 100%;
	height:200px;
	 
}
.wrap{
	width: 100%;
   text-align:center;

}
.status{
	/*display: none;*/
	padding: 8px 35px 8px 14px;
	margin: 20px 0;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	color: #468847;
	background-color: #dff0d8;
	border-color: #d6e9c6;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
}
 
</style>
<style>
.upload_container 
{
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 96%;
  height: 400px;
  margin-top:0;
  padding: 20px;
  overflow: hidden;
   
  -webkit-border-radius: 4px;
  border-radius: 4px;
  font: normal 16px/1 "Times New Roman", Times, serif;
  color: rgba(255,255,255,1);
  
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
 
   
}



.upload_container_image {
 float:center;
   
  width: 98%;
  height: 350px;
 margin-left:auto;
 margin-right:auto;
  overflow: scroll;
  border: 1px dashed rgba(0,0,0,0.38);
  font: normal 16px/1 "Times New Roman", Times, serif;
  color: rgba(255,255,255,1);
  text-align: justify;
   
   
   
}






 div.upload {
 cursor:pointer;
    width: 40px;
	margin-top:5px;
	float:right;
    height: 40px;
	margin-right:10px;
 background: url(1.png) no-repeat 0px 0px; 
 
    overflow: hidden;
}

div.upload input {
    display: block !important;
    width: 157px !important;
    height: 57px !important;
    opacity: 0 !important;
    overflow: hidden !important;
}



 .input_file {
  display: inline-block;
  width:93%;
  height:33px;
  margin-top:5px;
  margin-left:0px;
   
  padding: 10px 20px;
  border: 1px solid #b7b7b7;
  -webkit-border-radius: 3px;
  border-radius: 2px;
  font: normal 16px/normal "Times New Roman", Times, serif;
  color: rgba(0,142,198,1);
  -o-text-overflow: clip;
  text-overflow: clip;
  background: rgba(252,252,252,1);
   
}



.image_container {
 
 float:left;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 160px;
  height: 99px;
  padding: 10px;
  overflow: hidden;
  border: none;
  font: normal 16px/1 "Times New Roman", Times, serif;
  color: rgba(255,255,255,1);
  text-align: center;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  -webkit-box-shadow: 5px 7px 9px 0 rgba(180,180,180,1) ;
  box-shadow: 5px 7px 9px 0 rgba(180,180,180,1) ;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
}


.delete_image{
float:right;
cursor:pointer;


}

.coolbutton{
 height:30px;
 width:100px;
 margin-left:auto;
 margin-right:auto;
 margin-top:5px;
 border:2px solid #243040;
 color:#243040;
 background:#fff;
 outline:none;
 }
 .coolbutton:hover{
 background:#243040;
  border:2px solid #fff;
  color:#fff;
  cursor:pointer;
  outline:none;
 }


</style>
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
 <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
</head>
<body>
	<div class="wrap">
		
		<?php
		# error messages
		if (isset($message)) {
			foreach ($message as $msg) {
				//printf("<p class='status'>%s</p></ br>\n", $msg);
			}
		}
		# success message
		if($count !=0){
			//printf("<p class='status'>%d files added successfully!</p>\n", $count);
		}
		?>
		 
		<br />
		<br />
		<!-- Multiple file upload html form-->
		<form action="" method="post" enctype="multipart/form-data">
			<!-- <input type="file" name="files[]" multiple="multiple" accept="image/*">-->
		
			
<div  class="upload_container">
<div id="id_container_image" class="upload_container_image">


</div>


<input id="id_in" type="text" class="input_file" placeholder="Pas d'image" >


<div class="upload">
<input id="image" type="file" multiple=="multiple" size="60" name="files[]" accept="image/*" onchange="getfiles()" />
</div>
 
</div>	
	<input type="submit" class="coolbutton" value="Upload">		
			 
		</form>
</div>

 
</body>

<script>
<?php echo "var tab = '".implode("<>", $x)."'.split('<>');"; ?>
	 
	for (var i = 0; i < tab.length; i++) {
	
	document.getElementById("id_container_image").innerHTML+="<div  id='"+tab[i]+"' class='image_container'><img src='slider/"+  tab[i]  +"' width='100%' height='90%'> <img id='"+tab[i]+"' class='delete_image' onClick='remov(this);' src='delete.png'> </div> ";
	}
/*var tableau = "<?php  echo json_encode($x);?>";
alert(tableau[1]);*/

function getfiles()
{

var x = document.getElementById("image");
var txt = "";
if ('files' in x) {
    if (x.files.length == 0) {
        txt = "Select one or more files.";
    } else {
        for (var i = 0; i < x.files.length; i++) {
            txt += "<br><strong>" + (i+1) + ". file</strong><br>";
            var file = x.files[i];
            if ('name' in file) {
                txt += "name: " + file.name + "<br>";
            }
            if ('size' in file) {
                txt += "size: " + file.size + " bytes <br>";
            }
        }
    }
} 


 
}

function remov(r)
{
  var main3='{"file":"'+r.id+'"}';
$.getJSON("delete.php",{send:main3});
var parent = document.getElementById("id_container_image");
var child = document.getElementById(r.id);
parent.removeChild(child);
}

 

 
 













function handleFileSelect() {
    //Check File API support
    if (window.File && window.FileList && window.FileReader) {

        var files = event.target.files; //FileList object
        var output = document.getElementById("result");

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            //Only pics
            if (!file.type.match('image')) continue;

            var picReader = new FileReader();
            picReader.addEventListener("load", function (event) {
                var picFile = event.target;
				document.getElementById("id_container_image").innerHTML+="<div  id='"+picFile.name+"' class='image_container'><img src='"+  picFile.result  +"' width='100%' height='90%'> <img id='"+picFile.name+"' class='delete_image' onClick='remov(this);' src='delete.png'> </div> ";
				
				
				 
            });
            //Read the image
            picReader.readAsDataURL(file);
        }
    } else {
        console.log("Your browser does not support File API");
    }
}

document.getElementById('image').addEventListener('change', handleFileSelect, false);























</script>



</html>