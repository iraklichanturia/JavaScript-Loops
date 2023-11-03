let userNumber = Number(prompt("Please enter a number from 100 to 200"));
for (let i = 1; i <= userNumber; i++) {
  if (userNumber % i === 0) {
    console.log(`${i} is divisible by ${userNumber}`);
  } else {
    console.log(`${i} is not divisible by ${userNumber}`);
  }
}
