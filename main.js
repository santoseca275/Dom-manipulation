var resultsDiv = document.getElementById("answer");
var textBox1 = document.getElementById("value-one");
// change textBox1 to textBox2 and fix the id
var textBox2 = document.getElementById("value-two");
var button = document.getElementById("calculate-button");

console.log(textBox1);

function Calculator () {
  var num1 = Number(textBox1.value);
  var num2 = Number(textBox2.value);

  var answer = num1 + num2;
  resultsDiv.innerHTML = answer;
}

button.addEventListener('click', Calculator);
