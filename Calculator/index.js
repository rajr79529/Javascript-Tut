//add keyDown event - done
//remove cursor
//add opration screen
//esc ke baad 0 add ho rha hai o/p me - done

var buttons = document.getElementsByClassName("column");

var num1 = 0;
var num2 = null;
var operator = null;
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}
document.addEventListener("keyup", (event) => handleKeyPress(event));

function handleKeyPress(event) {
  var keyToUiButton;
  if (event.key == "Escape") {
    keyToUiButton = "AC";
  } else if (event.key == "n" || event.key == "N") {
    keyToUiButton = "+/-";
  } else if (event.key == "Enter") {
    keyToUiButton = "=";
  } else {
    keyToUiButton = event.key;
  }
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute("data_value") == keyToUiButton) {
      buttons[i].click();
    }
  }
}

var num2_entered = false;
var num1_entered = false;
var result;
var display = document.getElementById("display");
display.innerHTML = "0";
function handleClick() {
  var operators = ["+", "-", "*", "/", "%"];
  var value = this.getAttribute("data_value");
  inputDisplay.textContent += value;
  if (value == "AC") {
    num1 = 0;
    num2 = null;
    operator = null;
    display.innerHTML = "0";
    num2_entered = false;
  } else if (operators.includes(value)) {
    if (operator != null) {
      num2 = display.innerHTML;
      result = eval(num1 + " " + operator + " " + num2);
      display.innerHTML = result;
      num1 = result;
      num1_entered = false;
      num2_entered = false;
      num2 = 0;
      operator = value;
    }
    num1 = display.innerHTML;
    operator = value;
  } else if (value == "=") {
    num2 = display.innerHTML;
    if (operator == "/" && num2 == 0) {
      display.innerHTML = "Can not divide by zero.";
      num1 = 0;
      num2 = null;
      operator = null;
      num1_entered = false;
      num2_entered = false;
    } else {
      if (operator != null) {
        result = eval(num1 + " " + operator + " " + num2);
        display.innerHTML = result;
        num1 = result;
        num1_entered = false;
        num2_entered = false;
        num2 = 0;
      }
      if (num2 == null) {
        operator = null;
      }
    }
  } else if (value == "+/-") {
    let minus = "-";
    display.innerHTML = eval(minus + " " + display.innerHTML);
  } else {
    if (operator != null && num2_entered == false) {
      display.innerHTML = "";
      num2_entered = true;
    }
    if (num1_entered == false) {
      display.innerHTML = "";
      num1_entered = true;
    }
    if (display.innerHTML == "0") {
      display.innerHTML = "";
    }
    display.innerHTML += value;
  }
}
