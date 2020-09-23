

function bmiCalculator(weight, height) {
    var weight = document.getElementById("input1").value;
    var height = document.getElementById("input2").value;
    var bmi = (weight / Math.pow(height, 2)).toFixed(2);


    if (bmi < 18.5) {
        return document.querySelector('h3').innerHTML = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return document.querySelector('h3').innerHTML = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
      return document.querySelector('h3').innerHTML = "Your BMI is " + bmi + ", so you are overweight.";
    }

}
