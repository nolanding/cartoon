function loadExample(){
  
 var arrayRC = createRElementArray();
 
 loadBackground
 (
  '{{ level.image.url }}',
  0,
  0,
 );
 
 loadInteractive(arrayRC);
 
}

function createRElementArray(){

var aRC = new Array();


aRC.push
(
 
 new RElement
 (
  53, 
  9,
  84,
  56,
  "clock",
  0
 )
);


aRC.push
(
 new RElement
 (
  94, 
  286, 
  121,  
  321,
  "peace",
  1
 )
);


aRC.push
(
 new 
 RElement
 (
  42,
  410,
  84,
  468,
  "ball",
  2
  )
);


aRC.push
(
 new RElement
 (
  374,
  315,
  477,
  425,
  "tent",
  3
 )
);

aRC.push
(
 new RElement
 (
  36,
  349,
  62,
  472,
  "camera",
  4
 )
);

aRC.push
(
 new RElement
 (
  49,
  242,
  102,
  275,
  "lizard",
  5
 )
);

aRC.push
(
 new RElement
 (
  371,
  447,
  412,
  480,
  "doll",
  6
 )
);

aRC.push
(
 new RElement
 (
  409,
  437,
  432,
  452,
  "tapes",
  7
 )
);
return aRC;

}