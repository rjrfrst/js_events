const enterButton = document.querySelector("#enter");
const toDoList = document.querySelector("#list");
const newToDo = document.querySelector("#new-todo");
const textOutput = document.querySelector("#text-output");
const form = document.querySelector("#todo-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    const newItem = document.createElement('li'); //Empty 
    newItem.innerText = event.target[0].value;

    toDoList.appendChild(newItem); //Add empty 
});
