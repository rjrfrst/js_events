const enterButton = document.querySelector("#enter");
const toDoList = document.querySelector("#list");
const newToDo = document.querySelector("#new-todo");
const textOutput = document.querySelector("#text-output");


enterButton.addEventListener("click", () =>{
    console.log("button clicked");
});

toDoList.addEventListener("input", (event) => {
    textOutput.innerText = event.target.value;

    const newItem = document.createElement('li'); //Empty 
    newItem.innerText = event.target.value;

    list.appendChild(newItem); //Add empty 

});
