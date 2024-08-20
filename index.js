const display = document.getElementById("display");

function ToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function DeleteDisplay() {
    display.value = display.value.substring(0, display.value.length - 1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}








