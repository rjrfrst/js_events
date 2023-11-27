const enterButton = document.querySelector("#enter");
const toDoList = document.querySelector("#list");
const newToDo = document.querySelector("#new-todo");
const textOutput = document.querySelector("#text-output");
const form = document.querySelector("#todo-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target[0].value); 

    const newItem = document.createElement('li'); //Empty 
    newItem.innerText = event.target[0].value;

    toDoList.appendChild(newItem); //Add a new item in the empty list 

    //Attaching a delete button
    const deleteButton = document.createElement('button'); //new button
    deleteButton.innerText = "delete"; //Add a text inside button
    deleteButton.addEventListener("click", () => {
        toDoList.removeChild(newItem); //Assigns a delete to the item and deletes the item once clicked
});

    newItem.appendChild(deleteButton); //Add delete button to the empty list
    toDoList.appendChild(newItem); //Add a new item in the empty list 

});

