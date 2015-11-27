#book_appt
Chrome Extension that uses jquery to add a "Book Appt" text link to the "agent-console" page in Elastix that (when clicked) will populate appointment details into an Appointment-Plus form.

#Installation
To install, click on "Download ZIP" (above), then extract the contents. Open chrome, click on the "three lines" (top right), click "More Tools", and open "Extensions". Make sure developer mode is checked on, and then click "Load Unpacked Extension". Find the folder you just extracted, and you are off to the races.

#How it Works
When installed, the script background.js binds a function to  DOM changes in the element with the label "#llamada_entrante_contacto_telefono" (ie - the telephone number). This function parses through the new elements using jquery and generates a link (saved as the variable "url") which it appends to the bottom of the current page.

When a new number comes in, the old link is deleted and a new one is put in it's place. Pretty simple.
