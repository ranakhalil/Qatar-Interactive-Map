Name : Rana Khalil

Project: Map of the resources of Qatar

--------------------------------------------------------------------------------

1- The project went through a whole remedy to have different classes
and make the code look cleaner, however when I tried to change the 
properties of the objects when I click on one of the tabs above I had a bug
and I couldn't change the color or the different paths, so I created new objects

2- for the different colors, in the overview , they don't have a real meaning, 
but in the water , electricity , sewage and internet the colors indicates which
areas are covered more.

3- I have problems with the JQuery, so I don't have a back button in which 
you can get back to the overview page, however you need to refresh the page
to be able to hover and get the numbers

4- Intentionally I meant not to have any hovering when you click on the paths
after selectign water , electricity or sweage.

5- I had the progress bars as images, as I went through so 
many bugs to try and delete the elements from the DOM through raphael
If I tried normal divs, they would be under the map not over it


The following are the application files:
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
