let inputData = document.getElementById("inputData");
let showMultification = document.getElementById("showMultification");
let btn = document.getElementById("btn");
// let inputValue = inputData.value;
let tableId = document.querySelector("#table");
let myFunc = function () {
  if (!inputData.value || isNaN(inputData.value) || inputData.value < 1) {
    showMultification.innerHTML = "Invalid Number. Please input a Number";
    showMultification.style.color = "red";
    tableId.innerHTML = "";
  } else {
    showMultification.innerHTML = "";
    tableId.innerHTML = "";
    let multiTable = "<table>";
    multiTable += "<tbody>";
    for (i = 1; i <= 10; i++) {
      let result = inputData.value * i;
      multiTable +=
        "<tr><td>" +
        inputData.value +
        " X " +
        i +
        "</td><td>" +
        result +
        "</td></tr>";
    }
    multiTable += "</tbody>";
    multiTable += "</table>";
    tableId.innerHTML = multiTable;
  }
};
btn.addEventListener("click", myFunc);
inputData.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    myFunc();
  }
});
