Feature: Users can add and remove elements on the page by using the buttons in the web app.

@positive
Scenario: User adds a single element to the page
Given the user is on the "add remove elements" page
When the "Add Element" button is pressed
Then a new element  is generated 
And the new element has the text "Delete" displayed
And the count of the elements increases by "1"

@positive
Scenario: User adds multiple elements to the page
Given the user has added an element to the page
When the "Add Element" button is pressed
Then a new element  is generated 
And the new element has the text "Delete" displayed
And the count of the elements increases by "1"

@positive
Scenario: User deletes an element from the page
Given the user has added an element to the page
When the "Delete" button is pressed
Then the element is no longer present on the page 
And the count of the elements has reduced by "1"