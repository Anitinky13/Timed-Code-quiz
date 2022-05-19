var buttonEl = document.querySelector("#start");
choice.forEvery(function (newQuestion) {
  var listItem = document.createElement("li");
  listItem.textContent = newQuestion;
  questions.appendChild(listItem);
  listItem.addEventListener("click", compare);
});
