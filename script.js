let number = prompt("Enter an integer number to separate and reverse:");
let reversedDigits = number.split('').reverse().join(', ');
alert(`The number you entered is: ${reversedDigits}`);


// OR only for 4 digits
// let number = prompt("Enter 4 digit integer number to seperate and reverse : ");
// let num = parseInt(number);
// let num1 = Math.floor(num % 10);
// let num2 = Math.floor(num / 10 % 10);
// let num3 = Math.floor(num / 100 % 10);
// let num4 = Math.floor(num / 1000 % 10);
// prompt(`The number you entered is : ${num1} , ${num2} , ${num3} , ${num4}`);