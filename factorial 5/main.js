let userNumber = Number(prompt("Please enter a number from 50 to 100"));
let fact = 1;

if (userNumber >= 50 && userNumber <= 100) {
  for (let i = userNumber; i >= 1; i--) {
    fact *= i;
  }
  console.log(`${userNumber}! = ${fact}`);
} else {
  console.log("Enter a correct number within the range of 50 to 100.");
}


// let userNumber = Number(prompt("Please enter a number from 50 to 100"));
// let fact = 1;

// if (userNumber >= 50 && userNumber <= 100) {
//   let factorialString = `${userNumber}! = `;
//   for (let i = userNumber; i >= 1; i--) {
//     fact *= i;
//     factorialString += `${i}`;
//     if (i > 1) {
//       factorialString += " * ";
//     }
//   }
//   console.log(factorialString);
//   console.log(`Result: ${fact}`);
// } else {
//   console.log("Enter a correct number within the range of 50 to 100.");
// }
