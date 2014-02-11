/**
 * @author
 */

/* The purpose of this program is to create a list of Cookies with specific properties, and from that list create two new lists, one of my favourites, and one 
			 * of the rest.
			 * NB It's ok to have spaces in the values - see below
			 */
				var myCookies = [{
					"name" : "Oreo",
					"shape" : "round"
				}, {
					"name" : "Chips Ahoy",
					"shape" : "round"
				}, {
					"name" : "Lorna Doon",
					"shape" : "square"
				}, {
					"name" : "Fig Newtons",
					"shape" : "square"
				}];
				console.log(myCookies);


			// When adding empty square brackets you are basically saying 'make an empty list'.
			// These are the lists I will sort my cookies into.
			
				var myFaves = [];
				var theRest = [];
				
			// (Sudocode) For every item in my list	of cookies, check its shape. If it's round add to favourites, otherwise add to theRest.
			
			// var i=0 means create a box in memory and label it i? - this is the start condition
			// the next bit: i<4 is the end condition
			// and this is the operation: i++. "++" is shorthand for add one / increment
			
				for(var  i=0; i<myCookies.length; i++){

			//console.log(i); 

					var currentCookie = myCookies[i];
			//console.log(currentCookie);
					if (currentCookie.shape == "square") {

						console.log(currentCookie);

			// Because shape is square, add the currentCookie to my faves list
						myFaves.push(currentCookie);

					} else {
			// otherwise, add the currentCookie to theRest list
						theRest.push(currentCookie);

					}  //This is the end of my if/else statement

					} //This is the edn of my for loop
					
					console.log("finished lists");
					console.log(myFaves);
					console.log(theRest);
					
			// we are not creating a new mycookies[i], we are creating a shorthand for it. we are doing this for clarity
			//console log has to come before the last curly brace because otherwise it wouldn't be defined. Anything that is defined in the foreloop stays there. 
