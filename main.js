var answerBox = document.getElementById("answer");

button.addEventListener('click', Calculate);

var textBox1 = document.getElementById("value-one");
var textBox2 = document.getElementById("value-two");
var button = document.getElementById("calculate-button");

function Calculate (event) {
  event.preventDefault();
  var total = Number(textBox1.value) + Number(textBox2.value);
  answerBox.innerHTML = total;
}
