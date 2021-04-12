# somo
Task: 

1/ Write a Feature file in Cucumber for the Contact Form on our Agency website: https://develop.somo.us/contact-us 
no need for Step Definitions and the actual implementation, for this simply how you word and structure the Feature File's scenarios will be great

-  In this task, I wrote a simple feature files that tests the behaviour of the form under 3 scenarios, partially filled mandatory information, fully populated, and no pulation.


2/ Using your experience with building public-facing responsive web applications, suggest improvements of the Contact Form component
- For this task I used lighthouse to look behind the JS and at the porformance of the website, and providfed some suggestions to improve certain things.
- I also noticed a caching bug, and added a suggestion.

3/ Stretch task (if the 2 above completed fast and there is time): On mobile viewport (e.g. Iphone 6 layout), ensure that 'Let us know you agree to cookies 🍪' is displayed and it can be accepted (agreed to)

- For this task I used Cypress to create a simple script that 
changes the viewport to Iphone 6, navogates to the Somo page, and gets the text of the banner to assert that the text ts present
