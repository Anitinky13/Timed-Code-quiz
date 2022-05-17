var buttonEl = document.querySelector("#start");
console.log(buttonEl);
var buttonEl = document.querySelector("#start");

buttonEl.addEventListener("click", function () {
  var listItem = document.createElement("li");
  listItem.textContent = "New Question";
  question.appendChild(ulCreate);
  ulCreate.appendChild(listItem);
  listItem.addEventListener("click", compare);
});
