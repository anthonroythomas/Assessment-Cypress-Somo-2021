Feature: Cutomers should be able to get in contat with Somo
using a simple form that allows all of the required information to be sent to Somo

Scenario: All mandatory fields with valid data populated
Background: user is the on the "Contact us" page

When the user provides a valid email address
And the user selects an Inquiry About option
And the user clicks to accept the Privacy Notice checkbox
And the user clicks on the Submit button
Then the user is given the sumit confirmation 
And the text "Thanks for submitting the form. We'll be in touch soon." is displayed


Scenario: Partial mandatory fields with valid data populated
Background: user is the on the "Contact us" page

When the user provides a valid email address
And the user clicks to accept the Privacy Notice checkbox
And the user clicks on the Submit button
Then "Email" validation text "Please complete this required field." is displayed
And the form is not submitted


Scenario: No mandatory fields populated 
Background: user is the on the "Contact us" page

When the user clicks on the Submit button
Then the "Email" validation text "Please complete this required field." is displayed
And the "Inquiry about" validation text  "Please select an option from the dropdown menu." is displayed
And the "Privacy Notice" validation text  "Please complete this required field." is displayed
And the form is not submitted
