# somo
Task: 

1/ Write a Feature file in Cucumber for the Contact Form on our Agency website: https://develop.somo.us/contact-us 
no need for Step Definitions and the actual implementation, for this simply how you word and structure the Feature File's scenarios will be great

- In this task I wrote a simple Feature file that tests the behaviour of the form under 3 similar scenarios, partially populated mandatory fields, fully populated mandatory fields, and no populated mandatory fields.


2/ Using your experience with building public-facing responsive web applications, suggest improvements of the Contact Form component
- For this task I used Google's Lighthouse to look at the javascript and performance of the website, and provided some suggestions to improve certain things.
- There was also a rate limit issue with the site that returned a 503 error

3/ Stretch task (if the 2 above completed fast and there is time): On mobile viewport (e.g. Iphone 6 layout), ensure that 'Let us know you agree to cookies 🍪' is displayed and it can be accepted (agreed to)

- For this task I used Cypress to create a simple script that changes the viewport to Iphone 6, navigates to the Somo page, and gets the text of the banner to assert that the text is present
