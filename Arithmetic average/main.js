let userNumber = Number(prompt("please enter a number from 70 to 100"));
let arr = [];
let sum = 0;
while (userNumber < 70 || userNumber > 100) {
  alert("Please enter a valid number between 70 and 100");
  break;
}

if (userNumber >= 70 && userNumber <= 100) {
  for (let i = 0; i <= userNumber; i++) {
    arr.push(i);
    sum += i;
  }
};
let average = sum / arr.length;
console.log(`sum of numbers from 0 to ${userNumber} is ${sum}`);
console.log(`array of number from 0 to ${userNumber} is ${arr}`);
console.log('arithmetic average is ', average);