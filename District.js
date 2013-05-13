/*
 * Rana Khalil
 * Qatar's interactive map
 */
 
/*This function is responsible for fading in the content of the different icons: water, electricity, sewage and internet*/
function inFades(id) {
    $(id).fadeIn('fast');
}

/*This function is responsible for fading out the content of the different icons: water , electricity, sewage and internet*/
function outFades(id) {
    $(id).fadeOut('fast');
}

function hoverIn(mode,path_district, animColor, ids){
	
	switch(mode){
	
		case "normal":
				path_district.animate({fill: animColor, stroke: "white"}, 250);
				for(x in ids){
					inFades(ids[x]);
				}
		break;
		
		case "water":
			path_district.animate({fill: animColor, stroke:"white"}, 0);
		break;
		
		case "internet":
			path_district.animate({fill: animColor, stroke: "white"}, 0);
		break;
		
		case "sewage":
			path_district.animate({fill: animColor, stroke: "white"}, 0);
		break;
		
		case "electricity":
			path_district.animate({fill: animColor, stroke: "white"}, 0);
		break;
	
	}
	

}

function hoverOut(mode, path_district, normal_color, ids){

	switch(mode){
	
		case "normal":
				path_district.animate({fill: normal_color, stroke:"white"}, 250);
				for(x in ids){
					outFades(ids[x]);
				}
		break;
		
		case "water":
			path_district.animate({fill: normal_color, stroke:"white"}, 0);
		break;
		
		case "internet":
			path_district.animate({fill: normal_color, stroke: "white"}, 0);
		break;
		
		case "sewage":
			path_district.animate({fill: normal_color, stroke: "white"}, 0);
		break;
		
		case "electricity":
			path_district.animate({fill: normal_color, stroke: "white"}, 0);
		break;
	
	}
	
	
}


/*
	The switch function is responsible for switching the color of the map and the information provided , once the 
	tab is clicked from the menu of the resources
*/

function switchMode(mode, paper, path_district, normal_color, water_color, internet_color, sewage_color, electricity_color, ids) {

    switch (mode) {
    case "normal": // this is for the normal overview mode.
        path_district.attr({
            fill: normal_color,
            stroke: "white",
            cursor: "pointer"
        });
        
        path_district.hover(function(){hoverIn(mode, path_district, "#B03060", ids)}, function(){hoverOut(mode, path_district, normal_color, ids)});
        
        break;

    case "water": // this is for the water mode when the user clicks on the water div provided
        path_district.attr({ //provides the different colors for each object to paint the path with
            fill: water_color,
            stroke: "white"
        });
        /* The collection of fadein and out is for the progress bar image provided for water*/
        inFades("#img_water");
        outFades("#img_sewage");
        outFades("#img_internet");
        outFades("#img_elec");
        
        path_district.hover(function(){hoverIn(mode, path_district, water_color, ids)}, function(){hoverOut(mode, path_district, water_color, ids)});
        
        break;

    case "electricity": //This is for the electricity mode when the user clicks on the electricity div provided
        path_district.attr({ //provides the different colors for each object to paint the path with
            fill: electricity_color,
            stroke: "white"
        });
        /* The collection of fadein and out is for the progress bar image provided for electricity*/
        inFades("#img_elec");
        outFades("#img_sewage");
        outFades("#img_internet");
        outFades("#img_water");
        
        path_district.hover(function(){hoverIn(mode, path_district, electricity_color, ids)}, function(){hoverOut(mode, path_district, electricity_color, ids)});
        
        break;

    case "sewage": //This is for the sewage mode when the user clicks on the sewage div provided
        path_district.attr({ 
            fill: sewage_color, 
            stroke: "white" 
        });
        
      	path_district.hover(function(){hoverIn(mode, path_district, sewage_color, ids)}, function(){hoverOut(mode, path_district, sewage_color, ids)});
        
        /* The collection of fadein and out is for the progress bar image provided for sewage*/
        inFades("#img_sewage");
        outFades("#img_elec");
        outFades("#img_internet");
        outFades("#img_water");
        break;

    case "internet": //This is for the internet mode when the user clicks on the electricity div provided
        path_district.attr({ //provides the different colors for each object to paint the path with
            fill: internet_color,
            stroke: "white"
        });
        
        path_district.hover(function(){hoverIn(mode, path_district, internet_color, ids)}, function(){hoverOut(mode, path_district, internet_color, ids)});
        /* The collection of fadein and out is for the progress bar image provided for sewage*/
        inFades("#img_internet");
        outFades("#img_sewage");
        outFades("#img_elec");
        outFades("#img_water");
        break;

    }
}

/*
* This function is the constructor that creates the district object, it creates the object 
*/
function District(paper, name, path, normal_color, water_color, internet_color, sewage_color, electricity_color, mode, ids) {
    this.paper = paper; //the raphael object
    this.name = name; // the name of the district
    this.path = path; // the string path of the district
    this.normal_color = normal_color; // the default color for the overview
    this.water_color = water_color; //the color for the water mode
    this.internet_color = internet_color; //the color for the internet mode
    this.sewage_color = sewage_color; //the color for the sewage mode
    this.electricity_color = electricity_color; //the color for the electricity mode
    this.ids = ids; //the different divs ids from the html file
    this.mode = mode; // the state/mode : water, electricity, internet, and sewage

    this.path_district = paper.path(path); //creating the path object by passing the path string to the path
    									  // function for the raphael js library

	//call the switchMode function to set the colors and propertries based on the current mode
    switchMode(mode, paper, this.path_district, normal_color, water_color, internet_color, sewage_color, electricity_color, ids);
}

District.prototype.update = function(){
	switchMode(this.mode, this.paper, this.path_district, this.normal_color, this.water_color, this.internet_color, this.sewage_color, this.electricity_color, this.ids);
}
//end