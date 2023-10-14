                                                // EXERCISE 1.1
//   Q1: Open the browser console, type 4 + 10, and press Enter. What do you see as the response?
//  ANS: When you type 4 + 10 in the browser console and press Enter, it will perform the addition operation, 
// and you will see 14 as the response, which is the result of the addition.


/* Q2: Use the console.log() syntax, placing a value within the rounded brackets.
  Try entering your name with quotes around it (this is to indicate the fact that
    it's a text string—we'll get to this in the next chapter) */
    
    // console.log("Syeda Nousheen");


                                                // EXERCISE 1.2
// JavaScript in an HTML page:
//1. Open your code editor and create an HTML file.
// index.html
//2. Within your HTML file, set up the HTML tags, doctype, HTML, head, and
//body, and then proceed and add the script tags.
/* <body>
    
<script src="script.js"></script>

 </body> */
//3. Place some JavaScript code within the script tags. 
//console.log("Hello World");

                                                // EXERCISE 1.3

// Linking to a JS JavaScript file:
//1. Create a separate file called app with the extension .js.
// script.js
//2. Within the .js file, add some JavaScript code.
// This is a JavaScript file example
// Answer:
    // Define variables
    // var firstName = "John";
    // var lastName = "Doe";
    // var age = 30;

    // Display information using console.log()
    // console.log("First Name: " + firstName);
    // console.log("Last Name: " + lastName);
    // console.log("Age: " + age);
//3. Link to the separate .js file within the HTML file you created in Practice exercise 1.2.
// See above
// 4. Open the HTML file within your browser and check to see whether the
// JavaScript code ran properly.
// yes

                                                // EXERCISE 1.4
// Adding comments:
// 1. Add a new statement to your JavaScript code by setting a variable value.
// Answer: // Add a new statement to set a variable value (let a = 10)
// Since we will cover this in the next chapter, you can use the following line: let a = 10;
// let a = 10; // Setting a value of 10
// 2. Add a comment at the end of the statement indicating that you set a value of 10.
// Print the value using console.log()
// console.log("Value of 'a': " + a); // This will display the value of 'a' which is 10.
// 3. Print the value using console.log(). Add a comment explaining what this will do.
// ANSWER: Value of 'a': 10
// 4. At the end of your JavaScript code, use a multiple-line comment. In a real
// production script, you might use this space to add a brief outline of the
// purpose of the file.
// ANSWER: 
/*
   End of JavaScript code
   This is a multiple-line comment that serves as a brief outline of the purpose of the file.
   In a real production script, you would describe the purpose and usage of the script here.
*/

                                                // Chapter project
// Creating an HTML file and a linked JavaScript file

// 1. In the JavaScript file, output your name into the console and add a multiple- line comment to your code.
    // Answer:
        /*
   This is a JavaScript file example
   Author: Syeda Nousheen
   Purpose: Demonstrating JavaScript code with comments.
   // Output your name into the console */

            // console.log("My name is Syeda Nousheen."); 

// 2. Try commenting out the console message in your JavaScript file so that
// nothing shows in the console.
// Answer:
    // console.log("My name is Syeda Nousheen.");

                                                // Self-check quiz
// 1. What is the HTML syntax to add an external JavaScript file?
        // <script src="script.js"></script>

// 2. Can you run JavaScript in a file with a JS extension in your browser?
    // Answer
        /*Yes, you can run JavaScript in a file with a .js extension in your web browser. Web browsers are designed to execute JavaScript code contained
         in .js files when they are loaded as part of an HTML document.
         script.js is the name of the external JavaScript file containing your code.
        The <script> tag with the src attribute is used to link to the external JavaScript file.
        When you open the HTML file in your web browser, it will load and execute the JavaScript 
        code from script.js, allowing you to interact with the webpage and perform various 
        actions using JavaScript.*/

// 3. How do you write a multiple-line comment in JavaScript?
        // Answer:
            // In JavaScript, you can write a multiple-line comment using the /* and */ delimiters.
                    // Here's the syntax:
                        /*In JavaScript, you can write a multiple-line comment using the /* and */ 
                        
// 4. What is the best way to remove a line of code from running that you might
// want to keep as you debug?
    //Answer: 
        /*The best way to temporarily disable a 
        line of code from running while keeping it for debugging
       purposes is to comment it out. You can add 
        (for single-line comments) at the beginning of the line you want to disable, or you can wrap the code block in 
         and  for multiple lines. For example: */

        // Example

        // This line is temporarily disabled
        // codeToDisable();

            //  OR

        /*
        This entire code block is temporarily disabled
        codeToDisable();
        moreCodeToDisable();
        */
        //By commenting out the code, it won't be executed, but you can easily 
        //uncomment it later when needed for debugging or testing.

        alert("Chapter 1");