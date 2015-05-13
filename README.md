#CatchPhrase.ly

##Goal

* We'll be building an app that emulates everyone's favorite game **Catchphrase**! You have until 5/18.
	
##Day 1
Reference lesson: Underscore templating  **LINK TO LESSON NEEDED**

###User Stories
**A User should see a list of existing `phrases` on the home page**

* Each phrase should have the properties `id`, `word`, & `definition`

* The app should have an array of hard-coded phrases when launched (make them up!)

###General Guidelines
* Start an express project with all the necessary requirements
* Create a index page (home page)
* Serve up your static assets in a public directory
* Render all your phrases as JSON in a phrases#index controller
* Use AJAX to GET phrases
* Render the phrases on the index page using underscore templating

##Day 2
Reference lesson: [Single Page POST & DELETE](https://github.com/sf-wdi-18/notes/blob/master/lectures%2Fweek-03%2Fday_3_todo_ajax%2Fdusk%2FREADME.md)

###User Stories
**A User should be able to create a new phrase by submitting a form**

* The DOM should update accordingly

* The phrase should persist with a page refresh

**A User should be able to delete any phrase**

* The DOM should update accordingly
	
* The removed phrase should remain removed upon a page refresh

###General Guidelines

* Create a form for the user to add a new catchphrase
* Send an AJAX POST and update the view when successful
* Add a delete button next to each catchphrase that onclick sends a delete request to a route matching that item's specific id
* Once the delete is successful, update the view to reflect the changes made


##Day 3

###User Stories

**A User should be able to have the data persist regardless of a server restarting**

###General Guidelines
* Integrate mongo, which hasn't been taught yet, so to be continued...


##Bonus

* To be continued...
 