let arr = [];
let userNumber = parseInt(prompt("Please enter a number"));
for (let i = 1; i <= userNumber; i++) {
  if (userNumber % i === 0) {
    arr.push(i);
  }
}
console.log(arr);
if (arr.length == 1) {
    console.log('This number ${userNumber} is not prime or composit')
}else if(arr.length == 2) {
    console.log(`This number ${userNumber} are prime`)
}else{
    console.log(`This number ${userNumber} are composite`)
}
