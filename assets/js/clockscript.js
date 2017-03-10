window.onload = function(){
window.setInterval(
function(){
var d = new Date();
document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
, 1000);
}

function a(){
	var now = new Date();
	var hou = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
	var hh = document.getElementById("hours").value;
	var mm = document.getElementById("minutes").value;
	var ss = document.getElementById("seconds").value;
	if(hh == hou && min == mm && sec == ss){
		alert("It's Time!");
	}
}

function b(){
	if(document.getElementById("hours").style.display == "none"){
		document.getElementById("hours").style.display = "inline";
		document.getElementById("minutes").style.display = "inline";
		document.getElementById("seconds").style.display = "inline"; 
	}else {
		document.getElementById("hours").style.display = "none";
		document.getElementById("minutes").style.display = "none";
		document.getElementById("seconds").style.display = "none";
	}
} 