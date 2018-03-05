var tasks = ["buy milk", "eat dinner", "nail javascript"];
var todoList = document.getElementById("todo-list");

// 1. display existing todos
for (var i = 0; i < tasks.length; i++) {
  createAndDisplayItem(tasks[i]);
}

function createAndDisplayItem(todoContent) {
  todo = document.createElement("li");
  todo.textContent = todoContent;
  todo.addEventListener("click", markAsDone);
  todoList.appendChild(todo);
}

function markAsDone(event) {
  event.target.classList.add("done");
}

// 2. getting user input and displaying new todo
var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event) {
  event.preventDefault();

  var userInput = form.elements["new todo"].value;
  createAndDisplayItem(userInput);

  form.elements["new todo"].value = "";
});
