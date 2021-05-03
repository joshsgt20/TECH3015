# TECH3015
This is my submission for Coursework 2 for TECH3015, Multimedia 3.

Below are short comments for some of the files of the repository, which summarise what the code does.

Javascript

Animation.js - This Javascript file contains the basic animations across the site, so that as each page is opened, images appear with a smooth animation. This was created using GSAP TweenMax, where certain elements were defined with as a constant, and then an animation timeline was created.


app.js - This page contains the basic javascript for the site, including the mobile menu animation, the slideshow (for the home screen on the mobile site only) and the hover animation for the desktop screen. 
For this, event listeners were created for the elements, so that as users hover over each face, a 3D hover animation occurs by rotating the different elements on the Y, X and Z axis.


Music.js - This is a simple application, made by creating an event listener on each "Key", so that a sound play onclick. It also triggers an animation where a "ball" appears.


Survey.js - This "survey", is actually a reconstructed javascript quiz from a lab activity. Here, users will answer each question and then be provided with mental health advice based on their "score" they get. 
This was made by giving users two choices for each question, with the "correct" choice being the answer that is the highest "mental health risk". Therefore, at the end of the quiz, a different message is provided based on the amount of answers that the user answered that are of the "highest risk".


Todo.js - This is a to do list, that saves each "todo" to local storage so that users can come back to their list. It was created by following some a course online of how to save html to local storage in the form of a todo list, and then applyng my own CSS to it.


Weather.js - This was created during a lab activity, using an API to get the users location to provide them with weather information for their area.


Meditation.js - This is a meditation app, which is made by creating multiple event listeners that have different purposes, such as changin the audio file, changing the time and starting/stopping the meditation. Video for this is : https://www.youtube.com/watch?v=oMBXdZzYqEk&t=16s&ab_channel=DevEd



CSS

There are three CSS files for this site - titled style, blog and apps. This is to make it clearer when trying to change styles, as there are a lot of elements / applications on the site, and because some pages (e.g, the blog pages), have their own styling, such as colours. This meant that styles could be applied to only certain pages much easier.




