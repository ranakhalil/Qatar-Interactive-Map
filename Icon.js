/*
* Rana Khalil
* Icon Class
*/

/*
* The constructor provides an object with the name of the icon, and the 
* icon path and color fill, stroke and the x and y position
*/
function Icon(paper,
			  name,
			  path, 
			  colorFill,
			  stroke,
			  x,
			  y){
			  
	this.name = name; // the name of the icon
	this.path = path; // the string path of the icon to be passed 
	this.colorFill = colorFill; // the color fill for the icon
	this.stroke = stroke; // the stroke property
	this.x = x; // the x position
	this.y = y; // the y position
	
	var theIcon = paper.path(path); // create the icon raphael object to
									// draw to the raphael div
	
	//Specify the attributes for the Icon
	theIcon.attr({fill: colorFill, stroke: stroke});
	//translate the icon to the x and y positions
	theIcon.translate(x,y);
			  
}