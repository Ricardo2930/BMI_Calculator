//input height
const heightInput = document.querySelector(".height-input-value");

//input weight
const weightInput = document.querySelector(".weight-input-value");

//button calculate BMI
const buttonCalculateBMI = document.querySelector(".btn-calculate");

//Results
const results = document.querySelector(".results");

//Results of BMI
const resultBMI = document.querySelector(".results-value");

//Status of BMI
const statusBMI = document.querySelector(".results-status");

buttonCalculateBMI.addEventListener("click", () => {
  if (heightInput.value != "" && weightInput.value != "") {
    calculateBmi();
  }
});

const calculateBmi = () => {
  resultBMI.value = (
    weightInput.value /
    (heightInput.value / 100) ** 2
  ).toFixed(2);
  
  if (resultBMI.value < 18.5) {
    statusBMI.innerHTML = "You are underweight";
    statusBMI.style.color = "#708090";
  } else if (resultBMI.value <= 24.9) {
    statusBMI.innerHTML = "You are normal weight";
    statusBMI.style.color = "#05C069";
  } else if (resultBMI.value <= 29.9) {
    statusBMI.innerHTML = "You are overweight";
    statusBMI.style.color = "#ffa500";
  } else {
    statusBMI.innerHTML = "You have obesity";
    statusBMI.style.color = "#ff0000";
  }

  results.style.display = "block";
};
