"use strict";
/**
 * 見た目とか機能に一切納得がいっていない
 * 入力欄に文字を入力 Enterで追加 削除ボタンで削除
 */

let count = 0;
const todolist = document.getElementById("todolist");
const textarea = document.getElementById("textarea");

window.onload = () => {
    textarea.addEventListener("keypress", textareaEvent);
}


const textareaEvent =(e)=>{
    if(e.keyCode === 13){
        const text = textarea.value;
        const id = "task" + count;
        addTask(id, text);
        count++;
    }
}

const addTask =(id, text)=>{
    const tr = document.createElement("tr");
    const textElemenent = document.createElement("p");
    const timeElemenent = document.createElement("p");
    const div=document.createElement("div");
    const deleteBtn = document.createElement("input");
    const time = getNowTime();

    tr.className = "box";
    textElemenent.className = "el text";
    timeElemenent.className = "el time";
    deleteBtn.className = "el deleteBtn";
    div.className = "el ctrl"

    tr.id = id;
    textElemenent.textContent = text;
    timeElemenent.textContent = time;
    deleteBtn.type="button";
    deleteBtn.value="Delete";
    deleteBtn.addEventListener("click", ()=>{
        deleteTask(id);
    });

    tr.appendChild(textElemenent);
    //tr.appendChild(timeElemenent);
    div.appendChild(deleteBtn);
    tr.appendChild(div);
    todolist.insertBefore(tr, todolist.firstChild);
}

const deleteTask =(id)=>{
    const task = document.getElementById(id);
    task.parentNode.removeChild(task);
}

const getNowTime=()=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const text = month + "/" + date + "," + year + "   " + hour + ":" + min + ":" + sec;
    return text;
}