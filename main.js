"use strict";

let count = 0;
const todolist = document.getElementById("todolist");
const textarea = document.getElementById("textarea");
const addButton = document.getElementById("addButton");

window.onload = () => {
    textarea.addEventListener("keypress", textareaEvent);
    addButton.addEventListener("click", createTask);
}


const textareaEvent =(e)=>{
    if(e.keyCode === 13){
        createTask();
    }
}

const createTask =()=>{
    const text = textarea.value;
    const id = "task" + count;
    addTask(id, text);
    textarea.value = "";
    textarea.blur();
    count++;
}

const addTask =(id, text)=>{
    const task = document.createElement("li");
    const textBox = document.createElement("div");
    const textLabel = document.createElement("input");
    const deleteButton = document.createElement("input");

    task.className = "task top";
    textBox.className = "text-box";
    textLabel.className = "text";
    deleteButton.className = "button delete-button";

    task.id = id;

    textLabel.type = "text";
    textLabel.value = text;
    textLabel.readOnly = true;

    deleteButton.type = "button";
    deleteButton.value = "×";
    deleteButton.addEventListener("click", ()=>{
        deleteTask(id);
    })

    textBox.appendChild(textLabel);
    task.appendChild(textBox);
    task.appendChild(deleteButton);
    todolist.insertBefore(task, todolist.children[2]);
}

const deleteTask =(id)=>{
    const task = document.getElementById(id);
    task.parentNode.removeChild(task);
}