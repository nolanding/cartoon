/* STS */
var navId = null;
var a1,a2,a3,a4,a5,a6,a7 = null;
var bOpen = false;
var nDigit = Number(1);
function setHref(){
	a2.setAttribute('href', "http://www.SevenThunderSoftware.com/ebooks/free-examples.php");
	a3.setAttribute('href', "http://www.SevenThunderSoftware.com/articles/tutorial-topics.php");
	a4.setAttribute('href', "http://www.SevenThunderSoftware.com/articles/3d/webgl-tutorials.php");
	a5.setAttribute('href', "http://www.SevenThunderSoftware.com/apps/apps.php");
	a6.setAttribute('href', "http://www.SevenThunderSoftware.com/3d-models/3d-collection.php");
	a7.setAttribute('href', "http://www.SevenThunderSoftware.com/art/graphics.php");
}
function unsetHref(){
	a2.setAttribute('href', "");
	a3.setAttribute('href', "");
	a4.setAttribute('href', "");
	a5.setAttribute('href', "");
	a6.setAttribute('href', "");
	a7.setAttribute('href', "");
}
function loadDigit(n){
	nDigit = n;
	var eDigit = document.getElementById(n.toString());
	if (eDigit != null){
		eDigit.style.backgroundColor = "#8888ff";
		eDigit.style.borderColor = "#0000ff";
		eDigit.style.marginLeft = "2px";
	}
}
/*
function nextProduct(){
	switch (nDigit){
	case 0:
		 window.location = "products2.php";
		break;
	case 1:
	 window.location = "products3.php";
	break;
	case 2:
	 window.location = "products4.php";
	break;
	case 3:
	 window.location = "products.php";
	break;
	}
}*/