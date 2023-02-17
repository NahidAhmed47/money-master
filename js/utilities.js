// get input value in Number
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputNumber = parseInt(input.value);
    return inputNumber;
}
// Get innerText in Number
function getInnerTextNumber(inputId) {
  const input = document.getElementById(inputId);
  const innerText = parseFloat(input.innerText);
  return innerText;
}
//  set innerText
function setInnerText(setId, newValue) {
  const findText = document.getElementById(setId);
  findText.innerText = newValue;
}
