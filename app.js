let button = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);

  ul.appendChild(item);
  input.value = "";
});

ul.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    let listItem = e.target.parentElement;
    listItem.remove();
  }
});
