const input = document.querySelector("input");
const añadirTarea = document.querySelector(".añadirTarea");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

añadirTarea.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    li.classList.add('card', 'd-flex', 'flex-row', 'justify-content-between','p-2', 'm-2')
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";

    p.addEventListener("click", tacharText);
    function tacharText() {
      p.classList.toggle("text-decoration-line-through");
    }
  }
  
});


function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn text-reset p-2 rounded border-0";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}


