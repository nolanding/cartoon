var nSought = Number(0);

var nIdx = Number(0);

var nScore = Number(0);

var eScore = null;

var eFind = null;

var aRE = null;

var auWrong = null;
var rect = null;
var auOver = null;

// Currently playing
// audio tag with
// sound files.
var auCurrent = null;

var bPlaying = false;

function loadInteractive(arrayRC){

	aRE = arrayRC;

	auWrong = document.getElementById('auWrong');
	auOver = document.getElementById('auOver');

	eScore = document.getElementById('eScore');
	eFind = document.getElementById('eFind');

	canvas.addEventListener
	(
	'click',
	listenerTap,
	false
	);
}

/**
 * Respond to
 * tap by player.
* @param ev:Event Object
 */
function listenerTap(ev){

	if(bPlaying == false){
		eFind.innerHTML = "Tap the <q>Play</q> button to begin!"
		return;
	}

 ev.preventDefault();
rect = canvas.getBoundingClientRect();
 var nX = ev.clientX - rect.left;

 var nY = ev.clientY - rect.top;

 getTapped(nX,nY);

}

/**
 * Find the
 * selected item.
* @param nX: Tapped X coordinate
* @param nY: Tapped Y coordinate
 */
function getTapped(nX,nY){

var pX = nLastDivisionX + (nX * nScale);

var pY = nY * nScale;

var rc = null;

for (var i = 0; i < aRE.length; i++){

 var r = aRE[i];

 if ((pX > r.p1.x &&  pX < r.p2.x) &&
     (pY > r.p1.y && pY < r.p2.y)){

  rc = r;

  break;

 }

}

 getTappedInfo(rc);

}

/**
* Display information
* about the tapped
* item.
* @param re:Rectangle
*/
function getTappedInfo(re){

 if (nIdx >= aRE.length){

  eScore.innerHTML = "Game Over! Tap the <q>Play</q> button to play again!";
  setAudio(auOver);
  bPlaying = false;

  return;
 }

 if(re != null){

  if (re.nSought == nSought){

   eScore.innerHTML = "You found the "+re.sName+"!";

   eScore.innerHTML += " Your score increases 100 points!";

   nScore += 100;


  }

  else {

   eScore.innerHTML = "You found the "+re.sName+".";

   eScore.innerHTML += " You were looking for the ";

   eScore.innerHTML += aRE[nIdx].sName+".";

   setAudio(auWrong);

  }
 }
 else{

  eScore.innerHTML = "You didn't select the ";

  eScore.innerHTML += aRE[nIdx].sName+".";

  setAudio(auWrong);
 }

 nIdx += 1;
 eScore.innerHTML += " Your score is "+nScore;

 if (nIdx < aRE.length){

  eFind.innerHTML = "Find the ";
  eFind.innerHTML += aRE[nIdx].sName+"!";
  nSought = aRE[nIdx].nSought;

 }
 else {
  setAudio(auOver);
  bPlaying = false;
  eScore.innerHTML += "<br />Game Over! Tap the <q>Play</q> button to play again!";
 }

}
/**
* Play audio file.
* Reset previous audio file.
* @param eAudio: HTML5
* video tag reference.
 */
function setAudio(eAudio){
	// Verify audio properties
	// for old devices which
	// haven't implemented
	// pause(), play() etc.
	if(auCurrent != null){

		if(auCurrent.pause && auCurrent.currentTime){
			auCurrent.pause();
			auCurrent.currentTime = 0;
		}
	}
	auCurrent = eAudio;
	if(auCurrent && auCurrent.play){
		auCurrent.play();
	}

}

/**
 * Starts the game.
 * Responds to
 * the Play
 * button.
 */
function startGame(){

	bPlaying = true;

 nSought = Number(0);
 nIdx = Number(0);

 nScore = Number(0);

 // Sound to
 // indicate game
 // starts.
 setAudio(auOver);

 eFind.innerHTML = "Find the ";
 eFind.innerHTML += aRE[0].sName+"!";
 nSought = aRE[0].nSought;
 eScore.innerHTML = "";

}
