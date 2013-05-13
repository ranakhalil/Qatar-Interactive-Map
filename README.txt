Name : Rana Khalil

Project: Map of the resources of Qatar

--------------------------------------------------------------------------------

Icon.js:
	Consists of the constructor that creates the icon objects and 
	draw them to the raphael canvas
	
District.js:
	Consists of the constructor and most important functions for creating
	the district object and painting the paths to the canvas
	
fullmap.js:
	creates the objects and stores the specifications from colors and fills and
	feeds them to the classes to create the objects and set its attributes to 
	get painted to the canvas
	
	I had to create the objects again because ivoking the object in different
	states produced many unresolved bugs and they didn't change the colors
	
index.html:
	Provides the content from the data and connects the JS files
	it provides also the divs for the page
	
mapstyle.css:

	Handles the styling for the page and the layout.
