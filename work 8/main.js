let userNumber = parseInt(prompt("შეიყვანე რიცხვი 1-დან 10-მდე:"));

if (userNumber >= 1 && userNumber <= 10) {
  console.log(`რიცხვი ${userNumber} გამრავლების ცხრილი:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${userNumber} * ${i} = ${userNumber * i}`);
  }
} else {
  console.log("რიცხვი შეიყვანე 1-დან 10-მდე ინტერვალში.");
}
