let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask(){
    let taskValue = taskInput.value.trim();
    if(taskValue !== ""){
        tasks.push({value:taskValue , completed:false});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks(){
    taskList.innerHTML = "";

    tasks.forEach((element , ind) => {
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${ind}" />
        <label for="task-${ind}">${element.value}</label>`;
        li.querySelector("input").onchange = function(){
            if(this.checked){
                element.completed = true;
            }
            else{
                element.completed = false;
            }
        }
        taskList.appendChild(li);
    });
}

addTaskBtn.addEventListener("click" , addTask);

function clearCompletedTasks(){
    tasks = tasks.filter(function(ele , ind){
        return ele.completed === false;
    })
    displayTasks();
}

clearCompletedBtn.addEventListener("click" , clearCompletedTasks);


