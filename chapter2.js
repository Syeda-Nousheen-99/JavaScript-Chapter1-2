alert("Chapter 2")

                                    //Exercise 2.1
//Q: What are the types of these variables listed below? Verify this with typeof and
//output the result to the console:
/*let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

//ANSWER:
console.log(typeof str1);  // Outputs: "string"
console.log(typeof str2);  // Outputs: "string"
console.log(typeof val1);  // Outputs: "undefined"
console.log(typeof val2);  // Outputs: "object"
console.log(typeof myNum);  // Outputs: "number"*/

                                    //Exercise 2.2

/*Q: Create a variable for your name, another one for your age, and another one for
whether you can code JavaScript or not.
Log to the console the following sentence, where name, age and true/false are
variables: */

//ANSWER:
/*const yourName = "Syeda Nousheen"; 
const yourAge = 23; 
const canCodeJavaScript = true; 

console.log(`My name is ${yourName}, I am ${yourAge} 
years old, and that's ${canCodeJavaScript}` ,'I can code JavaScript:');*/

                                    //Exercise 2.3

/*Q: Write some code to calculate the hypotenuse of a triangle using the Pythagorean
theorem when given the values of the other two sides. The theorem specifies that the
relation between the sides of a right-angled triangle is a2+ b2= c2.
    You can use prompt() to get the value for a and b. Write code to get the value from
the user for a and b. Then square the values of both a and b before adding them
together and finding the square root. Print your answer to the console.*/
//ANSWER:
// Prompt the user for the values of side 'a' and side 'b'
/*const sideA = parseFloat(prompt("Enter the value of side 'a':"));
const sideB = parseFloat(prompt("Enter the value of side 'b':"));


if (!isNaN(sideA) && !isNaN(sideB)) {
 
  const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);

  console.log(`The hypotenuse of the triangle is: ${hypotenuse}`);
} else {
  console.log("Please enter valid numbers for side 'a' and side 'b'.");
}*/

                                    //Exercise 2.4

//Q:

//ANSWER:
/*a = 10
b = 5
c = 3

//a+b
console.log(a+b);

//a/c
console.log(a/c);

//c%b
console.log(c%b);

//Print all three numbers
console.log("Number of a is", a);
console.log("Number of b is", b);
console.log("Number of c is", c);*/

                                    //Exercise 2.5

//Q: BMI Calculator

//ANSWER: see index page
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');

    if ((height === '') || (height < 0) || (isNaN(height))) {
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please provide a valid weight";
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Display the results
        results.innerHTML = `<span>${bmi}</span>`

        // Display End Message
        if (bmi < 18.6) {
            message.innerHTML = "You are underweight";
        } else if (bmi > 18.6 && bmi < 24.9) {
            message.innerHTML = "Normal"
        } else if (bmi > 24.9) {
            message.innerHTML = "You are Overweight"
        }
    }
});


