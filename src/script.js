import "./style.scss";

const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todoWrapper = document.querySelector(".js--todos-wrapper");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

todos.forEach((task) => {
  const todoElement = createTodoElement(task);
  todoWrapper.appendChild(todoElement);
});

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoElement(task) {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.dataset.id = task.id;

  if (task.done) {
    li.classList.add("todo-item--checked");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;

  const span = document.createElement("span");
  span.className = "todo-item__description";
  span.textContent = task.text;

  const button = document.createElement("button");
  button.className = "todo-item__delete";
  button.textContent = "Видалити";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  checkbox.addEventListener("change", function () {
    li.classList.toggle("todo-item--checked");
    const index = todos.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      todos[index].done = checkbox.checked;
      saveToLocalStorage();
    }
  });

  button.addEventListener("click", function () {
    const index = todos.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      todos.splice(index, 1);
      saveToLocalStorage();
      li.remove();
    }
  });

  return li;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTaskText = input.value.trim();
  if (newTaskText === "") return;

  const newTodo = {
    id: Date.now(),
    text: newTaskText,
    done: false,
  };

  todos.push(newTodo);
  saveToLocalStorage();
  const todoItem = createTodoElement(newTodo);
  todoWrapper.appendChild(todoItem);

  input.value = "";
});
