// Write your JavaScript here

const $calculateButton = document.getElementById("calculate-change");

$calculateButton.addEventListener('click', calculateChange);

function calculateChange() {
  const $amountDue = document.getElementById("amount-due")
  const $amountReceived = document.getElementById("amount-received")
  const changeDue = $amountReceived.value - $amountDue.value;
  let cents = changeDue * 100;

  const dollars = Math.floor(cents/100);
  cents -= dollars * 100;

  const quarters = Math.floor((cents)/25);
  cents -= quarters * 25;

  const dimes = Math.floor((cents)/10);
  cents -= dimes * 10;

  const nickels = Math.floor((cents)/5);
  cents -= nickels * 5;

  const pennies = Math.round(cents/1);

  document.getElementById("dollars-output").innerText = dollars
  document.getElementById("quarters-output").innerText = quarters
  document.getElementById("dimes-output").innerText = dimes
  document.getElementById("nickels-output").innerText = nickels
  document.getElementById("pennies-output").innerText = pennies

}
