// Default width, height.
var N_DIM_W = Number(
480
);

var N_DIM_H = Number(480);

// Default pan 
// display area.
var N_TRACK_MAX = Number(480);

//The canvas ratio
//of width to height.
var N_RATIO_H_W = Number(1);

//Actual canvas 
//width and height.
var nWidth = null;

var nHeight = null;

// Scale factor
// based on difference
// between default and
// actual dimensions.
var nScale = Number(1);

//The resizeable
//DIV element.
var eGraphic = null;

var eDebug = null;

var context = null;

var canvas,bb = null;

var nLastDivisionX = Number(0);

var mXOffset = Number(0);

var nMapCanvasBackground = Number(0);

var imgBackground;


function loadBackground(sBGFile, nTrackMax, nH){
	
// Most images display
// the same width:
// 2048
if(nTrackMax != 0){
	N_TRACK_MAX = nTrackMax;	
}

// Most images
// display the 
// height: 400.
if(nH != 0){
	N_DIM_H = nH;
}
	
// Canvas
// dimensions
// to be
// resized.
nWidth = Number(
 N_DIM_W
);

nHeight = Number(
 N_DIM_H
);

nMapCanvasBackground = N_TRACK_MAX/N_DIM_W;
 
//The ratio
//between width
//and height is
//constant.
N_RATIO_H_W = N_DIM_H / N_DIM_W;

canvas = document.getElementById
(
  'cv'
);

context = canvas.getContext
(
  '2d'
); 


eDebug = document.getElementById
(
  'eDebug'
);
 
eGraphic = document.getElementById(
 		'eGraphic'
);
 
listenerResize(null);

imgBackground = new Image();


imgBackground.src = sBGFile;

 
imgBackground.onload = function() {  
context.drawImage(
imgBackground,
0,
0,
N_DIM_W,
N_DIM_H,
0,
0,
nWidth,
nHeight
);
}; 

 
/* Assign slide
 * event listeners.
 */
/*if ("ontouchstart" in window){
canvas.addEventListener
(
'touchmove',    
touchListenerMove,
false   
);    
} 
 
else {
canvas.addEventListener
(
'mousemove', 
listenerMove, 
false
 );  
}  */

} 

function touchListenerMove(ev){
 
  ev.preventDefault();
 
  if (ev.targetTouches.length >=  1) {
  
 
   var t1 = ev.targetTouches[0];
   
   
   var nX = t1.pageX - mXOffset; 
   
   // Draw the slide frame.
   drawGraphic
   (
    nX  
   );  
  }
}


function listenerMove(ev){
  
  ev.preventDefault();   
 
  var nX = ev.clientX - bb.left;  
 
  drawGraphic(nX);
}


function listenerResize(ev){

// Has project
// initialized?
if(eGraphic == null){
	return;
}

if(ev!=null){
 ev.preventDefault();
} 

nWidth = eGraphic.clientWidth;

// The ratio
// between width
// and height is
// constant.
nHeight = nWidth * N_RATIO_H_W;

canvas.width = nWidth;

canvas.height = nHeight;

nScale = N_DIM_W/nWidth;

nMapCanvasBackground = N_TRACK_MAX/nWidth;
	
var nXScroll = Number(0);	

bb = canvas.getBoundingClientRect();
	
if(bb!=null){		
	
if(window.pageXOffset != null){
 nXScroll = window.pageXOffset;
}	
	
if(bb.left > 0){
 mXOffset=bb.left+nXScroll;
}
	
else if(nXScroll > 0){
 mXOffset=nXScroll+bb.left;
}	

}



if(imgBackground != null && imgBackground.complete != false){
	
 drawGraphic(
  N_TRACK_MAX/2
 );
}

}


function drawGraphic(nX){

if (nX < 1){
 nX = Number(0);
}

nLastDivisionX = nX * nMapCanvasBackground;

if (nLastDivisionX > N_TRACK_MAX){
  nLastDivisionX = N_TRACK_MAX;
}

context.drawImage(
 imgBackground,
 nLastDivisionX,
 0,
 N_DIM_W,
 N_DIM_H,
 0,
 0,
 nWidth,
 nHeight
);
}