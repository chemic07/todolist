const todoList = [
  {
    name: "watch movie",
    dueDate: "2022-12-23",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-24",
  },
];
let todoListHTML = ""; // Define todoListHTML here

renderTodoList();

function renderTodoList() {
  todoListHTML = ""; // Reset todoListHTML before re-rendering

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name } = todoObject;
    //const name  = todoObject.name; shortcut for destructing
    // const dueDate = todoObject.dueDate; shortcut for destructing
    const { dueDate } = todoObject;

    //genrating html here
    // genrating delete button

    const html = `<div>${name}</div>
    <div>${dueDate}</div>
     <button  class="delete-button" onclick="todoList.splice(${i},1);
    renderTodoList()">delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

// function to add user input'n'show in the web

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dueDateElement = document.querySelector(".js-duedate-input");
  const dueDate = dueDateElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = "";
  renderTodoList();
}
