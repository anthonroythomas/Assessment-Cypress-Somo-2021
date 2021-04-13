Feature: Customers should be able to get in contact with Somo, using a simple form that allows all of the required information to be sent to Somo

Scenario: All mandatory fields with valid data populated
Background: User is on the "Contact us" page
When the user provides a valid email address
And the user selects an Enquiry About option
And the user clicks to accept the Privacy Notice checkbox
And the user clicks on the Submit button
Then the user is given the submit confirmation 
And the text "Thanks for submitting the form. We'll be in touch soon." is displayed

Scenario: Partial mandatory fields with valid data populated
Background: User is on the "Contact us" page
When the user provides a valid email address
And the user clicks to accept the Privacy Notice checkbox
And the user clicks on the Submit button
Then the "Email" validation text "Please complete this required field." is displayed
And the form is not submitted

Scenario: No mandatory fields populated 
Background: User is on the "Contact us" page
When the user clicks on the Submit button
Then the "Email" validation text "Please complete this required field." is displayed
And the "Enquiry About" validation text "Please select an option from the dropdown menu." is displayed
And the "Privacy Notice" validation text "Please complete this required field." is displayed
And the form is not submitted
