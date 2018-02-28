/**
 * Element shaped
 * like a rectangle.
 * iMinX:
 * iMinY:
 * iMaxX:
 * iMaxY:
 * s:String name.
 * i:index.
 */
function RElement
(
 iMinX,
 iMinY,
 iMaxX,
 iMaxY,
 sName,
 nIndex 
)
{
 
this.p1 = {x:iMinX, y:iMinY};
this.p2 = {x:iMaxX, y:iMaxY}; 
 
this.sName = sName; 

this.nSought = nIndex;

return this;

}