const princloan = document.getElementById("loan");
const period = document.getElementById("period");
const intPerYear = document.getElementById("int");
const submits = document.getElementById("submit");
const emi = document.getElementById("emi");
const totalInt = document.getElementById("totalInt");
const totalLoan = document.getElementById("totalLoan");

// main function

function interestCalc() {
  const interest = (princloan.value * (intPerYear.value * 0.01)) / period.value; //intPerYear.value / 12 / 100
  const emiCalc = (princloan.value / period.value + interest).toFixed(2);
  emi.innerHTML = emiCalc;

  const time = Number(period.value);
  const totalLoanAmount = emiCalc * time;
  totalLoan.innerHTML = totalLoanAmount.toFixed(2);

  const princloanAmount = Number(princloan.value);
  const totalInterest = totalLoanAmount - princloanAmount;
  totalInt.innerHTML = totalInterest.toFixed(2);
}

submits.addEventListener("click", (e) => {
  e.preventDefault();
  interestCalc();
});
