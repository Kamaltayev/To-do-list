const input = document.querySelector(".todoinput");
const btn = document.querySelector(".addbtn");
const myOl = document.querySelector(".myOl");
const close = document.querySelectorAll(".close");
const myList = document.querySelector(".myLi");
const container = document.querySelectorAll(".container");
const checkboxes = document.querySelectorAll(".checkbox");

btn.addEventListener("click", () => {
  const newInput = input.value;
  if (newInput.trim() !== "") {
    const newLi = document.createElement("div");
    newLi.classList.add("container");
    newLi.textContent = newInput;
    newLi.innerHTML = ` 
    <input class="checkbox" type="checkbox" />
    <li class="myLi">${newInput}</li>
    <button class="close"></button>
  `;
    myOl.appendChild(newLi);
    input.value = "";
  }

  if (newInput == "") {
    alert("Сначала напишите что нибудь");
  }
});

myOl.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
  }
});

myOl.addEventListener("change", (event) => {
  if (event.target.classList.contains("checkbox")) {
    const container = event.target.closest(".container");
    const myLi = container.querySelector(".myLi");

    if (event.target.checked) {
      myLi.style.textDecoration = "line-through";
      myLi.style.color = "gray";
    } else {
      myLi.style.textDecoration = "none";
      myLi.style.color = "black";
    }
  }
});
