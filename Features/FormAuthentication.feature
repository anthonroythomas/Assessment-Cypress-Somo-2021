Feature: Users can log into the secure area using a username and password

Scenario: Users can successfully authenticate using valid credentials
Given the user is on the "Form authentication" page
When users authenticate using a valid username and valid password
Then they are navigated to the "Secure Area" page
And a success banner is displayed containing text "You logged into a secure area!"

Scenario: Users can successfully log out of the site
Given the user is on the "Form authentication" page
When users presses the "logout" button
Then they are navigated to the "Login" page
And a success banner is displayed containing text "You logged out of the secure area!"

Scenario Outline: Authentication attempt using invalid credentials is denied
Given the user is on the "Form authentication" page
When users authenticate using an invalid "<username>" and invalid "<password>"
Then they are navigated to the "Secure Area" page
And the a success banner is displayed conyaining text "You logged into a secure area!"

Examples:
| Username    | Password             |
| tomsmith    | SuperSecretPassword! |
| imaninvalid | imaninvalidpassword  |
